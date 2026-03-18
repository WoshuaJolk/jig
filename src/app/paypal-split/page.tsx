import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Bills with PayPal — Calculate and Send Requests",
  description:
    "Calculate each person's share with Jig, then send PayPal payment requests for the exact amounts. Free AI-powered bill splitter that pairs perfectly with PayPal.",
  alternates: { canonical: absoluteUrl("/paypal-split") },
  openGraph: {
    title: "Split Bills with PayPal — Calculate and Send Requests",
    description:
      "Calculate each person's share with Jig, then send PayPal payment requests for the exact amounts.",
    url: absoluteUrl("/paypal-split"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PaypalSplitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Split Bills with PayPal",
    description:
      "Learn how to split bills and calculate each person's share using Jig, then send payment requests through PayPal.",
    url: absoluteUrl("/paypal-split"),
    isPartOf: {
      "@type": "WebSite",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "PayPal Split", href: "/paypal-split" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Bills with PayPal
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            PayPal lets you request money from anyone with an email address.
            Jig tells you exactly how much to request. Together, they make
            splitting and settling bills effortless.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            PayPal&apos;s Splitting Limitation
          </h2>
          <p>
            PayPal is a global payment platform used by hundreds of millions of
            people. It supports sending money, requesting payments, and even
            has a feature for splitting purchases on PayPal-supported checkouts.
            But when it comes to splitting a restaurant bill or any receipt
            after the fact, PayPal does not offer a built-in calculator.
          </p>
          <p>
            You can request money from someone on PayPal, but you need to know
            the exact amount first. When the bill has a dozen items, shared
            dishes, varying tax rates, and a group-decided tip percentage, that
            calculation is far from trivial. Jig handles all of that math
            automatically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split a Bill and Collect via PayPal
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload the receipt to Jig.</strong> Take a photo of the
              bill or upload an image. The{" "}
              <Link href="/receipt-scanner" className="underline">
                AI receipt scanner
              </Link>{" "}
              extracts every item, price, tax, and tip.
            </li>
            <li>
              <strong>Add people and assign items.</strong> Enter the names of
              everyone in the group and tap each item to assign it to whoever
              ordered it. Shared items get divided among the sharers.
            </li>
            <li>
              <strong>Review the calculated amounts.</strong> Jig shows each
              person&apos;s total with proportional{" "}
              <Link href="/tip-calculator" className="underline">
                tax and tip
              </Link>{" "}
              included. Every cent is accounted for.
            </li>
            <li>
              <strong>Share the Jig link.</strong> Send the split breakdown to
              your group so everyone can see exactly how their share was
              calculated.
            </li>
            <li>
              <strong>Request money through PayPal.</strong> Open PayPal and
              send a payment request for each person&apos;s exact amount. You
              can include the Jig link in the PayPal note for full
              transparency.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why PayPal Users Love Jig
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Global Reach</h3>
              <p className="mt-1">
                PayPal works in over 200 countries and supports multiple
                currencies. If your group spans different countries or you are
                traveling internationally, PayPal is often the most accessible
                payment option. Jig calculates the split in whatever currency
                the receipt is in, and you handle the payment through PayPal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email-Based Requests</h3>
              <p className="mt-1">
                PayPal lets you request money from anyone using just their email
                address. They do not even need a PayPal account to pay, as they
                can use a credit or debit card. Combined with Jig&apos;s
                shareable split links, everyone has full visibility into both the
                breakdown and the payment request.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Buyer Protection</h3>
              <p className="mt-1">
                PayPal&apos;s buyer and seller protections add a layer of
                security to group payments. When combined with Jig&apos;s
                transparent split calculations, both the person paying and the
                person collecting can feel confident that the amounts are fair
                and the transaction is protected.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">No Additional App Needed</h3>
              <p className="mt-1">
                If your group already uses PayPal, Jig slots in without adding
                friction. Jig runs entirely in the browser with no download or
                account required. Calculate the split on Jig, pay through
                PayPal. Two tools your group already has access to.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When to Use PayPal for Bill Splitting
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              International{" "}
              <Link href="/use-cases/travel" className="underline">
                group travel
              </Link>{" "}
              where participants have different banks and currencies
            </li>
            <li>
              <Link href="/dinner-split-calculator" className="underline">
                Restaurant dinners
              </Link>{" "}
              with friends who prefer PayPal over other payment apps
            </li>
            <li>
              <Link href="/group-expense-calculator" className="underline">
                Group purchases
              </Link>{" "}
              where you want the security of PayPal&apos;s platform
            </li>
            <li>
              Situations where some group members do not have Venmo, Cash App,
              or Zelle but everyone has email
            </li>
            <li>
              Freelancer or contractor group meals where PayPal is already the
              preferred payment method
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Other Payment Options
          </h2>
          <p>
            Jig does not lock you into any payment platform. After calculating
            the split, you can collect via{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>{" "}
            (with built-in one-tap payment links),{" "}
            <Link href="/cash-app-split" className="underline">
              Cash App
            </Link>
            ,{" "}
            <Link href="/zelle-split" className="underline">
              Zelle
            </Link>
            , bank transfers, or cash. Jig handles the calculation; you choose
            how to settle up.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Calculate Your Split, Collect via PayPal
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
