import { NextRequest, NextResponse } from "next/server";
import { saveSplit } from "@/lib/store";
import { Split } from "@/lib/types";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const split: Split = {
    id: randomUUID().slice(0, 8),
    title: body.title || "Untitled Split",
    items: body.items || [],
    people: body.people || [],
    taxPercent: body.taxPercent || 0,
    tipPercent: body.tipPercent || 0,
    subtotal: body.subtotal || 0,
    venmo: body.venmo || "",
    receiptUrl: body.receiptUrl || "",
    createdAt: new Date().toISOString(),
  };

  await saveSplit(split);

  return NextResponse.json({ id: split.id });
}
