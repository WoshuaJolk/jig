import { anthropic } from "@ai-sdk/anthropic";
import { generateObject } from "ai";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();

    const { object } = await generateObject({
      model: anthropic("claude-sonnet-4-6-20250514"),
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
              text: "Parse this receipt. Extract the restaurant/store name as the title, and every line item with its name and price. Only include individual items, not subtotals, tax, tip, or totals. Return the data as JSON.",
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
