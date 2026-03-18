import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Tailgate Party Bill";
const description =
  "Tailgates involve big grocery runs, grills, and coolers of beer. Here's how to split costs among the crew fairly.";
const slug = "/blog/how-to-split-a-tailgate-party-bill";
const datePublished = "2026-02-20";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: {
    title,
    description,
    url: absoluteUrl(slug),
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function HowToSplitATailgatePartyBill() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: absoluteUrl(slug),
  };

  return (
    <BlogPostLayout title={title} description={description} datePublished={datePublished}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p>
        A tailgate done right is one of the great American group experiences: a
        parking lot full of good food, cold drinks, and anticipation. Getting to
        the "done right" part requires someone to organize the grocery run, haul
        the equipment, and manage a budget for a group that may include people
        who contributed nothing and eat everything.
      </p>
      <p>
        Here is a practical guide to splitting tailgate costs fairly so the
        person who did the shopping does not also pay for the whole thing.
      </p>

      <h2>The Pre-Game Grocery Split</h2>
      <p>
        The grocery run is the biggest tailgate expense and the one most worth
        getting right. A proper tailgate grocery haul for fifteen people — burgers,
        brats, hot dogs, buns, chips, dips, condiments, ice, drinks — can easily
        run $150–250.
      </p>
      <p>
        Two approaches that work:
      </p>

      <h3>Everyone chips in before the shop</h3>
      <p>
        Set a per-person food budget, collect it upfront via Venmo, and shop to
        that budget. "$20 a head for food, Venmo Jake by Friday" is clean and
        ensures the shopper is not fronting money. Whatever is left over after
        shopping goes toward ice or extras.
      </p>

      <h3>One person shops, everyone splits the receipt</h3>
      <p>
        The most common approach: one person does the shopping and saves the
        receipt. At the tailgate, take a photo of the receipt and use{" "}
        <Link href="/">Jig</Link> to split it. The AI reads every line item, you
        can separate shared items from any personal purchases the shopper slipped
        in, and the result is a clean per-person total. Share the split link and
        send Venmo requests right there in the parking lot.
      </p>

      <h2>Who Owns the Equipment?</h2>
      <p>
        Tailgates require gear: a portable grill, a cooler, folding tables,
        chairs, a tent or canopy. These items belong to someone — either the
        organizer owns them or they were acquired specifically for the group.
      </p>
      <p>
        A few considerations:
      </p>
      <ul>
        <li>
          <strong>If one person always brings their own gear:</strong> their
          contribution is real and significant. A grill that cost $200, a yeti
          cooler that cost $300 — you do not need to reimburse depreciation, but
          acknowledging it is appropriate. The equipment owner being exempt from
          the food contribution is a fair trade.
        </li>
        <li>
          <strong>If equipment was purchased for the group:</strong> that initial
          cost should be split among the regular tailgate crew, not absorbed by
          the person who happened to buy it.
        </li>
        <li>
          <strong>Consumables:</strong> ice, propane, charcoal, and paper goods
          are recurring costs that should always be split equally among attendees.
        </li>
      </ul>

      <h2>Beer and Drinks</h2>
      <p>
        Beer is often the biggest single line item at a tailgate. Three cases
        of beer for fifteen people runs $75–90. Managing this fairly depends on
        the group:
      </p>
      <ul>
        <li>
          <strong>Assign it:</strong> "Derek and Marco, can you handle the beer?"
          works for groups where responsibility naturally distributes. Make sure
          they get reimbursed by non-beer-buyers.
        </li>
        <li>
          <strong>Include it in the per-head contribution:</strong> factor drinks
          into the overall per-person number. If non-drinkers are coming, offer
          them a lower contribution amount.
        </li>
        <li>
          <strong>BYOB:</strong> everyone brings their own drinks. Simplest to
          track; less communal, but no one can claim they paid for someone else's
          beers.
        </li>
      </ul>

      <h2>Per-Car vs. Per-Person Contribution</h2>
      <p>
        Tailgates often involve carloads of people arriving together. A per-car
        contribution structure can work for smaller tailgates where each vehicle
        brings something: "each car brings a case of beer or a food item."
      </p>
      <p>
        For larger tailgates with variable group sizes per car, per-person is
        fairer. A car of five people showing up and contributing the same as a
        car of two is not equitable.
      </p>

      <h2>Walk-Up Attendees</h2>
      <p>
        Tailgates attract stragglers — people who heard about it and swing by,
        people who bring uninvited friends, coworkers who heard there would be
        brats. Handle this graciously but set a soft expectation: anyone who eats
        and drinks chips in. A casual "we've got food for everyone, just chip in
        $10 if you're eating" is socially smooth and effective.
      </p>
      <p>
        If you have a cover it is much simpler: use a Venmo QR code posted near
        the grill. "Tailgate contribution: $15" with a scannable code makes
        collection frictionless even from people who just arrived.
      </p>

      <h2>After the Tailgate: Settling Up</h2>
      <p>
        Settling up before you go in to the game is ideal — everyone is in the
        parking lot, the food is eaten, and the math is fresh. Pull up the split
        on <Link href="/">Jig</Link>, confirm each person's total, and have
        everyone send their Venmo payment right then. Post-game, people scatter.
        Collect before kickoff.
      </p>

      <h2>Quick Tailgate Cost Checklist</h2>
      <ul>
        <li>Decide per-head contribution and communicate it before the tailgate.</li>
        <li>Use Jig to split the grocery receipt accurately.</li>
        <li>Acknowledge the equipment owner's contribution.</li>
        <li>Track beer separately if some attendees do not drink.</li>
        <li>Collect payments before going into the game.</li>
        <li>Accommodate walk-up guests with a simple contribution ask.</li>
      </ul>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-expenses-at-a-sporting-event">How to Split Expenses at a Sporting Event</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-super-bowl-party-food-costs">How to Split Super Bowl Party Food Costs</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-costco-run">How to Split a Costco Run</Link>
        </li>
        <li>
          <Link href="/how-it-works">How Jig Works</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
