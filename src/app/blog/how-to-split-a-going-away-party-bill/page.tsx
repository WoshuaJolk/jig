import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Going-Away Party Bill";
const description =
  "The person leaving shouldn't pay for their own going-away party. Here's how to handle the bill when someone is moving on.";
const slug = "/blog/how-to-split-a-going-away-party-bill";
const datePublished = "2026-02-25";

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

export default function HowToSplitAGoingAwayPartyBill() {
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
        A going-away party is one of the most bittersweet social occasions — you
        are celebrating someone you care about while also saying goodbye. The
        last thing either of you wants is to have the evening colored by an
        awkward bill moment. Getting the money right ahead of time lets everyone
        focus on what actually matters.
      </p>

      <h2>The Person Leaving Does Not Pay</h2>
      <p>
        Like a birthday or bachelorette party, the convention for a going-away
        party is that the guest of honor does not pay for themselves. The
        attendees cover the honoree's food, drinks, and any activity costs as
        a gesture of farewell.
      </p>
      <p>
        This should be communicated before the event. When you invite people —
        whether by text, group chat, or a more formal invitation — include a note
        like "We're covering Sam's tab, so budget a bit extra for that." This
        sets expectations and lets people plan accordingly.
      </p>

      <h2>Dinner vs. Bar: Different Logistics</h2>
      <p>
        Going-away celebrations take two main forms, and each has a slightly
        different bill structure.
      </p>

      <h3>Restaurant dinner</h3>
      <p>
        This is the easiest to handle cleanly. Get an itemized receipt, have
        everyone claim their own food and drinks, and split the guest of honor's
        items evenly across all attendees. Use <Link href="/">Jig</Link> to scan
        the receipt — it handles the math of assigning the honoree's tab across
        everyone else automatically, with proportional tax and tip.
      </p>

      <h3>Bar crawl or bar tab</h3>
      <p>
        Bars are less structured, which makes tracking harder. A few approaches:
      </p>
      <ul>
        <li>
          <strong>Open a group tab and split at the end.</strong> One person
          opens a tab, orders rounds for the group plus the guest of honor, and
          everyone splits the tab at the end of the night. Divide the total
          (including the honoree's drinks) equally across all attendees.
        </li>
        <li>
          <strong>Collect a kitty upfront.</strong> Before the bar crawl, each
          person puts $25–40 into a communal fund. Use that fund to cover a
          round for everyone including the guest of honor. Repeat as needed. Any
          leftover goes back in proportion to what was contributed.
        </li>
        <li>
          <strong>Designate a "keeper of the tab."</strong> One person manages
          the guest of honor's drinks throughout the night, running their tab
          on the group card. At the end, that amount is divided by everyone.
        </li>
      </ul>

      <h2>Equal Split Among Attendees</h2>
      <p>
        Once you have separated the guest of honor's portion, the attendees
        typically split the remainder equally unless orders varied significantly.
        For a casual bar night, an equal split (excluding the honoree's tab)
        among attendees is standard. For a sit-down dinner where spending varied
        significantly, an itemized split is fairer.
      </p>
      <p>
        The rule of thumb: if the most expensive order is less than double the
        least expensive, an equal split is fine. If there is a wide gap, itemize.
      </p>

      <h2>Collecting Contributions</h2>
      <p>
        The organizer of the going-away party should be the single point of
        contact for money. Here is a clean process:
      </p>
      <ol>
        <li>
          Announce the expected per-person cost when you invite people:
          "Dinner will be around $50 per person plus a share of Alex's tab."
        </li>
        <li>
          After the event, calculate the actual total per person and send Venmo
          requests immediately — the night of or the morning after.
        </li>
        <li>
          If the guest of honor will be there and you want to handle the split
          before anyone tries to pay, you can pre-collect contributions before
          the event and have the organizer pay the full bill.
        </li>
      </ol>

      <h2>When the Group Has Different Financial Situations</h2>
      <p>
        Going-away parties for popular people can draw a wide range of attendees
        — close friends, coworkers, acquaintances — with varying relationships
        to the guest of honor and varying financial situations. A few principles:
      </p>
      <ul>
        <li>
          Nobody should feel obligated to attend if the cost is prohibitive.
          Keep the per-person expectation reasonable.
        </li>
        <li>
          Close friends who care deeply may volunteer to cover a larger share.
          Accept this graciously if offered; do not expect it.
        </li>
        <li>
          If someone can only come for part of the evening, pro-rate their share
          of the honoree's tab accordingly.
        </li>
      </ul>

      <h2>What the Guest of Honor Should Know</h2>
      <p>
        If you are the person being celebrated, a gracious acknowledgment of the
        group's generosity goes a long way. A thank-you message or toast
        acknowledging that the group took care of you means more than you might
        think. And if you genuinely feel uncomfortable with the tradition, you
        can always say so quietly to the organizer — "I'd rather everyone just
        pay their own way" is a perfectly valid preference.
      </p>
      <p>
        For more on the social dynamics of covering someone's tab, see our guide
        on <Link href="/blog/receipt-splitting-etiquette">receipt splitting etiquette</Link>.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-birthday-dinner-bill">How to Split a Birthday Dinner Bill</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-bar-tab">How to Split a Bar Tab</Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-with-venmo">How to Split Bills with Venmo</Link>
        </li>
        <li>
          <Link href="/how-it-works">How Jig Works</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
