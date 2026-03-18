import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Best Free Splitwise Alternative — No Account Needed",
  description:
    "Looking for a Splitwise alternative? Jig is the best free bill splitter for one-time receipt splits. No account, no app download. AI-powered receipt scanning and instant sharing.",
  alternates: { canonical: absoluteUrl("/splitwise-alternative") },
  openGraph: {
    title: "Best Free Splitwise Alternative — No Account Needed",
    description:
      "Looking for a Splitwise alternative? Jig is the best free bill splitter for one-time receipt splits. No account, no app download.",
    url: absoluteUrl("/splitwise-alternative"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function SplitwiseAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Free Splitwise Alternative",
    description:
      "Compare Jig to Splitwise. Jig is the best free alternative for one-time receipt-based bill splits with no account required.",
    url: absoluteUrl("/splitwise-alternative"),
    isPartOf: {
      "@type": "WebSite",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        { label: "Splitwise Alternative", href: "/splitwise-alternative" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Best Free Splitwise Alternative
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Splitwise is great for tracking ongoing shared expenses over time.
            But if you just need to split a single receipt quickly, Jig is the
            faster, simpler alternative that requires no account or app
            download.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When Splitwise Is the Right Tool
          </h2>
          <p>
            Let us be honest: Splitwise is an excellent app for certain use
            cases. If you live with roommates and need to track rent, utilities,
            groceries, and household expenses over months or years, Splitwise is
            purpose-built for that. It maintains running balances, simplifies
            group debts, and keeps a persistent ledger that everyone can
            reference.
          </p>
          <p>
            If you are planning a long trip with friends and want to log every
            expense over a two-week vacation so you can settle up at the end,
            Splitwise handles that beautifully. It is designed for ongoing,
            multi-expense group accounting.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When You Need Something Simpler
          </h2>
          <p>
            But most bill-splitting moments are not ongoing. You went to dinner
            with friends. You have a receipt. You need to figure out who owes
            what and collect the money. That is it. You do not need a running
            ledger. You do not need everyone to download an app and create
            accounts. You need to split this one receipt, right now, and move
            on with your evening.
          </p>
          <p>
            This is exactly the scenario Jig is built for. No accounts. No app
            downloads. No onboarding flow. Just open the website, upload the
            receipt, and split.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Jig vs Splitwise: Key Differences
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">No Account Required</h3>
              <p className="mt-1">
                Splitwise requires every participant to create an account and
                download the app. Jig requires nothing. You open the website,
                split the receipt, and share a link. Your friends can view their
                share without signing up for anything.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">AI Receipt Scanning</h3>
              <p className="mt-1">
                Splitwise requires you to manually enter each expense, including
                the description and amount. Jig&apos;s{" "}
                <Link href="/receipt-scanner" className="underline">
                  AI receipt scanner
                </Link>{" "}
                reads the receipt photo and extracts every line item, price, tax,
                and tip automatically. This alone saves several minutes per
                split.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Item-Level Assignment</h3>
              <p className="mt-1">
                Splitwise lets you split an expense evenly or by specific
                amounts, but it does not have the concept of assigning
                individual receipt items to people. Jig shows you every line
                item from the receipt and lets you tap to assign each one.
                Shared items get divided among the people who shared them.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Proportional Tax and Tip</h3>
              <p className="mt-1">
                Jig automatically distributes{" "}
                <Link href="/tip-calculator" className="underline">
                  tax and tip
                </Link>{" "}
                proportionally based on each person&apos;s share of the
                subtotal. The person who ordered more pays more in tax and tip.
                This level of fairness is difficult to achieve manually in
                Splitwise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Shareable Split Links</h3>
              <p className="mt-1">
                After splitting in Jig, you get a link you can send to your
                group via text, email, or any messaging app. Everyone sees
                exactly what they owe. With Splitwise, everyone needs to have
                the app installed to see the breakdown.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Completely Free</h3>
              <p className="mt-1">
                Splitwise offers a free tier but reserves certain features for
                their paid Splitwise Pro subscription. Jig is completely free
                with no premium tier, no ads, and no feature gating.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Best of Both Worlds
          </h2>
          <p>
            You do not have to choose one or the other. Many people use
            Splitwise for long-term expense tracking with roommates or travel
            companions, and use Jig whenever they need to split a specific
            receipt. The two tools complement each other well. Use Jig for the
            quick, receipt-based split. Use Splitwise to log the resulting
            balance if you want to track it over time.
          </p>
          <p>
            For more detailed comparisons, check out our{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Jig vs Splitwise
            </Link>{" "}
            page or browse other{" "}
            <Link href="/bill-splitter" className="underline">
              bill splitting
            </Link>{" "}
            options.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split a Receipt with Jig
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Open Jig in your browser.</strong> No download or signup
              needed.
            </li>
            <li>
              <strong>Upload a receipt photo.</strong> The AI extracts every
              item, price, tax, and tip.
            </li>
            <li>
              <strong>Add people and assign items.</strong> Tap to assign each
              item to whoever ordered it.
            </li>
            <li>
              <strong>Share the split.</strong> Send the link to your group.
              Everyone sees what they owe and can pay via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>
              ,{" "}
              <Link href="/zelle-split" className="underline">
                Zelle
              </Link>
              ,{" "}
              <Link href="/cash-app-split" className="underline">
                Cash App
              </Link>
              , or{" "}
              <Link href="/paypal-split" className="underline">
                PayPal
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Try the Best Splitwise Alternative
          </h2>
          <p className="mt-2 text-[#555]">
            Free forever. No account needed. No app download. Just upload a
            receipt and split.
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
