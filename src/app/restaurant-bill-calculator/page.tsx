import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Restaurant Bill Calculator — Split Restaurant Bills Fairly",
  description:
    "Split restaurant bills fairly with Jig's free calculator. AI scans your receipt, assigns items to each person, and calculates tax and tip per person automatically.",
  alternates: { canonical: absoluteUrl("/restaurant-bill-calculator") },
  openGraph: {
    title: "Restaurant Bill Calculator — Split Restaurant Bills Fairly",
    description:
      "Split restaurant bills fairly with Jig's free calculator. AI scans your receipt, assigns items to each person, and calculates tax and tip per person automatically.",
    url: absoluteUrl("/restaurant-bill-calculator"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RestaurantBillCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free restaurant bill calculator that uses AI to scan receipts and split bills fairly among diners, with proportional tax and tip distribution.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        {
          label: "Restaurant Bill Calculator",
          href: "/restaurant-bill-calculator",
        },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Restaurant Bill Calculator
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Splitting a restaurant bill should not ruin the end of a great meal.
            Jig calculates each diner&apos;s fair share in seconds, including
            tax and tip.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The End-of-Meal Problem
          </h2>
          <p>
            Restaurant bills are uniquely tricky to split. Unlike a simple
            purchase, a restaurant check includes line items at different
            prices, shared appetizers and sides, drinks that only some people
            ordered, tax calculated on the subtotal, and a tip on top of
            everything. Splitting it &ldquo;evenly&rdquo; punishes the person
            who ordered the cheapest dish. Splitting it &ldquo;by item&rdquo;
            manually takes forever.
          </p>
          <p>
            Jig is a free restaurant bill calculator designed specifically for
            this problem. You snap a photo of the check, the AI reads every
            item, you assign items to diners, and Jig does the rest. Tax and
            tip are distributed proportionally, shared items are split among
            the right people, and everyone gets a link showing exactly what
            they owe.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split a Restaurant Bill with Jig
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Photograph the check.</strong> When the bill arrives, snap
              a photo with your phone. Jig works with receipts from any
              restaurant — fast food to fine dining.
            </li>
            <li>
              <strong>Review the AI scan.</strong> Jig&apos;s AI extracts every
              item name, price, tax, and tip from the receipt. Review the
              results and make any corrections if needed.
            </li>
            <li>
              <strong>Add your dining group.</strong> Enter each person&apos;s
              name. Whether it is a date night for two or a birthday dinner for
              fifteen, Jig handles any group size.
            </li>
            <li>
              <strong>Assign items.</strong> Tap each menu item and select who
              ordered it. If three of you shared the nachos, assign that item
              to all three and Jig splits it evenly among you.
            </li>
            <li>
              <strong>Share the results.</strong> Jig generates a link showing
              each person&apos;s total with an itemized breakdown. Share it with
              the group and everyone can pay through{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>{" "}
              with one tap.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Handling Common Restaurant Scenarios
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Shared Appetizers</h3>
              <p className="mt-1">
                Ordered a plate of wings for the table? Assign that item to
                everyone who ate them. Jig divides the cost equally among those
                people and factors it into their subtotal before calculating tax
                and tip.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Drinks vs. Non-Drinkers
              </h3>
              <p className="mt-1">
                One of the most common sources of bill-splitting friction is
                alcohol. Some people order cocktails and wine while others stick
                to water. With Jig, drinks are assigned to whoever ordered them.
                Non-drinkers do not subsidize the bar tab.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Large Parties</h3>
              <p className="mt-1">
                Large group dinners are where manual bill splitting truly falls
                apart. With ten or more people, the receipt is long, the math is
                complex, and the chance of errors multiplies. Jig handles large
                parties effortlessly — the AI reads the entire receipt
                regardless of length, and the assignment interface scales to
                any group size.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Automatic Gratuity
              </h3>
              <p className="mt-1">
                Many restaurants add automatic gratuity for large parties,
                typically 18-20%. Jig recognizes this on the receipt and
                distributes it proportionally just like any other tip. If the
                group wants to add additional tip on top, that works too.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Tax on Different Items
              </h3>
              <p className="mt-1">
                In some states, food and alcohol are taxed at different rates.
                Jig reads the total tax from the receipt and distributes it
                proportionally based on each person&apos;s share of the
                subtotal. The result is fair and accurate without anyone having
                to look up local tax rates.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Fair Tax and Tip Distribution
          </h2>
          <p>
            The hardest part of splitting a restaurant bill is not dividing the
            food — it is handling tax and tip fairly. Jig uses proportional
            distribution for both. If your food cost 40% of the subtotal, you
            pay 40% of the tax and 40% of the tip. This is mathematically the
            fairest approach and matches how restaurants themselves calculate
            auto-gratuity.
          </p>
          <p>
            Want to understand the math in more detail? Check out our{" "}
            <Link href="/tip-calculator" className="underline">
              tip calculator
            </Link>{" "}
            guide with worked examples.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Better Than Splitting Evenly
          </h2>
          <p>
            Splitting the bill evenly is the default at most group dinners
            because it is easy, not because it is fair. When one person orders a
            salad and another orders a steak with two cocktails, an even split
            means the salad person is subsidizing the steak person&apos;s meal.
          </p>
          <p>
            Jig makes item-level splitting just as easy as an even split.
            Assigning items takes about thirty seconds, and the result is a
            split where everyone pays for exactly what they ordered. No
            awkward conversations, no resentment, no overpaying.
          </p>
          <p>
            Read more about restaurant bill splitting strategies in our{" "}
            <Link href="/use-cases/restaurants" className="underline">
              restaurant use case guide
            </Link>{" "}
            or our blog post on{" "}
            <Link
              href="/blog/how-to-split-a-restaurant-bill"
              className="underline"
            >
              how to split a restaurant bill
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split Your Restaurant Bill Now
          </h2>
          <p className="mt-2 text-[#555]">
            Snap a photo of the check. Jig handles the rest. Free, no account
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
