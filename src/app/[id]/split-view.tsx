"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import { ReceiptItem } from "@/lib/types";
import { Shell } from "@/components/shell";
import { TrashIcon } from "@heroicons/react/20/solid";

interface SplitData {
  id: string;
  title: string;
  items: ReceiptItem[];
  people: string[];
  taxPercent: number;
  tipPercent: number;
  subtotal: number;
  venmo: string;
}

interface PersonBreakdown {
  items: { name: string; price: number; split: number }[];
  itemsTotal: number;
  tax: number;
  tip: number;
  total: number;
}

function calcBreakdown(split: SplitData, person: string): PersonBreakdown {
  const items = split.items
    .filter((i) => i.assignedTo.includes(person))
    .map((i) => ({
      name: i.name,
      price: i.price,
      split: i.price / i.assignedTo.length,
    }));
  const itemsTotal = items.reduce((s, i) => s + i.split, 0);
  const proportion = split.subtotal > 0 ? itemsTotal / split.subtotal : 0;
  const tax = split.subtotal * (split.taxPercent / 100) * proportion;
  const tip = split.subtotal * (split.tipPercent / 100) * proportion;
  return { items, itemsTotal, tax, tip, total: itemsTotal + tax + tip };
}

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

function venmoPayUrl(username: string, amount: number, note: string): string {
  return `https://venmo.com/${encodeURIComponent(username)}?txn=pay&amount=${amount.toFixed(2)}&note=${encodeURIComponent(note)}`;
}

export default function SplitView() {
  const params = useParams();
  const id = params.id as string;

  const [split, setSplit] = useState<SplitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [error, setError] = useState("");

  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editItems, setEditItems] = useState<ReceiptItem[]>([]);
  const [editPeople, setEditPeople] = useState<string[]>([]);
  const [editTax, setEditTax] = useState("");
  const [editTip, setEditTip] = useState("");
  const [editVenmo, setEditVenmo] = useState("");
  const [newPerson, setNewPerson] = useState("");
  const [activePerson, setActivePerson] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const editTaxVal = num(editTax);
  const editTipVal = num(editTip);

  const fetchSplit = useCallback(async () => {
    try {
      const res = await fetch(`/api/splits/${id}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      setSplit(data);
    } catch {
      setError("Split not found");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchSplit();
  }, [fetchSplit]);

  const startEditing = () => {
    if (!split) return;
    setEditTitle(split.title);
    setEditItems(split.items.map((i) => ({ ...i, assignedTo: [...i.assignedTo] })));
    setEditPeople([...split.people]);
    setEditTax(split.taxPercent ? String(split.taxPercent) : "");
    setEditTip(split.tipPercent ? String(split.tipPercent) : "");
    setEditVenmo(split.venmo || "");
    setActivePerson(null);
    setEditing(true);
  };

  const saveEdits = async () => {
    if (!split) return;
    setSaving(true);
    const editSubtotal = editItems.reduce((s, i) => s + i.price, 0);
    try {
      const res = await fetch(`/api/splits/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: editTitle,
          items: editItems,
          people: editPeople,
          taxPercent: editTaxVal,
          tipPercent: editTipVal,
          subtotal: editSubtotal,
          venmo: editVenmo,
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      setEditing(false);
      await fetchSplit();
    } catch {
      setError("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const toggleItemForActivePerson = (itemId: string) => {
    if (!activePerson) return;
    setEditItems(
      editItems.map((item) => {
        if (item.id !== itemId) return item;
        const assigned = item.assignedTo.includes(activePerson)
          ? item.assignedTo.filter((p) => p !== activePerson)
          : [...item.assignedTo, activePerson];
        return { ...item, assignedTo: assigned };
      })
    );
  };

  const updateItem = (
    itemId: string,
    field: "name" | "price",
    value: string | number
  ) => {
    setEditItems(
      editItems.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setEditItems(editItems.filter((i) => i.id !== itemId));
  };

  const addItem = () => {
    setEditItems([
      ...editItems,
      { id: generateId(), name: "New Item", price: 0, assignedTo: [] },
    ]);
  };

  const addPerson = () => {
    const name = newPerson.trim();
    if (name && !editPeople.includes(name)) {
      setEditPeople([...editPeople, name]);
      setNewPerson("");
      setActivePerson(name);
    }
  };

  const removePerson = (name: string) => {
    setEditPeople(editPeople.filter((p) => p !== name));
    setEditItems(
      editItems.map((item) => ({
        ...item,
        assignedTo: item.assignedTo.filter((p) => p !== name),
      }))
    );
    if (activePerson === name) setActivePerson(null);
  };

  if (loading) {
    return (
      <Shell>
        <div className="flex-1 flex items-center justify-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-800" />
        </div>
      </Shell>
    );
  }

  if (error || !split) {
    return (
      <Shell>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <p className="text-xl font-bold mb-2">{error || "Split not found"}</p>
            <a href="/" className="text-base text-zinc-600 underline">Create a new split</a>
          </div>
        </div>
      </Shell>
    );
  }

  // Edit mode
  if (editing) {
    const editSubtotal = editItems.reduce((s, i) => s + i.price, 0);
    return (
      <Shell>
        <div className="flex-1 p-4">
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs text-zinc-400 uppercase tracking-widest">Edit Split</p>
              <button onClick={() => setEditing(false)} className="text-base text-zinc-500 underline">
                Cancel
              </button>
            </div>

            <div className="text-center mb-4">
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full bg-transparent text-center text-xl font-bold outline-none py-1"
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-base text-zinc-500">Venmo @</span>
                <input
                  value={editVenmo}
                  onChange={(e) => setEditVenmo(e.target.value)}
                  placeholder="username"
                  className="flex-1 bg-transparent text-base outline-none py-1"
                />
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-2">
                People {activePerson && <span className="text-zinc-800 normal-case">— assigning for [{activePerson}]</span>}
              </p>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {editPeople.map((person) => (
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
                  value={newPerson}
                  onChange={(e) => setNewPerson(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addPerson()}
                  placeholder="Add a person..."
                  className="flex-1 bg-transparent text-base outline-none py-1"
                />
                <button onClick={addPerson} className="text-base text-zinc-600 hover:text-zinc-800 underline">
                  Add
                </button>
              </div>
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Items</p>
                <button onClick={addItem} className="text-xs text-zinc-500 hover:text-zinc-700 underline">
                  + Add
                </button>
              </div>
              {editItems.map((item) => {
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

            <div className="my-4">
              <div className="mt-2 pt-2space-y-0.5">
                <div className="flex justify-between text-base">
                  <span>Subtotal</span>
                  <span>{fmt(editSubtotal)}</span>
                </div>
                <div className="flex justify-between text-base items-center">
                  <span className="flex items-center gap-1">
                    Tax
                    <input
                      inputMode="decimal"
                      value={editTax}
                      onChange={(e) => setEditTax(e.target.value)}
                      placeholder="0"
                      className="w-10 bg-transparent text-right text-base outline-none"
                    />%
                  </span>
                  <span>{fmt(editSubtotal * (editTaxVal / 100))}</span>
                </div>
                <div className="flex justify-between text-base items-center">
                  <span className="flex items-center gap-1">
                    Tip
                    <input
                      inputMode="decimal"
                      value={editTip}
                      onChange={(e) => setEditTip(e.target.value)}
                      placeholder="0"
                      className="w-10 bg-transparent text-right text-base outline-none"
                    />%
                  </span>
                  <span>{fmt(editSubtotal * (editTipVal / 100))}</span>
                </div>
                <div className="mt-1 pt-1flex justify-between text-base font-bold">
                  <span>TOTAL</span>
                  <span>{fmt(editSubtotal * (1 + editTaxVal / 100 + editTipVal / 100))}</span>
                </div>
              </div>
            </div>

            {error && (
              <p className="text-red-600 text-base mb-4 text-center">{error}</p>
            )}

            <button
              onClick={saveEdits}
              disabled={saving}
              className="w-full py-3 bg-zinc-800 text-white font-bold text-base uppercase tracking-widest hover:bg-zinc-700 disabled:opacity-50 mt-4"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </Shell>
    );
  }

  // See all orders
  if (showAllOrders) {
    const allTotals = split.people.map((person) => ({
      person,
      ...calcBreakdown(split, person),
    }));
    const grandTotal =
      split.subtotal * (1 + split.taxPercent / 100 + split.tipPercent / 100);

    return (
      <Shell>
        <div className="flex-1 p-4">
          <div className="max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">{split.title}</h1>
              <button onClick={() => setShowAllOrders(false)} className="text-base text-zinc-500 underline">
                Back
              </button>
            </div>

            {allTotals.map(({ person, items, itemsTotal, tax, tip, total }) => (
              <div key={person} className="mb-4">
                <p className="text-base font-bold uppercase pb-0.5 mb-1">
                  {person}
                </p>
                {items.map((item, i) => (
                  <div key={i} className="flex justify-between text-base">
                    <span>
                      1 {item.name}
                      {item.split !== item.price && <span className="text-zinc-400"> (split)</span>}
                    </span>
                    <span>{fmt(item.split)}</span>
                  </div>
                ))}
                <div className="mt-1 pt-1">
                  <div className="flex justify-between text-base">
                    <span>Subtotal</span>
                    <span>{fmt(itemsTotal)}</span>
                  </div>
                  {tax > 0 && (
                    <div className="flex justify-between text-base text-zinc-500">
                      <span>Tax</span>
                      <span>{fmt(tax)}</span>
                    </div>
                  )}
                  {tip > 0 && (
                    <div className="flex justify-between text-base text-zinc-500">
                      <span>Tip</span>
                      <span>{fmt(tip)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-bold">
                    <span>Total</span>
                    <span>{fmt(total)}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-3 pt-1 flex justify-between text-base font-bold">
              <span>GRAND TOTAL</span>
              <span>{fmt(grandTotal)}</span>
            </div>

            <button
              onClick={startEditing}
              className="w-full py-3 bg-zinc-800 text-white font-bold text-base uppercase tracking-widest hover:bg-zinc-700 mt-6"
            >
              Edit Split
            </button>
          </div>
        </div>
      </Shell>
    );
  }

  // Who are you?
  if (!selectedPerson) {
    return (
      <Shell>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm text-center">
            <h1 className="text-2xl font-bold mb-8">{split.title}</h1>
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-4">Who are you?</p>
            <div className="space-y-2">
              {split.people.map((person) => (
                <button
                  key={person}
                  onClick={() => setSelectedPerson(person)}
                  className="block w-full py-2 text-base text-center hover:text-zinc-600 transition-colors"
                >
                  {person}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  // Person's receipt
  const breakdown = calcBreakdown(split, selectedPerson);

  return (
    <Shell>
      <div className="flex-1 p-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold">{split.title}</h1>
            <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1 mb-4">
              {selectedPerson}&apos;s receipt
            </p>
          </div>

          {breakdown.items.length === 0 ? (
            <p className="text-center text-zinc-500 py-8">No items assigned to you.</p>
          ) : (
            <>
              <div className="mb-2">
                {breakdown.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-base">
                    <span>
                      1 {item.name}
                      {item.split !== item.price && <span className="text-zinc-400"> (split)</span>}
                    </span>
                    <span>{fmt(item.split)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-2 pt-2space-y-0.5">
                <div className="flex justify-between text-base">
                  <span>Subtotal</span>
                  <span>{fmt(breakdown.itemsTotal)}</span>
                </div>
                {breakdown.tax > 0 && (
                  <div className="flex justify-between text-base text-zinc-500">
                    <span>Tax</span>
                    <span>{fmt(breakdown.tax)}</span>
                  </div>
                )}
                {breakdown.tip > 0 && (
                  <div className="flex justify-between text-base text-zinc-500">
                    <span>Tip</span>
                    <span>{fmt(breakdown.tip)}</span>
                  </div>
                )}
                <div className="mt-1 pt-1flex justify-between text-lg font-bold">
                  <span>YOU OWE</span>
                  <span>{fmt(breakdown.total)}</span>
                </div>
              </div>
            </>
          )}

          {split.venmo && breakdown.total > 0 && (
            <a
              href={venmoPayUrl(split.venmo, breakdown.total, `${split.title} — Jig split`)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-6 py-3 bg-[#008CFF] text-white font-bold text-base text-center uppercase tracking-widest hover:bg-[#0074D4] transition-colors"
            >
              Pay @{split.venmo} on Venmo
            </a>
          )}

          <div className="flex flex-col items-center gap-2 mt-6 text-base">
            <button
              onClick={() => setSelectedPerson(null)}
              className="text-zinc-500 hover:text-zinc-700 underline"
            >
              Not {selectedPerson}? Switch
            </button>
            <button
              onClick={() => setShowAllOrders(true)}
              className="text-zinc-600 hover:text-zinc-800 underline"
            >
              See all orders
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
