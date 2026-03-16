"use client";

import { fmt } from "@/lib/utils";

export function PerPersonSummary({
  personTotals,
}: {
  personTotals: { name: string; total: number }[];
}) {
  if (personTotals.length === 0) return null;
  return (
    <div className="my-4">
      <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Per Person</p>
      {personTotals.map((pt) => (
        <div key={pt.name} className="flex justify-between text-base">
          <span>{pt.name}</span>
          <span>{fmt(pt.total)}</span>
        </div>
      ))}
    </div>
  );
}
