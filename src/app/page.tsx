"use client";

import { useState, useCallback, useRef } from "react";
import { ReceiptItem } from "@/lib/types";
import { Shell } from "@/components/shell";
import { TrashIcon } from "@heroicons/react/20/solid";

type Phase = "upload" | "parsing" | "editing" | "saving" | "done";

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

function num(val: string): number {
  const n = parseFloat(val);
  return isNaN(n) ? 0 : n;
}

function fmt(n: number): string {
  return "$" + n.toFixed(2);
}

export default function SplitPage() {
  const [phase, setPhase] = useState<Phase>("upload");
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<ReceiptItem[]>([]);
  const [people, setPeople] = useState<string[]>([]);
  const [newPerson, setNewPerson] = useState("");
  const [taxPercent, setTaxPercent] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [venmo, setVenmo] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [activePerson, setActivePerson] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const personInputRef = useRef<HTMLInputElement>(null);

  const taxVal = num(taxPercent);
  const tipVal = num(tipPercent);
  const subtotal = items.reduce((s, i) => s + i.price, 0);

  const handleFile = useCallback(async (file: File) => {
    setPhase("parsing");
    setError("");

    try {
      let imageFile = file;

      // Convert HEIC/HEIF to JPEG for AI gateway compatibility
      const isHeic = file.type === "image/heic" || file.type === "image/heif" ||
        file.name.toLowerCase().endsWith(".heic") || file.name.toLowerCase().endsWith(".heif");
      if (isHeic) {
        const heic2any = (await import("heic2any")).default;
        const blob = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.9 });
        imageFile = new File(
          [Array.isArray(blob) ? blob[0] : blob],
          file.name.replace(/\.heic$/i, ".jpg").replace(/\.heif$/i, ".jpg"),
          { type: "image/jpeg" }
        );
      }

      const buffer = await imageFile.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(buffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      const dataUrl = `data:${imageFile.type};base64,${base64}`;

      const res = await fetch("/api/parse-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: dataUrl }),
      });

      if (!res.ok) throw new Error("Failed to parse receipt");

      const data = await res.json();
      setTitle(data.title || "Untitled");
      const parsedItems = data.items.map((item: { name: string; price: number }) => ({
        id: generateId(),
        name: item.name,
        price: item.price,
        assignedTo: [],
      }));
      setItems(parsedItems);

      const itemsSubtotal = parsedItems.reduce((s: number, i: { price: number }) => s + i.price, 0);
      if (itemsSubtotal > 0) {
        if (data.tax != null) {
          setTaxPercent(String(Math.round((data.tax / itemsSubtotal) * 1000) / 10));
        }
        if (data.tip != null) {
          setTipPercent(String(Math.round((data.tip / itemsSubtotal) * 1000) / 10));
        }
      }

      setPhase("editing");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setPhase("upload");
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const addPerson = () => {
    const name = newPerson.trim();
    if (name && !people.includes(name)) {
      setPeople([...people, name]);
      setNewPerson("");
      setActivePerson(name);
      setTimeout(() => personInputRef.current?.focus(), 0);
    }
  };

  const removePerson = (name: string) => {
    setPeople(people.filter((p) => p !== name));
    setItems(
      items.map((item) => ({
        ...item,
        assignedTo: item.assignedTo.filter((p) => p !== name),
      }))
    );
    if (activePerson === name) setActivePerson(null);
  };

  const toggleItemForActivePerson = (itemId: string) => {
    if (!activePerson) return;
    setItems(
      items.map((item) => {
        if (item.id !== itemId) return item;
        const assigned = item.assignedTo.includes(activePerson)
          ? item.assignedTo.filter((p) => p !== activePerson)
          : [...item.assignedTo, activePerson];
        return { ...item, assignedTo: assigned };
      })
    );
  };

  const updateItem = (
    id: string,
    field: "name" | "price",
    value: string | number
  ) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = () => {
    setItems([
      ...items,
      { id: generateId(), name: "New Item", price: 0, assignedTo: [] },
    ]);
  };

  const handleSave = async () => {
    if (people.length === 0) {
      setError("Add at least one person");
      return;
    }
    setPhase("saving");
    setError("");

    try {
      const res = await fetch("/api/splits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          items,
          people,
          taxPercent: taxVal,
          tipPercent: tipVal,
          subtotal,
          venmo,
        }),
      });

      const data = await res.json();
      const base = window.location.origin;
      setShareUrl(`${base}/${data.id}`);
      setPhase("done");
    } catch {
      setError("Failed to save");
      setPhase("editing");
    }
  };

  const personTotals = people.map((person) => {
    const personItems = items.filter((i) => i.assignedTo.includes(person));
    const itemsTotal = personItems.reduce(
      (s, i) => s + i.price / i.assignedTo.length,
      0
    );
    const proportion = subtotal > 0 ? itemsTotal / subtotal : 0;
    const tax = subtotal * (taxVal / 100) * proportion;
    const tip = subtotal * (tipVal / 100) * proportion;
    return { name: person, itemsTotal, tax, tip, total: itemsTotal + tax + tip };
  });

  if (phase === "upload" || phase === "parsing") {
    return (
      <Shell>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <img src="/JIGlogo.png" alt="Jig" className="h-12 mx-auto mb-2" />
            <p className="text-center text-zinc-500 text-base mb-8">
              Split any receipt
            </p>

            <input
              ref={fileRef}
              type="file"
              accept="image/*,.heic,.heif"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            {phase === "parsing" ? (
              <div className="text-center py-20">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-800" />
                <p className="mt-4 text-zinc-500">Reading your receipt...</p>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full py-3 bg-zinc-800 text-white font-bold text-base uppercase tracking-widest hover:bg-zinc-700 transition-colors"
              >
                Upload Receipt
              </button>
            )}

            {error && (
              <p className="mt-4 text-red-600 text-center text-base">{error}</p>
            )}
          </div>
        </div>
      </Shell>
    );
  }

  if (phase === "done") {
    return (
      <Shell>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">SPLIT CREATED</h2>
            </div>

            <div className="mb-6">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Share Link</p>
              <div className="flex gap-2">
                <input
                  readOnly
                  value={shareUrl}
                  className="flex-1 bg-transparent px-0 py-1 text-base outline-none"
                />
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="text-base text-zinc-600 underline hover:text-zinc-800"
                >
                  Copy
                </button>
              </div>
            </div>

            {venmo && personTotals.length > 0 && (
              <div className="mb-6">
                <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Request on Venmo</p>
                {personTotals.map((pt) => (
                  <a
                    key={pt.name}
                    href={`https://venmo.com/?txn=charge&amount=${pt.total.toFixed(2)}&note=${encodeURIComponent(`${title} — ${pt.name}'s share (via Jig)`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between py-1 hover:text-zinc-600 transition-colors"
                  >
                    <span className="text-base">{pt.name}</span>
                    <span className="text-base">{fmt(pt.total)}</span>
                  </a>
                ))}
                <p className="text-xs text-zinc-400 mt-2">
                  Tap each to open Venmo and fill in their @username
                </p>
              </div>
            )}

            <button
              onClick={() => {
                setPhase("upload");
                setItems([]);
                setPeople([]);
                setTitle("");
                setTaxPercent("");
                setTipPercent("");
                setVenmo("");
                setActivePerson(null);
              }}
              className="text-base text-zinc-500 hover:text-zinc-700 underline"
            >
              Create another split
            </button>
          </div>
        </div>
      </Shell>
    );
  }

  // Editing phase
  return (
    <Shell>
      <div className="flex-1 p-4">
        <div className="max-w-lg mx-auto">
          {/* Title */}
          <div className="text-center mb-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-transparent text-center text-xl font-bold outline-none py-1"
              placeholder="Restaurant Name"
            />
          </div>

          {/* Venmo */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <span className="text-base text-zinc-500">Venmo @</span>
              <input
                value={venmo}
                onChange={(e) => setVenmo(e.target.value)}
                placeholder="username"
                className="flex-1 bg-transparent text-base outline-none py-1"
              />
            </div>
          </div>

          {/* People */}
          <div className="mb-6">
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">
              People {activePerson && <span className="text-zinc-800 normal-case">— assigning for [{activePerson}]</span>}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {people.map((person) => (
                <div key={person} className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      setActivePerson(activePerson === person ? null : person)
                    }
                    className={`px-2 py-0.5 text-base leading-none transition-all ${
                      activePerson === person
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-700 hover:text-zinc-900"
                    }`}
                  >
                    {person}
                  </button>
                  {activePerson === person && (
                    <button
                      onClick={() => removePerson(person)}
                      className="text-zinc-400 hover:text-red-500 transition-colors"
                    >
                      <TrashIcon className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                ref={personInputRef}
                value={newPerson}
                onChange={(e) => setNewPerson(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addPerson()}
                placeholder="Add a person..."
                className="flex-1 bg-transparent text-base outline-none py-1"
              />
              <button
                onClick={addPerson}
                className="text-base text-zinc-600 hover:text-zinc-800 underline"
              >
                Add
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <p className="text-xs text-zinc-400 uppercase tracking-widest">Items</p>
              <button
                onClick={addItem}
                className="text-xs text-zinc-500 hover:text-zinc-700 underline"
              >
                + Add
              </button>
            </div>
            {items.map((item) => {
              const isAssigned =
                activePerson !== null &&
                item.assignedTo.includes(activePerson);
              return (
                <div
                  key={item.id}
                  className={`flex items-center gap-1 py-0.5 transition-colors cursor-pointer ${
                    activePerson
                      ? isAssigned
                        ? "text-zinc-900"
                        : "text-zinc-400"
                      : ""
                  }`}
                  onClick={() => activePerson && toggleItemForActivePerson(item.id)}
                >
                  {activePerson && (
                    <span className="w-4 text-center flex-shrink-0">
                      {isAssigned ? "×" : " "}
                    </span>
                  )}
                  <span className="flex-shrink-0 w-4 text-right text-base">1</span>
                  {activePerson ? (
                    <>
                      <span className="flex-1 text-base min-w-0">{item.name}</span>
                      <span className="flex-shrink-0 text-base">{fmt(item.price)}</span>
                    </>
                  ) : (
                    <>
                      <input
                        value={item.name}
                        onChange={(e) => updateItem(item.id, "name", e.target.value)}
                        className="flex-1 bg-transparent text-base outline-none min-w-0"
                      />
                      <input
                        inputMode="decimal"
                        value={"$" + item.price}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/^\$/, "");
                          updateItem(item.id, "price", raw === "" ? 0 : parseFloat(raw) || 0);
                        }}
                        className="w-20 bg-transparent text-right text-base outline-none flex-shrink-0"
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-300 hover:text-red-500 ml-1 flex-shrink-0"
                      >
                        ×
                      </button>
                    </>
                  )}
                  {item.assignedTo.length > 0 && !activePerson && (
                    <span className="text-xs text-zinc-400 ml-1 flex-shrink-0">
                      ({item.assignedTo.join(", ")})
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Totals */}
          <div className="my-4">
            <div className="mt-2 pt-2space-y-0.5">
              <div className="flex justify-between text-base">
                <span>Subtotal</span>
                <span>{fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between text-base items-center">
                <span className="flex items-center gap-1">
                  Tax
                  <input
                    inputMode="decimal"
                    value={taxPercent}
                    onChange={(e) => setTaxPercent(e.target.value)}
                    placeholder="0"
                    className="w-10 bg-transparent text-right text-base outline-none"
                  />%
                </span>
                <span>{fmt(subtotal * (taxVal / 100))}</span>
              </div>
              <div className="flex justify-between text-base items-center">
                <span className="flex items-center gap-1">
                  Tip
                  <input
                    inputMode="decimal"
                    value={tipPercent}
                    onChange={(e) => setTipPercent(e.target.value)}
                    placeholder="0"
                    className="w-10 bg-transparent text-right text-base outline-none"
                  />%
                </span>
                <span>{fmt(subtotal * (tipVal / 100))}</span>
              </div>
              <div className="mt-1 pt-1flex justify-between text-base font-bold">
                <span>TOTAL</span>
                <span>{fmt(subtotal * (1 + taxVal / 100 + tipVal / 100))}</span>
              </div>
            </div>
          </div>

          {/* Per-person */}
          {personTotals.length > 0 && (
            <div className="my-4">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Per Person</p>
              {personTotals.map((pt) => (
                <div key={pt.name} className="flex justify-between text-base">
                  <span>{pt.name}</span>
                  <span>{fmt(pt.total)}</span>
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-red-600 text-base mb-4 text-center">{error}</p>
          )}

          <button
            onClick={handleSave}
            disabled={phase === "saving"}
            className="w-full py-3 bg-zinc-800 text-white font-bold text-base uppercase tracking-widest hover:bg-zinc-700 disabled:opacity-50 transition-opacity mt-4"
          >
            {phase === "saving" ? "Saving..." : "Create Share Link"}
          </button>
        </div>
      </div>
    </Shell>
  );
}
