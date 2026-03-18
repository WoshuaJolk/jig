import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Party Expenses Fairly with Jig",
  description:
    "Split party expenses fairly with Jig. House parties, supplies, alcohol runs, shared costs among hosts and guests. Free receipt splitting, no account needed.",
  alternates: { canonical: absoluteUrl("/use-cases/parties") },
  openGraph: {
    title: "Split Party Expenses Fairly with Jig",
    description:
      "Split party expenses fairly with Jig. House parties, supplies, alcohol runs, and shared costs among hosts and guests.",
    url: absoluteUrl("/use-cases/parties"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PartiesUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split Party Expenses Fairly with Jig",
    description:
      "Step-by-step guide to splitting party supply costs and shared expenses using Jig's AI-powered receipt scanner.",
    step: [
      {
        "@type": "HowToStep",
        name: "Save your receipts",
        text: "Keep receipts from every party-related purchase: groceries, alcohol, decorations, supplies, and rentals.",
      },
      {
        "@type": "HowToStep",
        name: "Upload each receipt to Jig",
        text: "Snap a photo of each receipt. Jig's AI extracts every item and price automatically.",
      },
      {
        "@type": "HowToStep",
        name: "Add the hosts or contributors",
        text: "Enter the names of everyone who is splitting the party costs.",
      },
      {
        "@type": "HowToStep",
        name: "Assign items",
        text: "Assign shared supplies to everyone, and personal purchases to the person who wanted them.",
      },
      {
        "@type": "HowToStep",
        name: "Share and settle up",
        text: "Send the split link to your group so everyone can see their share and pay via Venmo or another payment app.",
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
        { label: "Parties", href: "/use-cases/parties" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Party Expenses Fairly
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Throwing a great party is fun. Figuring out who owes what afterward
            is not. Jig takes the receipts and turns them into a clear,
            itemized split so everyone pays their fair share.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Party Expense Problem
          </h2>
          <p>
            Parties involve a lot of spending spread across multiple people and
            multiple shopping trips. One person grabs the beer and wine. Another
            picks up chips, mixers, and ice. Someone else orders a cake or buys
            decorations. A fourth person pays for the rental of a speaker or
            projector. By the time the party is over, there are receipts
            scattered across four different phones and nobody can remember
            exactly who paid for what.
          </p>
          <p>
            The usual approach is to eyeball it and split everything equally,
            but that rarely feels fair. The person who bought a $60 bottle of
            whiskey for the group should not absorb the same cost as the person
            who contributed a $5 bag of chips. And when some people are
            co-hosting while others are just attending, the expectations around
            who pays get even murkier.
          </p>
          <p>
            Jig brings clarity to all of this. Each receipt becomes an itemized
            split where every dollar is accounted for and assigned to the right
            people.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Works for Parties
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Save every receipt.</strong> As purchases are made in the
              days leading up to the party, have each person save their
              receipts. Paper receipts, digital receipts, and screenshots all
              work.
            </li>
            <li>
              <strong>Scan each receipt into Jig.</strong> After the party, or
              even during prep, upload each receipt to Jig. The AI reads every
              item, price, and tax amount automatically. A grocery receipt with
              40 items takes the same amount of time as one with four.
            </li>
            <li>
              <strong>Add the group.</strong> Enter the names of everyone
              splitting costs. This might be just the co-hosts, or it might
              include all guests depending on the arrangement.
            </li>
            <li>
              <strong>Assign items to people.</strong> This is where the
              fairness happens. Shared supplies like cups, plates, and ice get
              assigned to everyone. The craft beer someone specifically
              requested goes to them. Decorations that one co-host wanted get
              assigned accordingly. Jig splits each item among the assigned
              people.
            </li>
            <li>
              <strong>Share the final split.</strong> Jig generates a link
              showing each person&apos;s total across all receipts. Drop it in
              the group chat and everyone can settle up via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>{" "}
              with one tap.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Party Scenarios
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">House Parties</h3>
              <p className="mt-1">
                The classic scenario. Three friends co-host a house party and
                each makes separate shopping runs. One buys alcohol, another
                buys food, and a third handles supplies and decorations. Jig
                lets you scan all three receipts and create a unified split.
                Each co-host sees one final number: what they owe or what they
                are owed after accounting for what they already spent.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                The Alcohol Run
              </h3>
              <p className="mt-1">
                Liquor store receipts can get expensive fast, and they are one
                of the most common sources of post-party financial tension. Did
                everyone at the party benefit equally from the $200 alcohol
                haul? Probably not. With Jig, you can assign the tequila to the
                people who requested it, split the beer among everyone, and
                leave the fancy wine with whoever picked it out for themselves.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Potluck-Style Contributions
              </h3>
              <p className="mt-1">
                Sometimes party costs are meant to be split evenly among
                co-hosts, while certain items are personal contributions. Jig
                handles both. Assign shared-cost items to all co-hosts and
                personal items to the individual. The math sorts itself out.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Holiday and Themed Parties
              </h3>
              <p className="mt-1">
                Holiday parties, Super Bowl watch parties, and themed gatherings
                often involve specialty items: costumes, themed decorations,
                specific food or drink. These extras can drive up costs quickly.
                Jig lets you itemize everything so the person who insisted on
                the fog machine pays for the fog machine, while the cost of
                standard snacks is shared by all.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Tips for Splitting Party Costs
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Agree on the split before shopping.</strong> Decide
              upfront whether costs are split among co-hosts only or among all
              guests. This avoids surprises and lets people plan accordingly.
            </li>
            <li>
              <strong>Save every receipt.</strong> Even small purchases add up.
              A $7 bag of ice here, a $12 pack of napkins there. Capture
              everything to keep the split accurate.
            </li>
            <li>
              <strong>Scan receipts as you go.</strong> Do not wait until after
              the party when receipts are lost and memories are fuzzy. Scan each
              receipt into Jig right after each purchase.
            </li>
            <li>
              <strong>Keep it light.</strong> Parties are supposed to be fun.
              Jig handles the math so you do not have to turn your group chat
              into an accounting session.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/groceries" className="underline">
                Split Grocery Receipts
              </Link>{" "}
              — for shared shopping runs
            </li>
            <li>
              <Link href="/use-cases/roommates" className="underline">
                Split Bills with Roommates
              </Link>{" "}
              — for ongoing shared expenses
            </li>
            <li>
              <Link href="/blog/why-even-splits-arent-fair" className="underline">
                Why Even Splits Are Not Fair
              </Link>{" "}
              — the math behind unequal costs
            </li>
            <li>
              <Link href="/split-receipt" className="underline">
                Split Receipt
              </Link>{" "}
              — general overview of the tool
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Party Receipts Piling Up?
          </h2>
          <p className="mt-2 text-[#555]">
            Scan them all into Jig and get a clear split in seconds. Free, no
            account needed.
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
