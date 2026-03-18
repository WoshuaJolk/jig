import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Tricount: Bill Splitting Comparison",
  description:
    "Compare Jig and Tricount for splitting bills. Jig focuses on AI-powered receipt scanning for one-time splits. Tricount tracks ongoing group expenses with no login required.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-tricount") },
  openGraph: {
    title: "Jig vs Tricount: Bill Splitting Comparison",
    description:
      "Compare Jig and Tricount for splitting bills. Jig focuses on AI-powered receipt scanning for one-time splits. Tricount tracks ongoing group expenses.",
    url: absoluteUrl("/compare/jig-vs-tricount"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsTricountPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jig vs Tricount: Bill Splitting Comparison",
    description:
      "An honest comparison of Jig and Tricount for bill splitting and expense sharing.",
    url: absoluteUrl("/compare/jig-vs-tricount"),
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
        { label: "Jig vs Tricount", href: "/compare/jig-vs-tricount" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs Tricount
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Jig and Tricount both make splitting expenses easier, but they
            approach the problem from different angles. Jig is an AI-powered
            receipt splitter for one-time bills. Tricount is a group expense
            tracker built for ongoing shared costs. Here is how they compare.
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
                  <th className="px-4 py-3 text-left font-semibold">Tricount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Primary use case</td>
                  <td className="px-4 py-3">One-time receipt splits</td>
                  <td className="px-4 py-3">Ongoing group expense tracking</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">AI receipt scanning</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
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
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Platform</td>
                  <td className="px-4 py-3">Web (any browser)</td>
                  <td className="px-4 py-3">iOS, Android, Web</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free (with ads/premium)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Shareable link</td>
                  <td className="px-4 py-3">Yes (split results)</td>
                  <td className="px-4 py-3">Yes (group invite)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Group expense history</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Venmo integration</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Jig Does Best</h2>
          <p>
            Jig is built for the moment you have a receipt and need to figure
            out who owes what. You take a photo, and AI extracts every line
            item, the tax, and the tip. You assign items to people, and Jig
            calculates each person&apos;s fair share with{" "}
            <Link href="/tax-calculator" className="underline">
              proportional tax
            </Link>{" "}
            and{" "}
            <Link href="/tip-calculator" className="underline">
              tip distribution
            </Link>
            .
          </p>
          <p>
            The result is a shareable link where everyone can see exactly what
            they owe and why. There is no account to create and no app to
            install. Jig runs in the browser on any device, and it is
            completely free.
          </p>
          <p>
            Where Jig excels is accuracy. Because it works at the item level
            rather than splitting totals evenly, nobody pays for someone
            else&apos;s expensive entree. The AI handles the tedious data
            entry, so you get a fair split in under a minute.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Tricount Does Best</h2>
          <p>
            Tricount is designed for groups that share expenses over time. You
            create a group, add members, and log expenses as they happen.
            Tricount tracks who paid for what and calculates the simplest way
            to settle up at the end. It is popular for vacations, shared
            households, and group trips.
          </p>
          <p>
            One of Tricount&apos;s strengths is its low friction for group
            setup. You do not need an account — you can create a group and
            share it via a link, and anyone with the link can add expenses.
            This makes it easy to get a travel group started without forcing
            everyone to sign up for a service.
          </p>
          <p>
            Tricount supports multiple currencies, unequal splits, and
            recurring expenses. It keeps a running history of all transactions
            in the group, making it a good fit for trips or living situations
            where expenses accumulate over days or weeks.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Differences</h2>
          <p>
            The fundamental difference is scope. Jig handles a single receipt
            with precision. Tricount handles many expenses over time within a
            group. They are built for different moments in the expense-sharing
            process.
          </p>
          <p>
            Tricount does not scan receipts or assign individual items. When
            you add an expense in Tricount, you enter the total and say who it
            should be split among — either equally or with custom amounts. It
            does not know what each person actually ordered.
          </p>
          <p>
            Jig, on the other hand, does not track ongoing balances. It
            solves one receipt at a time. But it solves that receipt
            thoroughly: AI extracts every item, you assign them to people, and
            tax and tip are distributed proportionally. The result is a
            precise, item-level breakdown rather than a rough even split.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Each Tool</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use Jig</strong> when you have a receipt and want to
              split it fairly by item. Dinner out, a grocery run, a group bar
              tab — any one-time bill where people ordered different things.
            </li>
            <li>
              <strong>Use Tricount</strong> when you are tracking shared
              expenses across a trip or living situation and want to settle up
              at the end rather than after each purchase.
            </li>
          </ul>
          <p>
            The two tools work well together. You can use Jig to get accurate
            per-person totals for a specific receipt, then log those amounts
            in Tricount as part of your group&apos;s running balance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Tricount is a great tool for ongoing group expense tracking,
            especially on trips where no one wants to worry about settling up
            after every meal. Jig is the better choice when you need an
            accurate, item-level split of a specific receipt — fast, with no
            manual entry, and no app required.
          </p>
          <p>
            See how Jig compares to other tools:{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
            </Link>
            ,{" "}
            <Link href="/compare/jig-vs-splid" className="underline">
              Splid
            </Link>
            , and{" "}
            <Link href="/compare/jig-vs-venmo" className="underline">
              Venmo
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
