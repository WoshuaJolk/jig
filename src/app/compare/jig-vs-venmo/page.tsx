import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Venmo for Splitting Bills",
  description:
    "Compare Jig and Venmo for splitting bills. Venmo handles payments. Jig handles the math. Together they make splitting effortless. See how they complement each other.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-venmo") },
  openGraph: {
    title: "Jig vs Venmo for Splitting Bills",
    description:
      "Compare Jig and Venmo for splitting bills. Venmo handles payments. Jig handles the math. Together they make splitting effortless.",
    url: absoluteUrl("/compare/jig-vs-venmo"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsVenmoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jig vs Venmo for Splitting Bills",
    description:
      "A comparison of Jig and Venmo for bill splitting, showing how the two tools complement each other.",
    url: absoluteUrl("/compare/jig-vs-venmo"),
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
        { label: "Jig vs Venmo", href: "/compare/jig-vs-venmo" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs Venmo for Splitting Bills
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Jig and Venmo are not really competitors — they are partners. Jig
            figures out who owes what. Venmo moves the money. Here is how they
            differ and how they work together.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Two Tools, Two Jobs
          </h2>
          <p>
            Venmo is a payment app. Its primary job is to send and receive
            money between people. It does this exceptionally well — peer-to-peer
            payments are fast, easy, and free for most transactions.
          </p>
          <p>
            Jig is a splitting tool. Its primary job is to figure out exactly
            how much each person owes when a group shares a bill. It does this
            by scanning receipts with AI, assigning items to people, and
            calculating proportional tax and{" "}
            <Link href="/tip-calculator" className="underline">
              tip
            </Link>
            .
          </p>
          <p>
            The problem Venmo does not solve is the calculation. When you open
            Venmo to request money after a group dinner, you still need to
            figure out the right amount to request from each person. That is
            where Jig comes in.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Comparison Table</h2>
          <div className="rounded-lg border border-[#e5e3de] bg-white overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e3de]">
                  <th className="px-4 py-3 text-left font-semibold">
                    Capability
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">Jig</th>
                  <th className="px-4 py-3 text-left font-semibold">Venmo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Receipt scanning</td>
                  <td className="px-4 py-3">Yes (AI-powered)</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level bill splitting</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Proportional tax/tip</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Sending/receiving money</td>
                  <td className="px-4 py-3">No (links to Venmo)</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Even split</td>
                  <td className="px-4 py-3">Supported</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Itemized breakdown link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free (with fees for some transactions)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Problem with Using Venmo Alone
          </h2>
          <p>
            When most people use Venmo to split a bill, here is what happens:
            one person pays the entire check, then tries to figure out each
            person&apos;s share, then sends individual Venmo requests with
            rough amounts and vague descriptions.
          </p>
          <p>
            The issues with this approach pile up quickly:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Calculating each share manually is slow and error-prone,
              especially with shared items, different drink orders, tax, and tip
            </li>
            <li>
              Recipients have no way to verify the amount — they just have to
              trust the math
            </li>
            <li>
              Venmo&apos;s built-in split feature only divides a total evenly
              or requires you to manually enter custom amounts
            </li>
            <li>
              There is no record of which items belonged to which person
            </li>
          </ul>
          <p>
            Jig solves all of these problems before you ever open Venmo. By the
            time you send the payment request, you know the exact amount and
            can share the itemized breakdown as proof.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig and Venmo Work Together
          </h2>
          <p>
            The best bill-splitting workflow combines both tools:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload the receipt to Jig.</strong> AI reads every item,
              price, tax, and tip.
            </li>
            <li>
              <strong>Assign items to people.</strong> Everyone pays for what
              they ordered. Shared items are divided evenly among those who
              shared them.
            </li>
            <li>
              <strong>Share the Jig split link.</strong> Everyone can see their
              itemized breakdown with exact totals.
            </li>
            <li>
              <strong>Settle up on Venmo.</strong> Each person taps a button to
              open Venmo with the correct amount pre-filled. One tap, done.
            </li>
          </ol>
          <p>
            This workflow gives you the calculation precision of Jig and the
            payment convenience of Venmo. Learn more about this integration on
            our{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo calculator
            </Link>{" "}
            page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When You Might Not Need Jig
          </h2>
          <p>
            To be fair, Jig is not necessary for every situation. If you and a
            friend grabbed coffee and want to split it 50/50, Venmo alone is
            perfectly fine. Just divide the total in half and send a request.
          </p>
          <p>
            But the moment the bill gets more complex — different items,
            shared dishes, a group larger than two, tax and tip to distribute —
            that is when Jig saves you time and ensures fairness. Most{" "}
            <Link href="/use-cases/restaurants" className="underline">
              restaurant dinners
            </Link>
            ,{" "}
            <Link href="/use-cases/groceries" className="underline">
              grocery runs
            </Link>
            , and{" "}
            <Link href="/use-cases/travel" className="underline">
              travel expenses
            </Link>{" "}
            fall into this category.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Venmo is great at moving money. Jig is great at figuring out how
            much money to move. Use them together for the smoothest bill-splitting
            experience possible. Jig handles the hard part — the math — and
            Venmo handles the easy part — the payment.
          </p>
          <p>
            See how Jig also compares to{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
            </Link>{" "}
            and{" "}
            <Link href="/compare/jig-vs-tab" className="underline">
              Tab
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split It with Jig, Pay It with Venmo
          </h2>
          <p className="mt-2 text-[#555]">
            Upload a receipt, get exact amounts, and settle up on Venmo. Free
            and instant.
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
