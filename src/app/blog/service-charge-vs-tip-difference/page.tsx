import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "Service Charge vs Tip: What's the Difference?";
const description =
  "Service charges and tips look similar on a bill but work very differently. Here's what each means and how to handle them when splitting.";
const slug = "/blog/service-charge-vs-tip-difference";
const datePublished = "2026-03-09";

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

export default function ServiceChargeVsTipDifference() {
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
        You've been to a restaurant where the bill arrived with three lines below the food subtotal:
        tax, a service charge, and a tip line. Are you supposed to fill in the tip line if a
        service charge is already there? Does the service charge go to your server? Is the service
        charge the same as auto-gratuity?
      </p>
      <p>
        These are legitimate questions, and the answers depend on what type of charge you're
        looking at. Here's a clear breakdown.
      </p>

      <h2>What Is a Tip?</h2>
      <p>
        A tip (gratuity) is a voluntary payment you make directly to service staff in recognition
        of their work. When you write in a tip amount on a credit card receipt, the restaurant
        passes that money to the server — sometimes immediately, sometimes through a tip pool that
        distributes it among servers, bussers, and bartenders.
      </p>
      <p>
        Tips are the primary income source for many restaurant workers in the United States, where
        the tipped minimum wage is lower than the standard minimum wage. Standard tip rates:
        15–18% is adequate, 20% is standard, and 22–25% is generous for excellent service.
      </p>

      <h2>What Is a Service Charge?</h2>
      <p>
        A service charge is a mandatory fee added to the bill by the restaurant. It is not
        optional. Unlike a tip, it is revenue that belongs to the restaurant — not necessarily to
        the server who waited on you.
      </p>
      <p>
        Service charges are becoming more common in the United States, particularly in cities with
        higher labor costs. A restaurant might add a 3–5% service charge to all bills to help
        cover back-of-house wages, health insurance, or other operational costs.
      </p>
      <p>
        Crucially, how service charge revenue is distributed varies by restaurant. Some pass all of
        it to front-of-house staff. Some split it between kitchen and floor staff. Some retain it
        as operating revenue. You generally cannot know which policy applies unless you ask.
      </p>

      <h2>What Is Auto-Gratuity?</h2>
      <p>
        Auto-gratuity (mandatory gratuity) is a calculated percentage — usually 18–20% — added to
        large-party bills automatically. It functions like a pre-calculated tip and typically does
        go to the server and support staff.
      </p>
      <p>
        For tax purposes, auto-gratuity is classified differently from voluntary tips. The IRS
        treats mandatory service charges as restaurant revenue, not tips — which affects how the
        income is reported for employees. But from your perspective as a diner, auto-gratuity
        behaves like a tip: you pay it and it compensates the people who served you.
      </p>

      <h2>How They Differ Side by Side</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Tip</th>
            <th>Service Charge</th>
            <th>Auto-Gratuity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mandatory?</td>
            <td>No</td>
            <td>Yes</td>
            <td>Yes (for large parties)</td>
          </tr>
          <tr>
            <td>Goes to server?</td>
            <td>Yes (directly)</td>
            <td>Depends on restaurant</td>
            <td>Usually yes</td>
          </tr>
          <tr>
            <td>Calculated by</td>
            <td>You</td>
            <td>Restaurant (flat or %)</td>
            <td>Restaurant (%)</td>
          </tr>
          <tr>
            <td>Should you add more on top?</td>
            <td>N/A</td>
            <td>Possibly, if unclear where it goes</td>
            <td>Not required</td>
          </tr>
        </tbody>
      </table>

      <h2>Do You Need to Tip If There's Already a Service Charge?</h2>
      <p>
        This depends on whether the service charge is intended to compensate servers. If the
        restaurant uses it purely to offset operational costs and pays servers a living wage
        regardless, then no additional tip is strictly necessary — and some restaurants will say so
        explicitly on the menu.
      </p>
      <p>
        If the service charge goes partly or entirely to support staff but not directly to your
        server, a small additional tip is appropriate for exceptional service. When in doubt, ask
        your server how the service charge is distributed. Most will give you a straightforward
        answer.
      </p>

      <h2>How to Handle These Charges When Splitting</h2>
      <p>
        When splitting a bill that includes a service charge, treat it as a mandatory cost to be
        divided along with the food total and tax. Don't try to split it separately — just include
        it in the total each person owes.
      </p>
      <p>
        If you're splitting itemized (each person pays for what they ordered), the service charge
        should be distributed proportionally based on each person's food total, the same way you
        would split tip.
      </p>
      <p>
        <Link href="/">Jig</Link> reads all line items on a receipt including service charges and
        calculates each person's share accordingly. Upload the receipt photo, assign items, and
        every charge — food, tax, service, and tip — is distributed correctly.
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
          <Link href="/blog/how-to-calculate-tip-for-large-groups">
            How to Calculate Tip for Large Groups
          </Link>
        </li>
        <li>
          <Link href="/blog/tax-and-service-charges-international-splitting">
            How to Handle Tax and Service Charges When Splitting Internationally
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
