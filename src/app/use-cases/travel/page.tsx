import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Travel Expenses with Your Group",
  description:
    "Split travel expenses like hotel bills, group dinners, and activity costs with Jig. AI scans receipts so your travel group can settle up fairly. Free, no account needed.",
  alternates: { canonical: absoluteUrl("/use-cases/travel") },
  openGraph: {
    title: "Split Travel Expenses with Your Group",
    description:
      "Split travel expenses like hotel bills, group dinners, and activity costs with Jig. AI scans receipts so your travel group can settle up fairly.",
    url: absoluteUrl("/use-cases/travel"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function TravelUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split Travel Expenses with Jig",
    description:
      "Step-by-step guide to splitting hotel bills, group dinners, and travel costs fairly among a travel group.",
    step: [
      {
        "@type": "HowToStep",
        name: "Collect the receipt",
        text: "After any shared expense during your trip, photograph the receipt.",
      },
      {
        "@type": "HowToStep",
        name: "Scan with AI",
        text: "Upload to Jig and let AI extract all items and charges.",
      },
      {
        "@type": "HowToStep",
        name: "Add your travel group",
        text: "Enter the names of everyone sharing the expense.",
      },
      {
        "@type": "HowToStep",
        name: "Assign charges",
        text: "Assign each line item to the people it applies to.",
      },
      {
        "@type": "HowToStep",
        name: "Share and settle",
        text: "Share the split link with your group to settle up via Venmo.",
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
        { label: "Travel", href: "/use-cases/travel" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Travel Expenses with Your Group
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Group trips generate a constant stream of shared expenses. Jig
            helps you split each one fairly so money does not become a source
            of tension on vacation.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Travel Splitting Challenge
          </h2>
          <p>
            Traveling with friends or family is one of the best experiences in
            life. But shared expenses can quickly become a logistical nightmare.
            Someone books the hotel. Someone else pays for dinner. A third
            person covers the rental car. By the end of the trip, nobody
            remembers who paid for what, and settling up feels like an
            accounting exercise.
          </p>
          <p>
            The amounts add up fast too. A week-long trip with four friends can
            easily generate dozens of shared expenses totaling thousands of
            dollars. Getting those splits wrong means someone ends up
            significantly overpaying or underpaying.
          </p>
          <p>
            Jig helps by giving you an accurate, itemized split for each
            individual receipt as it happens. No need to track everything in a
            spreadsheet and figure it out at the end of the trip.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Travel Expenses to Split
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Hotel Bills</h3>
              <p className="mt-1">
                Hotel receipts can be complex — room charges, resort fees,
                parking, room service, minibar charges. Some of these are shared
                (the room itself) while others are personal (your minibar snack
                at 2 AM). Scan the hotel receipt with Jig, assign room charges
                to everyone sharing the room, and personal charges to the
                individuals who incurred them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Group Dinners</h3>
              <p className="mt-1">
                Dining out is a highlight of any trip, and it happens multiple
                times per day. Each restaurant check can be scanned and split
                with Jig in under a minute. Assign each person&apos;s meal and
                drinks to them, split shared dishes, and let Jig handle tax and{" "}
                <Link href="/tip-calculator" className="underline">
                  tip distribution
                </Link>
                . Read our full{" "}
                <Link href="/use-cases/restaurants" className="underline">
                  restaurant guide
                </Link>{" "}
                for detailed tips.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Activities and Tours</h3>
              <p className="mt-1">
                One person buys tickets for the whole group — museum admission,
                a boat tour, theme park passes, a cooking class. Scan the
                receipt and assign each ticket to the person it was for. If
                some people opted out of an activity, they do not get charged.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Grocery and Supply Runs</h3>
              <p className="mt-1">
                Stocking up the Airbnb kitchen? One person runs to the store
                and buys groceries, snacks, and drinks for the group. Scan the{" "}
                <Link href="/use-cases/groceries" className="underline">
                  grocery receipt
                </Link>{" "}
                with Jig and assign each item to the people it is for. Shared
                breakfast supplies go to everyone. Your specific snacks go to
                you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Transportation</h3>
              <p className="mt-1">
                Rental car receipts, gas station receipts, toll receipts,
                parking garage tickets — all of these can be scanned and split
                with Jig. Assign transportation costs to everyone who used the
                vehicle. If someone took a separate cab, that stays separate.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Split as You Go, Not at the End
          </h2>
          <p>
            The biggest mistake travel groups make is trying to settle
            everything at the end of the trip. By then, receipts are lost,
            memories are fuzzy, and the math becomes overwhelming. It often
            leads to rough estimates and someone quietly eating the cost of
            imbalances.
          </p>
          <p>
            A better approach is to split each expense as it happens. When
            someone pays for dinner, scan the receipt right there. When the
            hotel check comes, split it that afternoon. Jig makes this painless
            because each split takes under a minute.
          </p>
          <p>
            This way, everyone settles up throughout the trip instead of facing
            a giant, confusing reconciliation at the end. Each split has its
            own link that people can reference if they need to check an amount
            later.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Jig Works Great for Travel
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>No app to download.</strong> Nobody in the group needs to
              install anything. Jig runs in the browser and the split links work
              on any device. This matters when you are traveling and do not want
              to download apps on limited data.
            </li>
            <li>
              <strong>No account needed.</strong> You can start splitting
              immediately. No sign-up flow eating into your vacation time.
            </li>
            <li>
              <strong>Works with any receipt.</strong> Restaurant checks, hotel
              bills, store receipts, gas station printouts — the AI handles
              them all.
            </li>
            <li>
              <strong>Shareable links.</strong> Drop the split link in the group
              chat and everyone can verify their share. Transparency prevents
              disputes.
            </li>
            <li>
              <strong>
                <Link href="/venmo-calculator" className="underline">
                  Venmo integration
                </Link>
              </strong>{" "}
              — settle up instantly without doing any mental math.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Combine with Ongoing Tracking
          </h2>
          <p>
            If you prefer to settle everything at the end of the trip rather
            than after each expense, you can use Jig to calculate the accurate
            per-person amount for each receipt and then log those totals in a
            tool like{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
            </Link>{" "}
            for running balance tracking. Jig gives you the precise numbers,
            and Splitwise keeps the running tally.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Keep Your Trip Stress-Free
          </h2>
          <p className="mt-2 text-[#555]">
            Split travel expenses as they happen. Fast, fair, and free.
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
