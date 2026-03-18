import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Dinner Split Calculator — Split Restaurant Bills Instantly",
  description:
    "Split restaurant dinner bills instantly with Jig. Upload the receipt, assign dishes to each person, and calculate fair shares with proportional tax and tip. Free, no account needed.",
  alternates: { canonical: absoluteUrl("/dinner-split-calculator") },
  openGraph: {
    title: "Dinner Split Calculator — Split Restaurant Bills Instantly",
    description:
      "Split restaurant dinner bills instantly with Jig. Upload the receipt, assign dishes to each person, and calculate fair shares.",
    url: absoluteUrl("/dinner-split-calculator"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function DinnerSplitCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free dinner split calculator. Upload a restaurant receipt, assign dishes to people, and calculate each person's fair share instantly.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        {
          label: "Dinner Split Calculator",
          href: "/dinner-split-calculator",
        },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Dinner Split Calculator
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            The moment the check arrives at a group dinner, the fun stops and
            the math starts. Jig is a free dinner split calculator that handles
            the entire process so you can get back to enjoying the evening.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The End-of-Dinner Problem
          </h2>
          <p>
            You know the scene. A great dinner with friends is winding down.
            The server drops the check and suddenly everyone is staring at a
            piece of paper covered in abbreviations, trying to figure out which
            &ldquo;CHKN PARM&rdquo; was theirs and whether the &ldquo;BTL
            CHARD&rdquo; was the wine they shared or the one the other end of
            the table ordered.
          </p>
          <p>
            Then comes the real challenge. Someone has to add up each
            person&apos;s items, calculate their share of tax, decide on a tip
            percentage, distribute that proportionally, and announce the totals.
            For a table of four, this takes a few minutes. For a table of
            twelve at a birthday dinner, it can take longer than dessert.
          </p>
          <p>
            Most groups give up and split evenly. That is fast, but it is not
            fair. The person who had soup and water ends up subsidizing the
            person who had the ribeye and three old fashioneds. Jig solves this
            by making fair, item-level splitting just as fast as an even split.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How the Dinner Split Calculator Works
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Photograph the restaurant receipt.</strong> When the check
              arrives, snap a photo with your phone. You can also upload a
              picture later if you forgot in the moment.
            </li>
            <li>
              <strong>AI reads the bill.</strong> Jig&apos;s{" "}
              <Link href="/receipt-scanner" className="underline">
                AI receipt scanner
              </Link>{" "}
              parses every dish, drink, price, tax line, and tip from the
              image. It handles messy restaurant receipt formatting, faded
              thermal paper, and abbreviated item names.
            </li>
            <li>
              <strong>Add everyone at the table.</strong> Enter the names of
              each person in your dinner group.
            </li>
            <li>
              <strong>Assign dishes and drinks.</strong> Tap each menu item to
              assign it to whoever ordered it. That shared appetizer? Assign it
              to everyone who had some. The bottle of wine? Split it among the
              three people who drank it. Individual entrees go to their
              respective diners.
            </li>
            <li>
              <strong>Get each person&apos;s total.</strong> Jig calculates each
              diner&apos;s subtotal, then distributes{" "}
              <Link href="/tip-calculator" className="underline">
                tax and tip
              </Link>{" "}
              proportionally. The person who spent more on food pays more in tax
              and tip. It is the fairest method possible.
            </li>
            <li>
              <strong>Share and pay.</strong> Send the split link to the group
              chat. Everyone sees exactly what they owe and can settle up
              instantly via{" "}
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

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Handling Common Dinner Complications
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Shared Appetizers and Sides</h3>
              <p className="mt-1">
                Shared dishes are the biggest source of confusion in dinner
                splits. Jig lets you assign a single item to multiple people,
                and the cost is divided evenly among them. If four people shared
                a forty-dollar seafood tower, each pays ten dollars for it in
                addition to their own entrees.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bottles of Wine and Pitchers</h3>
              <p className="mt-1">
                Not everyone at the table may have had wine. With Jig, you
                assign the bottle only to the people who drank it. No more
                non-drinkers subsidizing a hundred-dollar bottle of wine they
                never touched.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Birthday and Special Occasion Dinners</h3>
              <p className="mt-1">
                When the group wants to cover the guest of honor&apos;s meal,
                simply do not assign any items to the birthday person. Their
                share gets absorbed into everyone else&apos;s totals
                proportionally. It is seamless and avoids the awkward
                &ldquo;everyone throw in an extra ten&rdquo; conversation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Large Groups</h3>
              <p className="mt-1">
                Jig scales effortlessly from two people to twenty. The bigger
                the group, the more time Jig saves compared to manual
                calculation. A twelve-person dinner that would take ten minutes
                to split by hand takes about sixty seconds with Jig.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Better Than Asking the Server to Split
          </h2>
          <p>
            Some groups ask the server to split the{" "}
            <Link href="/check-splitter" className="underline">
              check
            </Link>{" "}
            onto separate cards. This works but has downsides: it slows down the
            server, does not account for shared items, and still requires
            everyone to calculate their own tip. With Jig, the server processes
            a single payment, and you handle the splitting digitally in less
            time than it would take the server to run five separate cards.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Works for Any Restaurant, Any Cuisine
          </h2>
          <p>
            Jig&apos;s AI handles receipts from any type of restaurant: fast
            casual, fine dining, sushi bars, pizza joints, barbecue, dim sum,
            food halls, and everything in between. The receipt format does not
            matter. Whether it is a handwritten check from an old-school diner
            or a detailed printout from a Michelin-starred restaurant, the AI
            reads it and structures the data for splitting.
          </p>
          <p>
            Explore more ways to split bills with our{" "}
            <Link href="/going-dutch" className="underline">
              going dutch calculator
            </Link>{" "}
            or our general{" "}
            <Link href="/restaurant-bill-calculator" className="underline">
              restaurant bill calculator
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split Your Dinner Bill Right Now
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
