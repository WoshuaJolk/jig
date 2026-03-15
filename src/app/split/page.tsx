"use client";

import { useState, useCallback, useRef } from "react";
import { ReceiptItem } from "@/lib/types";

type Phase = "upload" | "parsing" | "editing" | "saving" | "done";

function generateId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function SplitPage() {
  const [phase, setPhase] = useState<Phase>("upload");
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<ReceiptItem[]>([]);
  const [people, setPeople] = useState<string[]>([]);
  const [newPerson, setNewPerson] = useState("");
  const [taxPercent, setTaxPercent] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [shareUrl, setShareUrl] = useState("");
  const [adminUrl, setAdminUrl] = useState("");
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const subtotal = items.reduce((s, i) => s + i.price, 0);

  const handleFile = useCallback(async (file: File) => {
    setPhase("parsing");
    setError("");

    try {
      const buffer = await file.arrayBuffer();
      const base64 = btoa(
        new Uint8Array(buffer).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      const dataUrl = `data:${file.type};base64,${base64}`;

      const res = await fetch("/api/parse-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: dataUrl }),
      });

      if (!res.ok) throw new Error("Failed to parse receipt");

      const data = await res.json();
      setTitle(data.title || "Untitled");
      setItems(
        data.items.map((item: { name: string; price: number }) => ({
          id: generateId(),
          name: item.name,
          price: item.price,
          assignedTo: [],
        }))
      );
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
  };

  const toggleAssignment = (itemId: string, person: string) => {
    setItems(
      items.map((item) => {
        if (item.id !== itemId) return item;
        const assigned = item.assignedTo.includes(person)
          ? item.assignedTo.filter((p) => p !== person)
          : [...item.assignedTo, person];
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
          taxPercent,
          tipPercent,
          subtotal,
        }),
      });

      const data = await res.json();
      const base = window.location.origin;
      setShareUrl(`${base}/split/${data.id}`);
      setAdminUrl(
        `${base}/split/${data.id}?admin=${data.adminToken}`
      );
      setPhase("done");
    } catch {
      setError("Failed to save");
      setPhase("editing");
    }
  };

  // Compute per-person totals for preview
  const personTotals = people.map((person) => {
    const personItems = items.filter((i) => i.assignedTo.includes(person));
    const itemsTotal = personItems.reduce(
      (s, i) => s + i.price / i.assignedTo.length,
      0
    );
    const proportion = subtotal > 0 ? itemsTotal / subtotal : 0;
    const tax = subtotal * (taxPercent / 100) * proportion;
    const tip = subtotal * (tipPercent / 100) * proportion;
    return { name: person, itemsTotal, tax, tip, total: itemsTotal + tax + tip };
  });

  if (phase === "upload" || phase === "parsing") {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-2 text-zinc-900 dark:text-zinc-100">
            Jig
          </h1>
          <p className="text-center text-zinc-500 mb-8">Split any receipt</p>

          {phase === "parsing" ? (
            <div className="text-center py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Reading your receipt...
              </p>
            </div>
          ) : (
            <div
              className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-colors ${
                dragOver
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                  : "border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600"
              }`}
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onClick={() => fileRef.current?.click()}
            >
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
              />
              <div className="text-4xl mb-3">🧾</div>
              <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                Drop a receipt photo here
              </p>
              <p className="text-zinc-500 text-sm mt-1">or click to upload</p>
            </div>
          )}

          {error && (
            <p className="mt-4 text-red-600 text-center text-sm">{error}</p>
          )}
        </div>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Split created!
          </h2>

          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 mb-4 text-left">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              Share this link
            </label>
            <div className="flex mt-1 gap-2">
              <input
                readOnly
                value={shareUrl}
                className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 font-mono"
              />
              <button
                onClick={() => navigator.clipboard.writeText(shareUrl)}
                className="px-3 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-80"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 text-left">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              Admin link (edit anytime)
            </label>
            <div className="flex mt-1 gap-2">
              <input
                readOnly
                value={adminUrl}
                className="flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 font-mono"
              />
              <button
                onClick={() => navigator.clipboard.writeText(adminUrl)}
                className="px-3 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-80"
              >
                Copy
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setPhase("upload");
              setItems([]);
              setPeople([]);
              setTitle("");
              setTaxPercent(0);
              setTipPercent(0);
            }}
            className="mt-6 text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Create another split
          </button>
        </div>
      </div>
    );
  }

  // Editing phase
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
          Jig
        </h1>
        <p className="text-zinc-500 text-sm mb-6">
          Edit items, assign people, then share
        </p>

        {/* Title */}
        <div className="mb-6">
          <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-zinc-900 dark:text-zinc-100 text-lg font-semibold"
          />
        </div>

        {/* People */}
        <div className="mb-6">
          <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
            People
          </label>
          <div className="flex flex-wrap gap-2 mt-2">
            {people.map((person) => (
              <span
                key={person}
                className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
              >
                {person}
                <button
                  onClick={() => removePerson(person)}
                  className="ml-1 hover:text-red-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-2">
            <input
              value={newPerson}
              onChange={(e) => setNewPerson(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addPerson()}
              placeholder="Add a person..."
              className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100"
            />
            <button
              onClick={addPerson}
              className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-80"
            >
              Add
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              Items
            </label>
            <button
              onClick={addItem}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              + Add Item
            </button>
          </div>
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3"
              >
                <div className="flex gap-2 items-center">
                  <input
                    value={item.name}
                    onChange={(e) =>
                      updateItem(item.id, "name", e.target.value)
                    }
                    className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 text-sm font-medium outline-none"
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-zinc-400 text-sm">$</span>
                    <input
                      type="number"
                      step="0.01"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "price",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="w-20 bg-transparent text-right text-zinc-900 dark:text-zinc-100 text-sm font-mono outline-none"
                    />
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-zinc-400 hover:text-red-500 text-lg leading-none"
                  >
                    ×
                  </button>
                </div>
                {people.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {people.map((person) => (
                      <button
                        key={person}
                        onClick={() => toggleAssignment(item.id, person)}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium transition-colors ${
                          item.assignedTo.includes(person)
                            ? "bg-blue-600 text-white"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        }`}
                      >
                        {person}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tax & Tip */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              Tax %
            </label>
            <input
              type="number"
              step="0.1"
              value={taxPercent}
              onChange={(e) => setTaxPercent(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              Tip %
            </label>
            <input
              type="number"
              step="0.1"
              value={tipPercent}
              onChange={(e) => setTipPercent(parseFloat(e.target.value) || 0)}
              className="mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 mb-6">
          <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
            <span>Subtotal</span>
            <span className="font-mono">${subtotal.toFixed(2)}</span>
          </div>
          {taxPercent > 0 && (
            <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              <span>Tax ({taxPercent}%)</span>
              <span className="font-mono">
                ${(subtotal * (taxPercent / 100)).toFixed(2)}
              </span>
            </div>
          )}
          {tipPercent > 0 && (
            <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              <span>Tip ({tipPercent}%)</span>
              <span className="font-mono">
                ${(subtotal * (tipPercent / 100)).toFixed(2)}
              </span>
            </div>
          )}
          <div className="flex justify-between text-base font-semibold text-zinc-900 dark:text-zinc-100 border-t border-zinc-100 dark:border-zinc-800 pt-2 mt-2">
            <span>Total</span>
            <span className="font-mono">
              $
              {(
                subtotal *
                (1 + taxPercent / 100 + tipPercent / 100)
              ).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Per-person preview */}
        {personTotals.length > 0 && (
          <div className="mb-6">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2 block">
              Per Person
            </label>
            <div className="space-y-2">
              {personTotals.map((pt) => (
                <div
                  key={pt.name}
                  className="flex justify-between items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-2"
                >
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {pt.name}
                  </span>
                  <span className="text-sm font-mono text-zinc-900 dark:text-zinc-100">
                    ${pt.total.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleSave}
          disabled={phase === "saving"}
          className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium text-base hover:opacity-80 disabled:opacity-50 transition-opacity"
        >
          {phase === "saving" ? "Saving..." : "Create Share Link"}
        </button>
      </div>
    </div>
  );
}
