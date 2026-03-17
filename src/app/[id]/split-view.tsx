"use client";

import { ActionButton } from "@/components/ActionButton";
import { Avatar } from "@/components/Avatar";
import { ItemsList } from "@/components/ItemsList";
import { FooterLink, PageFooter } from "@/components/PageFooter";
import { PageHeader } from "@/components/PageHeader";
import { PeopleList } from "@/components/PeopleList";
import { Shell } from "@/components/shell";
import { TotalsSection } from "@/components/TotalsSection";
import { ReceiptItem } from "@/lib/types";
import { fmt, generateId, num } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import posthog from "posthog-js";

interface SplitData {
  id: string;
  title: string;
  items: ReceiptItem[];
  people: string[];
  taxPercent: number;
  tipPercent: number;
  subtotal: number;
  venmo: string;
  receiptUrl: string;
}

interface PersonBreakdown {
  items: { name: string; price: number; split: number; splitCount: number }[];
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
      splitCount: i.assignedTo.length,
    }));
  const itemsTotal = items.reduce((s, i) => s + i.split, 0);
  const proportion = split.subtotal > 0 ? itemsTotal / split.subtotal : 0;
  const tax = split.subtotal * (split.taxPercent / 100) * proportion;
  const tip = split.subtotal * (split.tipPercent / 100) * proportion;
  return { items, itemsTotal, tax, tip, total: itemsTotal + tax + tip };
}

function venmoPayUrl(username: string, amount: number, note: string): string {
  return `https://venmo.com/${encodeURIComponent(username)}?txn=pay&amount=${amount.toFixed(2)}&note=${encodeURIComponent(note)}`;
}

function ReceiptViewer({ src, onClose }: { src: string; onClose: () => void }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const gestureRef = useRef({
    startScale: 1,
    startDist: 0,
    startX: 0,
    startY: 0,
    startTx: 0,
    startTy: 0,
  });

  const getDistance = (t1: React.Touch, t2: React.Touch) =>
    Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);

  const getMidpoint = (t1: React.Touch, t2: React.Touch) => ({
    x: (t1.clientX + t2.clientX) / 2,
    y: (t1.clientY + t2.clientY) / 2,
  });

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = getDistance(e.touches[0], e.touches[1]);
      const mid = getMidpoint(e.touches[0], e.touches[1]);
      gestureRef.current = {
        startScale: scale,
        startDist: dist,
        startX: mid.x,
        startY: mid.y,
        startTx: translate.x,
        startTy: translate.y,
      };
    } else if (e.touches.length === 1 && scale > 1) {
      gestureRef.current = {
        ...gestureRef.current,
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        startTx: translate.x,
        startTy: translate.y,
      };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = getDistance(e.touches[0], e.touches[1]);
      const newScale = Math.min(
        Math.max(
          gestureRef.current.startScale * (dist / gestureRef.current.startDist),
          1,
        ),
        5,
      );
      const mid = getMidpoint(e.touches[0], e.touches[1]);
      setScale(newScale);
      setTranslate({
        x: gestureRef.current.startTx + (mid.x - gestureRef.current.startX),
        y: gestureRef.current.startTy + (mid.y - gestureRef.current.startY),
      });
    } else if (e.touches.length === 1 && scale > 1) {
      setTranslate({
        x:
          gestureRef.current.startTx +
          (e.touches[0].clientX - gestureRef.current.startX),
        y:
          gestureRef.current.startTy +
          (e.touches[0].clientY - gestureRef.current.startY),
      });
    }
  };

  const onTouchEnd = () => {
    if (scale <= 1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex flex-col"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-white text-sm uppercase tracking-widest"
        >
          Close
        </button>
      </div>
      <div className="flex-1 overflow-hidden flex items-center justify-center">
        <img
          ref={imgRef}
          src={src}
          alt="Receipt"
          className="max-w-full max-h-full object-contain"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            touchAction: "none",
          }}
        />
      </div>
    </div>
  );
}

export default function SplitView() {
  const params = useParams();
  const id = params.id as string;

  const [split, setSplit] = useState<SplitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [error, setError] = useState("");

  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editItems, setEditItems] = useState<ReceiptItem[]>([]);
  const [editPeople, setEditPeople] = useState<string[]>([]);
  const [editTax, setEditTax] = useState("");
  const [editTip, setEditTip] = useState("");
  const [editVenmo, setEditVenmo] = useState("");
  const [activePerson, setActivePerson] = useState<string | null>(null);
  const [deepEdit, setDeepEdit] = useState(false);
  const [saving, setSaving] = useState(false);

  const editTaxVal = num(editTax);
  const editTipVal = num(editTip);

  const fetchSplit = useCallback(async () => {
    try {
      const res = await fetch(`/api/splits/${id}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      setSplit(data);
      posthog.capture("split_viewed", {
        people_count: data.people.length,
        item_count: data.items.length,
        has_venmo: !!data.venmo,
      });
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
    setEditItems(
      split.items.map((i) => ({ ...i, assignedTo: [...i.assignedTo] })),
    );
    setEditPeople([...split.people]);
    setEditTax(split.taxPercent ? String(split.taxPercent) : "");
    setEditTip(split.tipPercent ? String(split.tipPercent) : "");
    setEditVenmo(split.venmo || "");
    setActivePerson(null);
    setDeepEdit(false);
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
      posthog.capture("split_edited", {
        people_count: editPeople.length,
        item_count: editItems.length,
      });
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
      }),
    );
  };

  const updateItem = (
    itemId: string,
    field: "name" | "price",
    value: string | number,
  ) => {
    setEditItems(
      editItems.map((item) =>
        item.id === itemId ? { ...item, [field]: value } : item,
      ),
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
    let n = editPeople.length + 1;
    let name = `Friend ${n}`;
    while (editPeople.includes(name)) {
      n++;
      name = `Friend ${n}`;
    }
    setEditPeople([...editPeople, name]);
  };
  const removePerson = (name: string) => {
    setEditPeople(editPeople.filter((p) => p !== name));
    setEditItems(
      editItems.map((item) => ({
        ...item,
        assignedTo: item.assignedTo.filter((p) => p !== name),
      })),
    );
    if (activePerson === name) setActivePerson(null);
  };
  const renamePerson = (oldName: string, newName: string) => {
    setEditPeople(editPeople.map((p) => (p === oldName ? newName : p)));
    setEditItems(
      editItems.map((item) => ({
        ...item,
        assignedTo: item.assignedTo.map((p) => (p === oldName ? newName : p)),
      })),
    );
    if (activePerson === oldName) setActivePerson(newName);
  };
  const cancelEdits = () => {
    setEditing(false);
    setDeepEdit(false);
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
            <p className="text-xl font-bold mb-2">
              {error || "Split not found"}
            </p>
            <a href="/" className="text-base text-zinc-600 underline">
              Create a new split
            </a>
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
            <PageHeader
              title={editTitle}
              description={editVenmo ? `@${editVenmo}` : undefined}
              onBack={() => {
                if (deepEdit) {
                  setDeepEdit(false);
                } else {
                  setEditing(false);
                }
              }}
              onTitleChange={deepEdit ? setEditTitle : undefined}
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
              venmo={deepEdit ? editVenmo : undefined}
              onVenmoChange={deepEdit ? setEditVenmo : undefined}
            />
            <PeopleList
              people={editPeople}
              activePerson={activePerson}
              setActivePerson={setActivePerson}
              removePerson={removePerson}
              addPerson={addPerson}
              deepEdit={deepEdit}
              onRenamePerson={renamePerson}
            />
            <ItemsList
              items={editItems}
              people={editPeople}
              activePerson={activePerson}
              setActivePerson={setActivePerson}
              toggleItemForActivePerson={toggleItemForActivePerson}
              updateItem={updateItem}
              removeItem={removeItem}
              addItem={addItem}
              deepEdit={deepEdit}
            />
            <TotalsSection
              subtotal={editSubtotal}
              taxPercent={editTax}
              setTaxPercent={setEditTax}
              tipPercent={editTip}
              setTipPercent={setEditTip}
              taxVal={editTaxVal}
              tipVal={editTipVal}
              editable={deepEdit}
            />
            {error && (
              <p className="text-red-600 text-base mb-4 text-center">{error}</p>
            )}
            <ActionButton
              onClick={saveEdits}
              disabled={saving}
              className="mt-4"
            >
              {saving ? "Saving..." : "Save Changes"}
            </ActionButton>
            <ActionButton
              onClick={cancelEdits}
              variant="secondary"
              className="mt-2"
            >
              Cancel Changes
            </ActionButton>
          </div>
        </div>
      </Shell>
    );
  }

  // All orders
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
            <PageHeader
              title={split.title}
              onBack={() => setShowAllOrders(false)}
            />
            {allTotals.map(({ person, items, itemsTotal, tax, tip, total }) => (
              <div key={person} className="mb-4">
                <p className="text-base font-bold uppercase pb-0.5 mb-1">
                  {person}
                </p>
                {items.map((item, i) => (
                  <div key={i} className="flex justify-between text-base">
                    <span>
                      1 {item.name}
                      {item.split !== item.price && (
                        <span className="text-zinc-400"> (1/{item.splitCount})</span>
                      )}
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
            <div className="mt-3 pt-1 w-full flex justify-between text-base font-bold">
              <span>GRAND TOTAL</span>
              <span>{fmt(grandTotal)}</span>
            </div>
            <ActionButton onClick={startEditing} className="mt-6">
              Adjust Split
            </ActionButton>
          </div>
        </div>
      </Shell>
    );
  }

  // Who are you?
  if (!selectedPerson) {
    return (
      <Shell>
        <div className="flex-1 p-4">
          <div className="w-full max-w-sm mx-auto">
            <PageHeader title={split.title} description="Who are you?" />
            <div className="space-y-2">
              {split.people.map((person, i) => (
                <button
                  key={person}
                  onClick={() => setSelectedPerson(person)}
                  className="flex items-center gap-2 w-full py-2 text-base text-left hover:text-zinc-600 transition-colors"
                >
                  <Avatar name={person} index={i} />
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
          <PageHeader
            title={split.title}
            description={`${selectedPerson}'s receipt`}
            actionLabel={split.receiptUrl ? "View Image" : undefined}
            onAction={split.receiptUrl ? () => setShowReceipt(true) : undefined}
          />
          {breakdown.items.length === 0 ? (
            <p className="text-center text-zinc-500 py-8">
              No items assigned to you.
            </p>
          ) : (
            <>
              <div className="mb-2">
                {breakdown.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-base">
                    <span>
                      1 {item.name}
                      {item.split !== item.price && (
                        <span className="text-zinc-400"> (1/{item.splitCount})</span>
                      )}
                    </span>
                    <span>{fmt(item.split)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-2 space-y-0.5">
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
                <div className="mt-1 pt-1 w-full flex justify-between text-lg font-bold">
                  <span>YOU OWE</span>
                  <span>{fmt(breakdown.total)}</span>
                </div>
              </div>
            </>
          )}
          {split.venmo && breakdown.total > 0 && (
            <a
              href={venmoPayUrl(
                split.venmo,
                breakdown.total,
                `${split.title} - Jig split`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => posthog.capture("venmo_clicked", { amount: breakdown.total })}
              className="block pt-4 pb-3 w-full font-bold text-base text-center uppercase tracking-widest transition-colors bg-[#008CFF] text-white hover:bg-[#0074D4] mt-6"
            >
              Venmo @{split.venmo}
            </a>
          )}
          <PageFooter>
            <FooterLink onClick={() => setSelectedPerson(null)}>
              Not {selectedPerson}? Switch
            </FooterLink>
            <FooterLink
              onClick={() => {
                startEditing();
                setActivePerson(selectedPerson);
              }}
            >
              Adjust split
            </FooterLink>
          </PageFooter>
          {showReceipt && split.receiptUrl && (
            <ReceiptViewer
              src={split.receiptUrl}
              onClose={() => setShowReceipt(false)}
            />
          )}
        </div>
      </div>
    </Shell>
  );
}
