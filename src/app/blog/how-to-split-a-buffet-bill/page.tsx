import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Buffet Bill";
const description =
  "Buffets seem simple to split — but when kids eat free, some people drink alcohol, and prices vary, it gets complicated fast.";
const slug = "/blog/how-to-split-a-buffet-bill";
const datePublished = "2026-03-07";

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

export default function HowToSplitABuffetBill() {
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
        A buffet seems like the simplest possible bill to split. Everyone pays a flat per-person
        price, gets the same access to food, and eats whatever they want. In theory: equal split,
        done in 30 seconds. In practice, there are enough exceptions that it is worth working
        through carefully.
      </p>

      <h2>How Buffet Pricing Works</h2>
      <p>
        Most buffets charge a flat per-person fee, but that fee often differs by category:
      </p>
      <ul>
        <li>Adult prices vs. senior discounts</li>
        <li>Children&apos;s pricing (often by age bracket)</li>
        <li>Kids under a certain age eat free</li>
        <li>Lunch vs. dinner pricing (often different rates at the same restaurant)</li>
        <li>Weekend or holiday surcharges</li>
      </ul>
      <p>
        When everyone at the table is a standard-price adult, the split is genuinely simple.
        Divide the food total by the number of people. Done.
      </p>
      <p>
        When the group includes children, seniors, or different ticket types, each person pays
        their own buffet price. Do not average out the children&apos;s price across adults —
        that would mean adults subsidizing kids&apos; plates, which is usually not the intent.
      </p>

      <h2>Drinks: The Buffet Wildcard</h2>
      <p>
        Most buffets include non-alcoholic beverages in the price (fountain drinks, water, coffee).
        Alcohol is almost always extra, either ordered separately from a server or from a bar area.
      </p>
      <p>
        If some people at the table ordered alcohol and others did not, those drinks should be
        split only among the people who consumed them. Do not fold bar tabs into the shared
        buffet total.
      </p>
      <p>
        Similarly, some buffets offer a premium beverage package (sparkling water, specialty
        juices, wine pairings). If some people opted in and others did not, those are individual
        charges.
      </p>

      <h2>Tipping at a Buffet</h2>
      <p>
        Tipping at buffets is an area of genuine confusion. You serve yourself — does the server
        deserve the same tip as in a full-service restaurant? The common answer is: a reduced tip
        is appropriate, but no tip is not.
      </p>
      <p>
        Buffet servers still bring drinks, clear plates, clean the table, and often manage multiple
        large tables simultaneously. A tip of 10-15% is standard at most buffets. If the server
        went above and beyond — refilling drinks frequently, being attentive to a table with
        children — tip at the restaurant-service rate of 18-20%.
      </p>
      <p>
        When splitting the tip at a buffet, the same rule applies as everywhere else: tip on the
        pre-tax subtotal, and distribute proportionally based on each person&apos;s share of the
        total food cost (including their own buffet price plus any individual drink charges).
      </p>

      <h2>All-You-Can-Eat vs. How Much Did You Actually Eat</h2>
      <p>
        One point that comes up occasionally: should the person who ate eight plates pay more than
        the person who ate two? The answer is no — the price you agreed to pay is the flat
        buffet price, not a per-plate rate. The point of an all-you-can-eat format is that the
        restaurant already priced in varying consumption. You are not obligated to average your
        eating.
      </p>
      <p>
        Conversely, someone who barely touched the buffet should still pay the full adult price
        unless the restaurant offers a different pricing option.
      </p>

      <h2>Practical Split Workflow for Buffets</h2>
      <ol>
        <li>
          Identify each person&apos;s buffet price (adult, senior, child, or free) from the
          itemized receipt.
        </li>
        <li>
          Add any individual alcohol or premium beverage charges to each person&apos;s subtotal.
        </li>
        <li>Calculate tip on the total pre-tax amount.</li>
        <li>Each person pays their buffet price + their drinks + their proportional tip share.</li>
      </ol>
      <p>
        For most buffet groups, the receipt is short and simple enough to split without any tools.
        When alcohol orders complicate things, photograph the receipt with{" "}
        <Link href="/">Jig</Link> and assign the drink line items to the right people.
      </p>

      <h2>Common Buffet Scenarios</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>How to Handle It</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>All adults, same price</td>
            <td>Equal split of food total + equal tip split</td>
          </tr>
          <tr>
            <td>Mixed adult/senior pricing</td>
            <td>Each person pays their own tier price</td>
          </tr>
          <tr>
            <td>Kids eat free</td>
            <td>Children have $0 food charge; adults split adult total</td>
          </tr>
          <tr>
            <td>Some people ordered alcohol</td>
            <td>Drinkers pay for drinks; non-drinkers excluded from bar tab</td>
          </tr>
          <tr>
            <td>Lunch vs. dinner pricing</td>
            <td>Each person pays the price for their ticket</td>
          </tr>
        </tbody>
      </table>

      <h2>The Bottom Line</h2>
      <p>
        Buffets are one of the easier bill-splitting scenarios, but they are not completely
        automatic. Handle children&apos;s pricing individually, keep alcohol separate from the
        shared food total, and tip at least 10-15% to the server who kept your table clean.
      </p>
      <p>
        For detailed guidance on fair splitting principles that apply across all dining scenarios,
        see our guide to{" "}
        <Link href="/blog/fair-bill-splitting-methods">
          fair bill splitting methods
        </Link>.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
            How to Split the Bill When Some People Drink and Others Don&apos;t
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-calculate-tax-and-tip-per-person">
            How to Calculate Tax and Tip Per Person
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
