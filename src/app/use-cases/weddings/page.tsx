import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Wedding and Event Expenses with Jig",
  description:
    "Split wedding party expenses fairly with Jig. Bridesmaids splitting dress costs, groomsmen splitting bachelor party bills, group hotel rooms, and shared event costs.",
  alternates: { canonical: absoluteUrl("/use-cases/weddings") },
  openGraph: {
    title: "Split Wedding and Event Expenses with Jig",
    description:
      "Split wedding party expenses fairly with Jig. Bridesmaids splitting dress costs, groomsmen splitting bachelor party bills, and group hotel rooms.",
    url: absoluteUrl("/use-cases/weddings"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function WeddingsUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split Wedding and Event Expenses with Jig",
    description:
      "Step-by-step guide to splitting wedding party and event expenses fairly using Jig's AI-powered receipt scanner.",
    step: [
      {
        "@type": "HowToStep",
        name: "Collect the receipt or invoice",
        text: "Gather the receipt from the hotel, restaurant, activity, or vendor. Screenshots of digital invoices work too.",
      },
      {
        "@type": "HowToStep",
        name: "Upload to Jig",
        text: "Snap a photo or upload the receipt. Jig's AI extracts every line item and charge automatically.",
      },
      {
        "@type": "HowToStep",
        name: "Add the wedding party",
        text: "Enter the names of everyone splitting the expense — bridesmaids, groomsmen, or the full group.",
      },
      {
        "@type": "HowToStep",
        name: "Assign charges",
        text: "Assign each charge to the people responsible. Shared costs like hotel rooms or group dinners are split among the relevant people.",
      },
      {
        "@type": "HowToStep",
        name: "Share and settle up",
        text: "Send the shareable link to the group chat so everyone can see their total and pay via Venmo or any payment app.",
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
        { label: "Weddings", href: "/use-cases/weddings" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Wedding and Event Expenses
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Weddings are expensive enough without the added stress of figuring
            out who owes what. Jig keeps the wedding party finances transparent
            and fair so everyone can focus on celebrating.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Wedding Expenses Are Uniquely Complicated
          </h2>
          <p>
            A wedding is not a single event. It is a months-long series of
            expenses spread across multiple people with different levels of
            involvement. The maid of honor books the bridal shower venue. A
            groomsman puts the bachelor party house rental on his card. Three
            bridesmaids split the cost of decorations. Someone else covers the
            rehearsal dinner drinks. By the time the wedding day arrives, there
            is a tangled web of IOUs and Venmo requests that nobody can keep
            straight.
          </p>
          <p>
            The emotional stakes make it worse. Nobody wants to be the person
            who brings up money during what is supposed to be a joyful occasion.
            But unresolved expenses breed resentment, and resentment has no
            place in a wedding party. Jig gives you a neutral, transparent way
            to handle the money so the relationships stay intact.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Wedding Expenses to Split
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                Bachelor and Bachelorette Parties
              </h3>
              <p className="mt-1">
                These trips often involve shared house rentals, group dinners,
                activities, bar tabs, and supplies. One person typically books
                and pays for each expense, then needs to collect from everyone
                else. With Jig, each receipt gets scanned and split in real
                time. Dinner? Scan it. The escape room tickets? Scan them. The
                bar tab at the end of the night? Scan it. Everyone sees their
                running total and can settle up as they go or at the end of the
                trip.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Bridesmaid and Groomsmen Costs
              </h3>
              <p className="mt-1">
                Bridesmaids often share the cost of the bridal shower, matching
                outfits, group gifts, and day-of supplies like getting ready
                snacks and emergency kits. Groomsmen might split the cost of
                matching ties, a gift for the groom, or a round of golf the
                morning of the wedding. These costs add up, and the person who
                fronts the money should not have to chase down payments for
                weeks afterward. Jig makes every charge visible and lets people
                pay their share immediately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Group Hotel Rooms
              </h3>
              <p className="mt-1">
                Wedding guests often double or triple up in hotel rooms to save
                money. When three people share a room for two nights, the math
                should be simple — but it rarely is once you add resort fees,
                parking charges, minibar purchases, and room service. Jig lets
                you scan the hotel folio and assign each charge to the right
                person. The room rate gets split evenly, but the minibar charge
                goes to whoever raided it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Rehearsal Dinner and Welcome Party
              </h3>
              <p className="mt-1">
                If the wedding party is splitting the cost of a rehearsal dinner
                or welcome drinks, the bill can be substantial. Multiple
                courses, open bar tabs, and private dining room fees all need to
                be divided. Jig handles restaurant receipts of any length and
                distributes tax and tip proportionally based on what each person
                consumed.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How to Keep Wedding Finances Stress-Free
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Designate a money person.</strong> Choose one member of the
              wedding party to handle Jig splits for each event. This keeps
              things organized and avoids duplicate requests.
            </li>
            <li>
              <strong>Split as you go.</strong> Do not wait until after the
              wedding to sort out expenses. Scan receipts and share splits in
              real time during each event. People are more likely to pay
              promptly when the memory is fresh.
            </li>
            <li>
              <strong>Be upfront about budgets.</strong> Before booking anything,
              discuss budget expectations with the group. Not everyone in the
              wedding party has the same financial situation, and
              surprises are never welcome when money is involved.
            </li>
            <li>
              <strong>Use the shareable link as a record.</strong> Every Jig
              split creates a permanent link showing exactly what was charged
              and who owes what. This serves as a receipt of the split itself,
              which can prevent any &ldquo;I already paid for that&rdquo;
              disputes down the road.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/travel" className="underline">
                Split Travel Expenses
              </Link>{" "}
              — for destination weddings and group trips
            </li>
            <li>
              <Link href="/use-cases/parties" className="underline">
                Split Party Expenses
              </Link>{" "}
              — for showers and celebrations
            </li>
            <li>
              <Link href="/blog/how-to-ask-friends-to-pay-you-back" className="underline">
                How to Ask Friends to Pay You Back
              </Link>{" "}
              — tactful approaches for any situation
            </li>
            <li>
              <Link href="/features" className="underline">
                Jig Features
              </Link>{" "}
              — full overview of what Jig can do
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Wedding Expenses Piling Up?
          </h2>
          <p className="mt-2 text-[#555]">
            Scan any receipt, split it with the wedding party, and share the
            link. Free, no account needed.
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
