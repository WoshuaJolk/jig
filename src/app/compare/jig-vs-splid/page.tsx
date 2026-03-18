import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Splid: Which Expense Splitter Should You Use?",
  description:
    "Compare Jig and Splid for splitting expenses. Jig offers AI receipt scanning on the web. Splid is a travel-focused expense tracker with offline support and 150+ currencies.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-splid") },
  openGraph: {
    title: "Jig vs Splid: Which Expense Splitter Should You Use?",
    description:
      "Compare Jig and Splid for splitting expenses. Jig offers AI receipt scanning on the web. Splid is a travel-focused expense tracker with offline support.",
    url: absoluteUrl("/compare/jig-vs-splid"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsSplitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jig vs Splid: Which Expense Splitter Should You Use?",
    description:
      "An honest comparison of Jig and Splid for splitting expenses and sharing bills.",
    url: absoluteUrl("/compare/jig-vs-splid"),
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
        { label: "Jig vs Splid", href: "/compare/jig-vs-splid" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs Splid
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Splid is a popular expense splitting app built for travelers and
            groups, with offline support and over 150 currencies. Jig is a
            web-based receipt splitter that uses AI to parse receipts and
            calculate fair, item-level splits. Here is how they compare.
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
                  <th className="px-4 py-3 text-left font-semibold">Splid</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Primary use case</td>
                  <td className="px-4 py-3">One-time receipt splits</td>
                  <td className="px-4 py-3">Travel and group expenses</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">AI receipt scanning</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No (manual entry)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level assignment</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No (splits by total)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Proportional tax/tip</td>
                  <td className="px-4 py-3">Yes, automatic</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Offline support</td>
                  <td className="px-4 py-3">No (requires internet)</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Currency support</td>
                  <td className="px-4 py-3">USD focused</td>
                  <td className="px-4 py-3">150+ currencies</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Platform</td>
                  <td className="px-4 py-3">Web (any browser)</td>
                  <td className="px-4 py-3">iOS, Android</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free (with premium option)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Shareable split link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes (group sync code)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Jig Does Best</h2>
          <p>
            Jig is designed for accuracy at the receipt level. You upload a
            photo and AI reads every line item, the tax, and the tip. You
            assign items to the people who ordered them, and Jig calculates
            each person&apos;s share with{" "}
            <Link href="/tax-calculator" className="underline">
              proportional tax
            </Link>{" "}
            and{" "}
            <Link href="/tip-calculator" className="underline">
              tip
            </Link>{" "}
            distribution.
          </p>
          <p>
            This matters because splitting a total evenly is not always fair.
            If one person ordered a salad and another ordered a steak, an even
            split penalizes the lighter eater. Jig eliminates that problem by
            working at the item level.
          </p>
          <p>
            Jig runs in the browser with no download required. When the split
            is done, you share a link and everyone can see their itemized
            breakdown. It integrates with{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>{" "}
            for easy payment. No account needed, completely free.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Splid Does Best</h2>
          <p>
            Splid is built for travelers. Its standout features are offline
            support and multi-currency handling. When you are on a trip with
            limited connectivity — abroad, on a road trip, in rural areas —
            Splid lets you log expenses without an internet connection and
            syncs when you are back online.
          </p>
          <p>
            Splid supports over 150 currencies and handles conversion between
            them, which is essential for international trips where the group
            pays in different currencies throughout the journey. You create a
            group, add expenses as they happen, and Splid calculates who owes
            whom at the end.
          </p>
          <p>
            The app also supports group syncing, so multiple people can add
            expenses to the same trip simultaneously. It does not require
            accounts — group members connect via a sync code. This makes it
            easy to get everyone on board for a shared trip.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Differences</h2>
          <p>
            The core difference is what each tool is optimized for. Jig is
            optimized for splitting a single receipt accurately. Splid is
            optimized for tracking many expenses across a trip.
          </p>
          <p>
            Splid does not scan receipts or work at the item level. You enter
            a total amount and choose how to divide it — equally, by
            percentage, or by custom amounts. It does not know what
            individual items cost or who ordered what.
          </p>
          <p>
            Jig does not track expenses over time or handle multiple
            currencies. It solves one receipt completely: AI extraction,
            item assignment, proportional tax and tip, and a shareable result.
            It is a focused tool for a focused task.
          </p>
          <p>
            Splid&apos;s offline mode is a genuine advantage for travel. Jig
            requires an internet connection because the AI parsing happens
            on a server. If you are splitting a bill in a place with no
            signal, Splid can still work.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Each Tool</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use Jig</strong> when you have a receipt and want a
              precise, item-level split with AI doing the data entry. Great
              for dinners, grocery runs, and any one-time bill.
            </li>
            <li>
              <strong>Use Splid</strong> when you are on a multi-day trip
              with a group, need offline support, or are dealing with
              multiple currencies and want to settle up at the end.
            </li>
          </ul>
          <p>
            You can use both on a trip. Use Jig to figure out the accurate
            per-person totals for a specific restaurant bill, then log those
            amounts in Splid as part of your trip&apos;s expense tracking.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Splid is a strong choice for travel groups that need offline
            access and multi-currency support. Jig is the better tool when
            you need a fast, precise split of a specific receipt — no manual
            entry, no app download, and fair to the penny. They complement
            each other well for travelers who want both accurate per-receipt
            splits and trip-wide expense tracking.
          </p>
          <p>
            Explore more comparisons:{" "}
            <Link href="/compare/jig-vs-tricount" className="underline">
              Tricount
            </Link>
            ,{" "}
            <Link href="/compare/jig-vs-tab" className="underline">
              Tab
            </Link>
            , and{" "}
            <Link href="/compare/jig-vs-onesplit" className="underline">
              OneSplit
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
