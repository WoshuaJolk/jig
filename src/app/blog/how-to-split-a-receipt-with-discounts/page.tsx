import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Receipt That Has Discounts or Coupons";
const description =
  "Coupons and discounts make bill splitting tricky. Here's how to fairly apply discounts when splitting a receipt.";
const slug = "/blog/how-to-split-a-receipt-with-discounts";
const datePublished = "2026-03-01";

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

export default function HowToSplitAReceiptWithDiscounts() {
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
        A coupon or discount code changes the structure of a shared receipt in a way that most
        splitting approaches weren't designed to handle. The question isn't just "what did each
        person order?" — it's also "who gets credit for the savings, and how should those savings
        be distributed?"
      </p>
      <p>
        The answer depends on what kind of discount it is. Here's a breakdown of the most common
        scenarios.
      </p>

      <h2>Scenario 1: A Percentage Discount on the Whole Bill</h2>
      <p>
        If someone applied a 20% off coupon to the entire order, the discount reduced the total
        bill proportionally. The fairest approach: distribute the discount proportionally as well.
        Each person pays their original item total minus their proportional share of the discount.
      </p>
      <p>
        Example: $200 subtotal, 20% coupon saves $40. Person A had $50 of food (25% of the total).
        They get 25% of the discount: $10 off, so they owe $40 instead of $50. This way, everyone
        benefits from the discount in proportion to how much they ordered.
      </p>

      <h2>Scenario 2: A Flat Dollar Amount Off</h2>
      <p>
        A "$15 off your order" type coupon works the same way as a percentage discount for
        splitting purposes. Calculate each person's proportion of the pre-discount subtotal,
        then apply that proportion of the $15 savings to each person's share.
      </p>
      <p>
        Alternatively, if the group agrees, the $15 savings can be applied to the person who had
        the coupon — they pay $15 less than their calculated share, others pay their full
        itemized totals. This is reasonable when the coupon belongs to one person specifically
        (a loyalty reward, a birthday discount, their app-based offer).
      </p>

      <h2>Scenario 3: A Discount on a Specific Item</h2>
      <p>
        If the coupon discounts a specific item — "buy one entrée, get one 50% off" — the savings
        should stay with the people who ordered those items. If you and a friend split the BOGO
        deal, you each pay the reduced price for your entrée. The rest of the table pays full
        price for their items.
      </p>
      <p>
        This is the cleanest scenario: item-specific discounts apply to the people who ordered
        those items.
      </p>

      <h2>Scenario 4: Loyalty Points or App Credits</h2>
      <p>
        When someone pays with loyalty points, a stored credit, or a promo code from their
        personal account, the question is whether that credit is a personal benefit or a group
        benefit. Generally, if the savings came from one person's personal account or earned
        points, the savings belong to that person — they pay less, others pay their itemized share.
      </p>
      <p>
        If the person shared the promo code with the group ("I have a code that gets everyone 15%
        off"), the savings belong to everyone equally.
      </p>

      <h2>The Tip Question</h2>
      <p>
        Here's a nuance that matters: tip should be calculated on the pre-discount subtotal, not
        the discounted total. The server's effort didn't change because a coupon was applied.
        Tipping on the reduced amount shortchanges the server — and in large parties, it can make
        a meaningful difference.
      </p>
      <p>
        This also means the group saves the discount and tips correctly — two separate calculations.
      </p>

      <h2>Using a Receipt Tool with Discounts</h2>
      <p>
        When you photograph a discounted receipt with <Link href="/">Jig</Link>, the AI reads the
        line items including any discount lines. You can see the pre-discount amounts and the
        discount applied. From there, assigning items and calculating each person's proportional
        share of the savings is straightforward — no manual percentage math required.
      </p>
      <p>
        For grocery or supply store receipts with multiple coupon lines, see our guide on{" "}
        <Link href="/blog/how-to-split-a-very-long-receipt">
          how to split a very long receipt
        </Link>
        .
      </p>

      <h2>Quick Decision Guide</h2>
      <table>
        <thead>
          <tr>
            <th>Discount type</th>
            <th>Fair approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>% off the whole bill</td>
            <td>Everyone's share reduced proportionally</td>
          </tr>
          <tr>
            <td>$ off the whole bill (shared code)</td>
            <td>Everyone's share reduced proportionally</td>
          </tr>
          <tr>
            <td>$ off (one person's personal code)</td>
            <td>That person pays less; others pay full itemized</td>
          </tr>
          <tr>
            <td>BOGO or item-specific</td>
            <td>Savings stay with the people who ordered those items</td>
          </tr>
          <tr>
            <td>Tip calculation</td>
            <td>Always on pre-discount subtotal</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-when-someone-used-gift-card">
            How to Split a Bill When Someone Used a Gift Card
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-very-long-receipt">
            How to Split a Very Long Receipt (50+ Items)
          </Link>
        </li>
        <li>
          <Link href="/blog/fair-bill-splitting-methods">
            5 Fair Bill Splitting Methods and When to Use Each
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
