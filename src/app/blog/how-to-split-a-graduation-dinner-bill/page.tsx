import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Graduation Dinner Bill";
const description =
  "Graduation dinners bring families together at restaurants. Here's how to handle the bill when multiple families are celebrating.";
const slug = "/blog/how-to-split-a-graduation-dinner-bill";
const datePublished = "2026-02-27";

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

export default function HowToSplitAGraduationDinnerBill() {
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
        Graduation dinners have a particular dynamic: the table is almost always
        a mix of the graduate's immediate family, possibly one or two sets of
        grandparents, a partner or close friends, and sometimes the families of
        multiple graduates celebrating together. The meal is celebratory, the
        restaurant tends to be nicer than average, and the bill at the end
        requires someone to figure out how to divide it across family units of
        different sizes who may not know each other well.
      </p>
      <p>
        Here is how to handle it gracefully.
      </p>

      <h2>The Graduate Eats Free</h2>
      <p>
        Like a birthday dinner, the near-universal convention is that the
        graduate does not pay for their own graduation dinner. Their food and
        drinks are covered by the family or the table. This is true whether it
        is a family-only dinner paid for by parents or a larger celebration where
        multiple guests contribute.
      </p>
      <p>
        If the graduate's partner is joining and you want to cover them too,
        that is a gracious gesture but not an expectation. Make the decision
        upfront rather than at the end of the meal.
      </p>

      <h2>Per-Family Split: The Standard Approach</h2>
      <p>
        When a graduation dinner includes multiple family units — the graduate's
        immediate family, the grandparents who traveled in, the aunt and uncle's
        family — the cleanest split is per family unit rather than per person.
      </p>
      <p>
        A family of five should not pay the same as the single grandparent who
        attended. Splitting per person would mean the grandparent's $30 meal
        is subsidizing the five-person family's $180 in food.
      </p>
      <p>
        Per-family split: get an itemized receipt, assign each item to a family
        grouping, and each family pays for what they ordered plus proportional
        tax and tip. The graduate's items are then split across all family units.
      </p>

      <h2>When Multiple Families Are Celebrating Together</h2>
      <p>
        Sometimes a graduation restaurant reservation includes two or more
        families celebrating their respective graduates at the same table.
        This is common in close friend groups or when families know each other.
      </p>
      <p>
        In this case, the per-family approach extends naturally: each family
        pays for their own food and drink. The graduates' meals can be covered
        by their own families — it is not typically expected that Family A
        covers Family B's graduate's dinner.
      </p>
      <p>
        Where this gets complicated: shared appetizers and bottles of wine. If
        three families ordered two shared appetizers and two bottles of wine
        for the whole table, those items should be split across all families
        proportionally. Use <Link href="/">Jig</Link> to scan the receipt and
        assign items — it lets you split a single item across multiple people or
        family groupings so the math is handled automatically.
      </p>

      <h2>Extended Family Dynamics</h2>
      <p>
        Graduation dinners often include a generation span from early 20s to 80s.
        A few dynamics to navigate:
      </p>
      <ul>
        <li>
          <strong>Grandparents may insist on paying.</strong> If grandparents
          want to treat, let them — it is often a source of genuine joy. A
          heartfelt thank-you is the right response.
        </li>
        <li>
          <strong>Younger relatives may not be able to afford the restaurant.</strong>{" "}
          If you are bringing a recent college graduate or a younger sibling,
          factor that into your expectations. Covering a sibling's portion is a
          generous graduation-week gesture.
        </li>
        <li>
          <strong>Parents may want to cover everything.</strong> For many
          families, the parents hosting the graduation dinner as a gift is the
          intended structure. If that is the plan, communicate it to guests so
          they are not fumbling for wallets at the end of the meal.
        </li>
      </ul>

      <h2>Different Family Sizes at the Same Table</h2>
      <p>
        The most common fairness question at a graduation dinner: why does the
        family of two have to pay the same as the family of six?
      </p>
      <p>
        They should not. An itemized split by family keeps each family
        accountable for what they actually consumed. The family of six who ordered
        more food pays more. The couple who had two entrées and shared a dessert
        pays for that.
      </p>
      <p>
        Practically: get one check, have someone photograph it, use{" "}
        <Link href="/">Jig</Link> to assign items by family, and share the split
        so each family sees what they owe before anyone pulls out a card.
      </p>

      <h2>Tipping at Graduation Dinners</h2>
      <p>
        Larger graduation parties often trigger automatic gratuity. Check your
        bill before adding tip — if 18% is already included, adding another 20%
        doubles the server's tip unintentionally. If the service was great and
        you want to add to the included gratuity, a few extra dollars per family
        is appreciated.
      </p>
      <p>
        For a deeper breakdown of how to calculate tip per person in a split,
        see our guide on{" "}
        <Link href="/blog/how-to-calculate-tax-and-tip-per-person">calculating tax and tip per person</Link>.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-birthday-dinner-bill">How to Split a Birthday Dinner Bill</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-large-group-dinner">How to Split a Large Group Dinner</Link>
        </li>
        <li>
          <Link href="/blog/receipt-splitting-etiquette">Receipt Splitting Etiquette</Link>
        </li>
        <li>
          <Link href="/faq">Jig FAQ</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
