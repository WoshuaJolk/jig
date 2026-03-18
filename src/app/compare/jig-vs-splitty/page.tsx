import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Splitty: Receipt Scanning Bill Splitters",
  description:
    "Compare Jig and Splitty for scanning and splitting receipts. Both scan receipts, but Jig uses AI parsing beyond OCR. Jig is web-based and free. Splitty is a native app.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-splitty") },
  openGraph: {
    title: "Jig vs Splitty: Receipt Scanning Bill Splitters",
    description:
      "Compare Jig and Splitty for scanning and splitting receipts. Both scan receipts, but Jig uses AI parsing beyond OCR. Jig is web-based and free.",
    url: absoluteUrl("/compare/jig-vs-splitty"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsSplittyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jig vs Splitty: Receipt Scanning Bill Splitters",
    description:
      "An honest comparison of Jig and Splitty for receipt scanning and bill splitting.",
    url: absoluteUrl("/compare/jig-vs-splitty"),
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
        { label: "Jig vs Splitty", href: "/compare/jig-vs-splitty" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs Splitty
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Splitty markets itself with the tagline &quot;the receipt knows
            who ordered what,&quot; emphasizing receipt scanning as the core
            of its bill splitting workflow. Jig takes a similar
            receipt-first approach but goes further with AI-powered parsing.
            Here is how the two tools compare.
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
                  <th className="px-4 py-3 text-left font-semibold">Splitty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Scanning technology</td>
                  <td className="px-4 py-3">AI parsing (contextual)</td>
                  <td className="px-4 py-3">Receipt scanning (OCR)</td>
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
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free with ads/premium</td>
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
                  <td className="px-4 py-3">Manual entry fallback</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Receipt Scanning: AI vs OCR
          </h2>
          <p>
            Both Jig and Splitty center their experience around scanning a
            receipt. The critical difference is the technology behind the
            scan. Splitty uses traditional receipt scanning that reads text
            from the image. Jig uses AI-powered parsing that understands
            receipt structure contextually.
          </p>
          <p>
            What does that mean in practice? Standard OCR reads characters
            and tries to match them to text. It can struggle with faded
            thermal paper, crumpled receipts, handwritten notes, or unusual
            layouts. AI parsing goes deeper — it understands that a line with
            a dollar amount next to a name is probably an item, that a line
            labeled &quot;tax&quot; is tax, and that the bottom number is
            likely the total. It can handle messy, real-world receipts more
            reliably.
          </p>
          <p>
            This matters because the whole point of scanning is to avoid
            manual entry. If the scan gets items wrong and you have to fix
            them by hand, you have lost most of the time savings. More
            accurate scanning means a genuinely faster workflow.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Jig Does Best</h2>
          <p>
            Jig combines AI scanning with a web-based platform and sharing
            features. You upload a receipt photo from any device, assign
            items to people, and Jig calculates each person&apos;s share
            with proportional{" "}
            <Link href="/tax-calculator" className="underline">
              tax
            </Link>{" "}
            and{" "}
            <Link href="/tip-calculator" className="underline">
              tip
            </Link>
            . The result is a shareable link where everyone can see their
            itemized breakdown.
          </p>
          <p>
            The shareable link changes the dynamic of bill splitting. Instead
            of one person doing the math and telling everyone what they owe,
            the link provides a transparent, verifiable breakdown. Each
            person can see exactly which items were assigned to them, how tax
            was distributed, and what their final total is. They can settle
            up through{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>{" "}
            directly from the page.
          </p>
          <p>
            Jig requires no download and no account. It works on any device
            with a browser, and it is completely free.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Splitty Does Best</h2>
          <p>
            Splitty is a focused, native receipt-splitting app. Its core
            workflow is straightforward: scan a receipt, tap items to assign
            them to people, and see the totals. The app is designed to be
            fast and intuitive for the specific task of dividing a check.
          </p>
          <p>
            Splitty&apos;s philosophy — &quot;the receipt knows who ordered
            what&quot; — aligns with the item-level approach that both tools
            share. Rather than splitting evenly, you assign specific items to
            specific people. This is fairer than an even split when people
            ordered very different amounts.
          </p>
          <p>
            As a native app, Splitty offers a familiar mobile experience for
            users who prefer apps over websites. It handles tip calculation
            and lets you adjust items after scanning if the scan was not
            perfect.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Each Tool</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use Jig</strong> when you want the most accurate
              receipt scanning (AI handles messy receipts better than OCR),
              need a shareable link for your group, want Venmo integration,
              or prefer not to download an app.
            </li>
            <li>
              <strong>Use Splitty</strong> if you prefer a dedicated native
              app for receipt splitting and do not need sharing links or
              payment integration. Splitty works well for quick splits where
              everyone is present.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Jig and Splitty share the same core idea — scan a receipt, assign
            items, split the bill. Where they diverge is in execution. Jig
            uses AI for more reliable scanning, runs in the browser with no
            download, and produces shareable links with Venmo integration.
            Splitty is a solid native app for basic receipt splitting when
            everyone is at the table.
          </p>
          <p>
            If accuracy, accessibility, and sharing matter to you, Jig is the
            stronger choice. It does what Splitty does, and then some — all
            from the browser, all for free.
          </p>
          <p>
            See more comparisons:{" "}
            <Link href="/compare/jig-vs-onesplit" className="underline">
              OneSplit
            </Link>
            ,{" "}
            <Link href="/compare/jig-vs-plates" className="underline">
              Plates
            </Link>
            , and{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
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
