import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split DoorDash and Uber Eats Group Orders";
const description =
  "Group delivery orders include fees, tips, and markups. Here's how to fairly split a DoorDash or Uber Eats order.";
const slug = "/blog/how-to-split-doordash-uber-eats-orders";
const datePublished = "2026-03-02";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function HowToSplitDoordashUberEatsOrders() {
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

      <p>
        Group delivery orders from DoorDash, Uber Eats, or Grubhub seem simple on the surface: everyone says what they want, one person orders, and you figure out the money later. In practice, delivery orders include a web of fees that make the final total meaningfully higher than the sum of the food items. Getting the split right requires understanding what you are actually paying for.
      </p>

      <h2>What Makes Up a Delivery Order Total</h2>
      <p>
        A typical DoorDash or Uber Eats order for a group includes:
      </p>
      <ul>
        <li><strong>Item prices:</strong> Often marked up 10–30% versus the restaurant's dine-in prices on DoorDash and Uber Eats. This markup is how the platforms fund operations beyond fees.</li>
        <li><strong>Delivery fee:</strong> Varies from $0 (with a subscription like DashPass or Uber One) to $5–$10 for non-subscribers. This is a flat cost for getting the food to your door.</li>
        <li><strong>Service fee:</strong> A percentage fee (typically 10–15% of the subtotal) charged by the platform. This is separate from the delivery fee.</li>
        <li><strong>Small order fee:</strong> Some platforms add a surcharge for orders below a minimum threshold.</li>
        <li><strong>Sales tax:</strong> Applied to food items at the applicable local rate.</li>
        <li><strong>Driver tip:</strong> Recommended 15–20%. The driver's primary income from your order.</li>
      </ul>
      <p>
        For a group order totaling $60 in food items, the actual total with fees and tip can easily reach $80–$90. If you split only the item costs, whoever placed the order absorbs the fees — which is unfair.
      </p>

      <h2>The Right Way to Split a Delivery Order</h2>
      <p>
        The fairest approach is to split the total bill — including all fees and the tip — proportionally based on each person's item subtotal.
      </p>
      <p>
        Here is the formula:
      </p>
      <ol>
        <li>Find each person's item subtotal (sum of their items before fees).</li>
        <li>Find the total item subtotal for the entire order.</li>
        <li>Calculate each person's share percentage: their subtotal divided by the total subtotal.</li>
        <li>Multiply the grand total (including all fees and tip) by each person's share percentage.</li>
      </ol>
      <p>
        Example: Total order including fees and tip = $90. Person A's items = $30, Person B's = $20, Person C's = $10. Total item subtotal = $60. Shares: A = 50%, B = 33%, C = 17%. Each person pays: A = $45, B = $30, C = $15.
      </p>

      <h2>Using the DoorDash or Uber Eats Receipt</h2>
      <p>
        The easiest way to do this math is to work from the email or in-app receipt. DoorDash and Uber Eats both provide itemized receipts showing each item, subtotals, fees, tax, and tip. Screenshot or photograph the receipt and use <Link href="/">Jig</Link> to parse the line items, assign each item to the person who ordered it, and calculate their proportional share of fees and tip automatically. This is significantly faster than doing the proportional math by hand for every person.
      </p>

      <h2>What to Do About the Delivery Fee</h2>
      <p>
        The delivery fee is a flat cost shared equally by everyone who is receiving delivery. If the delivery fee is $6 and three people are splitting the order, each person contributes $2 toward the delivery fee — this is included automatically in the proportional calculation above.
      </p>
      <p>
        If you have a DashPass or Uber One subscription and the delivery fee is waived, you could argue for a small credit since you are the reason there is no delivery fee. Most groups ignore this in the interest of simplicity, but if you are a regular order organizer, it is worth mentioning.
      </p>

      <h2>The Tip Fairness Question</h2>
      <p>
        Tips on delivery orders go directly to the driver, and they are the driver's primary compensation. The standard recommendation is 15–20% of the food subtotal, and this should be included in the split calculation, not absorbed by whoever placed the order.
      </p>
      <p>
        If one person in the group argues they should not have to pay toward the tip because they "only ordered a small thing," this is worth a gentle correction: the driver picked up and delivered the entire order, regardless of its composition.
      </p>

      <h2>Using DoorDash's Group Order Feature</h2>
      <p>
        DoorDash has a built-in Group Order feature that lets each person add items directly to a shared cart from their own device. Each person sees only their items added. The payment, however, still goes through one card. DoorDash does not split payment across multiple cards at checkout.
      </p>
      <p>
        So the Group Order feature helps with collecting orders but not with splitting payment. You still need to calculate what each person owes and collect via Venmo or similar after the food arrives.
      </p>

      <h2>Uber Eats Group Orders</h2>
      <p>
        Uber Eats similarly offers a "Group Order" feature with the same limitation: one payment method at checkout, settle up separately. The receipt itemizes each person's contribution if the group order feature was used, which simplifies the split calculation.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Splitting a delivery order fairly means splitting the entire total — fees and tip included — proportionally based on what each person ordered. Use the itemized receipt from DoorDash or Uber Eats, assign items per person with <Link href="/">Jig</Link>, and collect amounts via Venmo. The calculation takes under two minutes and ensures the person who organized the order is not quietly subsidizing everyone else's food.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li><Link href="/blog/how-to-split-grubhub-orders-at-the-office">How to Split a Grubhub Office Order Fairly</Link></li>
        <li><Link href="/blog/how-to-split-a-food-delivery-order">How to Split a Food Delivery Order</Link></li>
        <li><Link href="/blog/how-to-use-venmo-for-group-expenses">How to Use Venmo for Group Expenses</Link></li>
        <li><Link href="/blog/how-to-calculate-tax-and-tip-per-person">How to Calculate Tax and Tip Per Person</Link></li>
      </ul>
    </BlogPostLayout>
  );
}
