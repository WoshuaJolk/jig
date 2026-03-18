import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Office Party Expenses Fairly";
const description =
  "Office parties with food, drinks, and activities need a clear system for splitting costs. Here's how to do it without friction.";
const slug = "/blog/how-to-split-office-party-expenses";
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

export default function HowToSplitOfficePartyExpenses() {
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
        Office parties sit at an uncomfortable intersection of professional
        relationships and personal money. You want to celebrate with your team,
        but collecting money from colleagues — especially across different
        seniority levels and salary bands — requires some tact.
      </p>
      <p>
        The good news: with a clear system, office party cost-splitting can be
        completely friction-free. Here is how to set one up.
      </p>

      <h2>Attendance-Based vs. Equal Split</h2>
      <p>
        The first question to answer is whether the cost will be split equally
        among everyone in the office or only among those who attend.
      </p>
      <p>
        <strong>Attendance-based split</strong> is almost always fairer and more
        practical. Splitting a party cost equally across the entire team — including
        people who cannot make it, people who did not want to come, and remote
        employees who are not local — creates immediate resentment. Only the
        people who attend should pay.
      </p>
      <p>
        An exception: if the company is subsidizing the event and asking all
        employees to contribute a nominal amount regardless of attendance (to
        support a team fund, for example), make that framing explicit. "We're
        asking for a $10 contribution from everyone to the team social fund" is
        different from "you owe $47 for the party you didn't attend."
      </p>

      <h2>Alcohol Opt-Out</h2>
      <p>
        As with any group event that involves drinking, non-drinkers should not
        be asked to pay for alcohol. This is especially important in a workplace
        context where people may abstain for religious, medical, or personal
        reasons — and where asking someone to pay for drinks they did not have
        can feel exclusionary.
      </p>
      <p>
        If the event includes an open bar or wine at dinner, calculate the
        alcohol cost separately. Drinkers split the alcohol cost; non-drinkers
        pay only the food portion. The extra few minutes of calculation are worth
        it for the goodwill it generates.
      </p>

      <h2>Activity Fees</h2>
      <p>
        Many office parties include an activity — escape room, bowling, axe
        throwing, cooking class. These usually have a fixed per-person cost that
        is easy to split equally among participants. If the activity was optional
        and only half the group did it, only those people pay.
      </p>
      <p>
        When the activity is the main event (the office party is "we're all going
        bowling"), communicate the per-person cost when you announce the event
        so people can decide whether to attend with full information.
      </p>

      <h2>Collecting from Colleagues Professionally</h2>
      <p>
        The tone of money collection matters in a workplace context. Some
        guidelines:
      </p>
      <ul>
        <li>
          <strong>Be transparent and specific.</strong> "Your share is $42 —
          covers dinner, the venue fee, and your portion of the open bar" is
          better than just "$42 please." People are more comfortable paying
          when they understand what it is for.
        </li>
        <li>
          <strong>Send requests promptly.</strong> The night of the event or
          the next morning. Waiting a week makes it feel like debt collection
          instead of expense sharing.
        </li>
        <li>
          <strong>Use payment apps, not cash.</strong> Venmo or Zelle creates
          a record and avoids the awkward handling of cash in the office. If
          someone does not have a payment app, a card transaction to a shared
          organizer works too.
        </li>
        <li>
          <strong>Do not name-and-shame non-payers in the group chat.</strong>{" "}
          A private follow-up message is always the right approach.
        </li>
        <li>
          <strong>Set a deadline.</strong> "Please pay by end of week" is
          actionable. "Whenever you get a chance" gets ignored.
        </li>
      </ul>

      <h2>When Seniority Is a Factor</h2>
      <p>
        Some teams have a tradition of senior members covering more or treating
        the team. This is a generous practice when it comes from the people
        with higher salaries offering voluntarily — not something to be assumed
        or expected.
      </p>
      <p>
        Do not engineer a situation where junior employees are asked to pay the
        same as directors for a restaurant that is above their comfort level.
        Either the organization subsidizes the premium, a senior member offers
        to cover the gap, or you choose a venue where the per-person cost is
        accessible to everyone.
      </p>

      <h2>At the Restaurant: Using Jig</h2>
      <p>
        For office dinners where the restaurant gives you one check, the cleanest
        approach is to have the organizer pay by card and send payment requests
        to attendees afterward. Use <Link href="/">Jig</Link> to scan the receipt,
        assign each person's food and drinks to them (handling shared items and
        drink separations), and share a split link so everyone can review their
        total before payment is requested.
      </p>
      <p>
        This transparency — everyone seeing exactly what they owe and why —
        eliminates disputes and makes the whole process feel fair and
        professional. Check our <Link href="/faq">FAQ</Link> for how the sharing
        feature works.
      </p>

      <h2>When the Company Covers Part of It</h2>
      <p>
        If the company has an event budget that covers some of the cost, apply
        that credit to the bill first and clearly communicate it:
        "The company covered $200. Our share is $380 total, so $19 per person
        for the 20 of us who came." People appreciate knowing the company
        contributed, and it keeps the personal ask proportionate.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-christmas-party-costs">How to Split Office Christmas Party Costs</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-large-group-dinner">How to Split a Large Group Dinner</Link>
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
