import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Bill Splitting Glossary: Terms You Should Know | Jig",
  description:
    "A comprehensive glossary of bill splitting, receipt parsing, and expense sharing terms. Learn the meaning of itemized split, dutch treat, OCR, gratuity, and 30+ more terms.",
  alternates: { canonical: absoluteUrl("/glossary") },
  openGraph: {
    title: "Bill Splitting Glossary: Terms You Should Know",
    description:
      "A comprehensive glossary of bill splitting, receipt parsing, and expense sharing terms. 30+ definitions explained clearly.",
    url: absoluteUrl("/glossary"),
    siteName: SITE_NAME,
    type: "website",
  },
};

const glossaryTerms = [
  {
    term: "Bill Splitting",
    definition:
      "The practice of dividing a restaurant bill or shared expense among multiple people. Bill splitting can be done equally, by item, or proportionally based on what each person ordered.",
  },
  {
    term: "Receipt Parsing",
    definition:
      "The process of automatically extracting structured data (item names, prices, tax, tip) from a receipt image using AI or OCR technology. Jig uses receipt parsing to instantly read your receipts.",
  },
  {
    term: "Itemized Split",
    definition:
      "A method of splitting a bill where each person pays only for the specific items they ordered, plus their proportional share of tax and tip. This is the fairest way to split a bill.",
  },
  {
    term: "Equal Split",
    definition:
      "Dividing the total bill amount equally among all diners, regardless of what each person ordered. Simple but often considered less fair when orders vary significantly in price.",
  },
  {
    term: "Proportional Split",
    definition:
      "A splitting method where shared costs like tax and tip are distributed in proportion to each person's subtotal. If you ordered 30% of the food, you pay 30% of the tax and tip.",
  },
  {
    term: "Subtotal",
    definition:
      "The sum of all item prices on a receipt before tax, tip, and other charges are added. The subtotal is the baseline used for calculating proportional splits.",
  },
  {
    term: "Tax Distribution",
    definition:
      "The process of fairly dividing sales tax among multiple people when splitting a bill. Jig distributes tax proportionally based on each person's share of the pre-tax subtotal.",
  },
  {
    term: "Tip Distribution",
    definition:
      "The method of dividing gratuity among diners when splitting a bill. Tips can be split equally or proportionally based on each person's order total.",
  },
  {
    term: "Gratuity",
    definition:
      "A voluntary payment made to service staff, typically calculated as a percentage of the pre-tax bill total. Common tip percentages in the US are 15%, 18%, and 20%.",
  },
  {
    term: "Group Dining",
    definition:
      "Eating at a restaurant with multiple people who share a single bill. Group dining often creates the need for bill splitting tools to determine what each person owes.",
  },
  {
    term: "Shared Items",
    definition:
      "Menu items ordered for the table that multiple people consume, such as appetizers, pitchers of drinks, or desserts. Shared items are divided among the people who participated in consuming them.",
  },
  {
    term: "Individual Items",
    definition:
      "Menu items ordered by and consumed by a single person. In an itemized split, individual items are assigned entirely to the person who ordered them.",
  },
  {
    term: "Receipt Scanner",
    definition:
      "A tool or feature that captures receipt information using a camera or uploaded image. Jig's receipt scanner uses AI to automatically identify and extract line items from receipt photos.",
  },
  {
    term: "OCR",
    definition:
      "Optical Character Recognition. A technology that converts images of text (such as printed receipts) into machine-readable text data. OCR is a foundational technology behind receipt scanning and parsing.",
  },
  {
    term: "Venmo",
    definition:
      "A popular peer-to-peer mobile payment service owned by PayPal. Jig integrates with Venmo to let users send payment requests directly from their split results.",
  },
  {
    term: "Payment Request",
    definition:
      "A message sent to someone asking them to pay a specific amount. In the context of bill splitting, payment requests are typically sent via Venmo, Zelle, or similar services after a split is calculated.",
  },
  {
    term: "Split Link",
    definition:
      "A shareable URL that shows each person's portion of a split bill. Jig generates split links so you can send your group a breakdown of what everyone owes without requiring them to download an app.",
  },
  {
    term: "Per-Person Total",
    definition:
      "The final amount each individual owes after a bill has been split, including their share of items, tax, and tip. This is the bottom-line number each person needs to pay.",
  },
  {
    term: "Pre-Tax Tip",
    definition:
      "A tip calculated as a percentage of the subtotal before sales tax is added. For example, a 20% pre-tax tip on a $50 subtotal with $5 tax would be $10 (20% of $50).",
  },
  {
    term: "Post-Tax Tip",
    definition:
      "A tip calculated as a percentage of the total after tax. For example, a 20% post-tax tip on a $50 subtotal with $5 tax would be $11 (20% of $55). This results in a slightly higher tip amount.",
  },
  {
    term: "Service Charge",
    definition:
      "A mandatory fee added by a restaurant, often for large parties. Unlike a voluntary tip, a service charge is a fixed percentage added to the bill and is typically not optional.",
  },
  {
    term: "Auto-Gratuity",
    definition:
      "A gratuity automatically added to the bill by the restaurant, usually for parties of six or more. Auto-gratuity is typically 18-20% and replaces the need for a voluntary tip.",
  },
  {
    term: "Dutch Treat",
    definition:
      "An arrangement where each person pays for their own meal or share of the bill. The term originates from the phrase 'going Dutch' and implies no single person is treating the group.",
  },
  {
    term: "Going Dutch",
    definition:
      "A colloquial expression meaning each person in a group pays for their own expenses rather than one person paying for everyone. Synonymous with dutch treat.",
  },
  {
    term: "Tab",
    definition:
      "An informal term for a running bill at a bar or restaurant. Keeping a tab open means charges accumulate throughout the visit and are settled at the end.",
  },
  {
    term: "Check",
    definition:
      "The bill presented at the end of a meal at a restaurant. In the United States, 'check' and 'bill' are used interchangeably to refer to the statement of charges for food and drinks.",
  },
  {
    term: "Receipt",
    definition:
      "A printed or digital document showing the itemized list of purchases, prices, tax, and total. Jig uses receipt images as the starting point for automated bill splitting.",
  },
  {
    term: "Invoice",
    definition:
      "A formal document requesting payment for goods or services. While typically used in business contexts, invoices can also apply to shared expenses that need to be split among a group.",
  },
  {
    term: "Expense Sharing",
    definition:
      "The broader practice of dividing costs among a group of people. Expense sharing extends beyond restaurant bills to include rent, travel costs, groceries, and household expenses.",
  },
  {
    term: "Cost Allocation",
    definition:
      "The process of assigning specific costs to specific individuals or groups. In bill splitting, cost allocation determines which items and charges belong to each person.",
  },
  {
    term: "IOU",
    definition:
      "Short for 'I Owe You.' An informal acknowledgment of a debt between individuals. In group dining, IOUs often arise when one person covers the bill and others need to pay them back.",
  },
  {
    term: "Settlement",
    definition:
      "The act of paying off a debt or resolving a financial obligation. After splitting a bill, settlement occurs when each person pays their share, often via Venmo or other payment apps.",
  },
  {
    term: "Line Item",
    definition:
      "A single entry on a receipt representing one item ordered, including its name, quantity, and price. Accurate line item extraction is essential for fair itemized bill splitting.",
  },
  {
    term: "Rounding",
    definition:
      "The practice of adjusting split amounts to the nearest cent or dollar. Rounding can cause small discrepancies in splits, which is why precise tools like Jig calculate to the exact penny.",
  },
];

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Bill Splitting Glossary",
    description:
      "A comprehensive glossary of bill splitting, receipt parsing, and expense sharing terminology.",
    url: absoluteUrl("/glossary"),
    hasDefinedTerm: glossaryTerms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
    })),
  };

  return (
    <SeoPageLayout breadcrumbs={[{ label: "Glossary", href: "/glossary" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Bill Splitting Glossary
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Terms you should know when splitting bills, parsing receipts, and
            sharing expenses with friends. Whether you are new to{" "}
            <Link href="/" className="underline">
              Jig
            </Link>{" "}
            or just curious about the terminology, this glossary has you
            covered.
          </p>
        </header>

        <nav className="rounded-lg border border-[#e5e3de] bg-white p-4">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#999]">
            Quick Navigation
          </h2>
          <div className="flex flex-wrap gap-2">
            {glossaryTerms.map((item) => (
              <a
                key={item.term}
                href={`#${item.term.toLowerCase().replace(/[\s-]+/g, "-")}`}
                className="text-sm text-[#555] hover:text-[#1a1a1a] hover:underline"
              >
                {item.term}
              </a>
            ))}
          </div>
        </nav>

        <section className="space-y-8">
          {glossaryTerms.map((item) => (
            <div
              key={item.term}
              id={item.term.toLowerCase().replace(/[\s-]+/g, "-")}
              className="border-b border-[#e5e3de] pb-6 last:border-b-0"
            >
              <h2 className="text-xl font-semibold">{item.term}</h2>
              <p className="mt-2 text-[#555]">{item.definition}</p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <p>
            Want to learn more about bill splitting and how Jig works? Check out
            these helpful pages:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/how-it-works" className="underline">
                How Jig Works
              </Link>{" "}
              &mdash; a step-by-step walkthrough of the splitting process
            </li>
            <li>
              <Link href="/faq" className="underline">
                Frequently Asked Questions
              </Link>{" "}
              &mdash; answers to common questions about Jig
            </li>
            <li>
              <Link href="/blog/how-to-split-a-restaurant-bill" className="underline">
                How to Split a Restaurant Bill Fairly
              </Link>{" "}
              &mdash; our guide to fair bill splitting methods
            </li>
            <li>
              <Link href="/blog/how-to-calculate-tax-and-tip-per-person" className="underline">
                How to Calculate Tax and Tip Per Person
              </Link>{" "}
              &mdash; understanding tax and tip distribution
            </li>
            <li>
              <Link href="/help" className="underline">
                Help Center
              </Link>{" "}
              &mdash; get help using Jig
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Try Jig for Free</h2>
          <p className="mt-2 text-[#555]">
            Now that you know the lingo, put it into practice. Upload a receipt
            and split it in seconds.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Split a Receipt Now
          </Link>
        </section>
      </article>
    </SeoPageLayout>
  );
}
