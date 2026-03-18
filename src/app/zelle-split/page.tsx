import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Bills with Zelle — Calculate Each Person's Share",
  description:
    "Zelle doesn't have built-in bill splitting. Use Jig to calculate each person's share from a receipt, then send Zelle payments for the exact amounts. Free, no account needed.",
  alternates: { canonical: absoluteUrl("/zelle-split") },
  openGraph: {
    title: "Split Bills with Zelle — Calculate Each Person's Share",
    description:
      "Zelle doesn't have built-in bill splitting. Use Jig to calculate each person's share from a receipt, then send Zelle payments.",
    url: absoluteUrl("/zelle-split"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ZelleSplitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Split Bills with Zelle",
    description:
      "Learn how to split bills and calculate each person's share using Jig, then send payments through Zelle.",
    url: absoluteUrl("/zelle-split"),
    isPartOf: {
      "@type": "WebSite",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Zelle Split", href: "/zelle-split" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Bills with Zelle
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Zelle is built into most major banking apps, making it one of the
            easiest ways to send money. But Zelle has no bill splitting
            calculator. Jig fills that gap.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Zelle Does Not Split Bills
          </h2>
          <p>
            Zelle is a payment network, not a splitting tool. It is designed to
            move money directly between bank accounts. You open your banking app,
            enter an amount and a recipient, and the money transfers, usually
            within minutes. It is fast, free, and widely available through banks
            like Chase, Bank of America, Wells Fargo, and hundreds of others.
          </p>
          <p>
            But Zelle intentionally keeps things simple. There is no receipt
            scanning, no group expense tracking, and no way to calculate who
            owes what on a shared bill. If you want to split a restaurant check
            among five people and send Zelle payments, you first need to figure
            out each person&apos;s share on your own. That is the hard part, and
            that is exactly what Jig automates.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split a Bill and Pay via Zelle
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload the receipt to Jig.</strong> Photograph the bill or
              upload an image. Jig&apos;s{" "}
              <Link href="/receipt-scanner" className="underline">
                AI receipt scanner
              </Link>{" "}
              extracts every item, price, tax, and tip automatically.
            </li>
            <li>
              <strong>Add people and assign items.</strong> Enter everyone&apos;s
              name and assign each line item to the person who ordered it.
              Shared items can be split among multiple people.
            </li>
            <li>
              <strong>Get the exact amounts.</strong> Jig calculates each
              person&apos;s total including their proportional share of{" "}
              <Link href="/tip-calculator" className="underline">
                tax and tip
              </Link>
              .
            </li>
            <li>
              <strong>Share the split link.</strong> Send the Jig link to your
              group so everyone can see exactly how their amount was calculated.
            </li>
            <li>
              <strong>Send or request money via Zelle.</strong> Open your
              banking app, go to the Zelle section, and send the exact amount
              to the person who paid, or request the exact amount from each
              person who owes you.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Jig Plus Zelle Is the Best Combo
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">No Extra Apps</h3>
              <p className="mt-1">
                If everyone in your group already has Zelle through their bank,
                there is nothing else to download. Jig runs in the browser, and
                Zelle runs through your existing banking app. Two tools you
                already have access to, working together.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bank-Level Transfers</h3>
              <p className="mt-1">
                Unlike third-party payment apps that hold your money in a
                separate balance, Zelle transfers go directly to your bank
                account. There is no need to cash out or transfer funds after
                the fact. Jig calculates the split, Zelle delivers the payment
                straight to the bank.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Transparency</h3>
              <p className="mt-1">
                Sharing the Jig split link alongside your Zelle request removes
                any confusion. Your friends can see the itemized breakdown,
                verify their share, and send the money confidently. No more
                back-and-forth about whether the amount is correct.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Zelle Splitting Scenarios
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/dinner-split-calculator" className="underline">
                Restaurant dinners
              </Link>{" "}
              where one person puts the whole bill on their card
            </li>
            <li>
              <Link href="/use-cases/roommates" className="underline">
                Rent and utilities
              </Link>{" "}
              where roommates already use Zelle for monthly payments
            </li>
            <li>
              Shared purchases like furniture, gifts, or event tickets
            </li>
            <li>
              <Link href="/group-expense-calculator" className="underline">
                Group expenses
              </Link>{" "}
              from parties, barbecues, or holiday gatherings
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Travel costs
              </Link>{" "}
              where you want the money to go directly to a bank account
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Works with Other Payment Methods Too
          </h2>
          <p>
            Jig is payment-agnostic. Once you have the split calculated, you
            can settle up however your group prefers. In addition to Zelle, Jig
            works seamlessly with{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>{" "}
            (which includes one-tap payment links),{" "}
            <Link href="/cash-app-split" className="underline">
              Cash App
            </Link>
            ,{" "}
            <Link href="/paypal-split" className="underline">
              PayPal
            </Link>
            , or even old-fashioned cash. The splitting and the payment are
            separate, giving you full flexibility.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Calculate Your Split, Pay with Zelle
          </h2>
          <p className="mt-2 text-[#555]">
            Free forever. No account needed. Just upload a receipt and go.
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
