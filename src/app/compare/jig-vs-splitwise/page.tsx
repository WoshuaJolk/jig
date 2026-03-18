import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Splitwise: Which Bill Splitter Is Right for You?",
  description:
    "Compare Jig and Splitwise for splitting bills. Jig offers free AI receipt scanning for one-time splits. Splitwise tracks ongoing group expenses. See which fits your needs.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-splitwise") },
  openGraph: {
    title: "Jig vs Splitwise: Which Bill Splitter Is Right for You?",
    description:
      "Compare Jig and Splitwise for splitting bills. Jig offers free AI receipt scanning for one-time splits. Splitwise tracks ongoing group expenses.",
    url: absoluteUrl("/compare/jig-vs-splitwise"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsSplitwisePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jig vs Splitwise: Which Bill Splitter Is Right for You?",
    description:
      "An honest comparison of Jig and Splitwise for bill splitting and expense sharing.",
    url: absoluteUrl("/compare/jig-vs-splitwise"),
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
        { label: "Jig vs Splitwise", href: "/compare/jig-vs-splitwise" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs Splitwise
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Both Jig and Splitwise help people split expenses, but they are
            built for very different use cases. Here is an honest comparison to
            help you decide which one is right for you.
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
                  <th className="px-4 py-3 text-left font-semibold">Splitwise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Primary use case</td>
                  <td className="px-4 py-3">One-time receipt splits</td>
                  <td className="px-4 py-3">Ongoing expense tracking</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">AI receipt scanning</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No (manual entry)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level assignment</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Limited</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Proportional tax/tip</td>
                  <td className="px-4 py-3">Yes, automatic</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">App download required</td>
                  <td className="px-4 py-3">No (web app)</td>
                  <td className="px-4 py-3">Yes (iOS/Android)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free with Pro tier ($40/yr)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Group expense history</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">IOU tracking</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Shareable split link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Jig Does Best
          </h2>
          <p>
            Jig is purpose-built for the moment the check arrives. You snap a
            photo of the receipt, AI reads every line item, you assign items to
            people, and Jig calculates each person&apos;s share with
            proportional tax and{" "}
            <Link href="/tip-calculator" className="underline">
              tip
            </Link>
            . The entire process takes under a minute.
          </p>
          <p>
            There is no account to create, no app to download, and no cost.
            Jig runs in the browser on any device. When the split is done, you
            share a link with your group and everyone can see their itemized
            breakdown and settle up through{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>
            .
          </p>
          <p>
            Jig is ideal when you need a fast, accurate, one-time split and do
            not need to track ongoing balances between people.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Splitwise Does Best
          </h2>
          <p>
            Splitwise is designed for ongoing expense tracking within groups.
            If you and your roommates regularly share rent, utilities, and
            groceries, Splitwise keeps a running tally of who owes whom. It
            simplifies debts across multiple transactions so the group can
            settle up periodically rather than after every purchase.
          </p>
          <p>
            Splitwise also supports groups for trips, couples, and friend
            circles. It has a social component where you can add notes, photos,
            and categorize expenses. The Pro version adds features like receipt
            scanning (though not AI-powered item extraction like Jig),
            currency conversion, and charts.
          </p>
          <p>
            Splitwise is the better choice when you have ongoing shared expenses
            with the same group of people and want to track balances over time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Different Tools for Different Jobs
          </h2>
          <p>
            The key difference comes down to frequency and complexity:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use Jig</strong> when you have a receipt in hand and need
              to split it right now. Group dinner, grocery run,{" "}
              <Link href="/use-cases/travel" className="underline">
                travel expense
              </Link>
              , or any one-time shared bill.
            </li>
            <li>
              <strong>Use Splitwise</strong> when you share expenses regularly
              with the same people and want to track running balances over weeks
              or months.
            </li>
          </ul>
          <p>
            Some people use both. They use Jig to get the accurate per-person
            totals for a specific receipt, then log those amounts in Splitwise
            as part of an ongoing group balance. The two tools complement each
            other well.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Friction Factor
          </h2>
          <p>
            One practical consideration is how much setup each tool requires.
            Splitwise needs everyone in the group to create an account and
            download the app. That is reasonable for roommates who will use it
            for months, but it is a lot to ask for a one-time dinner split.
          </p>
          <p>
            Jig has zero setup. Open the website, upload a receipt, and you are
            splitting. Nobody else needs to download anything either — they just
            open the shared link in their browser. For ad-hoc, in-the-moment
            splits, this low friction makes a real difference.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Jig and Splitwise are not really competitors — they solve different
            problems. If you need to split a receipt right now, quickly and
            accurately, Jig is the faster and fairer option. If you need to
            track shared expenses over time with a group, Splitwise is built
            for that.
          </p>
          <p>
            Want to see how Jig compares to other tools? Check out our
            comparisons with{" "}
            <Link href="/compare/jig-vs-tab" className="underline">
              Tab
            </Link>{" "}
            and{" "}
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
