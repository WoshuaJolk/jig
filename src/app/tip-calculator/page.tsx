import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Tip Calculator for Groups — Calculate Tip Per Person",
  description:
    "Calculate tip per person when splitting a bill with a group. Jig distributes tip proportionally based on what each person ordered. Free, no sign-up required.",
  alternates: { canonical: absoluteUrl("/tip-calculator") },
  openGraph: {
    title: "Tip Calculator for Groups — Calculate Tip Per Person",
    description:
      "Calculate tip per person when splitting a bill with a group. Jig distributes tip proportionally based on what each person ordered.",
    url: absoluteUrl("/tip-calculator"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function TipCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free tip calculator for groups that distributes tip proportionally based on each person's order when splitting a bill.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Tip Calculator", href: "/tip-calculator" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Tip Calculator for Groups
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Figuring out tip per person is tricky when everyone ordered
            different things. Jig calculates it fairly so nobody overpays or
            underpays.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Tip Problem at Group Dinners
          </h2>
          <p>
            Calculating tip is straightforward when you are dining alone. Take
            the subtotal, multiply by your tip percentage, and you are done. But
            add a few friends to the table and things get complicated fast.
          </p>
          <p>
            The most common approach is to divide the total tip evenly among
            everyone. But is that really fair? If you ordered a $12 pasta and
            your friend had a $45 surf-and-turf, should you each pay the same
            amount of tip? Most people would say no, but doing the proportional
            math at the table is a headache nobody wants.
          </p>
          <p>
            That is where Jig comes in. When you split a receipt with Jig, tip
            is automatically distributed proportionally based on what each
            person ordered. No manual calculation needed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Calculates Tip Per Person
          </h2>
          <p>
            Jig uses proportional tip distribution, which is the fairest method
            for groups. Here is how it works:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Calculate each person&apos;s subtotal.</strong> Jig adds
              up the items assigned to each person. Shared items are divided
              among the people who shared them.
            </li>
            <li>
              <strong>Determine each person&apos;s share of the bill.</strong>{" "}
              Each person&apos;s subtotal is divided by the group subtotal to
              get their percentage of the total bill.
            </li>
            <li>
              <strong>Apply that percentage to the tip.</strong> Each person
              pays that same percentage of the total tip amount. The person who
              spent the most pays the most tip, proportionally.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Math Behind Fair Tip Splitting
          </h2>
          <p>
            Here is a concrete example to show how proportional tip distribution
            works:
          </p>
          <div className="rounded-lg border border-[#e5e3de] bg-white p-6 space-y-4">
            <p>
              <strong>Scenario:</strong> Three friends eat out. The subtotal is
              $100 and they want to leave a 20% tip ($20).
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Alex</strong> ordered $50 worth of food (50% of
                subtotal)
              </li>
              <li>
                <strong>Blake</strong> ordered $30 worth of food (30% of
                subtotal)
              </li>
              <li>
                <strong>Casey</strong> ordered $20 worth of food (20% of
                subtotal)
              </li>
            </ul>
            <p>
              <strong>Proportional tip breakdown:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Alex pays 50% of $20 = <strong>$10.00 tip</strong></li>
              <li>Blake pays 30% of $20 = <strong>$6.00 tip</strong></li>
              <li>Casey pays 20% of $20 = <strong>$4.00 tip</strong></li>
            </ul>
            <p className="text-sm text-[#555]">
              Compare this to an even split where each person would pay $6.67
              in tip. Casey would overpay, and Alex would underpay. The
              proportional method is fairer for everyone.
            </p>
          </div>
          <p>
            Jig applies this same logic to tax as well, so both tax and tip are
            distributed fairly based on what each person actually ordered.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Tip Percentages
          </h2>
          <p>
            Not sure what percentage to tip? Here are the standard tipping
            guidelines for restaurants in the United States:
          </p>
          <div className="rounded-lg border border-[#e5e3de] bg-white p-6">
            <ul className="space-y-3">
              <li>
                <strong>15%</strong> — Adequate service. This was once the
                standard but is now considered the lower end for sit-down
                restaurants.
              </li>
              <li>
                <strong>18%</strong> — Good service. A solid, standard tip that
                many restaurants suggest as a starting point.
              </li>
              <li>
                <strong>20%</strong> — Great service. The most common tip
                percentage for a good dining experience.
              </li>
              <li>
                <strong>25%+</strong> — Exceptional service. For when your
                server went above and beyond, or for large parties where the
                staff worked especially hard.
              </li>
            </ul>
          </div>
          <p>
            When splitting with Jig, you can enter any tip amount — either as a
            dollar value already on the receipt or as a custom amount. Jig
            handles the per-person distribution from there.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Proportional Tip Matters
          </h2>
          <p>
            Splitting tip evenly might seem simpler, but it creates an unfair
            dynamic, especially in groups with very different spending. The
            person who ordered the least effectively subsidizes the tip for the
            person who ordered the most. Over time, this can lead to
            resentment or people avoiding group dinners altogether.
          </p>
          <p>
            Proportional tip distribution solves this by linking each
            person&apos;s tip to their own spending. It is the same principle
            that restaurants use when they add an automatic gratuity to large
            parties — the tip is based on the total check, and each diner
            contributes proportionally.
          </p>
          <p>
            Jig automates this so you never have to think about the math. Just{" "}
            <Link href="/split-receipt" className="underline">
              split the receipt
            </Link>{" "}
            and the tip calculation is handled for you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            More Than Just a Tip Calculator
          </h2>
          <p>
            Jig is not just a tip calculator — it is a complete{" "}
            <Link href="/bill-splitter" className="underline">
              bill splitting tool
            </Link>{" "}
            that handles every part of dividing a receipt. AI reads the receipt,
            you assign items to people, and Jig calculates everything including
            tax, tip, and per-person totals. Then you share the split with your
            group and settle up through{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>
            .
          </p>
          <p>
            Whether you are splitting a{" "}
            <Link href="/use-cases/restaurants" className="underline">
              restaurant bill
            </Link>
            , a{" "}
            <Link href="/use-cases/groceries" className="underline">
              grocery receipt
            </Link>
            , or{" "}
            <Link href="/use-cases/travel" className="underline">
              travel expenses
            </Link>
            , Jig makes the process fast and fair.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split Your Bill with Fair Tip Included
          </h2>
          <p className="mt-2 text-[#555]">
            Upload a receipt and let Jig handle the tip math. Free, no account
            needed.
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
