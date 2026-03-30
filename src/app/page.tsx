"use client";

import { ActionButton } from "@/components/ActionButton";
import { DotLoader } from "@/components/DotLoader";
import { ItemsList } from "@/components/ItemsList";
import { PageFooter, FooterLink } from "@/components/PageFooter";
import { PageHeader } from "@/components/PageHeader";
import { PeopleList } from "@/components/PeopleList";
import { PerPersonSummary } from "@/components/PerPersonSummary";
import { SectionHeader } from "@/components/SectionHeader";
import { Shell } from "@/components/shell";
import { TotalsSection } from "@/components/TotalsSection";
import { ReceiptItem } from "@/lib/types";
import { generateId, num } from "@/lib/utils";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
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
  const [splitId, setSplitId] = useState<string | null>(null);
  const [activePerson, setActivePerson] = useState<string | null>(null);
  const [deepEdit, setDeepEdit] = useState(false);
  const [newPerson, setNewPerson] = useState("");
  const router = useRouter();
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
        const blob = await heic2any({
          blob: file,
          toType: "image/jpeg",
          quality: 0.9,
        });
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
          id: generateId(),
          name: item.name,
          price: item.price,
          assignedTo: [],
        }),
      );
      setItems(parsedItems);

      const itemsSubtotal = parsedItems.reduce(
        (s: number, i: { price: number }) => s + i.price,
        0,
      );
      if (itemsSubtotal > 0) {
        if (data.tax != null)
          setTaxPercent(
            String(Math.round((data.tax / itemsSubtotal) * 1000) / 10),
          );
        if (data.tip != null)
          setTipPercent(
            String(Math.round((data.tip / itemsSubtotal) * 1000) / 10),
          );
      }

      if (data.receiptUrl) setReceiptUrl(data.receiptUrl);
      posthog.capture("receipt_uploaded", {
        item_count: parsedItems.length,
        has_tax: data.tax != null,
        has_tip: data.tip != null,
      });
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
    let n = people.length;
    let name = `Friend ${n}`;
    while (people.includes(name)) {
      n++;
      name = `Friend ${n}`;
    }
    setPeople([...people, name]);
  };

  const removePerson = (name: string) => {
    setPeople(people.filter((p) => p !== name));
    setItems(
      items.map((item) => ({
        ...item,
        assignedTo: item.assignedTo.filter((p) => p !== name),
      })),
    );
    if (activePerson === name) setActivePerson(null);
  };

  const renamePerson = (oldName: string, newName: string) => {
    setPeople(people.map((p) => (p === oldName ? newName : p)));
    setItems(
      items.map((item) => ({
        ...item,
        assignedTo: item.assignedTo.map((p) => (p === oldName ? newName : p)),
      })),
    );
    if (activePerson === oldName) setActivePerson(newName);
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
      }),
    );
  };

  const updateItem = (
    id: string,
    field: "name" | "price",
    value: string | number,
  ) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
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

  const handleSplit = async () => {
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
          receiptUrl,
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      const data = await res.json();
      posthog.capture("split_created", {
        people_count: people.length,
        item_count: items.length,
        has_venmo: !!venmo,
        subtotal,
        total: subtotal * (1 + taxVal / 100 + tipVal / 100),
      });
      setSplitId(data.id);
      window.history.replaceState(null, "", `/${data.id}`);
      setPhase("editing");
    } catch {
      setError("Failed to save");
      setPhase("editing");
    }
  };

  const handleSaveAndCopy = async () => {
    if (!splitId) return;
    setPhase("saving");
    try {
      const res = await fetch(`/api/splits/${splitId}`, {
        method: "PUT",
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
      if (!res.ok) throw new Error("Save failed");
      const url = window.location.href;
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        if (navigator.share) {
          navigator.share({ url }).catch(() => {});
        }
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      setPhase("editing");
    } catch {
      setError("Failed to save");
      setPhase("editing");
    }
  };

  const personTotals = people.map((person) => {
    const personItems = items.filter((i) => i.assignedTo.includes(person));
    const itemsTotal = personItems.reduce(
      (s, i) => s + i.price / i.assignedTo.length,
      0,
    );
    const proportion = subtotal > 0 ? itemsTotal / subtotal : 0;
    const tax = subtotal * (taxVal / 100) * proportion;
    const tip = subtotal * (tipVal / 100) * proportion;
    return {
      name: person,
      itemsTotal,
      tax,
      tip,
      total: itemsTotal + tax + tip,
    };
  });

  if (phase === "upload" || phase === "parsing" || phase === "uploaded") {
    return (
      <Shell>
        <div className="flex-1 p-4">
          <div className="max-w-md mx-auto">
            <PageHeader
              title="Jig"
              description="Split the bill"
            />

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="sr-only"
              aria-label="Upload receipt image"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />

            {/* Receipt upload */}
            <div className="mb-4">
              <SectionHeader label="1. Add Receipt" />
              <button
                onClick={() => fileRef.current?.click()}
                disabled={phase === "parsing"}
                className="cursor-pointer w-full text-base text-left text-zinc-900 disabled:text-zinc-400 underline"
              >
                {phase === "parsing" ? (
                  <>
                    Uploading
                    <DotLoader />
                  </>
                ) : phase === "uploaded" ? (
                  "Uploaded ✓"
                ) : (
                  "Upload image"
                )}
              </button>
            </div>

            {/* People */}
            <div className="mb-6">
              <SectionHeader label="2. Add People" />
              <div className="space-y-1.5">
                {people.map((person) => (
                  <div key={person} className="flex items-center gap-2">
                    <button
                      onClick={() => removePerson(person)}
                      className="text-zinc-400 hover:text-red-500 text-sm font-bold flex-shrink-0 w-4 text-center"
                    >
                      &times;
                    </button>
                    <input
                      value={person}
                      onChange={(e) => renamePerson(person, e.target.value)}
                      className="flex-1 bg-transparent text-base outline-none border-b border-dashed border-zinc-400"
                    />
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 text-sm font-bold flex-shrink-0 w-4 text-center">&times;</span>
                  <input
                    ref={personInputRef}
                    value={newPerson}
                    onChange={(e) => setNewPerson(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (newPerson.trim()) {
                          addPersonByName();
                        } else {
                          addPersonAuto();
                        }
                      } else if (
                        (e.key === "Backspace" || e.key === "Delete") &&
                        !newPerson &&
                        people.length > 0
                      ) {
                        removePerson(people[people.length - 1]);
                      }
                    }}
                    onBlur={() => {
                      if (newPerson.trim()) addPersonByName();
                    }}
                    placeholder={people.length === 0 ? "Your name" : `Friend ${people.length}`}
                    className="flex-1 bg-transparent text-base outline-none border-b border-dashed border-zinc-400"
                  />
                </div>
                <button
                  onClick={addPersonAuto}
                  className="text-xs text-zinc-400 hover:text-zinc-600 mt-2"
                >
                  + Add friend
                </button>
              </div>
            </div>

            {/* Venmo */}
            <div className="mb-4">
              <SectionHeader label="3. Add Venmo" />
              <div className="relative flex items-center gap-1 text-base">
                <span className="text-zinc-400">@</span>
                <div className="relative flex-1">
                  {!venmo && (
                    <span className="absolute inset-0 flex items-center text-zinc-400 pointer-events-none">
                      your username
                    </span>
                  )}
                  <span
                    role="textbox"
                    aria-label="Venmo username"
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) =>
                      setVenmo((e.target as HTMLElement).textContent || "")
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        (e.target as HTMLElement).blur();
                      }
                    }}
                    className="block w-full text-zinc-900 outline-none border-b border-dashed border-zinc-400"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="text-red-600 text-base mb-4 text-center">{error}</p>
            )}

            {/* Split button */}
            <ActionButton
              onClick={() => {
                posthog.capture("split_started", {
                  people_count: people.length,
                  item_count: items.length,
                });
                handleSplit();
              }}
              disabled={phase !== "uploaded" || people.length === 0}
              className="mt-2"
            >
              {phase === "parsing" ? "Uploading..." : "Split"}
            </ActionButton>
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
            onAction={() => {
              if (deepEdit) {
                setDeepEdit(false);
                setActivePerson(null);
              } else {
                setDeepEdit(true);
                setActivePerson(null);
              }
            }}
            venmo={deepEdit ? venmo : undefined}
            onVenmoChange={deepEdit ? setVenmo : undefined}
          />
          <PeopleList
            people={people}
            activePerson={activePerson}
            setActivePerson={setActivePerson}
            removePerson={removePerson}
            addPerson={addPersonAuto}
            deepEdit={deepEdit}
            onRenamePerson={renamePerson}
          />
          <ItemsList
            items={items}
            people={people}
            activePerson={activePerson}
            setActivePerson={setActivePerson}
            toggleItemForActivePerson={toggleItemForActivePerson}
            updateItem={updateItem}
            removeItem={removeItem}
            addItem={addItem}
            deepEdit={deepEdit}
          />
          <TotalsSection
            subtotal={subtotal}
            taxPercent={taxPercent}
            setTaxPercent={setTaxPercent}
            tipPercent={tipPercent}
            setTipPercent={setTipPercent}
            taxVal={taxVal}
            tipVal={tipVal}
            editable={deepEdit}
          />
          <PerPersonSummary personTotals={personTotals} />
          {error && (
            <p className="text-red-600 text-base mb-4 text-center">{error}</p>
          )}
          <ActionButton
            onClick={handleSaveAndCopy}
            disabled={phase === "saving" || copied}
            className="mt-4"
          >
            {phase === "saving"
              ? "Saving..."
              : copied
                ? "Link Copied"
                : "Save and Copy Link"}
          </ActionButton>
        </div>
      </div>
    </Shell>
  );
}
