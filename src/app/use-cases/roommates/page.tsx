import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Grocery and Household Bills with Roommates",
  description:
    "Split grocery receipts and household bills with roommates using Jig. Assign each item to the right person, handle shared expenses fairly, and settle up via Venmo.",
  alternates: { canonical: absoluteUrl("/use-cases/roommates") },
  openGraph: {
    title: "Split Grocery and Household Bills with Roommates",
    description:
      "Split grocery receipts and household bills with roommates using Jig. Assign each item to the right person and settle up via Venmo.",
    url: absoluteUrl("/use-cases/roommates"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RoommatesUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split Household Bills with Roommates Using Jig",
    description:
      "Step-by-step guide to splitting grocery and household receipts fairly among roommates.",
    step: [
      {
        "@type": "HowToStep",
        name: "Photograph the receipt",
        text: "After a grocery or household supply run, snap a photo of the receipt.",
      },
      {
        "@type": "HowToStep",
        name: "Let AI parse the items",
        text: "Jig's AI reads every item and price from the receipt automatically.",
      },
      {
        "@type": "HowToStep",
        name: "Add your roommates",
        text: "Enter the names of each roommate who shares the expenses.",
      },
      {
        "@type": "HowToStep",
        name: "Assign personal and shared items",
        text: "Assign personal items to individuals and shared items to everyone who uses them.",
      },
      {
        "@type": "HowToStep",
        name: "Share and settle up",
        text: "Send the split link to your roommates so they can see what they owe and pay via Venmo.",
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
        { label: "Roommates", href: "/use-cases/roommates" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Bills with Roommates
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Living with roommates means sharing expenses. Jig makes it easy to
            split grocery receipts, household purchases, and shared supplies
            so everyone pays their fair share.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Roommate Expense Problem
          </h2>
          <p>
            Roommates share a lot of expenses. Grocery runs, cleaning supplies,
            toilet paper, dish soap, light bulbs, trash bags — the list goes on.
            Usually one person makes the purchase and everyone else owes them
            money. But figuring out the exact amounts is where things get messy.
          </p>
          <p>
            Some items are truly shared — everyone uses the dish soap. Other
            items are personal — your specific brand of yogurt or shampoo. And
            some items fall in a gray area. Splitting the entire receipt evenly
            is not fair when half the items are your roommate&apos;s personal
            groceries. But tracking everything manually in a spreadsheet is
            tedious and unsustainable.
          </p>
          <p>
            Jig solves this by letting you scan the receipt, assign each item to
            the right person or group of people, and get an instant split that
            everyone can verify.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split Household Bills with Jig
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Snap the receipt after your run.</strong> Whether it is a
              Costco haul or a quick Target trip, just photograph the receipt
              when you get home.
            </li>
            <li>
              <strong>AI reads every item.</strong> Jig&apos;s AI extracts all
              the item names and prices. Grocery receipts can be long, but Jig
              handles them regardless of length.
            </li>
            <li>
              <strong>Add your roommates.</strong> Enter each roommate&apos;s
              name. Two roommates or five — Jig scales to any household.
            </li>
            <li>
              <strong>Assign items.</strong> This is where the magic happens.
              Tap each item and assign it to whoever it belongs to. Your protein
              bars go to you. Their cereal goes to them. The paper towels get
              assigned to everyone. Shared items are divided evenly among the
              people who use them.
            </li>
            <li>
              <strong>Send the split.</strong> Share the link in your roommate
              group chat. Everyone sees exactly what they owe with a complete
              itemized breakdown. Settle up through{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>{" "}
              and you are done.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Roommate Splitting Scenarios
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                The Weekly Grocery Run
              </h3>
              <p className="mt-1">
                One roommate does the shopping for the household. The receipt
                includes a mix of personal items (your almond milk, their
                energy drinks) and shared staples (eggs, bread, butter). With
                Jig, each person&apos;s items go to them, and shared staples
                get divided among everyone. No more guessing or rounding.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Household Supply Runs
              </h3>
              <p className="mt-1">
                Toilet paper, cleaning products, garbage bags, hand soap —
                these are truly shared expenses. Assign them to all roommates
                in Jig and the cost is split evenly. If one roommate also
                grabbed personal items on the same trip, those get assigned
                only to them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                The Big Costco Trip
              </h3>
              <p className="mt-1">
                Costco receipts are famously long with bulk items at various
                prices. Jig&apos;s AI handles the full receipt. Assign the bulk
                paper towels to everyone, the case of sparkling water to the
                two roommates who drink it, and the personal items to their
                respective owners.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Cooking Dinner Together
              </h3>
              <p className="mt-1">
                You and your roommates decide to cook a meal together and split
                the ingredients. One person buys everything at the store. Scan
                the receipt with Jig and assign all the dinner ingredients to
                everyone who is eating. If they also bought personal items on
                the same trip, those stay separate.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Jig Beats the Spreadsheet
          </h2>
          <p>
            Some roommates try to track shared expenses in a Google Sheet. While
            well-intentioned, this approach has problems:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Someone has to manually type in every item and price from the
              receipt — tedious and error-prone
            </li>
            <li>
              The spreadsheet gets messy and abandoned after a few weeks
            </li>
            <li>
              There is no easy way to handle items shared by some but not all
              roommates
            </li>
            <li>
              Settling up requires separate Venmo transactions with manually
              calculated amounts
            </li>
          </ul>
          <p>
            Jig automates all of this. AI reads the receipt so there is no data
            entry. Items are assigned with taps, not typing. Tax is distributed
            proportionally. And the shareable link makes settling up
            transparent and fast.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            For Ongoing or One-Time Splits
          </h2>
          <p>
            Jig is designed for one-time splits — each receipt is its own
            independent split. This works great for roommates who settle up
            after each shopping trip. If you prefer to track running balances
            over time, you might pair Jig with a tool like{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
            </Link>{" "}
            — use Jig to get the accurate per-person amount from each receipt,
            then log it in Splitwise for ongoing tracking.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Use Cases</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/groceries" className="underline">
                Grocery Receipts
              </Link>{" "}
              — detailed guide to splitting grocery store receipts
            </li>
            <li>
              <Link href="/use-cases/restaurants" className="underline">
                Restaurant Bills
              </Link>{" "}
              — for those roommate dinner outings
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Travel Expenses
              </Link>{" "}
              — for roommate trips together
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split Your Next Household Receipt
          </h2>
          <p className="mt-2 text-[#555]">
            Snap a photo, assign items, settle up. Fair splits for every
            roommate, every time.
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
