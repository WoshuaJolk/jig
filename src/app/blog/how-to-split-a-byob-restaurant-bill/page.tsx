import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a BYOB Restaurant Bill";
const description =
  "BYOB restaurants simplify one thing but complicate another. Here's how to split the food bill when everyone brought different wine.";
const slug = "/blog/how-to-split-a-byob-restaurant-bill";
const datePublished = "2026-02-24";

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

export default function HowToSplitAByobRestaurantBill() {
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
        BYOB (bring your own bottle) restaurants solve one problem — alcohol markups — and
        introduce another: everyone showed up with different wine, some people shared their
        bottle generously and others did not, the corkage fee applies to some bottles and not
        others, and now someone has to split a food-only bill while mentally accounting for
        whose wine went where.
      </p>
      <p>
        Here is how to handle the BYOB dining bill cleanly.
      </p>

      <h2>The Food-Only Split: The Easy Part</h2>
      <p>
        At a BYOB restaurant, the restaurant&apos;s bill typically contains only food items
        (and non-alcoholic beverages if anyone ordered them). The wine cost is not on the bill —
        people covered it when they bought their bottles.
      </p>
      <p>
        For the food portion of the bill, use whatever split method makes sense for the group:
      </p>
      <ul>
        <li>
          <strong>Equal split:</strong> everyone ordered similarly priced food, so divide the
          food total equally.
        </li>
        <li>
          <strong>Itemized split:</strong> orders varied significantly; each person pays for
          what they ordered.
        </li>
      </ul>
      <p>
        This is often simpler than a full-service restaurant bill because the alcohol complexity
        is removed. The food-only receipt is cleaner and faster to split.
      </p>

      <h2>Corkage Fees</h2>
      <p>
        Some BYOB restaurants charge a corkage fee — typically $5-20 per bottle opened — to
        cover the service of opening, decanting, and pouring. This fee appears on the restaurant
        bill.
      </p>
      <p>
        Corkage fees should be assigned to the person whose bottle generated them. If each
        couple or individual brought their own bottle, each pays their own corkage fee. If the
        group brought one or two bottles to share, the corkage fee splits among the people who
        shared that wine.
      </p>
      <p>
        When using <Link href="/">Jig</Link> to split a BYOB bill, the corkage fee line items
        can be assigned to the relevant individuals just like any other line item on the receipt.
      </p>

      <h2>Who Brought What Wine</h2>
      <p>
        The wine-sharing dynamic at a BYOB dinner can get socially complex. Common scenarios:
      </p>
      <ul>
        <li>
          <strong>Each couple/person brought their own bottle and drank it themselves.</strong>{" "}
          Clean and simple: each person or couple is responsible for their own wine cost (paid
          at the store) and their own corkage fee. No cross-accounting needed.
        </li>
        <li>
          <strong>The group brought 2-3 bottles to share communally.</strong> Each person who
          brought a bottle spent real money on it. The fairest approach: each bottle&apos;s cost
          is split equally among everyone who drank from it. If you brought a $25 bottle and
          four people drank from it, each person effectively owes you $6.25 for your bottle.
        </li>
        <li>
          <strong>One person brought a very expensive bottle, others brought cheap wine.</strong>{" "}
          This is the trickiest scenario. If the expensive bottle was shared with everyone, there
          is an argument that the other participants should contribute to its cost, since they
          benefited. If the person with the expensive bottle intended it as their personal treat
          for the group, they may not want reimbursement. Clarify before opening.
        </li>
      </ul>

      <h2>When People Did Not Bring Wine</h2>
      <p>
        Some people at a BYOB dinner may not have brought wine — they had a soft drink or water,
        or they drank sparingly from others&apos; bottles as a courtesy pour. These people should
        not be expected to contribute to others&apos; wine costs unless they drank meaningfully
        from the bottle.
      </p>
      <p>
        A general rule: if someone had one courtesy pour (half a glass), asking them to split the
        bottle cost is excessive. If they drank freely from your bottle throughout the meal, a
        contribution is reasonable.
      </p>

      <h2>Tip at a BYOB Restaurant</h2>
      <p>
        Tip at BYOB restaurants presents a nuanced question. Since the restaurant is not selling
        alcohol, the bill is lower and the standard tip percentage applied to the total will
        generate a lower tip than the server might get at a comparable full-service restaurant.
      </p>
      <p>
        Standard guidance: tip at least 20% of the food bill. Some diners tip slightly higher
        at BYOB restaurants to compensate for the lower total, acknowledging that the server&apos;s
        work is similar to a full-service night out. This is a judgment call, but it is worth
        being generous.
      </p>
      <p>
        If a corkage service was provided — someone opened and decanted your wine, kept glasses
        filled — recognize that service in your tip calculation.
      </p>

      <h2>A Practical BYOB Split Workflow</h2>
      <ol>
        <li>
          <strong>Restaurant bill split:</strong> photograph the food receipt with{" "}
          <Link href="/">Jig</Link>, assign food items to individuals or split equally, assign
          corkage fees to relevant people.
        </li>
        <li>
          <strong>Wine cost accounting:</strong> if bottles were shared, note who brought
          each bottle and what it cost. Split each bottle&apos;s cost among those who drank
          from it. This calculation happens outside the restaurant bill.
        </li>
        <li>
          <strong>Settle both:</strong> use Venmo for the restaurant split (handled via Jig)
          and a separate calculation or rounding-up for the wine sharing.
        </li>
      </ol>

      <h2>The Bottom Line</h2>
      <p>
        BYOB restaurants produce a simpler restaurant bill (food only) with a parallel wine
        accounting question. Handle the restaurant bill with a standard itemized or equal split.
        Handle wine sharing separately: each person who brought a bottle recovers their cost from
        the people who drank it, and corkage fees go to the people whose bottles generated them.
      </p>
      <p>
        For the food portion, <Link href="/">Jig</Link> handles the receipt split in about a
        minute. For the wine accounting, a quick mental tally or Venmo request handles the rest.
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
          <Link href="/blog/how-to-split-a-wine-tasting-bill">
            How to Split a Wine Tasting Bill
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
