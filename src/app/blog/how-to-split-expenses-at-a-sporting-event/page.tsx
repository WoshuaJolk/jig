import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Expenses at a Sporting Event";
const description =
  "Stadium food and drinks are expensive. Here's how to fairly split the bill when attending a game with a group.";
const slug = "/blog/how-to-split-expenses-at-a-sporting-event";
const datePublished = "2026-03-01";

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

export default function HowToSplitExpensesAtASportingEvent() {
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
        Going to a game with a group is one of the great social pleasures — and
        one of the more quietly expensive ones. Stadium pricing on food and drinks
        has reached the point where three beers and a hot dog can easily run $60,
        and that is before parking, merchandise, or a pre-game meal. When you are
        with a group of four to ten people and everyone is consuming at different
        rates, figuring out how to split things fairly is worth thinking through
        before you walk through the gates.
      </p>

      <h2>Tickets: Usually Split Before the Event</h2>
      <p>
        Ticket costs are generally handled before the game day. If someone
        bought tickets for the group, collect payment at the time of purchase or
        immediately after — not at the game itself. Use Venmo to request payment
        the day tickets are confirmed. Waiting until game day creates
        unnecessary friction and the risk of someone forgetting.
      </p>
      <p>
        If the seats are different quality (some closer, some farther), charge
        each person the actual price of their seat rather than an average.
      </p>

      <h2>Parking</h2>
      <p>
        Parking is a straightforward shared expense. If you drove together, split
        the parking fee equally among everyone in the car. If multiple cars are
        going, each car splits their own parking cost.
      </p>
      <p>
        If one person drove their own car to get the group there, consider
        compensating them slightly more — gas plus some acknowledgment of the
        effort. A standard approach is having the driver not pay for parking
        while passengers split it.
      </p>

      <h2>Stadium Food: The High-Variance Problem</h2>
      <p>
        Stadium concessions are where per-person costs diverge most dramatically.
        One person might have two beers, a hot dog, and nachos. Another might
        have a water and a soft pretzel. Asking everyone to split the concession
        spending equally would be unfair when one person spent $70 and another
        spent $12.
      </p>
      <p>
        The most practical approach at a stadium is everyone pays for their own
        concessions as they buy them. Card readers are now available at most
        stadium concession stands, making this easy.
      </p>
      <p>
        The exception: if someone runs a food or drink run for the group and
        pays for everyone's items at once (which happens at big stadium lines),
        note what each person got and settle it via Venmo immediately after. If
        you paid $85 for a round of four beers and two hot dogs, do not wait
        until the game ends to collect.
      </p>

      <h2>Stadium Beer Prices and Group Rounds</h2>
      <p>
        Buying rounds at a stadium concession is a common pattern — one person
        leaves their seat to get beers for everyone. The challenge is keeping
        track across a three-hour game with multiple trips.
      </p>
      <p>
        A simple approach: designate one person to buy all the beers for the
        group and collect a flat amount from everyone upfront. "I'll do all the
        beer runs, everyone give me $30 and we'll see how far that gets us" is
        efficient and keeps you from doing math during tense game moments.
      </p>
      <p>
        If some people in the group do not drink, separate the beer budget from
        the non-alcohol spending. Non-drinkers should not subsidize a round they
        did not participate in.
      </p>

      <h2>Pre-Game Meal</h2>
      <p>
        Many groups eat or drink before going into the stadium — a bar near the
        arena, a restaurant, or tailgate food in the parking lot. This is
        essentially a regular group restaurant bill and deserves the same
        treatment: itemized split or equal split depending on the group and the
        price variation.
      </p>
      <p>
        For a pre-game restaurant bill, use <Link href="/">Jig</Link> to scan the
        receipt and assign items to each person. Tax and tip get applied
        proportionally, and you can share a split link so everyone pays their
        exact share before you go in — no money handling inside the stadium needed.
      </p>

      <h2>Merchandise</h2>
      <p>
        Jerseys, hats, and team gear are personal purchases. Never split
        merchandise costs with the group unless it was a group gift for someone.
        Each person buys what they want and pays for it themselves.
      </p>

      <h2>Different Consumption Levels: The Fairness Question</h2>
      <p>
        At any sporting event, some people will eat and drink significantly more
        than others. The person who had four beers, a giant pretzel, and loaded
        nachos should not expect the person who had a water bottle and popcorn
        to split costs equally.
      </p>
      <p>
        Best practice: be explicit at the start of the outing. "Let's just each
        pay for our own food and drinks today" removes any ambiguity. Everyone
        buys what they want and pays for it themselves. Only shared purchases
        (one order of loaded fries the whole group shares) need to be split.
      </p>

      <h2>Quick Summary</h2>
      <ul>
        <li>Collect ticket money at purchase time, not at the game.</li>
        <li>Split parking equally among everyone in the vehicle.</li>
        <li>Each person pays for their own concessions at the counter.</li>
        <li>For group beer runs, collect a flat amount upfront.</li>
        <li>Non-drinkers do not split alcohol costs.</li>
        <li>Use Jig for any pre- or post-game restaurant bills.</li>
      </ul>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-expenses-at-a-music-festival">How to Split Expenses at a Music Festival</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-tailgate-party-bill">How to Split a Tailgate Party Bill</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">How to Split Alcohol vs. Non-Alcohol Fairly</Link>
        </li>
        <li>
          <Link href="/faq">Jig FAQ</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
