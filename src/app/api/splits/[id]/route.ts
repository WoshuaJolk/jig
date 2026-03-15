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

  // Strip adminToken from public response
  const { adminToken: _, ...publicSplit } = split;
  return NextResponse.json(publicSplit);
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

  // Verify admin token
  if (body.adminToken !== split.adminToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const updated = {
    ...split,
    title: body.title ?? split.title,
    items: body.items ?? split.items,
    people: body.people ?? split.people,
    taxPercent: body.taxPercent ?? split.taxPercent,
    tipPercent: body.tipPercent ?? split.tipPercent,
    subtotal: body.subtotal ?? split.subtotal,
  };

  saveSplit(updated);

  return NextResponse.json({ ok: true });
}
