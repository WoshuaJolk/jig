import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Receipt Online — Free Receipt Splitter Tool",
  description:
    "Split any receipt online for free with Jig. Upload a photo, AI parses every item, assign to people, and share the split. No app download or account needed.",
  alternates: { canonical: absoluteUrl("/split-receipt") },
  openGraph: {
    title: "Split Receipt Online — Free Receipt Splitter Tool",
    description:
      "Split any receipt online for free with Jig. Upload a photo, AI parses every item, assign to people, and share the split.",
    url: absoluteUrl("/split-receipt"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function SplitReceiptPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free AI-powered receipt splitting web app. Upload a receipt, assign items to people, and share the split with Venmo integration.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "AI receipt scanning",
      "Item-level splitting",
      "Tax and tip distribution",
      "Shareable split links",
      "Venmo integration",
    ],
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Split Receipt", href: "/split-receipt" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Receipt Online
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Stop doing receipt math by hand. Jig splits any receipt in seconds
            using AI, so everyone pays exactly what they owe.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Splitting Receipts Is Still a Pain
          </h2>
          <p>
            You have been there. The meal is over, the receipt arrives, and
            suddenly the table goes quiet. Someone grabs their phone calculator.
            Someone else squints at the tiny print trying to find their burger.
            Tax gets divided wrong. Tip gets forgotten. And twenty minutes later,
            you are still not sure if everyone paid the right amount.
          </p>
          <p>
            Splitting a receipt should not be the hardest part of eating out with
            friends. It should take seconds, be accurate down to the penny, and
            not require a math degree. That is exactly what Jig was built to do.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Splits Receipts Instantly
          </h2>
          <p>
            Jig is a free web app that turns any receipt into a fair, itemized
            split. Here is the process from start to finish:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload your receipt.</strong> Snap a photo or upload an
              image. Jig accepts any standard receipt format from restaurants,
              grocery stores, bars, and more.
            </li>
            <li>
              <strong>AI reads every line item.</strong> Jig uses AI-powered
              optical character recognition to extract item names, prices,
              quantities, tax, and tip. No manual data entry required.
            </li>
            <li>
              <strong>Add your group.</strong> Enter the names of everyone who
              shared the receipt. Two people or twenty, Jig handles it.
            </li>
            <li>
              <strong>Assign items to people.</strong> Tap each item and select
              who ordered it. Shared items like appetizers or pitchers get split
              automatically among the people who shared them.
            </li>
            <li>
              <strong>Share the split.</strong> Jig generates a shareable link
              showing each person exactly what they owe, including their
              proportional share of tax and tip. Send it to your group and
              settle up instantly through{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Makes Jig the Best Receipt Splitter
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">AI-Powered Accuracy</h3>
              <p className="mt-1">
                Most receipt splitting tools make you type in every item
                manually. Jig reads the receipt for you using advanced AI,
                catching details that are easy to miss when you are entering
                things by hand. Review the results and make any adjustments, but
                the tedious work is already done.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fair Tax and Tip Math</h3>
              <p className="mt-1">
                Jig distributes tax and tip proportionally based on each
                person&apos;s share of the subtotal. If you ordered a $30 steak
                and your friend had a $10 salad, you pay a larger share of the
                tax and tip. No more splitting those costs evenly when the
                orders were not even close. Learn more about how this works in
                our{" "}
                <Link href="/tip-calculator" className="underline">
                  tip calculator
                </Link>{" "}
                guide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                No Downloads, No Accounts
              </h3>
              <p className="mt-1">
                Jig runs entirely in your browser. There is nothing to install,
                no account to create, and no email to hand over. Open the site,
                upload a receipt, and start splitting. It works on iPhones,
                Android phones, tablets, and laptops.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Completely Free</h3>
              <p className="mt-1">
                No premium tier, no per-receipt charges, no feature gates. Jig
                is free for every receipt, every time. See our{" "}
                <Link href="/pricing" className="underline">
                  Pricing
                </Link>{" "}
                page for details.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Receipt Splitting Scenarios
          </h2>
          <p>
            Jig handles every kind of shared receipt, whether it is a casual
            dinner or a complicated group outing:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/restaurants" className="underline">
                Restaurant bills
              </Link>{" "}
              with mixed orders, shared appetizers, and separate drinks
            </li>
            <li>
              <Link href="/use-cases/groceries" className="underline">
                Grocery receipts
              </Link>{" "}
              split between roommates or partners
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Travel expenses
              </Link>{" "}
              like hotel bills and group dinners on vacation
            </li>
            <li>
              <Link href="/use-cases/roommates" className="underline">
                Household purchases
              </Link>{" "}
              shared among roommates
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Does Jig Compare to Other Tools?
          </h2>
          <p>
            There are other ways to split a bill, but most of them involve
            trade-offs that Jig eliminates. Manual calculators require you to
            type everything in. Apps like Splitwise are designed for ongoing
            expense tracking, not quick one-time splits. Venmo can send payment
            requests but does not help you figure out who owes what.
          </p>
          <p>
            Jig sits in the sweet spot: fast, accurate, item-level splitting
            with AI, and no friction. See how we compare to{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
            </Link>
            ,{" "}
            <Link href="/compare/jig-vs-tab" className="underline">
              Tab
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
            Ready to Split Your Receipt?
          </h2>
          <p className="mt-2 text-[#555]">
            No sign-up, no download, no cost. Upload a receipt and get a fair
            split in seconds.
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
