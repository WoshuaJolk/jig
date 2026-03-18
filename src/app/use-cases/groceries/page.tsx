import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Grocery Receipts — Who Bought What",
  description:
    "Split grocery receipts by item with Jig. AI scans the full receipt, you assign each item to the right person, and everyone pays for exactly what they bought. Free.",
  alternates: { canonical: absoluteUrl("/use-cases/groceries") },
  openGraph: {
    title: "Split Grocery Receipts — Who Bought What",
    description:
      "Split grocery receipts by item with Jig. AI scans the full receipt, you assign each item to the right person, and everyone pays for exactly what they bought.",
    url: absoluteUrl("/use-cases/groceries"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function GroceriesUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split a Grocery Receipt with Jig",
    description:
      "Step-by-step guide to splitting a grocery receipt among roommates or partners using Jig's AI receipt scanner.",
    step: [
      {
        "@type": "HowToStep",
        name: "Photograph the grocery receipt",
        text: "Snap a photo of the full grocery receipt after checkout.",
      },
      {
        "@type": "HowToStep",
        name: "AI extracts all items",
        text: "Jig's AI reads every item and price, even from long grocery receipts.",
      },
      {
        "@type": "HowToStep",
        name: "Add the people sharing the bill",
        text: "Enter the names of roommates, partners, or friends splitting the groceries.",
      },
      {
        "@type": "HowToStep",
        name: "Assign items",
        text: "Assign personal items to individuals and shared items like milk or eggs to everyone.",
      },
      {
        "@type": "HowToStep",
        name: "Share the split",
        text: "Send the itemized split link so everyone can see and pay their share.",
      },
    ],
    tool: {
      "@type": "SoftwareApplication",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        { label: "Use Cases", href: "/use-cases" },
        { label: "Groceries", href: "/use-cases/groceries" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Grocery Receipts
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Grocery receipts can have dozens of items — some personal, some
            shared. Jig scans the whole receipt and lets you assign every item
            so everyone pays for exactly what they bought.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Grocery Splitting Problem
          </h2>
          <p>
            Splitting a grocery receipt is different from splitting a restaurant
            bill. Restaurant checks usually have five to fifteen items. Grocery
            receipts can have thirty, fifty, or even a hundred items. And the
            mix of personal and shared items makes an even split unfair almost
            every time.
          </p>
          <p>
            Consider a typical roommate grocery run. The receipt includes your
            protein bars, your roommate&apos;s cereal, shared milk, eggs that
            everyone uses, a bag of chips for one person, and cleaning supplies
            for the apartment. Splitting the total evenly would mean you are
            paying for your roommate&apos;s cereal and they are paying for
            your protein bars. Neither of you should be doing that.
          </p>
          <p>
            The real solution is item-level assignment, and that is exactly what
            Jig provides. AI reads the entire receipt, you tap to assign each
            item, and Jig calculates the fair split including tax.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split a Grocery Receipt with Jig
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Snap the receipt at checkout.</strong> Grocery receipts
              fade fast, so photograph it while the ink is still fresh. Jig
              works with receipts from any grocery store — Trader Joe&apos;s,
              Whole Foods, Costco, Walmart, your local bodega, all of them.
            </li>
            <li>
              <strong>AI reads every item.</strong> Even long receipts with
              dozens of items are parsed in seconds. Jig extracts item names
              (or abbreviations), prices, quantities, and any applicable tax.
            </li>
            <li>
              <strong>Add the people.</strong> Enter the names of everyone
              splitting the groceries. This could be two partners, three
              roommates, or a group of friends stocking up for a trip.
            </li>
            <li>
              <strong>Assign each item.</strong> Go through the list and tap
              each item to assign it. Personal items go to one person. Shared
              staples like eggs, bread, and butter get assigned to everyone who
              uses them. Items shared by two of three roommates go to just
              those two.
            </li>
            <li>
              <strong>Send the split.</strong> Share the link and everyone can
              see their itemized breakdown. Settle up through{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>{" "}
              and you are done.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Handling Grocery Receipt Quirks
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                Abbreviated Item Names
              </h3>
              <p className="mt-1">
                Grocery receipts are notorious for cryptic item names.
                &ldquo;ORG BAN 1LB&rdquo; means organic bananas.
                &ldquo;GV WHL MLK&rdquo; is Great Value whole milk. Jig&apos;s
                AI does its best to parse these, and you can review and correct
                any items that were misread. Even with abbreviations, the prices
                and quantities are usually clear, which is what matters most for
                splitting.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Long Receipts
              </h3>
              <p className="mt-1">
                A weekly grocery run can produce a receipt with fifty or more
                line items. Jig handles receipts of any length. The AI processes
                the full image and extracts every item, so you do not need to
                split the receipt into multiple photos or leave items out.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Sale Prices and Discounts
              </h3>
              <p className="mt-1">
                Buy-one-get-one deals, loyalty discounts, and coupons all show
                up on grocery receipts. Jig reads the final price for each
                item, so discounts are automatically reflected in the split. The
                person whose item was on sale pays the discounted price.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Taxable vs. Non-Taxable Items
              </h3>
              <p className="mt-1">
                In most states, basic groceries are not taxed but prepared foods,
                alcohol, and non-food items are. Grocery receipts typically show
                the total tax at the bottom. Jig reads this total and
                distributes it proportionally based on each person&apos;s share
                of the subtotal, which provides a fair approximation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Weight-Based Items
              </h3>
              <p className="mt-1">
                Produce sold by weight shows up with a price based on the
                weighed amount. Jig reads whatever price is printed on the
                receipt, so whether the bananas were $1.47 or $2.33, the correct
                price is captured and assigned to whoever bought them.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Perfect for Roommates and Partners
          </h2>
          <p>
            Grocery splitting is most common among{" "}
            <Link href="/use-cases/roommates" className="underline">
              roommates
            </Link>{" "}
            and partners who share a kitchen. The recurring nature of grocery
            runs makes Jig especially valuable — you can split every receipt in
            under two minutes, and over time the savings from fair splits add
            up.
          </p>
          <p>
            For couples who maintain separate finances but share groceries, Jig
            provides clarity without awkwardness. Each person sees exactly what
            they are paying for, and shared household items are divided evenly.
            It turns a potentially tense conversation into a simple, transparent
            process.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Works for Any Store
          </h2>
          <p>
            Jig&apos;s AI receipt scanner works with receipts from any grocery
            store or retailer. Whether you shop at a national chain, a local
            market, a warehouse club like Costco or Sam&apos;s Club, or a
            specialty store like Trader Joe&apos;s or Whole Foods, Jig can read
            and split the receipt.
          </p>
          <p>
            It also works for non-grocery stores where you might split
            purchases with someone — Target, Walmart, drug stores, hardware
            stores, or any other retailer that produces a receipt.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Pages</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/roommates" className="underline">
                Splitting with Roommates
              </Link>{" "}
              — broader guide to roommate expense splitting
            </li>
            <li>
              <Link href="/split-receipt" className="underline">
                Split Receipt
              </Link>{" "}
              — overview of how Jig works
            </li>
            <li>
              <Link href="/bill-splitter" className="underline">
                Bill Splitter
              </Link>{" "}
              — all about bill splitting with Jig
            </li>
            <li>
              <Link href="/compare/jig-vs-splitwise" className="underline">
                Jig vs Splitwise
              </Link>{" "}
              — for ongoing expense tracking between roommates
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split Your Next Grocery Receipt
          </h2>
          <p className="mt-2 text-[#555]">
            Snap the receipt, assign items, settle up. Fair grocery splits in
            under two minutes.
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
