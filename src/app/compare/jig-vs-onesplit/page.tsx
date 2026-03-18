import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs OneSplit: AI Receipt Splitting Compared",
  description:
    "Compare Jig and OneSplit for AI-powered receipt splitting. Both scan receipts, but Jig uses advanced AI parsing while OneSplit uses OCR. Jig is web-based and free with no download.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-onesplit") },
  openGraph: {
    title: "Jig vs OneSplit: AI Receipt Splitting Compared",
    description:
      "Compare Jig and OneSplit for AI-powered receipt splitting. Both scan receipts, but Jig uses advanced AI parsing while OneSplit uses OCR.",
    url: absoluteUrl("/compare/jig-vs-onesplit"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsOnesplitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jig vs OneSplit: AI Receipt Splitting Compared",
    description:
      "An honest comparison of Jig and OneSplit for AI-powered receipt splitting and bill sharing.",
    url: absoluteUrl("/compare/jig-vs-onesplit"),
    publisher: {
      "@type": "Organization",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        { label: "Compare", href: "/compare" },
        { label: "Jig vs OneSplit", href: "/compare/jig-vs-onesplit" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs OneSplit
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Jig and OneSplit both let you scan a receipt and split it among
            friends. The difference lies in the technology behind the
            scanning, the platform, and how you share results. Here is an
            honest look at how they compare.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Comparison</h2>
          <div className="rounded-lg border border-[#e5e3de] bg-white overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e3de]">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Jig</th>
                  <th className="px-4 py-3 text-left font-semibold">OneSplit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Scanning technology</td>
                  <td className="px-4 py-3">AI parsing (contextual)</td>
                  <td className="px-4 py-3">OCR scanning</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level assignment</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Proportional tax/tip</td>
                  <td className="px-4 py-3">Yes, automatic</td>
                  <td className="px-4 py-3">Tip splitting</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Platform</td>
                  <td className="px-4 py-3">Web (any browser)</td>
                  <td className="px-4 py-3">iOS/Android app</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">App download required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free with premium features</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Shareable split link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Venmo integration</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Bill creation</td>
                  <td className="px-4 py-3">From receipt scan</td>
                  <td className="px-4 py-3">From scan or manual</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            AI Parsing vs OCR: Why It Matters
          </h2>
          <p>
            Both Jig and OneSplit scan receipts, but the underlying technology
            is different. OneSplit uses OCR (optical character recognition),
            which reads text from an image character by character. OCR can
            struggle with crumpled receipts, faded print, unusual fonts, or
            receipts with complex layouts.
          </p>
          <p>
            Jig uses AI-powered parsing that goes beyond simple text
            recognition. The AI understands the structure of a receipt — it
            can identify item names, prices, quantities, modifiers, tax
            lines, and totals even when the formatting is inconsistent. This
            contextual understanding means fewer errors and less manual
            correction.
          </p>
          <p>
            In practice, this means Jig is more reliable with the messy,
            real-world receipts you actually encounter: thermal paper that has
            faded, handwritten additions, receipts with multiple tax lines,
            or receipts from restaurants with unusual formatting.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Jig Does Best</h2>
          <p>
            Beyond the AI advantage, Jig is web-based — it runs in any
            browser on any device with no download. You upload a receipt
            photo, assign items to people, and get a shareable link with
            everyone&apos;s itemized total including proportional{" "}
            <Link href="/tax-calculator" className="underline">
              tax
            </Link>{" "}
            and{" "}
            <Link href="/tip-calculator" className="underline">
              tip
            </Link>
            .
          </p>
          <p>
            The shareable link is a key differentiator. Instead of reading
            amounts aloud or texting screenshots, you send one link and
            everyone sees exactly what they owe and why. They can settle up
            through{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>{" "}
            directly from the split page.
          </p>
          <p>
            Jig is completely free with no account required. There are no
            premium tiers, no ads, and no feature gates.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What OneSplit Does Best</h2>
          <p>
            OneSplit offers a native app experience with receipt scanning and
            bill creation features. You can scan a receipt or create a bill
            manually, then assign items to the people in your group. The app
            focuses on making the scanning and splitting process
            straightforward within a dedicated mobile interface.
          </p>
          <p>
            OneSplit supports creating bills from scratch without a receipt,
            which can be useful when there is no physical receipt to scan —
            for example, when splitting a delivery order or a verbal
            agreement on shared costs.
          </p>
          <p>
            As a native app, OneSplit may feel more polished on mobile
            devices for users who prefer app-based workflows over web-based
            tools.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Each Tool</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use Jig</strong> when you want the most accurate receipt
              scanning (AI beats OCR), need a shareable link for the group,
              want Venmo integration, or prefer not to download an app.
            </li>
            <li>
              <strong>Use OneSplit</strong> if you prefer a native app
              experience and do not mind creating an account. OneSplit works
              for basic receipt scanning and manual bill creation.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Jig and OneSplit both scan receipts for splitting, but Jig&apos;s
            AI parsing is more robust than traditional OCR, especially with
            imperfect receipts. Add in the web-based access, shareable split
            links, Venmo integration, and zero cost, and Jig offers a more
            complete and accessible experience. OneSplit is a reasonable
            native app option, but Jig does more with less friction.
          </p>
          <p>
            Compare Jig with other tools:{" "}
            <Link href="/compare/jig-vs-splitty" className="underline">
              Splitty
            </Link>
            ,{" "}
            <Link
              href="/compare/jig-vs-easy-check-splitter"
              className="underline"
            >
              Easy Check Splitter
            </Link>
            , and{" "}
            <Link href="/compare/jig-vs-tab" className="underline">
              Tab
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Try Jig for Your Next Split
          </h2>
          <p className="mt-2 text-[#555]">
            No account, no download, no cost. Upload a receipt and split it in
            under a minute.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Start Splitting Now
          </Link>
        </section>
      </article>
    </SeoPageLayout>
  );
}
