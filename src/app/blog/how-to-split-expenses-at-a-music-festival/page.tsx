import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Expenses at a Music Festival";
const description =
  "Festival expenses — food, drinks, camping, transportation — add up fast in a group. Here's how to track and split costs fairly.";
const slug = "/blog/how-to-split-expenses-at-a-music-festival";
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

export default function HowToSplitExpensesAtAMusicFestival() {
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
        A music festival with a group of friends is an incredible experience and
        a logistical puzzle. Tickets, camping passes, a pre-festival Costco run,
        shared campsite setup, food vendor purchases, group transportation — the
        costs pile up across several days, paid by different people at different
        times, for different combinations of the group.
      </p>
      <p>
        Without a system, someone always feels like they paid too much and someone
        else always feels like they paid nothing. Here is how to track and split
        festival costs so the experience ends on a good note.
      </p>

      <h2>Pre-Festival Planning: Set Up a Shared Ledger</h2>
      <p>
        The most important thing you can do before the festival starts is
        designate one person as the financial tracker and set up a simple
        shared ledger. This can be a notes app, a shared Google doc, or any
        simple list. The format does not matter — what matters is that every
        group expense is logged as it happens.
      </p>
      <p>
        Each entry should include: what it was for, the total amount, and who
        paid. At the end of the trip, you total up each person's paid expenses,
        find the average, and settle the difference.
      </p>

      <h2>Pre-Split Grocery Shopping</h2>
      <p>
        The pre-festival grocery run is typically one of the largest single group
        expenses: food for multiple days, sunscreen, camp supplies, snacks, water,
        and drinks. One person usually pays for the whole cart.
      </p>
      <p>
        The cleanest way to handle the grocery receipt: scan it with{" "}
        <Link href="/">Jig</Link> when you get back to the car. The AI reads every
        line item on the receipt, and you can assign personal items to individuals
        and mark shared items to split across the group. This prevents the common
        argument of "I only bought my own stuff" when one person bought three
        cases of sparkling water for everyone and the receipt is $180.
      </p>
      <p>
        Alternatively, collect a flat per-person contribution upfront (say, $40
        each for group camp supplies) and shop to that budget.
      </p>

      <h2>Shared Campsite Costs</h2>
      <p>
        Campsite passes, parking passes, and early entry passes are shared
        overhead costs. Divide these equally among everyone in the group, even
        if some people camp and others plan to day-trip in. If only some people
        are sleeping at the campsite, only they split the camping costs.
      </p>
      <p>
        For equipment (tents, camp stoves, coolers) — if someone already owns
        these and is bringing them for the group, a small acknowledgment of the
        cost is appropriate. You do not have to pay for someone's equipment, but
        if they bought ice three times because you all shared the cooler,
        that cost should be tracked and split.
      </p>

      <h2>Food Vendor Splitting</h2>
      <p>
        Festival food vendors are notoriously expensive and usually cash or card
        only per person. This is typically where you stop tracking and everyone
        just pays for what they buy. The exception: if a few people pool money
        for a large vendor purchase that everyone shares (a shared pizza, a
        tower of drinks), track that expense and split it.
      </p>
      <p>
        Do not try to track and split every $14 taco and $8 lemonade at the
        vendor stalls — the accounting overhead is not worth it. Save your
        tracking energy for the larger shared expenses.
      </p>

      <h2>Group Transportation</h2>
      <p>
        Driving to a festival in someone's car, renting a van, sharing an Uber
        or shuttle — transportation costs should be split equally among those
        who used it. If one person drove their own car for eight people, they are
        entitled to gas reimbursement and a bit more for the wear on their vehicle.
        A standard mileage reimbursement calculation is appropriate here.
      </p>
      <p>
        If you rented a van or bus, split the rental cost equally. If you used
        rideshare or shuttles, split those receipts per ride based on who was in
        the car.
      </p>

      <h2>When People Leave at Different Times</h2>
      <p>
        Multi-day festivals often see people leave at different times — some skip
        Sunday, some leave early Saturday. When this happens, pro-rate costs by
        days attended rather than splitting equally across the full festival.
        If the campsite cost $300 for three nights, a person who stayed only two
        nights pays two-thirds of their equal share.
      </p>

      <h2>The End-of-Festival Settlement</h2>
      <p>
        On the last day or the day after, sit down (or open a group chat) and do
        the final calculation:
      </p>
      <ol>
        <li>Total every person's recorded expenditures on behalf of the group.</li>
        <li>Calculate the average (total group spend ÷ number of people).</li>
        <li>Anyone above the average is owed money; anyone below owes money.</li>
        <li>Send Venmo requests to settle the balance.</li>
      </ol>
      <p>
        The goal is to make this easy enough that it happens immediately, not
        weeks later. See our guide on{" "}
        <Link href="/blog/splitting-bills-with-venmo">splitting bills with Venmo</Link> for
        tips on making the collection smooth.
      </p>

      <h2>Festival Cost-Splitting Tips</h2>
      <ul>
        <li>Log expenses as they happen — do not rely on memory.</li>
        <li>Use Jig to split shared grocery and food receipts accurately.</li>
        <li>Separate personal spending from group spending clearly.</li>
        <li>Pro-rate costs for people who attend fewer days.</li>
        <li>Settle within 24 hours of the trip ending.</li>
      </ul>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-expenses-at-a-sporting-event">How to Split Expenses at a Sporting Event</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-costco-run">How to Split a Costco Run</Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-with-venmo">How to Split Bills with Venmo</Link>
        </li>
        <li>
          <Link href="/faq">Jig FAQ</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
