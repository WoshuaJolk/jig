import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Costco Run with Friends or Roommates";
const description =
  "Costco receipts are long and the items are bulk — splitting them fairly requires a system. Here's the best approach.";
const slug = "/blog/how-to-split-a-costco-run";
const datePublished = "2026-02-26";

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

export default function HowToSplitACostcoRun() {
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
        Costco runs are one of the most common shared shopping scenarios among friends and
        roommates — and one of the most annoying to split. The receipt can be 3 feet long.
        Items come in quantities nobody could use alone. Some things are clearly for one person,
        others are clearly shared, and a few items are technically split between households.
        Without a system, &ldquo;figuring it out later&rdquo; never really happens.
      </p>

      <h2>The Core Challenge: Bulk Quantities</h2>
      <p>
        The fundamental Costco splitting problem is that items are sold in quantities larger than
        what one person or household needs. A 6-pack of olive oil, 48 eggs, a 10-lb bag of rice,
        a bulk pack of paper towels. When two households are splitting the haul, each item might
        literally be split in half — half the paper towels go home with one person, half with
        the other.
      </p>
      <p>
        For items that are physically split, the cost splits proportionally. If you take half the
        48-count egg box and your friend takes the other half, each of you owes half the price of
        that egg carton.
      </p>

      <h2>Per-Item Ownership: The Cleanest System</h2>
      <p>
        Before you shop, or as you shop, designate which items belong to whom. The simplest
        categories:
      </p>
      <ul>
        <li>
          <strong>Your items:</strong> things only you will use (a specific protein you eat,
          snacks for your household, your preferred coffee brand).
        </li>
        <li>
          <strong>Their items:</strong> same principle, for the other person or household.
        </li>
        <li>
          <strong>Shared items:</strong> things you are splitting because you agreed to — paper
          towels, laundry detergent, a bulk snack pack you will divide.
        </li>
      </ul>
      <p>
        As you put items in the cart, mentally (or literally) note whose item it is. When you
        get to the receipt, this makes the assignment straightforward.
      </p>

      <h2>Photographing the Receipt and Using AI Scanning</h2>
      <p>
        Costco receipts are long but well-formatted — every item has a clear item name, quantity,
        and price. This makes them ideal for receipt-scanning tools.
      </p>
      <p>
        Photograph the Costco receipt with <Link href="/">Jig</Link> (you may need 2-3 photos
        if the receipt is very long). The AI reads each line item and displays them for
        assignment. You tap each item to assign it to a person:
      </p>
      <ul>
        <li>Your items — assigned to you</li>
        <li>Their items — assigned to them</li>
        <li>Shared items — assigned to both, automatically splitting the cost</li>
      </ul>
      <p>
        The result is an exact dollar amount for each person. No manual math, no trying to
        remember what the chicken thighs cost vs. the salmon. Share the split link and collect
        via Venmo.
      </p>

      <h2>Membership Fees: Do You Split Them?</h2>
      <p>
        Costco requires a paid membership. If one person has the membership and brought a friend
        or roommate along (as a guest or on the same membership), the question of membership cost
        sometimes comes up.
      </p>
      <p>
        Common approaches:
      </p>
      <ul>
        <li>
          <strong>The membership holder absorbs the cost.</strong> They pay for the membership
          because it benefits them throughout the year for their own shopping too. Guests do not
          split membership fees.
        </li>
        <li>
          <strong>Split the annual membership if both households use it regularly.</strong> If
          you and a roommate or close friend do Costco runs together regularly, splitting the
          annual fee ($65 for basic, $130 for Executive) makes sense. This is a rare arrangement
          but fair when both parties benefit equally.
        </li>
      </ul>

      <h2>The Quantity Problem: Half a Bulk Pack</h2>
      <p>
        Sometimes one bulk item gets physically divided between two households. A 24-pack of
        water: each household takes 12. A 36-count of granola bars: each takes 18. In these
        cases, the cost of that item splits proportionally based on how many each person took.
      </p>
      <p>
        For a simple 50/50 split of a bulk item, divide the price by 2. For uneven splits (one
        person took 2/3, another took 1/3), calculate accordingly. When using Jig, you can assign
        a shared item to multiple people and the tool handles the split automatically.
      </p>

      <h2>Avoiding the &ldquo;Figure It Out Later&rdquo; Trap</h2>
      <p>
        The biggest Costco splitting mistake is loading everything into one car, putting it all
        on one card, and agreeing to sort it out at home. This almost never gets sorted out
        cleanly. People forget what was whose, the receipt gets lost, and someone ends up feeling
        like they overpaid.
      </p>
      <p>
        Best practice: photograph the receipt in the parking lot right after checkout. Assign
        items immediately while everything is fresh. Send the payment request before anyone
        drives away. This sounds extreme, but it takes less than 5 minutes and eliminates all
        follow-up.
      </p>

      <h2>Quick Reference</h2>
      <table>
        <thead>
          <tr>
            <th>Item Type</th>
            <th>How to Split</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Individual household items</td>
            <td>Assigned fully to that person</td>
          </tr>
          <tr>
            <td>Physically divided bulk items</td>
            <td>Split proportionally by quantity taken</td>
          </tr>
          <tr>
            <td>Shared household items (cleaning supplies, etc.)</td>
            <td>Equal split between households</td>
          </tr>
          <tr>
            <td>Food items eaten by both households</td>
            <td>Equal or proportional split</td>
          </tr>
          <tr>
            <td>Membership fee</td>
            <td>Usually absorbed by membership holder; split if both use regularly</td>
          </tr>
        </tbody>
      </table>

      <h2>The Bottom Line</h2>
      <p>
        Costco splits work best when you agree on who owns which items before shopping, photograph
        the receipt immediately after checkout, and use a tool to assign and calculate. The
        long receipt and bulk quantities that make Costco splitting seem daunting are actually
        well-suited to receipt scanning — every item is clearly named and priced.
      </p>
      <p>
        <Link href="/">Jig</Link> handles grocery receipts the same way it handles restaurant
        receipts: upload the photo, assign items, share the split. For long receipts, you can
        photograph in sections. No account or download needed.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-meal-prep-grocery-haul">
            How to Split a Meal Prep Grocery Haul with Roommates
          </Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-as-roommates">
            Splitting Bills as Roommates
          </Link>
        </li>
        <li>
          <Link href="/blog/digital-receipt-management">
            Digital Receipt Management
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
