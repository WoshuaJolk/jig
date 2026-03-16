import { generateObject } from "ai";
import { z } from "zod";
import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

async function uploadImage(image: string): Promise<string> {
  const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
  const mimeMatch = image.match(/^data:(image\/\w+);base64,/);
  const ext = mimeMatch ? mimeMatch[1].split("/")[1] : "jpg";

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const buffer = Buffer.from(base64Data, "base64");
    const blob = await put(`receipts/${Date.now()}.${ext}`, buffer, {
      access: "public",
      contentType: mimeMatch ? mimeMatch[1] : "image/jpeg",
    });
    return blob.url;
  }

  // Fallback: use data URL directly when Blob storage isn't configured
  return image;
}

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();

    const [receiptUrl, { object }] = await Promise.all([
      uploadImage(image),
      generateObject({
        model: "anthropic/claude-sonnet-4.6",
        messages: [
          {
            role: "user",
            content: [
              { type: "image", image },
              {
                type: "text",
                text: "Parse this receipt. Extract the restaurant/store name as the title, and every line item with its name and price. Only include individual items, not subtotals, tax, tip, or totals. If an item has a quantity greater than 1, list it as separate entries (e.g. '2x Coffee $5.00' becomes two entries of 'Coffee' at $2.50 each). Every entry should be quantity 1. If tax and tip amounts are shown on the receipt, extract those too as dollar amounts.",
              },
            ],
          },
        ],
        schema: z.object({
          title: z.string().describe("Restaurant or store name"),
          items: z.array(
            z.object({
              name: z.string().describe("Item name"),
              price: z.number().describe("Item price in dollars"),
            })
          ),
          tax: z.number().nullable().describe("Tax amount in dollars if shown on receipt, null otherwise"),
          tip: z.number().nullable().describe("Tip amount in dollars if shown on receipt, null otherwise"),
        }),
      }),
    ]);

    return NextResponse.json({ ...object, receiptUrl });
  } catch (error) {
    console.error("Receipt parsing error:", error);
    return NextResponse.json(
      { error: "Failed to parse receipt" },
      { status: 500 }
    );
  }
}
