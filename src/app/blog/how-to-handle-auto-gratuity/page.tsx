import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Handle Auto-Gratuity Charges When Splitting";
const description =
  "Restaurants add auto-gratuity for large parties — but how should you split it? Here's everything you need to know.";
const slug = "/blog/how-to-handle-auto-gratuity";
const datePublished = "2026-03-10";

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

export default function HowToHandleAutoGratuity() {
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
        You've just finished a group dinner for ten and the server brings the check. At the bottom,
        below the subtotal and the tax, there's a line: <strong>Auto-Gratuity (18%): $54.00</strong>.
        Someone at the table asks whether they still need to tip. Someone else asks whether the
        auto-gratuity is split equally or based on what each person ordered. A third person is
        already looking at the tip line on the credit card terminal and wondering the same thing.
      </p>
      <p>
        Auto-gratuity is common and causes more confusion than it should. Here's exactly how it
        works and how to handle it when splitting a bill.
      </p>

      <h2>What Is Auto-Gratuity?</h2>
      <p>
        Auto-gratuity (also called mandatory gratuity or service gratuity) is a tip amount that
        the restaurant calculates and adds to the bill automatically — typically for parties of six
        or more. The most common rates are 18%, 20%, or occasionally 22%.
      </p>
      <p>
        The restaurant's policy is usually printed on the menu. Some restaurants apply it for
        parties of six, others for eight or more. A few apply it across the board for all tables.
      </p>
      <p>
        Importantly, auto-gratuity is legally a service charge in most jurisdictions — it's
        mandatory, not optional. The distinction matters for tax and income reporting purposes for
        the restaurant, though it has no practical effect on what you as the diner owe.
      </p>

      <h2>Do You Need to Tip on Top of Auto-Gratuity?</h2>
      <p>
        No — auto-gratuity replaces the standard tip. You are not expected to add another 20% on
        top of an existing 18% auto-gratuity. The purpose of auto-gratuity is to ensure servers
        receive fair compensation for the additional work involved in serving large parties, so the
        math has already been done for you.
      </p>
      <p>
        Some diners choose to leave a small additional amount in cash if the service was
        exceptional. This is a gesture of appreciation, never an expectation.
      </p>
      <p>
        The credit card terminal may still show a tip line after presenting a bill that already
        includes auto-gratuity. This is a common source of double-tipping. Always check whether
        gratuity has already been included before entering an amount on the terminal. If it has,
        enter zero or "no tip" — or ask the server to confirm.
      </p>

      <h2>How to Split Auto-Gratuity Fairly</h2>
      <p>
        Auto-gratuity is calculated on the full table's subtotal and added as a single line item.
        When splitting, you have two reasonable options:
      </p>
      <h3>Option 1: Split the auto-gratuity proportionally</h3>
      <p>
        Each person pays a share of the auto-gratuity equal to their proportion of the food
        subtotal. If you ordered $45 of food out of a $300 subtotal, you're responsible for 15% of
        the auto-gratuity. This is the fairest approach when orders varied significantly in price.
      </p>
      <h3>Option 2: Split the auto-gratuity equally</h3>
      <p>
        Divide the auto-gratuity dollar amount by the number of people and add it to each person's
        share. This is simpler and works fine when everyone ordered roughly the same amount.
      </p>
      <p>
        <Link href="/">Jig</Link> handles this automatically. When you upload a receipt that includes
        an auto-gratuity line item, the AI reads it as part of the bill. You can choose to split
        it proportionally based on each person's food total, or distribute it equally — whichever
        the group prefers.
      </p>

      <h2>What If the Auto-Gratuity Rate Seems High?</h2>
      <p>
        If you believe the auto-gratuity was applied in error — for example, your party was only
        five people and the policy is for six or more — you can politely ask the manager to review
        it. Most restaurants will correct a mistake.
      </p>
      <p>
        If the rate is simply higher than you expected (22% at a higher-end restaurant, for
        example), it's worth knowing that the restaurant posted this policy on the menu. Check the
        menu and receipt for the stated rate before requesting a change.
      </p>

      <h2>Auto-Gratuity vs. Service Charge: Are They the Same?</h2>
      <p>
        Not always. Auto-gratuity is typically a percentage-based addition that functions as a
        pre-calculated tip and goes to service staff. A service charge is a more general fee that
        may go to the restaurant rather than directly to servers. The distinction matters if you
        care whether the money reaches the server — auto-gratuity almost always does, while service
        charges may be pooled or retained by the establishment.
      </p>
      <p>
        For more on this distinction, see our guide on{" "}
        <Link href="/blog/service-charge-vs-tip-difference">
          service charges vs. tips
        </Link>
        .
      </p>

      <h2>Quick Reference</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>What to do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Auto-gratuity already on bill</td>
            <td>No additional tip required</td>
          </tr>
          <tr>
            <td>Terminal still shows tip line</td>
            <td>Enter $0 — gratuity already included</td>
          </tr>
          <tr>
            <td>Splitting the auto-gratuity</td>
            <td>Proportional or equal — either is acceptable</td>
          </tr>
          <tr>
            <td>Auto-gratuity applied in error</td>
            <td>Ask the manager politely to review</td>
          </tr>
        </tbody>
      </table>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/service-charge-vs-tip-difference">
            Service Charge vs Tip: What's the Difference?
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-calculate-tip-for-large-groups">
            How to Calculate Tip for Large Groups
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-calculate-tax-and-tip-per-person">
            How to Calculate Tax and Tip Per Person
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
