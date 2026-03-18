import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bills with Roommates: A Complete System";
const description =
  "Splitting rent, utilities, groceries, and household supplies with roommates requires a clear system. Here's one that actually works.";
const slug = "/blog/how-to-split-bills-with-roommates";
const datePublished = "2026-03-09";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function HowToSplitBillsWithRoommates() {
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

      <h2>Why Roommate Bills Go Wrong</h2>
      <p>
        Most roommate situations start with good intentions and vague arrangements. Everyone agrees to "split things fairly" — and then within a few months, one person is covering more than their share and silently stewing about it. The problem is not bad intentions. It is the absence of a clear system.
      </p>
      <p>
        A good roommate bill-splitting system defines exactly who pays what, when, and how — before the first bill arrives. Here is how to build one.
      </p>

      <h2>Step 1: Categorize Your Shared Expenses</h2>
      <p>
        Shared expenses fall into three main buckets:
      </p>
      <ul>
        <li><strong>Fixed monthly bills:</strong> Rent, internet, renter's insurance, parking</li>
        <li><strong>Variable utilities:</strong> Electricity, gas, water</li>
        <li><strong>Shared household purchases:</strong> Groceries, cleaning supplies, paper products, kitchen staples</li>
      </ul>
      <p>
        Each category needs its own handling approach. A one-size-fits-all split often does not work because these expenses have different structures and different opportunities for individual use variation.
      </p>

      <h2>Step 2: Decide on Rent Division</h2>
      <p>
        Equal rent split is the default, but it is not always the right call. Relevant factors include:
      </p>
      <ul>
        <li>Room size differences</li>
        <li>Private versus shared bathrooms</li>
        <li>Storage space access</li>
        <li>Parking spot inclusion</li>
      </ul>
      <p>
        If one person has a significantly larger room or private bathroom, a strictly equal rent split may feel unfair to the person with less. Agreeing upfront on any adjustments avoids ongoing tension. A common approach: calculate a base equal split, then add a small premium for any clearly superior room features.
      </p>

      <h2>Step 3: Set Up Utilities</h2>
      <p>
        Utilities should be split equally unless there is a clear reason not to. The most practical system: one roommate puts each utility in their name and the others Venmo their share immediately when the bill arrives. Rotating who holds each account prevents any one person from carrying all the administrative burden.
      </p>
      <p>
        For more detail on utility splitting specifically, see our guide to <a href="/blog/how-to-split-utility-bills-with-roommates">splitting utility bills with roommates</a>.
      </p>

      <h2>Step 4: Handle Groceries and Household Supplies</h2>
      <p>
        This is where most roommate systems fall apart. There are three reasonable approaches:
      </p>
      <ul>
        <li><strong>Fully separate:</strong> Each roommate buys their own food and supplies. No shared groceries. Simple, but can feel cold and creates weird refrigerator politics.</li>
        <li><strong>Shared basics only:</strong> Split the cost of communal items (dish soap, paper towels, cleaning supplies, coffee) while keeping personal food separate. Works well for most groups.</li>
        <li><strong>Fully shared:</strong> Shop together, split everything. Requires the most coordination and trust, but works well for close friend groups or couples with a roommate.</li>
      </ul>
      <p>
        When you do a shared grocery or supply run, snapping the receipt into <a href="/">Jig</a> takes thirty seconds and splits every line item exactly. No one has to calculate what they owe — they just pay their share and move on.
      </p>

      <h2>Step 5: Create a Payment System</h2>
      <p>
        Decide on how and when money moves. Options:
      </p>
      <ul>
        <li><strong>Shared account:</strong> Everyone deposits their share of monthly bills into a joint account. Bills are paid automatically. Clean and low-friction.</li>
        <li><strong>Designated payer + Venmo reimbursement:</strong> One person pays each bill, others reimburse immediately. Works if everyone is reliable. Falls apart if anyone is slow to pay.</li>
        <li><strong>Bill rotation:</strong> Each roommate pays one bill in full, and you settle the differential at the end of the month. Requires tracking but minimizes transaction volume.</li>
      </ul>
      <p>
        Whatever system you choose, commit to a specific settlement date. "End of each month" is clearer than "whenever." Ambiguity is where friendships get damaged.
      </p>

      <h2>Step 6: Document the Agreement</h2>
      <p>
        Write it down. A simple shared doc or even a group chat message with the agreed terms is enough. When a dispute arises — and eventually one will — you want to reference what was actually agreed, not what everyone remembers.
      </p>
      <p>
        Cover: how rent is divided, who pays which utilities, what household items are shared versus personal, and your payment schedule. Revisit it if a roommate moves in or out, or if anyone's situation changes significantly.
      </p>

      <h2>The Most Common Pitfall</h2>
      <p>
        The most common roommate financial mistake is letting small debts accumulate without settling them. A few dollars here and there feels minor until someone realizes they have been covering more than their share for six months. Pay promptly, track clearly, and do not let the balance sheet get too far from zero.
      </p>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/how-to-split-utility-bills-with-roommates">How to Split Utility Bills with Roommates Fairly</a></li>
        <li><a href="/blog/splitting-household-expenses-system">A System for Splitting Household Expenses That Actually Works</a></li>
        <li><a href="/blog/how-to-split-a-joint-grocery-order">How to Split a Joint Grocery Order Fairly</a></li>
        <li><a href="/blog/splitting-bills-when-living-together">How to Split Bills When You First Move In Together</a></li>
      </ul>
    </BlogPostLayout>
  );
}
