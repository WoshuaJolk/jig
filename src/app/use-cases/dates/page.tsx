import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Splitting the Bill on a Date — Fair and Awkward-Free",
  description:
    "Split the bill on a date without the awkwardness. Modern dating norms, going dutch, splitting fairly, and how Jig makes it easy. Free, no account needed.",
  alternates: { canonical: absoluteUrl("/use-cases/dates") },
  openGraph: {
    title: "Splitting the Bill on a Date — Fair and Awkward-Free",
    description:
      "Split the bill on a date without the awkwardness. Modern dating norms, going dutch, and how Jig makes it easy.",
    url: absoluteUrl("/use-cases/dates"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function DatesUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split the Bill on a Date with Jig",
    description:
      "Step-by-step guide to splitting a date bill fairly and without awkwardness using Jig.",
    step: [
      {
        "@type": "HowToStep",
        name: "Agree to split",
        text: "When the check arrives (or beforehand), agree to split the bill. A simple 'want to split it?' is all it takes.",
      },
      {
        "@type": "HowToStep",
        name: "Scan the receipt",
        text: "One person snaps a photo of the receipt with Jig. The AI reads every item automatically.",
      },
      {
        "@type": "HowToStep",
        name: "Assign items",
        text: "Each person selects what they ordered. Shared items like appetizers are split between both people.",
      },
      {
        "@type": "HowToStep",
        name: "Settle up",
        text: "The other person sends their share via Venmo, Zelle, or any payment app. Done in seconds.",
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
        { label: "Dates", href: "/use-cases/dates" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Splitting the Bill on a Date
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Modern dating has changed the rules around who pays. Whether you
            are going dutch on a first date or splitting expenses with a
            long-term partner, Jig makes it fair and frictionless.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Modern Dating Bill Dilemma
          </h2>
          <p>
            Who pays on a date? It is one of the most debated questions in
            modern dating, and there is no universal answer. Some people believe
            the person who asked should pay. Others prefer to always split.
            Many couples alternate who covers the check. And an increasing
            number of people — especially on first dates — prefer to go dutch
            to keep things equal and pressure-free.
          </p>
          <p>
            Whatever your preference, the moment the check arrives can be
            awkward. The bill sits on the table. Both people glance at it.
            Someone reaches for their wallet. There is a pause. The whole
            exchange takes on an outsized emotional weight that has nothing to
            do with the actual dollar amount.
          </p>
          <p>
            Jig removes the friction entirely. A quick scan, a tap to assign
            items, and the split is done before the server comes back. No
            fumbling with a calculator, no mental math, no wondering if you
            are being fair.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When Splitting on a Date Makes Sense
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">First Dates</h3>
              <p className="mt-1">
                Splitting on a first date is increasingly common and widely
                accepted. It signals mutual respect and independence. Neither
                person feels obligated to the other, and there is no
                expectation tied to who picked up the check. A quick
                &ldquo;want to split it?&rdquo; when the bill arrives is
                casual, confident, and straightforward.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                When Orders Are Very Different
              </h3>
              <p className="mt-1">
                If one person ordered a cocktail and an entree while the other
                had a water and a salad, an even split feels unfair to the
                lighter order. Jig&apos;s itemized splitting solves this
                perfectly. Each person pays for exactly what they ordered, plus
                their proportional share of tax and tip. Nobody subsidizes the
                other person&apos;s meal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Long-Term Partners
              </h3>
              <p className="mt-1">
                Many couples in established relationships split expenses
                regularly, especially when they maintain separate finances. Date
                nights, grocery runs, and shared purchases all benefit from
                clear accounting. Jig gives you a quick, objective split
                without either person needing to keep a mental tally of who
                paid last time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Double Dates and Group Dates
              </h3>
              <p className="mt-1">
                Double dates and group outings add another layer of complexity.
                Two couples at dinner means four people with four different
                orders, and nobody wants to spend ten minutes doing math at the
                table. Jig handles any group size and creates a clear split
                that each person or couple can see and settle independently.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Split a Date Bill with Jig
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Snap the receipt.</strong> When the check arrives, one
              person takes a quick photo with their phone. It takes two
              seconds and looks completely natural — no different from checking
              a notification.
            </li>
            <li>
              <strong>Jig reads the bill.</strong> The AI extracts every item,
              price, tax, and tip. No typing, no squinting at line items.
            </li>
            <li>
              <strong>Assign your items.</strong> Each person selects what they
              ordered. Shared items like appetizers or a bottle of wine get
              split between both people automatically.
            </li>
            <li>
              <strong>Share and settle up.</strong> The other person sends their
              share via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>
              , Zelle, or Cash App. The entire process takes less than a
              minute.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Tips for Splitting Gracefully
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Bring it up casually.</strong> A simple &ldquo;want to
              split it?&rdquo; or &ldquo;should we just do our own?&rdquo; is
              all you need. Most people appreciate the directness.
            </li>
            <li>
              <strong>Do not make it a big deal.</strong> The less fanfare
              around splitting, the more natural it feels. Scan the receipt,
              share the link, and move on to the conversation.
            </li>
            <li>
              <strong>Be generous with shared items.</strong> If you shared an
              appetizer but your date ate most of it, just assign it to
              yourself. Small gestures like this keep the vibe positive.
            </li>
            <li>
              <strong>Alternate on future dates.</strong> Many couples find a
              rhythm where they take turns covering the bill. Jig is great for
              the dates where you decide to split instead.
            </li>
            <li>
              <strong>Respect the other person&apos;s preference.</strong> If
              your date insists on paying or insists on splitting, go with
              their preference. The goal is for both people to feel comfortable.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/restaurants" className="underline">
                Split Restaurant Bills
              </Link>{" "}
              — for any dining scenario
            </li>
            <li>
              <Link
                href="/blog/receipt-splitting-etiquette"
                className="underline"
              >
                Receipt Splitting Etiquette
              </Link>{" "}
              — social norms and best practices
            </li>
            <li>
              <Link href="/blog/non-drinker-splitting-bills" className="underline">
                Should Non-Drinkers Split Evenly?
              </Link>{" "}
              — when orders differ significantly
            </li>
            <li>
              <Link href="/how-it-works" className="underline">
                How Jig Works
              </Link>{" "}
              — full walkthrough of the tool
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Date Night? Split It in Seconds.
          </h2>
          <p className="mt-2 text-[#555]">
            Scan the receipt, tap your items, and settle up. No awkwardness, no
            math. Free, no account needed.
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
