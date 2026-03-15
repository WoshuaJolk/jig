"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { ReceiptItem } from "@/lib/types";

interface SplitData {
  id: string;
  title: string;
  items: ReceiptItem[];
  people: string[];
  taxPercent: number;
  tipPercent: number;
  subtotal: number;
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

export default function SplitViewPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const adminToken = searchParams.get("admin");

  const [split, setSplit] = useState<SplitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [error, setError] = useState("");

  // Admin edit state
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editItems, setEditItems] = useState<ReceiptItem[]>([]);
  const [editPeople, setEditPeople] = useState<string[]>([]);
  const [editTax, setEditTax] = useState(0);
  const [editTip, setEditTip] = useState(0);
  const [newPerson, setNewPerson] = useState("");
  const [saving, setSaving] = useState(false);

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
    setEditItems(split.items.map((i) => ({ ...i })));
    setEditPeople([...split.people]);
    setEditTax(split.taxPercent);
    setEditTip(split.tipPercent);
    setEditing(true);
  };

  const saveEdits = async () => {
    if (!split || !adminToken) return;
    setSaving(true);
    const editSubtotal = editItems.reduce((s, i) => s + i.price, 0);
    try {
      const res = await fetch(`/api/splits/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adminToken,
          title: editTitle,
          items: editItems,
          people: editPeople,
          taxPercent: editTax,
          tipPercent: editTip,
          subtotal: editSubtotal,
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

  const toggleAssignment = (itemId: string, person: string) => {
    setEditItems(
      editItems.map((item) => {
        if (item.id !== itemId) return item;
        const assigned = item.assignedTo.includes(person)
          ? item.assignedTo.filter((p) => p !== person)
          : [...item.assignedTo, person];
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
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
      </div>
    );
  }

  if (error || !split) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            {error || "Split not found"}
          </p>
          <a href="/split" className="text-blue-600 hover:underline text-sm">
            Create a new split
          </a>
        </div>
      </div>
    );
  }

  // Admin editing mode
  if (editing && adminToken) {
    const editSubtotal = editItems.reduce((s, i) => s + i.price, 0);
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Edit Split
            </h1>
            <button
              onClick={() => setEditing(false)}
              className="text-sm text-zinc-500 hover:text-zinc-700"
            >
              Cancel
            </button>
          </div>

          {/* Title */}
          <div className="mb-6">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              Title
            </label>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-zinc-900 dark:text-zinc-100 text-lg font-semibold"
            />
          </div>

          {/* People */}
          <div className="mb-6">
            <label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
              People
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {editPeople.map((person) => (
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
              {editItems.map((item) => (
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
                  {editPeople.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {editPeople.map((person) => (
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
                value={editTax}
                onChange={(e) => setEditTax(parseFloat(e.target.value) || 0)}
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
                value={editTip}
                onChange={(e) => setEditTip(parseFloat(e.target.value) || 0)}
                className="mt-1 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100"
              />
            </div>
          </div>

          {/* Summary */}
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 mb-6">
            <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
              <span>Subtotal</span>
              <span className="font-mono">${editSubtotal.toFixed(2)}</span>
            </div>
            {editTax > 0 && (
              <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                <span>Tax ({editTax}%)</span>
                <span className="font-mono">
                  ${(editSubtotal * (editTax / 100)).toFixed(2)}
                </span>
              </div>
            )}
            {editTip > 0 && (
              <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                <span>Tip ({editTip}%)</span>
                <span className="font-mono">
                  ${(editSubtotal * (editTip / 100)).toFixed(2)}
                </span>
              </div>
            )}
            <div className="flex justify-between text-base font-semibold text-zinc-900 dark:text-zinc-100 border-t border-zinc-100 dark:border-zinc-800 pt-2 mt-2">
              <span>Total</span>
              <span className="font-mono">
                $
                {(
                  editSubtotal *
                  (1 + editTax / 100 + editTip / 100)
                ).toFixed(2)}
              </span>
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            onClick={saveEdits}
            disabled={saving}
            className="w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium text-base hover:opacity-80 disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    );
  }

  // Viewer: who are you?
  if (!selectedPerson) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-4">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
            {split.title}
          </h1>
          <p className="text-zinc-500 text-sm mb-8">Who are you?</p>
          <div className="space-y-3">
            {split.people.map((person) => (
              <button
                key={person}
                onClick={() => setSelectedPerson(person)}
                className="w-full py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100 font-medium hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
              >
                {person}
              </button>
            ))}
          </div>
          {adminToken && (
            <button
              onClick={startEditing}
              className="mt-6 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Edit this split (admin)
            </button>
          )}
        </div>
      </div>
    );
  }

  // Viewer: show breakdown
  const breakdown = calcBreakdown(split, selectedPerson);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {split.title}
          </h1>
          <p className="text-zinc-500 text-sm">
            {selectedPerson}&apos;s share
          </p>
        </div>

        {breakdown.items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-zinc-500">No items assigned to you.</p>
          </div>
        ) : (
          <>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden mb-4">
              {breakdown.items.map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between px-4 py-3 ${
                    i > 0
                      ? "border-t border-zinc-100 dark:border-zinc-800"
                      : ""
                  }`}
                >
                  <div>
                    <span className="text-sm text-zinc-900 dark:text-zinc-100">
                      {item.name}
                    </span>
                    {item.split !== item.price && (
                      <span className="text-xs text-zinc-400 ml-2">
                        (${item.price.toFixed(2)} split)
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-mono text-zinc-900 dark:text-zinc-100">
                    ${item.split.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4">
              <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                <span>Items</span>
                <span className="font-mono">
                  ${breakdown.itemsTotal.toFixed(2)}
                </span>
              </div>
              {breakdown.tax > 0 && (
                <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  <span>Tax</span>
                  <span className="font-mono">
                    ${breakdown.tax.toFixed(2)}
                  </span>
                </div>
              )}
              {breakdown.tip > 0 && (
                <div className="flex justify-between text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                  <span>Tip</span>
                  <span className="font-mono">
                    ${breakdown.tip.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold text-zinc-900 dark:text-zinc-100 border-t border-zinc-100 dark:border-zinc-800 pt-2 mt-2">
                <span>You owe</span>
                <span className="font-mono">
                  ${breakdown.total.toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setSelectedPerson(null)}
            className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          >
            Not {selectedPerson}? Switch
          </button>
          {adminToken && (
            <button
              onClick={startEditing}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
