import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bachelorette Party Expenses Fairly";
const description =
  "Bachelorette parties involve restaurants, activities, hotels, and more. Here's how to split costs so everyone knows what they owe.";
const slug = "/blog/how-to-split-bachelorette-party-expenses";
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

export default function HowToSplitBachelorettePartyExpenses() {
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
        Bachelorette parties are among the most logistically complicated group
        events to plan and pay for. You have restaurant reservations, activity
        bookings, hotel rooms, transportation, and endless rounds of drinks —
        all with a group of women who may not know each other well and who have
        varying budgets. Getting the money right matters almost as much as
        getting the itinerary right.
      </p>
      <p>
        Here is how to split bachelorette party costs fairly, from the first
        deposit to the last Venmo request.
      </p>

      <h2>The Ground Rule: The Bride Does Not Pay</h2>
      <p>
        The standard practice is that the bride's expenses are covered by the
        group. That means her dinner, her drinks, her activity fees, and her
        share of the hotel room are all split among the attendees. This is the
        expectation — but it is worth stating clearly when you invite people so
        nobody is caught off guard by the total.
      </p>
      <p>
        When you send out invites or a group chat message, include a rough cost
        estimate: "We're looking at around $200–250 per person, which covers
        dinner, the cooking class, and the bride's share." Surprises are fun at
        the actual party. Surprises at checkout are not.
      </p>

      <h2>Break Costs Into Categories</h2>
      <p>
        Bachelorette expenses fall into a few distinct buckets, and each one is
        best handled differently.
      </p>

      <h3>Restaurant dinners</h3>
      <p>
        This is often the biggest single expense of the night. The cleanest
        approach: get an itemized receipt, have everyone claim their own food and
        drinks, and split the bride's items evenly among the group. Use a tool
        like <Link href="/">Jig</Link> to scan the receipt and handle the math —
        it assigns each item to a person and distributes tax and tip
        proportionally, so nobody argues about who owes what.
      </p>

      <h3>Activities and experiences</h3>
      <p>
        Cooking classes, spa bookings, escape rooms, and similar activities
        typically have a fixed per-person fee plus a seat for the bride. Divide
        the total activity cost (including the bride's spot) by the number of
        attendees. If the activity costs $600 for ten people and the bride is
        free to participants, each of the nine guests covers $66.67.
      </p>

      <h3>Hotel rooms</h3>
      <p>
        If the group is sharing hotel rooms or a vacation rental, the bride
        typically gets her own bed paid for by the group. Split the room block
        cost proportionally — if two guests share a room, they each pay half
        their room rate. If the bride is staying in a room by herself, her rate
        is divided among all attendees.
      </p>

      <h3>Transportation</h3>
      <p>
        Rideshare splits, party bus rentals, and gas costs for a road trip are
        generally divided equally among everyone who uses them. If some people
        drove themselves and others took the shared vehicle, only split the cost
        among those who participated.
      </p>

      <h2>Handling Deposits</h2>
      <p>
        Restaurant and activity deposits are usually paid by the maid of honor
        or organizer upfront. Collect reimbursement from the group as soon as
        the final headcount is confirmed — do not wait until the event to settle
        deposits, because people drop out and it gets complicated.
      </p>
      <p>
        A simple approach: create a running tally of who has paid what. Use a
        notes app or a shared spreadsheet. When someone pays, mark it. When
        everyone has contributed, close the books on that line item.
      </p>

      <h2>Different Income Levels in the Group</h2>
      <p>
        Bachelorette parties frequently bring together people from different
        financial circumstances — college friends, coworkers, the bride's cousins
        all in the same group chat. A few things that help:
      </p>
      <ul>
        <li>
          <strong>Offer tiered options.</strong> "We're doing a fancy dinner,
          but if the cost is a concern, let us know and we can talk through
          options." Nobody should drop out of a wedding friend's bachelorette
          because they cannot afford the prix fixe.
        </li>
        <li>
          <strong>Keep optional add-ons optional.</strong> Manicures before
          dinner, a professional photo package, VIP table upgrades — label these
          clearly as optional and only charge the people who want them.
        </li>
        <li>
          <strong>Do not shame anyone for opting out.</strong> A "this is above
          my budget" is a complete sentence. Accept it gracefully and adjust the
          cost split accordingly.
        </li>
      </ul>

      <h2>Collecting Money Without the Awkwardness</h2>
      <p>
        The maid of honor or designated organizer should be the single point of
        contact for all money. Here is a clean workflow:
      </p>
      <ol>
        <li>Before the event, send each attendee their estimated total with a Venmo or payment app request.</li>
        <li>Collect a partial payment (50%) upfront to cover deposits.</li>
        <li>After the event, reconcile actuals and send final requests for any difference.</li>
        <li>Give people a one-week window to pay before following up.</li>
      </ol>
      <p>
        For the restaurant portion, scanning the receipt with <Link href="/">Jig</Link> and
        sharing a split link means everyone can see their exact total and pay
        their share directly — no awkward "hey can you Venmo me" messages needed.
        See our <Link href="/faq">FAQ</Link> for how the sharing feature works.
      </p>

      <h2>What If Someone Drops Out?</h2>
      <p>
        Someone always drops out. When that happens, recalculate the per-person
        costs and send updated requests. If a non-refundable deposit has already
        been paid for them, the group has to decide whether to absorb the cost
        collectively or ask the person who dropped out to cover their deposit.
        The latter is standard — if you RSVP'd yes and a non-refundable payment
        was made on your behalf, you should cover it.
      </p>

      <h2>Quick Reference: Bachelorette Split Checklist</h2>
      <ul>
        <li>Communicate the estimated per-person cost before people commit.</li>
        <li>Bride's share is covered by the group across all expenses.</li>
        <li>Use itemized splits for restaurant receipts.</li>
        <li>Split activity and hotel costs equally among attendees.</li>
        <li>Keep optional extras truly optional.</li>
        <li>Collect deposits upfront before the event.</li>
        <li>One person handles all the money — do not crowdsource the accounting.</li>
      </ul>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-birthday-dinner-bill">How to Split a Birthday Dinner Bill</Link>
        </li>
        <li>
          <Link href="/blog/receipt-splitting-etiquette">Receipt Splitting Etiquette</Link>
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
