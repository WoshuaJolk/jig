import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "Why Splitting the Bill Equally Isn't Always Fair";
const description =
  "An equal split feels simple, but it's often the least fair option. Here's the math and psychology behind why itemized splits are better.";
const slug = "/blog/why-equal-splits-arent-always-fair";
const datePublished = "2026-03-02";

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

export default function WhyEqualSplitsArentAlwaysFair() {
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
        Equal splits feel fair because equality is a principle we value. Divide the check by the
        number of people, everyone pays the same — clean, simple, no awkwardness. It's the default
        for a reason.
      </p>
      <p>
        But equal isn't the same as accurate. In practice, an equal split is frequently the least
        fair option at the table, and the people it harms most are usually the ones least likely
        to say anything about it.
      </p>

      <h2>The Math of the Equal Split</h2>
      <p>
        Consider a table of four. The total bill is $200. Each person pays $50. Simple.
      </p>
      <p>
        But here's what everyone actually ordered:
      </p>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Food</th>
            <th>Drinks</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alex</td>
            <td>$16 salad</td>
            <td>$5 sparkling water</td>
            <td>$21</td>
          </tr>
          <tr>
            <td>Ben</td>
            <td>$28 pasta</td>
            <td>$12 two glasses of wine</td>
            <td>$40</td>
          </tr>
          <tr>
            <td>Cara</td>
            <td>$34 steak</td>
            <td>$18 three cocktails</td>
            <td>$52</td>
          </tr>
          <tr>
            <td>Dana</td>
            <td>$42 tasting portion</td>
            <td>$24 cocktails and wine</td>
            <td>$66</td>
          </tr>
        </tbody>
      </table>
      <p>
        With an equal split, Alex pays $50 despite ordering $21 of food. Dana pays the same $50
        despite ordering $66. Alex is subsidizing Dana by $29. Dana is underpaying by the same
        amount. In a party of eight or twelve, these disparities compound further.
      </p>

      <h2>The "Equal Split Tax" on Modest Orderers</h2>
      <p>
        The people who order modestly — because they're on a budget, watching what they eat, or
        simply not hungry — pay a disproportionate share under an equal split. They bear the cost
        of others' choices.
      </p>
      <p>
        This dynamic is especially pronounced for non-drinkers in groups with heavy drinkers.
        Alcohol is among the highest-margin items on any restaurant bill. A single bottle of wine
        can add $50–80 to a table's subtotal. When split equally across the table including people
        who had water all night, the non-drinker pays a significant premium for alcohol they
        didn't consume. See our guide on{" "}
        <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
          splitting the bill between drinkers and non-drinkers
        </Link>{" "}
        for more on this specific case.
      </p>

      <h2>When Equal Splits Do Make Sense</h2>
      <p>
        Equal splits are genuinely fair — and the right choice — when everyone ordered in roughly
        the same range. If everyone had a main course, one drink, and maybe a shared starter,
        the variation is small enough that the convenience of equal splitting outweighs the minor
        inaccuracy.
      </p>
      <p>
        They also make sense for close long-term friends who informally reciprocate over many
        outings. If you and a friend split all bills evenly over months, the slight variations
        average out. You're operating in a gift economy, not a precise accounting system.
      </p>
      <p>
        The equal split fails when the orders are significantly unequal in price, when some people
        ordered alcohol and others didn't, or when dietary restrictions mean some people had much
        less expensive options than others.
      </p>

      <h2>The Itemized Alternative</h2>
      <p>
        An itemized split assigns each item to the person who ordered it, then splits shared items
        and fixed costs (tax, tip, service charges) proportionally. Everyone pays for what they
        actually consumed.
      </p>
      <p>
        The objection to itemized splits has historically been that they're too much work.
        Calculating individual totals from a receipt, adding proportional tax and tip for each
        person, and collecting that many individual amounts at the table was a genuine logistical
        burden. This is why equal splitting became the default.
      </p>
      <p>
        That barrier no longer exists. <Link href="/">Jig</Link> photographs the receipt, reads
        the line items with AI, lets you assign each item to a person, and calculates every
        person's total including their share of tax and tip. The whole process takes about two
        minutes. The "it's easier to split evenly" argument is now about 30 seconds of difference.
      </p>

      <h2>The Fairness Argument Is Simple</h2>
      <p>
        Paying for what you ordered is not complicated as a principle. It's the same principle
        behind every other commercial transaction you make. You don't pay for groceries you
        didn't put in your cart. You don't pay for items on Amazon someone else bought. The
        restaurant table is the one place where this principle routinely gets abandoned in favor
        of convenience — and the convenience increasingly exists anyway.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/fair-bill-splitting-methods">
            5 Fair Bill Splitting Methods and When to Use Each
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
            How to Split the Bill Between Drinkers and Non-Drinkers
          </Link>
        </li>
        <li>
          <Link href="/blog/psychology-of-splitting-bills">
            The Psychology of Splitting Bills: Why Money Feels Personal
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
