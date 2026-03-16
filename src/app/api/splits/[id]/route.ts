import { NextRequest, NextResponse } from "next/server";
import { getSplit, saveSplit } from "@/lib/store";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const split = getSplit(id);

  if (!split) {
    return NextResponse.json({ error: "Split not found" }, { status: 404 });
  }

  return NextResponse.json(split);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const split = getSplit(id);

  if (!split) {
    return NextResponse.json({ error: "Split not found" }, { status: 404 });
  }

  const body = await req.json();

  const updated = {
    ...split,
    title: body.title ?? split.title,
    items: body.items ?? split.items,
    people: body.people ?? split.people,
    taxPercent: body.taxPercent ?? split.taxPercent,
    tipPercent: body.tipPercent ?? split.tipPercent,
    subtotal: body.subtotal ?? split.subtotal,
    venmo: body.venmo ?? split.venmo,
  };

  saveSplit(updated);

  return NextResponse.json({ ok: true });
}
