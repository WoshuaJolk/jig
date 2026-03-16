"use client";

import { useState } from "react";
import { fmt } from "@/lib/utils";

function AmountInput({
  subtotal,
  percent,
  setPercent,
}: {
  subtotal: number;
  percent: number;
  setPercent: (v: string) => void;
}) {
  const derived = subtotal * (percent / 100);
  const [editing, setEditing] = useState(false);
  const [raw, setRaw] = useState("");

  return (
    <input
      inputMode="decimal"
      value={editing ? "$" + raw : "$" + (Math.round(derived * 100) / 100)}
      onFocus={() => {
        setEditing(true);
        setRaw(String(Math.round(derived * 100) / 100));
      }}
      onChange={(e) => {
        const v = e.target.value.replace(/^\$/, "");
        setRaw(v);
        const amount = v === "" ? 0 : parseFloat(v) || 0;
        const pct = subtotal > 0 ? (amount / subtotal) * 100 : 0;
        setPercent(pct ? String(Math.round(pct * 100) / 100) : "");
      }}
      onBlur={() => setEditing(false)}
      className="w-20 bg-transparent text-right text-base outline-none border-b border-dashed border-zinc-400"
    />
  );
}

export function TotalsSection({
  subtotal,
  taxPercent,
  setTaxPercent,
  tipPercent,
  setTipPercent,
  taxVal,
  tipVal,
  editable = true,
}: {
  subtotal: number;
  taxPercent: string;
  setTaxPercent: (v: string) => void;
  tipPercent: string;
  setTipPercent: (v: string) => void;
  taxVal: number;
  tipVal: number;
  editable?: boolean;
}) {
  const taxAmount = subtotal * (taxVal / 100);
  const tipAmount = subtotal * (tipVal / 100);

  return (
    <div className="my-4">
      <div className="mt-2 pt-2 space-y-0.5">
        <div className="flex justify-between text-base">
          <span>Subtotal</span>
          <span>{fmt(subtotal)}</span>
        </div>
        <div className="flex justify-between text-base items-center">
          <span className="flex items-center gap-1">
            Tax
            {editable ? (
              <>
                <input
                  inputMode="decimal"
                  value={taxPercent}
                  onChange={(e) => setTaxPercent(e.target.value)}
                  placeholder="0"
                  className="w-10 bg-transparent text-right text-base outline-none border-b border-dashed border-zinc-400"
                />
                %
              </>
            ) : (
              <span>{taxVal}%</span>
            )}
          </span>
          {editable ? (
            <AmountInput subtotal={subtotal} percent={taxVal} setPercent={setTaxPercent} />
          ) : (
            <span>{fmt(taxAmount)}</span>
          )}
        </div>
        <div className="flex justify-between text-base items-center">
          <span className="flex items-center gap-1">
            Tip
            {editable ? (
              <>
                <input
                  inputMode="decimal"
                  value={tipPercent}
                  onChange={(e) => setTipPercent(e.target.value)}
                  placeholder="0"
                  className="w-10 bg-transparent text-right text-base outline-none border-b border-dashed border-zinc-400"
                />
                %
              </>
            ) : (
              <span>{tipVal}%</span>
            )}
          </span>
          {editable ? (
            <AmountInput subtotal={subtotal} percent={tipVal} setPercent={setTipPercent} />
          ) : (
            <span>{fmt(tipAmount)}</span>
          )}
        </div>
        <div className="mt-1 pt-1 w-full flex justify-between text-base font-bold">
          <span>TOTAL</span>
          <span>{fmt(subtotal * (1 + taxVal / 100 + tipVal / 100))}</span>
        </div>
      </div>
    </div>
  );
}
