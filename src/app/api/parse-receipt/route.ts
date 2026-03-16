import { generateObject } from "ai";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();

    const { object } = await generateObject({
      model: "anthropic/claude-sonnet-4.6",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              image,
            },
            {
              type: "text",
              text: "Parse this receipt. Extract the restaurant/store name as the title, and every line item with its name and price. Only include individual items, not subtotals, tax, tip, or totals. If tax and tip amounts are shown on the receipt, extract those too as dollar amounts.",
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
    });

    return NextResponse.json(object);
  } catch (error) {
    console.error("Receipt parsing error:", error);
    return NextResponse.json(
      { error: "Failed to parse receipt" },
      { status: 500 }
    );
  }
}
