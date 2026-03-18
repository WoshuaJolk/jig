import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Restaurant Bills with Jig — Group Dining Made Easy",
  description:
    "Split restaurant bills fairly with Jig. Handle large groups, shared appetizers, separate drink orders, and proportional tax and tip. Free, no app download needed.",
  alternates: { canonical: absoluteUrl("/use-cases/restaurants") },
  openGraph: {
    title: "Split Restaurant Bills with Jig — Group Dining Made Easy",
    description:
      "Split restaurant bills fairly with Jig. Handle large groups, shared appetizers, separate drink orders, and proportional tax and tip.",
    url: absoluteUrl("/use-cases/restaurants"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RestaurantsUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split a Restaurant Bill with Jig",
    description:
      "Step-by-step guide to splitting a restaurant bill fairly using Jig's AI-powered receipt scanner.",
    step: [
      {
        "@type": "HowToStep",
        name: "Photograph the check",
        text: "When the bill arrives, snap a photo with your phone or upload an existing image.",
      },
      {
        "@type": "HowToStep",
        name: "Review the AI scan",
        text: "Jig's AI extracts every item, price, tax, and tip from the receipt automatically.",
      },
      {
        "@type": "HowToStep",
        name: "Add your dining group",
        text: "Enter the names of everyone at the table.",
      },
      {
        "@type": "HowToStep",
        name: "Assign items to diners",
        text: "Tap each item and select who ordered it. Shared items are split among the relevant people.",
      },
      {
        "@type": "HowToStep",
        name: "Share the split",
        text: "Send the shareable link to your group so everyone can see what they owe and settle up via Venmo.",
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
        { label: "Restaurants", href: "/use-cases/restaurants" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Restaurant Bills with Jig
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Group dinners are great until the check arrives. Jig takes the
            stress out of splitting the bill so you can focus on the
            conversation, not the math.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Restaurant Bills Are Hard to Split
          </h2>
          <p>
            Restaurant checks are uniquely complex. Unlike a simple purchase
            with a few items, a restaurant bill can include individual entrees,
            shared appetizers, drinks that only some people ordered, desserts,
            after-dinner coffees, sales tax, and a tip that needs to be fair to
            both the server and the diners.
          </p>
          <p>
            The traditional approach — passing the check around the table while
            everyone tries to find their items — is slow, awkward, and almost
            always inaccurate. Someone forgets to include their drink. Tax gets
            split evenly even though it should be proportional. The tip
            calculation devolves into a group argument. And the person who
            organized the dinner ends up spending twenty minutes with a
            calculator.
          </p>
          <p>
            Jig replaces all of that with a thirty-second workflow that produces
            a fair, itemized split every time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How It Works at the Table
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>The check arrives.</strong> Snap a photo of the receipt
              with your phone. Jig works with any restaurant receipt — casual
              dining, fine dining, bars, cafes, and fast casual.
            </li>
            <li>
              <strong>AI reads the check.</strong> In seconds, Jig extracts
              every line item including appetizers, entrees, drinks, desserts,
              tax, and tip. Review the results and make any quick corrections.
            </li>
            <li>
              <strong>Add your group.</strong> Enter everyone&apos;s name. Jig
              handles groups of any size, from a date night to a birthday dinner
              for twenty.
            </li>
            <li>
              <strong>Assign items.</strong> Tap each item and select who
              ordered it. This is the key step — it takes about thirty seconds
              and makes the entire split fair.
            </li>
            <li>
              <strong>Share the link.</strong> Jig generates a URL showing each
              person&apos;s itemized total. Drop it in the group chat and
              everyone can settle up through{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>{" "}
              with one tap.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Handling Tricky Restaurant Scenarios
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Shared Appetizers</h3>
              <p className="mt-1">
                The table ordered nachos, calamari, and a cheese board for
                everyone to share. In Jig, assign those items to every person
                who ate them. Jig divides the cost equally among those people
                and folds it into their subtotal before calculating tax and tip.
                If only four of six people touched the nachos, only those four
                pay for it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Drinkers vs. Non-Drinkers
              </h3>
              <p className="mt-1">
                This is one of the most common sources of unfair splits. When
                some people order cocktails at $15 each and others stick to
                water, an even split means the water drinkers are subsidizing
                the bar tab. With Jig, each drink is assigned to whoever ordered
                it. Non-drinkers pay zero for alcohol. Fair and straightforward.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Large Parties (8+)</h3>
              <p className="mt-1">
                Large group dinners are where manual splitting completely breaks
                down. The receipt is long, the orders are varied, and keeping
                track of who had what becomes impossible. Jig&apos;s AI scans
                the entire receipt regardless of length, and the assignment
                interface handles any number of people. Large parties are
                actually where Jig shines the most.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Automatic Gratuity
              </h3>
              <p className="mt-1">
                Many restaurants add an automatic 18-20% gratuity for large
                parties. Jig reads this from the receipt and distributes it
                proportionally, just like any other tip. If the group wants to
                add extra tip on top of the auto-gratuity, Jig handles that too.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                The &ldquo;I Only Had a Salad&rdquo; Problem
              </h3>
              <p className="mt-1">
                Nothing kills the vibe of a group dinner faster than splitting
                the bill evenly when the orders were wildly different. The
                person who had a $12 salad should not pay the same as the
                person who had a $50 steak dinner with wine. Jig&apos;s
                item-level assignment makes this a non-issue. Everyone pays
                for what they actually ordered, period.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Fair Tax and Tip for Restaurants
          </h2>
          <p>
            Jig distributes both tax and tip proportionally based on each
            person&apos;s share of the subtotal. If you ordered 30% of the
            food, you pay 30% of the tax and 30% of the tip. This is the
            mathematically fairest approach and the same logic restaurants use
            when calculating auto-gratuity.
          </p>
          <p>
            Read more about how proportional tip distribution works in our{" "}
            <Link href="/tip-calculator" className="underline">
              tip calculator
            </Link>{" "}
            guide, complete with worked examples. You can also check out our{" "}
            <Link href="/restaurant-bill-calculator" className="underline">
              restaurant bill calculator
            </Link>{" "}
            page for more details on the tool itself.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Tips for Smooth Group Dining
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Mention Jig before you order.</strong> Let the table know
              you will scan the receipt to split it fairly. This puts everyone
              at ease to order what they actually want.
            </li>
            <li>
              <strong>Ask for one check.</strong> It is easier to split one
              receipt with Jig than to manage multiple separate checks. Plus,
              it is less work for the server.
            </li>
            <li>
              <strong>Scan right away.</strong> As soon as the check arrives,
              snap a photo. The sooner you start, the sooner everyone knows
              what they owe.
            </li>
            <li>
              <strong>Share the link in the group chat.</strong> Drop the Jig
              split link where everyone can see it. Transparency builds trust.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link
                href="/blog/how-to-split-a-restaurant-bill"
                className="underline"
              >
                How to Split a Restaurant Bill
              </Link>{" "}
              — our blog guide
            </li>
            <li>
              <Link href="/blog/group-dining-guide" className="underline">
                Group Dining Guide
              </Link>{" "}
              — etiquette and logistics
            </li>
            <li>
              <Link href="/split-receipt" className="underline">
                Split Receipt
              </Link>{" "}
              — general overview of the tool
            </li>
            <li>
              <Link href="/bill-splitter" className="underline">
                Bill Splitter
              </Link>{" "}
              — all about bill splitting
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Your Next Group Dinner, Solved
          </h2>
          <p className="mt-2 text-[#555]">
            Snap a photo of the check. Jig does the rest. Free, no account
            needed.
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
