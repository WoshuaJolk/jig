import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Costco Membership with Friends or Roommates";
const description =
  "Costco memberships cost $65-$130/year. Here's how to share the membership and split bulk purchase costs fairly.";
const slug = "/blog/how-to-split-a-costco-membership";
const datePublished = "2026-03-05";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function HowToSplitACostcoMembership() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h2>Is Sharing a Costco Membership Worth It?</h2>
      <p>
        Costco's Gold Star membership costs $65/year and the Executive tier runs $130/year. For a single household that shops there regularly, the membership pays for itself quickly. For someone who only goes a few times a year, it may not. Sharing the cost with a roommate, partner, or friend makes the math work for more people.
      </p>
      <p>
        The good news: Costco's membership structure actually accommodates this. Here is how it works and how to split both the membership cost and the shopping trips fairly.
      </p>

      <h2>How Costco Membership Sharing Works</h2>
      <p>
        Every Costco membership includes one free household card. The household card holder must live at the same address as the primary member. This means:
      </p>
      <ul>
        <li>Roommates can share a single membership legitimately — one person is the primary member, the other gets the household card</li>
        <li>Partners living together can easily share one membership</li>
        <li>Friends who live at different addresses cannot officially share using the household card</li>
      </ul>
      <p>
        For friends at different addresses: Costco does allow you to bring guests, and some members informally coordinate shopping trips. Costco has been tightening enforcement on card sharing, so be aware of their current policy if you go this route.
      </p>

      <h2>Splitting the Membership Cost</h2>
      <p>
        If two people at the same address are sharing a membership, splitting the annual cost equally is straightforward. $65/year split between two people is $32.50 each. $130/year is $65 each.
      </p>
      <p>
        The primary member pays upfront and the other person Venmos their half. Set a reminder to split it again at renewal, since it can be easy to forget after a year.
      </p>
      <p>
        If three or more housemates want to benefit from Costco runs, only two can officially hold cards — but all three can contribute to the membership cost. A three-way split of the Gold Star membership is about $22/person per year, which is very reasonable for access to bulk pricing.
      </p>

      <h2>Splitting the Shopping Trips</h2>
      <p>
        This is where things get more nuanced. Costco runs often involve large quantities and high ticket totals. A single trip might easily be $200-$400. When multiple people are buying, figuring out who owes what requires more than a rough estimate.
      </p>
      <p>
        The cleanest approach: after checkout, photograph the receipt and run it through <a href="/">Jig</a>. The AI reads every line item. Each person marks the items they bought. Shared items (paper towels, cleaning supplies, communal food) get split equally. Personal items (one person's protein powder, another's specific snacks) are assigned individually. Everyone gets their exact total and pays via Venmo in one step.
      </p>
      <p>
        This matters more at Costco than at a regular grocery store because the per-item prices are higher. A single rotisserie chicken is under $6, but a 6-pack of salmon is $45. Getting the split right saves meaningful money.
      </p>

      <h2>Handling Bulk Items That Benefit One Person More</h2>
      <p>
        Costco's bulk sizing creates a specific fairness challenge. If you buy a 48-count paper towel pack to share, splitting it equally makes sense. But if one roommate wants a 5-pound bag of coffee and the other rarely drinks it, that is not a shared item regardless of where it was purchased.
      </p>
      <p>
        Apply the same rule you would for any grocery run: items that genuinely benefit everyone equally get split. Items that primarily benefit one person get paid for by that person. The fact that you bought it at Costco does not change the underlying logic.
      </p>

      <h2>The Executive Membership: Is It Worth Sharing?</h2>
      <p>
        The Executive membership costs $130/year and includes 2% cash back on most purchases, up to $1,000/year. To break even on the extra $65/year upgrade cost, you need to spend about $3,250 at Costco annually as a household.
      </p>
      <p>
        If two people are sharing and each spends $1,600+ per year at Costco (about $133/month), the Executive tier pays off. If you shop there less frequently, stick with Gold Star.
      </p>

      <h2>Tips for Smooth Costco Splits</h2>
      <ul>
        <li>Agree before the trip what is going on the shared list versus personal list</li>
        <li>The primary member pays at checkout; others pay their share via Venmo the same day</li>
        <li>Keep the membership renewal on a shared calendar so both people are prepared for the annual charge</li>
        <li>If one person shops at Costco significantly more than the other, revisit whether a 50/50 membership split still makes sense</li>
      </ul>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/how-to-split-a-joint-grocery-order">How to Split a Joint Grocery Order Fairly</a></li>
        <li><a href="/blog/splitting-household-expenses-system">A System for Splitting Household Expenses That Actually Works</a></li>
        <li><a href="/blog/splitting-amazon-prime-membership">How to Split an Amazon Prime Membership</a></li>
      </ul>
    </BlogPostLayout>
  );
}
