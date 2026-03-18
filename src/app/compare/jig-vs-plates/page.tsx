import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Plates: Which Receipt Splitter Is Better?",
  description:
    "Compare Jig and Plates by Splitwise for splitting restaurant bills. Jig is a free web-based AI receipt splitter. Plates is a native dining-focused app in the Splitwise ecosystem.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-plates") },
  openGraph: {
    title: "Jig vs Plates: Which Receipt Splitter Is Better?",
    description:
      "Compare Jig and Plates by Splitwise for splitting restaurant bills. Jig is a free web-based AI receipt splitter. Plates is a native dining-focused app.",
    url: absoluteUrl("/compare/jig-vs-plates"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsPlatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jig vs Plates: Which Receipt Splitter Is Better?",
    description:
      "An honest comparison of Jig and Plates by Splitwise for restaurant bill splitting.",
    url: absoluteUrl("/compare/jig-vs-plates"),
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
        { label: "Jig vs Plates", href: "/compare/jig-vs-plates" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs Plates
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Plates, made by the team behind Splitwise, is a native app designed
            specifically for splitting restaurant bills. Jig is a free
            web-based receipt splitter powered by AI. Both help you figure out
            who owes what after a meal, but they take different approaches to
            get there.
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
                  <th className="px-4 py-3 text-left font-semibold">Plates</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Platform</td>
                  <td className="px-4 py-3">Web (any browser)</td>
                  <td className="px-4 py-3">Native app (iOS/Android)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Receipt scanning</td>
                  <td className="px-4 py-3">AI-powered parsing</td>
                  <td className="px-4 py-3">Manual entry</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level assignment</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Proportional tax/tip</td>
                  <td className="px-4 py-3">Yes, automatic</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Splitwise account</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">App download required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free (links to Splitwise)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Shareable split link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No (Splitwise integration)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Venmo integration</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Via Splitwise</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Use case focus</td>
                  <td className="px-4 py-3">Any receipt</td>
                  <td className="px-4 py-3">Restaurant dining</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Jig Does Best</h2>
          <p>
            Jig is built around AI receipt parsing. You upload a photo of any
            receipt and Jig extracts every line item, the subtotal, tax, and
            tip automatically. There is no manual entry involved. You then
            assign items to the people who ordered them, and Jig distributes{" "}
            <Link href="/tax-calculator" className="underline">
              tax
            </Link>{" "}
            and{" "}
            <Link href="/tip-calculator" className="underline">
              tip
            </Link>{" "}
            proportionally based on what each person ordered.
          </p>
          <p>
            Because Jig runs in the browser, nobody at the table needs to
            download anything. You open the site, scan the receipt, and share
            the result as a link. The whole process takes under a minute, and
            it works for any kind of receipt — not just restaurants. Grocery
            runs, bar tabs, group purchases at a store: if there is a receipt,
            Jig can split it.
          </p>
          <p>
            Jig requires no account and is completely free. There are no
            premium tiers or feature limits.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Plates Does Best</h2>
          <p>
            Plates is purpose-built for restaurant dining. It is a companion
            app from the Splitwise team, designed to make splitting a dinner
            check easy. You enter the items from the bill, assign them to
            diners, and Plates calculates each person&apos;s share including
            tax and tip.
          </p>
          <p>
            The biggest advantage of Plates is its tight integration with
            Splitwise. If your group already tracks shared expenses in
            Splitwise, Plates can push the split directly into your Splitwise
            group. This means the dinner expense automatically shows up in
            your running balance without any extra steps.
          </p>
          <p>
            For groups already embedded in the Splitwise ecosystem, Plates
            provides a smooth dining-specific workflow that feeds into their
            existing expense tracking.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Key Differences
          </h2>
          <p>
            The most significant difference is how you get item data into each
            tool. Jig uses AI to read the receipt photo and extract items
            automatically. With Plates, you type each item in manually. For a
            long receipt with many items, this manual entry adds real time and
            effort.
          </p>
          <p>
            The second major difference is accessibility. Jig runs in any
            browser with no download and no account. Plates requires
            downloading an app and signing in with a Splitwise account. If
            you are splitting a bill with people who do not use Splitwise,
            Jig removes that friction entirely.
          </p>
          <p>
            On the other hand, if everyone in your group already has Splitwise
            and you want the split to feed into your group ledger, Plates
            offers that integration out of the box.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Each Tool</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use Jig</strong> when you want to scan a receipt with AI,
              avoid manual entry, and share a split link instantly — especially
              when not everyone at the table uses Splitwise.
            </li>
            <li>
              <strong>Use Plates</strong> when your group is already on
              Splitwise and you want the restaurant split to sync directly
              into your ongoing group balance.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Plates is a solid dining-focused tool if you are already in the
            Splitwise ecosystem. But if you want the fastest path from receipt
            to split — with AI doing the data entry for you, no app download,
            and no account — Jig is the more versatile and frictionless
            choice. It works for restaurants and every other kind of receipt
            too.
          </p>
          <p>
            Want to see more comparisons? Check out how Jig stacks up against{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
            </Link>
            ,{" "}
            <Link href="/compare/jig-vs-tab" className="underline">
              Tab
            </Link>
            , and{" "}
            <Link href="/compare/jig-vs-splitty" className="underline">
              Splitty
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
