import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Food Delivery Order (Uber Eats, DoorDash, Grubhub)";
const description =
  "Splitting a delivery order involves more than just the food. Here's how to fairly split delivery fees, service fees, and tips when ordering together.";
const slug = "/blog/how-to-split-a-food-delivery-order";
const datePublished = "2026-03-08";

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

export default function HowToSplitAFoodDeliveryOrder() {
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
        Splitting a food delivery order is more complicated than splitting a restaurant bill —
        and most people underestimate the fee stack. By the time Uber Eats, DoorDash, or Grubhub
        is done adding delivery fees, service fees, expanded range fees, small order fees, and
        driver tips, you can easily add 40-60% on top of the actual food cost. Figuring out who
        owes what requires a clear system.
      </p>

      <h2>Understanding the Fee Stack</h2>
      <p>
        Before splitting anything, understand what is actually on the receipt. A typical delivery
        order from a major platform includes several categories of fees:
      </p>
      <table>
        <thead>
          <tr>
            <th>Fee Type</th>
            <th>Typical Range</th>
            <th>Who Should Pay</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Food items</td>
            <td>Varies</td>
            <td>The person who ordered each item</td>
          </tr>
          <tr>
            <td>Delivery fee</td>
            <td>$2–$8</td>
            <td>Split equally among all participants</td>
          </tr>
          <tr>
            <td>Service fee</td>
            <td>8–15% of subtotal</td>
            <td>Split equally or proportionally</td>
          </tr>
          <tr>
            <td>Small order fee</td>
            <td>$2–$3</td>
            <td>Split equally (it is a group cost)</td>
          </tr>
          <tr>
            <td>Driver tip</td>
            <td>15–20% of subtotal</td>
            <td>Split equally among all participants</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td>Varies by location</td>
            <td>Proportional to each person&apos;s food cost</td>
          </tr>
        </tbody>
      </table>

      <h2>Splitting Food Items</h2>
      <p>
        Food items are the easiest part: each person pays for what they ordered. If someone ordered
        a $14 burrito bowl and someone else ordered a $22 steak bowl and sides, those costs belong
        to the individuals who ordered them.
      </p>
      <p>
        Complications arise when people share items — a large side of fries everyone picks at, a
        shared appetizer, a shared dessert. Those shared items should be split equally among the
        people who ate them.
      </p>

      <h2>Splitting Delivery Fees</h2>
      <p>
        The delivery fee is a flat cost that exists because the group placed the order. It does not
        scale with what anyone ordered — it is the same whether you spent $8 or $30. The fairest
        split: divide it equally among all participants.
      </p>
      <p>
        Some people argue for proportional splitting of the delivery fee (the person who ordered
        more pays a higher share of the delivery). This is mathematically defensible but adds
        complexity for a small number. Equal split is simpler and close enough.
      </p>

      <h2>Splitting the Service Fee</h2>
      <p>
        Service fees are a more ambiguous platform charge. Technically, they scale with the order
        subtotal, so someone who ordered more food &ldquo;generated&rdquo; a higher service fee.
        In practice, it is usually easier to split the service fee equally — the difference is
        rarely more than a dollar or two per person.
      </p>
      <p>
        For large groups where one person ordered $50 worth of food and another ordered $10, a
        proportional split of the service fee is worth doing. It keeps the high-order person from
        feeling like their service fee was unfairly distributed.
      </p>

      <h2>The Driver Tip</h2>
      <p>
        The driver tip should be split equally among all participants. The driver delivered the
        whole order — their effort does not scale with what each person ordered. A $5 tip split
        five ways is $1 per person, which is reasonable.
      </p>
      <p>
        Standard driver tip is 15-20% of the food subtotal. Avoid the temptation to reduce the
        tip to save money on the split. Delivery drivers are doing real work in real weather; the
        tip is part of their income.
      </p>

      <h2>The Minimum Order Problem</h2>
      <p>
        Some platforms or restaurants require a minimum order to place a delivery. If the group
        added extra items just to hit the minimum (an extra drink, a side nobody really wanted),
        those padding items should either be split equally as a shared cost of reaching the minimum,
        or assigned to whoever suggested adding them.
      </p>
      <p>
        The fairest approach: if the minimum item was essentially a shared workaround, split its
        cost equally. If someone wanted that extra item anyway, it is theirs.
      </p>

      <h2>Group Ordering Strategies</h2>
      <p>
        A few approaches that make delivery splitting smoother before the order even happens:
      </p>
      <ul>
        <li>
          <strong>Use group order features.</strong> Uber Eats and DoorDash both have group order
          modes where each person selects their own items in a shared cart. The organizer
          still pays, but everyone can see what others ordered.
        </li>
        <li>
          <strong>Screenshot the order confirmation.</strong> The confirmation email or app screen
          shows every item with its price. This is your receipt — save it before the notification
          disappears.
        </li>
        <li>
          <strong>Designate an organizer.</strong> One person places the order and collects
          payment. That person uses a tool like <Link href="/">Jig</Link> to photograph the
          receipt and calculate everyone&apos;s share including fees.
        </li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Splitting a food delivery order fairly means handling three separate buckets: individual
        food items (itemized by person), shared items (split equally among those who ate them),
        and fees and tips (split equally among all participants). The delivery fee, service fee,
        and driver tip are group costs — everyone shares them.
      </p>
      <p>
        For the most accurate split, photograph the full order confirmation receipt and use{" "}
        <Link href="/">Jig</Link> to assign line items. The AI reads the fees and tips too,
        so the full cost is accounted for. Share the split link and collect via Venmo — no
        rounding disputes, no forgotten fees.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-pizza-bill">
            How to Split a Pizza Bill with Friends
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-meal-prep-grocery-haul">
            How to Split a Meal Prep Grocery Haul with Roommates
          </Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-with-venmo">
            How to Split Bills with Venmo
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
