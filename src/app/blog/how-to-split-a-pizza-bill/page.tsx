import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Pizza Bill with Friends";
const description =
  "Splitting a pizza bill fairly is trickier than it looks. Use these strategies for equal, slice-based, and topping-based splits.";
const slug = "/blog/how-to-split-a-pizza-bill";
const datePublished = "2026-03-11";

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

export default function HowToSplitAPizzaBill() {
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
        Pizza nights should be simple. You order a few pies, everyone eats, someone pays with a
        card, and people Venmo their share. Except: one pizza was a $24 specialty pie with truffle
        and prosciutto that only two people ate, another was a plain cheese that six people
        demolished, there was a delivery fee, someone added a service fee, and the driver expects
        a tip. Now what?
      </p>
      <p>
        Here is a practical breakdown of every pizza bill scenario and the fairest way to handle
        each one.
      </p>

      <h2>Whole Pie Splits: Everyone Gets a Pizza</h2>
      <p>
        The cleanest pizza order is one pizza per person or per couple — everyone picks their own
        pie, pays for their own pizza. This works well for delivery situations where individual
        portions are built into the order.
      </p>
      <p>
        When the group is sharing multiple whole pies family-style, the question becomes whether to
        split equally or by consumption. A true equal split divides the total cost of all pizzas
        by the number of people. This is simple and works well when everyone ate roughly the same
        amount and the pizzas were similar in price.
      </p>
      <p>
        It breaks down when the pizzas vary significantly in price. A basic margherita at $16 and a
        specialty pizza at $28 represent a $12 gap. If only two of eight people ate from the
        specialty pie, splitting both pies equally means the six people who only ate the cheap
        pizza are subsidizing the two who ate the expensive one.
      </p>

      <h2>Slice-Based Splitting</h2>
      <p>
        Slice-based splitting is a more precise approach: figure out the per-slice cost of each
        pizza and charge people based on how many slices they ate from which pizza.
      </p>
      <p>
        The math is straightforward. A 10-slice pizza that costs $20 is $2 per slice. If you had
        3 slices of that pizza and 2 slices of a $25 pizza (also 10 slices = $2.50 per slice),
        you owe $6 + $5 = $11 before tax and tip.
      </p>
      <p>
        This method is fair but requires some memory or tracking — someone needs to know who ate
        from which pie. For casual pizza nights, this level of precision is often overkill. For
        situations with big price differences between pizzas, it is worth the minor effort.
      </p>

      <h2>Specialty Toppings and Upcharges</h2>
      <p>
        Many pizza places charge extra for premium toppings: truffle oil, burrata, wild mushrooms,
        extra protein, gluten-free crust. These upcharges can add $4-8 to a single pizza.
      </p>
      <p>
        If you ordered a specialty pizza that only you and one other person ate, you should not
        expect the whole table to split that upcharge. The fairest approach: subtract the upcharge
        from the shared total and have the people who ordered or ate that pizza cover it
        separately.
      </p>
      <p>
        Similarly, if someone ordered an individual pizza with dietary-specific toppings (vegan
        cheese, for example), that pizza is their own responsibility and should not be folded into
        the shared pile unless everyone agreed to split all pies equally upfront.
      </p>

      <h2>Delivery Fees, Service Fees, and Driver Tips</h2>
      <p>
        This is where pizza bill splitting gets genuinely complicated. A typical delivery order
        from a major platform might include:
      </p>
      <ul>
        <li>Delivery fee ($3–$8)</li>
        <li>Service fee (8–15% of the subtotal)</li>
        <li>Small order fee (if the subtotal is below a minimum)</li>
        <li>Driver tip (standard 15–20% of the subtotal)</li>
      </ul>
      <p>
        These fees are a shared cost of the order — nobody would have incurred them without the
        group order — so they should be split equally among everyone who participated in the order.
        Divide the total fees and tip by the number of people and add it to everyone&apos;s
        individual food cost.
      </p>
      <p>
        When you use <Link href="/">Jig</Link> to split a delivery receipt, you can photograph
        the receipt from the delivery app confirmation and the AI will read the line items
        including fees. You assign the food items individually and the fees split equally across
        everyone automatically.
      </p>

      <h2>Shared vs. Individual Pizzas: Setting Expectations First</h2>
      <p>
        The best way to avoid a confusing pizza bill is to agree on the structure before ordering:
      </p>
      <ul>
        <li>
          <strong>Are we splitting all pies equally?</strong> Works best when everyone agrees
          upfront and the pies are similar in price.
        </li>
        <li>
          <strong>Is each person ordering their own pizza?</strong> Clean and simple; everyone
          pays for their own.
        </li>
        <li>
          <strong>Are some pies shared and some individual?</strong> Shared pies get split among
          those who want them; specialty pies that only one or two people ordered go to those
          people.
        </li>
      </ul>
      <p>
        A 30-second conversation before placing the order saves 10 minutes of confusion at the end.
        For more on navigating group ordering dynamics, see our{" "}
        <Link href="/blog/group-dining-guide">group dining guide</Link>.
      </p>

      <h2>Quick Reference</h2>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Best Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Everyone eats from all pies equally</td>
            <td>Equal split of total food cost</td>
          </tr>
          <tr>
            <td>Some pies are more expensive than others</td>
            <td>Slice-based split or per-pie assignment</td>
          </tr>
          <tr>
            <td>Specialty/premium pies only some people ate</td>
            <td>Those people pay the premium; rest split the base pies</td>
          </tr>
          <tr>
            <td>Delivery fees and service fees</td>
            <td>Equal split among all participants</td>
          </tr>
          <tr>
            <td>Driver tip</td>
            <td>Equal split among all participants</td>
          </tr>
        </tbody>
      </table>

      <h2>The Bottom Line</h2>
      <p>
        For a simple, same-priced-pizza group night, equal splitting is fast and fair. When
        specialty pies, premium toppings, or big price differences are involved, switch to
        slice-based splitting or individual pizza ownership. Always split delivery fees and tips
        equally — they are a shared cost of using the service.
      </p>
      <p>
        For the math-averse, <Link href="/">Jig</Link> handles this without any manual calculation.
        Photograph the receipt, tap what each person ordered, and the split is ready to share.
        No account needed, no app to download.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-food-delivery-order">
            How to Split a Food Delivery Order (Uber Eats, DoorDash, Grubhub)
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-shared-appetizers">
            How to Split Shared Appetizers Fairly
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
