import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Calculate Tip for Large Groups";
const description =
  "Calculating tip for a large group requires more than multiplying the total. Here's the right way to handle gratuity for parties of 8 or more.";
const slug = "/blog/how-to-calculate-tip-for-large-groups";
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

export default function HowToCalculateTipForLargeGroups() {
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
        Tipping at a restaurant for two is simple arithmetic. Tipping for a group of twelve is a
        social negotiation with math attached. Someone has to calculate the right amount, someone
        has to suggest it to the table, and then everyone has to actually pay it. Each of those
        steps has failure modes.
      </p>
      <p>
        Here is a complete guide to calculating tip for large groups — including how to handle
        pre-tip vs. post-tax bases, when restaurants add gratuity automatically, and how to avoid
        the underpayment spiral that leaves servers shortchanged.
      </p>

      <h2>Start with the Pre-Tax Subtotal</h2>
      <p>
        Tip should be calculated on the pre-tax food and drink subtotal, not on the total after
        tax. This is both the industry standard and the mathematically correct approach. Tax is a
        government charge — servers don't receive a percentage of it.
      </p>
      <p>
        On most restaurant receipts, you'll see the subtotal clearly labeled before tax is added.
        Use that number as your tip base. If a table's food and drinks total $320 before tax:
      </p>
      <ul>
        <li>18% tip = $57.60</li>
        <li>20% tip = $64.00</li>
        <li>22% tip = $70.40</li>
      </ul>

      <h2>Per-Person Tip vs. Group Tip</h2>
      <p>
        There are two ways to approach group tipping. You can calculate the total tip the table
        should leave and then divide it among everyone, or you can have each person calculate their
        own tip on their own items.
      </p>
      <p>
        The second approach sounds cleaner but breaks down in practice. When individuals calculate
        their own tip on their own food, the results are inconsistent — some people tip 15%, others
        20%, some forget to include drinks. The effective tip rate ends up being a random average
        that often skews low.
      </p>
      <p>
        The better approach: calculate a single group tip on the full subtotal at a predetermined
        percentage (20% is standard), then divide that tip amount by the number of people. Add
        each person's tip share to their food total.
      </p>

      <h2>The Problem with Mental Math in Groups</h2>
      <p>
        Large group bills are hard to split mentally for a few reasons. The subtotals are large
        enough that small rounding errors compound. People are distracted. And there is often
        social pressure to seem casual about money, which leads to undercalculating rather than
        asking someone to pull up a calculator.
      </p>
      <p>
        The result: servers at large-party tables are frequently undertipped relative to the effort
        involved. A party of twelve generates far more work than two parties of six — multiple
        orders taken simultaneously, coordinated food running, more drink refills, a complex
        checkout process.
      </p>
      <p>
        Using a tool like <Link href="/">Jig</Link> to photograph the receipt and itemize the bill
        removes the mental math problem entirely. Everyone sees exactly what they owe including
        their proportional share of tip, and the total tips up correctly.
      </p>

      <h2>When the Restaurant Adds Gratuity Automatically</h2>
      <p>
        Most restaurants add automatic gratuity — typically 18–20% — for parties of six or more.
        When this happens, the tip has already been calculated and added to the bill. You do not
        need to tip again on top of the auto-gratuity.
      </p>
      <p>
        However, if the service was exceptional and you want to add something extra, you can leave
        a small additional amount in cash. This is never required but is always appreciated.
      </p>
      <p>
        For more detail on navigating automatic gratuity as a line item when splitting, see our
        guide on{" "}
        <Link href="/blog/how-to-handle-auto-gratuity">
          how to handle auto-gratuity charges when splitting
        </Link>
        .
      </p>

      <h2>Tip Calculation by Party Size</h2>
      <table>
        <thead>
          <tr>
            <th>Party size</th>
            <th>Subtotal example</th>
            <th>20% tip</th>
            <th>Per-person tip share</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8</td>
            <td>$240</td>
            <td>$48</td>
            <td>$6.00</td>
          </tr>
          <tr>
            <td>10</td>
            <td>$320</td>
            <td>$64</td>
            <td>$6.40</td>
          </tr>
          <tr>
            <td>12</td>
            <td>$400</td>
            <td>$80</td>
            <td>$6.67</td>
          </tr>
          <tr>
            <td>15</td>
            <td>$500</td>
            <td>$100</td>
            <td>$6.67</td>
          </tr>
        </tbody>
      </table>

      <h2>Handling Unequal Orders</h2>
      <p>
        In a group where people ordered very different amounts, a flat per-person tip share can
        feel unfair. Someone who had a $12 salad is paying the same tip as someone who had a $45
        steak. A fairer approach is proportional tipping: each person's tip is calculated as a
        percentage of their own subtotal.
      </p>
      <p>
        This works cleanly when you're already splitting the bill itemized. Apply 20% to each
        person's item total before tax, and each person pays a tip proportional to what they
        actually ordered.
      </p>

      <h2>The Social Mechanics: Who Coordinates?</h2>
      <p>
        Somebody has to take charge. In most groups, one person tends to handle the math — either
        because they're the most comfortable with numbers or because they put down a card. If
        you're that person, don't guess. Use a receipt photo and a tool to get the numbers right
        before presenting them to the group.
      </p>
      <p>
        Share the split link so everyone can verify their own total and pay directly. This removes
        the awkward collection step and the rounding errors that accumulate when one person tries
        to collect from eleven others.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-handle-auto-gratuity">
            How to Handle Auto-Gratuity Charges When Splitting
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-calculate-tax-and-tip-per-person">
            How to Calculate Tax and Tip Per Person
          </Link>
        </li>
        <li>
          <Link href="/blog/why-equal-splits-arent-always-fair">
            Why Splitting the Bill Equally Isn't Always Fair
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
