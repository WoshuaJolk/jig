import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Venmo Split Calculator — Calculate and Request on Venmo",
  description:
    "Calculate exactly how much each person owes and send Venmo requests instantly. Jig splits receipts with AI and integrates with Venmo for one-tap payments.",
  alternates: { canonical: absoluteUrl("/venmo-calculator") },
  openGraph: {
    title: "Venmo Split Calculator — Calculate and Request on Venmo",
    description:
      "Calculate exactly how much each person owes and send Venmo requests instantly. Jig splits receipts with AI and integrates with Venmo for one-tap payments.",
    url: absoluteUrl("/venmo-calculator"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function VenmoCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free receipt splitting tool with Venmo integration. Calculate what each person owes and send Venmo requests with one tap.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Venmo Calculator", href: "/venmo-calculator" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Venmo Split Calculator
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Stop guessing how much to Venmo-request each person. Jig calculates
            the exact amount per person and lets you settle up through Venmo
            with one tap.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Venmo Request Guessing Game
          </h2>
          <p>
            Venmo has made sending money effortless. But figuring out the right
            amount to request? That part is still a mess. After a group dinner,
            someone picks up the tab and then has to calculate each person&apos;s
            share before sending out Venmo requests. Most people end up
            guessing, rounding, or just splitting evenly — none of which are
            truly fair.
          </p>
          <p>
            The result is a string of Venmo requests with descriptions like
            &ldquo;dinner&rdquo; or &ldquo;food thing&rdquo; and amounts that
            nobody can verify. Did that include your share of the appetizer?
            Was tip factored in? Nobody knows.
          </p>
          <p>
            Jig fixes this by doing all the math before the Venmo requests go
            out. You get an exact, itemized breakdown that everyone can see and
            verify, with a direct link to settle up on Venmo.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Works with Venmo
          </h2>
          <p>
            Jig and Venmo complement each other perfectly. Jig handles the
            calculation — figuring out who owes what — and Venmo handles the
            payment. Here is how it works together:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload the receipt to Jig.</strong> Snap a photo or upload
              an image of the receipt. Jig&apos;s AI reads every line item,
              price, tax, and tip.
            </li>
            <li>
              <strong>Add people and assign items.</strong> Enter the names of
              everyone in your group and assign each item to whoever ordered it.
              Shared items are split among the relevant people.
            </li>
            <li>
              <strong>Jig calculates the split.</strong> Each person&apos;s
              total is computed including their proportional share of tax and{" "}
              <Link href="/tip-calculator" className="underline">
                tip
              </Link>
              .
            </li>
            <li>
              <strong>Share the split link.</strong> Jig generates a unique URL
              showing the full breakdown. Send it to your group so everyone can
              see exactly what they owe and why.
            </li>
            <li>
              <strong>Settle up on Venmo.</strong> Each person can tap a button
              on their split page to open Venmo with the correct amount
              pre-filled. One tap and they are done.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Use Jig Instead of Venmo&apos;s Built-In Split
          </h2>
          <p>
            Venmo does have a built-in split feature, but it has significant
            limitations compared to Jig:
          </p>
          <div className="rounded-lg border border-[#e5e3de] bg-white overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e3de]">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Jig</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Venmo Split
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">AI receipt scanning</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level assignment</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Proportional tax/tip</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Shareable breakdown link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Requires account</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes (both parties)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Handles payments</td>
                  <td className="px-4 py-3">Links to Venmo</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Venmo&apos;s split feature only divides a total amount evenly or lets
            you manually enter amounts. It does not scan the receipt, does not
            assign items, and does not calculate proportional tax or tip. Jig
            does all of that and then connects to Venmo for the actual payment.
            See our full{" "}
            <Link href="/compare/jig-vs-venmo" className="underline">
              Jig vs Venmo comparison
            </Link>{" "}
            for more details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Transparent Splits Everyone Can Trust
          </h2>
          <p>
            One of the biggest advantages of using Jig with Venmo is
            transparency. When you send a Venmo request with Jig, you can
            include the split link in the description. The recipient can see
            exactly which items were assigned to them, how tax and tip were
            calculated, and why they owe that specific amount.
          </p>
          <p>
            No more awkward &ldquo;why do I owe that much?&rdquo; conversations.
            No more guessing. Everything is laid out clearly, and everyone can
            verify their share before paying.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Perfect for Any Group Expense
          </h2>
          <p>
            The Jig-to-Venmo workflow works great for any shared expense, not
            just restaurant bills:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/restaurants" className="underline">
                Restaurant dinners
              </Link>{" "}
              — scan the check, split it, Venmo everyone in minutes
            </li>
            <li>
              <Link href="/use-cases/groceries" className="underline">
                Grocery runs
              </Link>{" "}
              — split the receipt so each roommate pays for their own items
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Travel expenses
              </Link>{" "}
              — hotel bills, group meals, and activities split and settled
              through Venmo
            </li>
            <li>
              <Link href="/use-cases/roommates" className="underline">
                Household bills
              </Link>{" "}
              — one person buys supplies, Jig splits it, everyone Venmos their
              share
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split It, Venmo It, Done
          </h2>
          <p className="mt-2 text-[#555]">
            Upload a receipt, get the perfect split, and settle up on Venmo.
            Free, no account needed.
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
