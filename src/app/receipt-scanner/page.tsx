import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "AI Receipt Scanner — Scan and Split Any Receipt",
  description:
    "Scan any receipt with Jig's AI receipt scanner. Automatically extract line items, prices, tax, and tip from a photo. Then split the receipt among your group instantly.",
  alternates: { canonical: absoluteUrl("/receipt-scanner") },
  openGraph: {
    title: "AI Receipt Scanner — Scan and Split Any Receipt",
    description:
      "Scan any receipt with Jig's AI receipt scanner. Automatically extract line items, prices, tax, and tip from a photo.",
    url: absoluteUrl("/receipt-scanner"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ReceiptScannerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "AI-powered receipt scanner and bill splitter. Scan any receipt, extract items automatically, and split costs among your group.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Receipt Scanner", href: "/receipt-scanner" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            AI Receipt Scanner
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Jig uses AI to scan and read any receipt in seconds. No manual
            typing, no tedious data entry. Just photograph the receipt and let
            the technology do the work.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Beyond Basic OCR
          </h2>
          <p>
            Traditional receipt scanners rely on optical character recognition,
            or OCR, which simply converts printed text into digital characters.
            OCR works well for clean, well-printed documents, but receipts are
            rarely clean. They are printed on thin thermal paper that fades.
            They get crumpled in pockets. Ink smudges. Formatting varies wildly
            from restaurant to restaurant.
          </p>
          <p>
            Jig goes beyond basic OCR by using modern AI vision models that
            understand the structure of a receipt, not just the characters on
            it. The AI recognizes what constitutes a line item, what is a price,
            where the tax is, and how the tip is calculated. It handles messy
            formatting, unusual fonts, and partially faded text with far greater
            accuracy than traditional scanning approaches.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How the AI Receipt Scanner Works
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Capture the receipt.</strong> Use your phone camera to
              take a photo of any receipt. It works with restaurant checks,
              grocery receipts, bar tabs, takeout orders, and more. You can also
              upload an existing image or screenshot.
            </li>
            <li>
              <strong>AI processes the image.</strong> Jig&apos;s AI analyzes
              the photo and extracts structured data: each item name, its
              price, the subtotal, tax amounts, tip, and the grand total. This
              happens in seconds, not minutes.
            </li>
            <li>
              <strong>Review and adjust.</strong> The extracted data appears in
              an editable format. If the AI misread a faded character or got a
              price slightly wrong, you can quickly correct it. In practice,
              adjustments are rarely needed.
            </li>
            <li>
              <strong>Split among your group.</strong> Once the receipt is
              scanned, add people and assign items. Jig calculates each
              person&apos;s share with proportional{" "}
              <Link href="/tip-calculator" className="underline">
                tax and tip
              </Link>{" "}
              distribution.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Makes Jig&apos;s Scanner Different
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Built for Splitting</h3>
              <p className="mt-1">
                Most receipt scanning apps are designed for expense tracking or
                bookkeeping. Jig&apos;s scanner is built specifically for{" "}
                <Link href="/bill-splitter" className="underline">
                  splitting bills
                </Link>
                . The data flows directly into the splitting interface, so there
                is no exporting, copying, or pasting involved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Handles Any Receipt Format</h3>
              <p className="mt-1">
                Restaurant receipts, grocery store printouts, bar tabs, takeout
                stapled bags, handwritten checks, and digital order
                confirmations. Jig&apos;s AI has been trained to handle the
                variety of formats you encounter in real life.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Speed Over Perfection</h3>
              <p className="mt-1">
                The scanner prioritizes speed. It processes most receipts in
                under five seconds. If a character is ambiguous, the AI makes
                its best guess and presents it for your review. This approach
                gets you to the splitting step faster than any manual entry
                method.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">No App Download Required</h3>
              <p className="mt-1">
                Jig runs entirely in the browser. The AI processing happens in
                the cloud, which means you do not need to download an app or
                worry about your phone&apos;s processing power. Any device with
                a camera and a web browser works.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Receipt Scanning Use Cases
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/dinner-split-calculator" className="underline">
                Dinner splits
              </Link>{" "}
              where you want to avoid manual entry of a long itemized bill
            </li>
            <li>
              <Link href="/use-cases/groceries" className="underline">
                Grocery receipt splitting
              </Link>{" "}
              among roommates with dozens of line items
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Travel expense tracking
              </Link>{" "}
              where you accumulate receipts throughout a trip
            </li>
            <li>
              <Link href="/group-expense-calculator" className="underline">
                Group expense calculation
              </Link>{" "}
              for events, parties, or shared purchases
            </li>
            <li>
              Quick scans for any receipt where one person paid and needs to
              collect from others
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Scan a Receipt Right Now
          </h2>
          <p className="mt-2 text-[#555]">
            Free forever. No account needed. Just upload a receipt and the AI
            does the rest.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Start Scanning
          </Link>
        </section>
      </article>
    </SeoPageLayout>
  );
}
