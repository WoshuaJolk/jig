"use client";

import { ReceiptItem } from "@/lib/types";
import { Avatar } from "./Avatar";
import { SectionHeader } from "./SectionHeader";
import { fmt } from "@/lib/utils";

function ItemAvatars({ assignedTo, people }: { assignedTo: string[]; people: string[] }) {
  if (assignedTo.length === 0) return null;
  return (
    <span className="inline-flex flex-wrap gap-0.5 ml-1 align-middle">
      {assignedTo.map((name) => (
        <Avatar key={name} name={name} index={people.indexOf(name)} />
      ))}
    </span>
  );
}

export function ItemsList({
  items,
  people,
  activePerson,
  setActivePerson,
  toggleItemForActivePerson,
  updateItem,
  removeItem,
  addItem,
  deepEdit,
}: {
  items: ReceiptItem[];
  people: string[];
  activePerson: string | null;
  setActivePerson: (p: string | null) => void;
  toggleItemForActivePerson: (id: string) => void;
  updateItem: (id: string, field: "name" | "price", value: string | number) => void;
  removeItem: (id: string) => void;
  addItem: () => void;
  deepEdit?: boolean;
}) {
  if (deepEdit) {
    return (
      <div className="mb-2">
        <SectionHeader label="Items" />
        {items.map((item) => (
          <div key={item.id} className="flex items-center py-0.5">
            <button
              onClick={() => removeItem(item.id)}
              className="text-zinc-400 hover:text-red-500 text-sm font-bold flex-shrink-0 w-4 text-center mr-1"
            >
              &times;
            </button>
            <span className="flex-shrink-0 text-base mr-1">1</span>
            <input
              value={item.name}
              onChange={(e) => updateItem(item.id, "name", e.target.value)}
              className="flex-1 bg-transparent text-base outline-none min-w-0 border-b border-dashed border-zinc-400"
            />
            <input
              inputMode="decimal"
              value={"$" + item.price}
              onChange={(e) => {
                const raw = e.target.value.replace(/^\$/, "");
                updateItem(item.id, "price", raw === "" ? 0 : parseFloat(raw) || 0);
              }}
              className="w-20 bg-transparent text-right text-base outline-none flex-shrink-0 border-b border-dashed border-zinc-400"
            />
          </div>
        ))}
        <button
          onClick={addItem}
          className="text-xs text-zinc-400 hover:text-zinc-600 mt-2"
        >
          + Add item
        </button>
      </div>
    );
  }

  // Assignment mode
  return (
    <div className="mb-2">
      <SectionHeader label="Items" />
      {items.map((item) => {
        const isAssigned = activePerson !== null && item.assignedTo.includes(activePerson);
        return (
          <div
            key={item.id}
            className={`flex items-center py-0.5 transition-colors ${
              activePerson
                ? isAssigned
                  ? "text-zinc-900 cursor-pointer"
                  : "text-zinc-400 cursor-pointer"
                : ""
            }`}
            onClick={() => {
              if (activePerson) {
                toggleItemForActivePerson(item.id);
              }
            }}
          >
            <span className="flex-shrink-0 text-base mr-1">1</span>
            <span className="flex-1 text-base min-w-0">
              {item.name}
              <ItemAvatars assignedTo={item.assignedTo} people={people} />
            </span>
            <span className="flex-shrink-0 text-base">{fmt(item.price)}</span>
          </div>
        );
      })}
    </div>
  );
}
