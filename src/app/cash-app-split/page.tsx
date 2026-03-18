import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Bills with Cash App — Calculate and Request",
  description:
    "Use Jig to calculate each person's share, then send requests through Cash App. Free bill splitting calculator that works perfectly alongside Cash App payments.",
  alternates: { canonical: absoluteUrl("/cash-app-split") },
  openGraph: {
    title: "Split Bills with Cash App — Calculate and Request",
    description:
      "Use Jig to calculate each person's share, then send requests through Cash App. Free bill splitting calculator.",
    url: absoluteUrl("/cash-app-split"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function CashAppSplitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Split Bills with Cash App",
    description:
      "Learn how to split bills and calculate each person's share using Jig, then send payment requests through Cash App.",
    url: absoluteUrl("/cash-app-split"),
    isPartOf: {
      "@type": "WebSite",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Cash App Split", href: "/cash-app-split" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Bills with Cash App
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Cash App makes sending money instant, but it does not calculate
            how much each person owes. Jig handles the math so you can send
            accurate Cash App requests in seconds.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Cash App Is Great for Payments, Not for Splitting
          </h2>
          <p>
            Cash App is one of the most popular peer-to-peer payment apps in the
            United States. It makes sending and receiving money nearly instant.
            But when it comes time to split a restaurant bill or shared expense,
            Cash App leaves you on your own for the hardest part: figuring out
            who owes what.
          </p>
          <p>
            You can request a specific amount from someone on Cash App, but you
            first need to know what that amount should be. When the bill has
            twelve line items, shared appetizers, tax, and a twenty percent tip,
            calculating each person&apos;s exact share by hand is tedious and
            error-prone. That is where Jig comes in.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split a Bill and Pay with Cash App
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Open Jig and upload the receipt.</strong> Take a photo of
              the bill or upload an existing image. Jig&apos;s{" "}
              <Link href="/receipt-scanner" className="underline">
                AI receipt scanner
              </Link>{" "}
              reads every line item, price, tax, and tip from the photo.
            </li>
            <li>
              <strong>Add your group.</strong> Enter the names of everyone who
              is splitting the bill.
            </li>
            <li>
              <strong>Assign items.</strong> Tap to assign each menu item to
              whoever ordered it. Shared items like appetizers or pitchers get
              divided among the people who shared them.
            </li>
            <li>
              <strong>Review each person&apos;s total.</strong> Jig calculates
              each person&apos;s share including proportional{" "}
              <Link href="/tip-calculator" className="underline">
                tax and tip
              </Link>
              . No more guessing or rounding.
            </li>
            <li>
              <strong>Request payment on Cash App.</strong> Now that you know
              the exact amount each person owes, open Cash App and send a
              payment request for that amount. You can share the Jig split link
              alongside your Cash App request so everyone can verify the
              breakdown.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why This Approach Works Better
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Accuracy Builds Trust</h3>
              <p className="mt-1">
                When you send a Cash App request for a seemingly random amount,
                people hesitate. They wonder if the math is right. By sharing
                the Jig split link alongside your request, everyone can see
                exactly how the amount was calculated. There is no ambiguity and
                no reason to push back.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fairness Down to the Cent</h3>
              <p className="mt-1">
                Instead of roughly dividing the total or rounding up, Jig
                calculates precise amounts based on what each person actually
                ordered. The person who had a salad and water pays less than the
                person who had a steak and cocktails. Fair is fair.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Speed</h3>
              <p className="mt-1">
                The entire Jig process takes about sixty seconds. Upload the
                receipt, assign items, share the split. Compare that to passing
                the receipt around the table while everyone tries to calculate
                their share on their phone calculator. Jig plus Cash App is the
                fastest way to split and settle.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Scenarios for Cash App Bill Splitting
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/dinner-split-calculator" className="underline">
                Dinner with friends
              </Link>{" "}
              where one person picks up the tab and requests reimbursement
            </li>
            <li>
              <Link href="/use-cases/roommates" className="underline">
                Roommate expenses
              </Link>{" "}
              like shared grocery runs or household supply purchases
            </li>
            <li>
              Group activities where one person buys tickets or pays for
              everyone and needs to collect
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Travel expenses
              </Link>{" "}
              where different people pay for different meals throughout a trip
            </li>
            <li>
              Office lunch orders where someone places a single large order
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Jig Works with Any Payment App
          </h2>
          <p>
            While this page focuses on Cash App, Jig is not tied to any
            specific payment platform. Once you have the split calculated, you
            can collect payment however you prefer. Jig also integrates with{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>{" "}
            for one-tap payment links. You can also use{" "}
            <Link href="/zelle-split" className="underline">
              Zelle
            </Link>
            ,{" "}
            <Link href="/paypal-split" className="underline">
              PayPal
            </Link>
            , or even cash. The splitting and the paying are separate steps,
            which gives you maximum flexibility.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Calculate Your Split, Pay with Cash App
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
