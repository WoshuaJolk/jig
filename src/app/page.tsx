"use client";

import { Shell } from "@/components/shell";
import { DotLoader } from "@/components/DotLoader";
import { PageHeader } from "@/components/PageHeader";
import { PeopleList } from "@/components/PeopleList";
import { ItemsList } from "@/components/ItemsList";
import { TotalsSection } from "@/components/TotalsSection";
import { PerPersonSummary } from "@/components/PerPersonSummary";
import { ActionButton } from "@/components/ActionButton";
import { generateId, num } from "@/lib/utils";
import { ReceiptItem } from "@/lib/types";
import { useCallback, useRef, useState } from "react";

type Phase = "upload" | "parsing" | "uploaded" | "editing" | "saving";

export default function SplitPage() {
  const [phase, setPhase] = useState<Phase>("upload");
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<ReceiptItem[]>([]);
  const [people, setPeople] = useState<string[]>([]);
  const [taxPercent, setTaxPercent] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [venmo, setVenmo] = useState("");
  const [receiptUrl, setReceiptUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [activePerson, setActivePerson] = useState<string | null>(null);
  const [deepEdit, setDeepEdit] = useState(false);
  const [newPerson, setNewPerson] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const personInputRef = useRef<HTMLInputElement>(null);

  const taxVal = num(taxPercent);
  const tipVal = num(tipPercent);
  const subtotal = items.reduce((s, i) => s + i.price, 0);

  const handleFile = useCallback(async (file: File) => {
    setPhase("parsing");
    setError("");

    try {
      let imageFile: File | Blob = file;

      const isHeic =
        file.type === "image/heic" ||
        file.type === "image/heif" ||
        file.name.toLowerCase().endsWith(".heic") ||
        file.name.toLowerCase().endsWith(".heif");
      if (isHeic) {
        const heic2any = (await import("heic2any")).default;
        const blob = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.9 });
        imageFile = Array.isArray(blob) ? blob[0] : blob;
      }

      // Resize and compress to JPEG via canvas
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const MAX = 1200;
          let { width, height } = img;
          if (width > MAX || height > MAX) {
            const ratio = Math.min(MAX / width, MAX / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", 0.7));
        };
        img.onerror = () => reject(new Error("Failed to load image"));
        img.src = URL.createObjectURL(imageFile);
      });

      const res = await fetch("/api/parse-receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: dataUrl }),
      });

      if (!res.ok) throw new Error("Failed to parse receipt");

      const data = await res.json();
      setTitle(data.title || "Untitled");
      const parsedItems = data.items.map(
        (item: { name: string; price: number }) => ({
          id: generateId(), name: item.name, price: item.price, assignedTo: [],
        }),
      );
      setItems(parsedItems);

      const itemsSubtotal = parsedItems.reduce((s: number, i: { price: number }) => s + i.price, 0);
      if (itemsSubtotal > 0) {
        if (data.tax != null) setTaxPercent(String(Math.round((data.tax / itemsSubtotal) * 1000) / 10));
        if (data.tip != null) setTipPercent(String(Math.round((data.tip / itemsSubtotal) * 1000) / 10));
      }

      if (data.receiptUrl) setReceiptUrl(data.receiptUrl);
      setPhase("uploaded");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setPhase("upload");
    }
  }, []);

  const addPersonByName = () => {
    const name = newPerson.trim();
    if (name && !people.includes(name)) {
      setPeople([...people, name]);
      setNewPerson("");
      setTimeout(() => personInputRef.current?.focus(), 0);
    }
  };

  const addPersonAuto = () => {
    let n = people.length + 1;
    let name = `Friend ${n}`;
    while (people.includes(name)) { n++; name = `Friend ${n}`; }
    setPeople([...people, name]);
  };

  const removePerson = (name: string) => {
    setPeople(people.filter((p) => p !== name));
    setItems(items.map((item) => ({ ...item, assignedTo: item.assignedTo.filter((p) => p !== name) })));
    if (activePerson === name) setActivePerson(null);
  };

  const renamePerson = (oldName: string, newName: string) => {
    setPeople(people.map((p) => (p === oldName ? newName : p)));
    setItems(items.map((item) => ({ ...item, assignedTo: item.assignedTo.map((p) => (p === oldName ? newName : p)) })));
    if (activePerson === oldName) setActivePerson(newName);
  };

  const toggleItemForActivePerson = (itemId: string) => {
    if (!activePerson) return;
    setItems(items.map((item) => {
      if (item.id !== itemId) return item;
      const assigned = item.assignedTo.includes(activePerson)
        ? item.assignedTo.filter((p) => p !== activePerson)
        : [...item.assignedTo, activePerson];
      return { ...item, assignedTo: assigned };
    }));
  };

  const updateItem = (id: string, field: "name" | "price", value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = () => {
    setItems([...items, { id: generateId(), name: "New Item", price: 0, assignedTo: [] }]);
  };

  const handleSave = async () => {
    if (people.length === 0) { setError("Add at least one person"); return; }
    setPhase("saving");
    setError("");
    try {
      const res = await fetch("/api/splits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, items, people, taxPercent: taxVal, tipPercent: tipVal, subtotal, venmo, receiptUrl }),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();
      const url = `${window.location.origin}/${data.id}`;
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch {
        // Clipboard API not available (mobile), fall back to share or just show link
        if (navigator.share) {
          navigator.share({ url }).catch(() => {});
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
      setPhase("editing");
    } catch {
      setError("Failed to save");
      setPhase("editing");
    }
  };

  const personTotals = people.map((person) => {
    const personItems = items.filter((i) => i.assignedTo.includes(person));
    const itemsTotal = personItems.reduce((s, i) => s + i.price / i.assignedTo.length, 0);
    const proportion = subtotal > 0 ? itemsTotal / subtotal : 0;
    const tax = subtotal * (taxVal / 100) * proportion;
    const tip = subtotal * (tipVal / 100) * proportion;
    return { name: person, itemsTotal, tax, tip, total: itemsTotal + tax + tip };
  });

  if (phase === "upload" || phase === "parsing" || phase === "uploaded") {
    return (
      <Shell>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm space-y-4">
            <input ref={fileRef} type="file" accept="image/*" className="sr-only"
              onChange={(e) => { const file = e.target.files?.[0]; if (file) handleFile(file); }} />
            <button
              onClick={() => fileRef.current?.click()}
              disabled={phase === "parsing"}
              className="w-full text-base text-left text-zinc-900 disabled:text-zinc-400"
            >
              {phase === "parsing" ? <>Uploading<DotLoader /></> : phase === "uploaded" ? "Uploaded" : "Upload Receipt"}
            </button>

            {/* People input with badges */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 min-h-[28px]">
              {people.map((person) => (
                <span key={person} className="inline-flex items-center gap-1 text-base text-zinc-700">
                  {person}
                  <button
                    onClick={() => { removePerson(person); setTimeout(() => personInputRef.current?.focus(), 0); }}
                    className="text-zinc-400 hover:text-zinc-700"
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                ref={personInputRef}
                value={newPerson}
                onChange={(e) => setNewPerson(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addPersonByName();
                  }
                }}
                onBlur={() => addPersonByName()}
                enterKeyHint="done"
                placeholder={people.length === 0 ? "Who's involved?" : ""}
                className="flex-1 min-w-[80px] bg-transparent text-base text-zinc-900 outline-none"
              />
            </div>

            {/* Venmo */}
            <div className="flex items-center gap-1 text-base">
              <span className="text-zinc-500">@</span>
              <input
                value={venmo}
                onChange={(e) => setVenmo(e.target.value)}
                placeholder="venmo username"
                className="flex-1 bg-transparent text-base text-zinc-900 outline-none"
              />
            </div>

            {/* Split button */}
            <button
              onClick={() => setPhase("editing")}
              disabled={phase !== "uploaded"}
              className="w-full text-base text-left text-zinc-900 disabled:text-zinc-400"
            >
              Split
            </button>

            {error && <p className="text-red-600 text-base">{error}</p>}
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex-1 p-4">
        <div className="max-w-lg mx-auto">
          <PageHeader
            title={title}
            description={venmo ? `@${venmo}` : undefined}
            onTitleChange={deepEdit ? setTitle : undefined}
            actionLabel={deepEdit ? "Done" : "Edit"}
            onAction={() => { if (deepEdit) { setDeepEdit(false); setActivePerson(null); } else { setDeepEdit(true); setActivePerson(null); } }}
            venmo={deepEdit ? venmo : undefined}
            onVenmoChange={deepEdit ? setVenmo : undefined}
          />
          <PeopleList people={people} activePerson={activePerson} setActivePerson={setActivePerson}
            removePerson={removePerson} addPerson={addPersonAuto}
            deepEdit={deepEdit} onRenamePerson={renamePerson} />
          <ItemsList items={items} people={people} activePerson={activePerson} setActivePerson={setActivePerson}
            toggleItemForActivePerson={toggleItemForActivePerson}
            updateItem={updateItem} removeItem={removeItem} addItem={addItem}
            deepEdit={deepEdit} />
          <TotalsSection subtotal={subtotal} taxPercent={taxPercent} setTaxPercent={setTaxPercent}
            tipPercent={tipPercent} setTipPercent={setTipPercent} taxVal={taxVal} tipVal={tipVal}
            editable={deepEdit} />
          <PerPersonSummary personTotals={personTotals} />
          {error && <p className="text-red-600 text-base mb-4 text-center">{error}</p>}
          <ActionButton onClick={handleSave} disabled={phase === "saving" || copied} className="mt-4">
            {phase === "saving" ? "Saving..." : copied ? "Link Copied" : "Create Share Link"}
          </ActionButton>
        </div>
      </div>
    </Shell>
  );
}
