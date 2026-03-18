import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bills Fairly When You're on a Tight Budget";
const description =
  "Being budget-conscious in a group shouldn't mean awkward moments. Here's how to handle splitting bills when money is tight.";
const slug = "/blog/how-to-split-bills-on-a-budget";
const datePublished = "2026-03-04";

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

export default function HowToSplitBillsOnABudget() {
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
        Being on a tight budget doesn't mean you stop going out — it means you need to be more
        intentional about how you manage shared expenses. The challenge is doing this without
        creating awkward moments or feeling like you have to explain yourself every time.
      </p>
      <p>
        Here's a practical guide for staying within your limits when dining and spending with
        friends, while keeping the social experience intact.
      </p>

      <h2>Set Your Budget Before You Go</h2>
      <p>
        Decide on a hard number before the outing — not a range, an exact ceiling. "I'm spending
        no more than $40 tonight including tip" is a useful constraint. It guides what you order
        and prevents the gradual creep of adding items because the food sounds good.
      </p>
      <p>
        If you know the restaurant in advance, look at the menu online. Identify two or three
        items that fall within your budget. Having a plan before you sit down removes the stress
        of menu math in real time.
      </p>

      <h2>Advocate for Itemized Splitting Upfront</h2>
      <p>
        The single most important thing you can do is establish that the group will split itemized
        before anyone orders. Say it early: "Should we just do our own items tonight?" This is a
        completely normal suggestion and most groups will agree without issue.
      </p>
      <p>
        An itemized split means you pay exactly for what you ordered — your $14 pasta, your one
        drink, your proportional share of tax and tip. You're not subsidizing the table's wagyu
        sliders and bottle of wine. Using <Link href="/">Jig</Link> to split the receipt makes
        itemized splitting fast enough that it's not a burden on the group.
      </p>

      <h2>Be Honest with Trusted Friends</h2>
      <p>
        With close friends, a simple honest statement is often the best approach: "I'm keeping it
        cheap tonight." You don't need to explain why. Real friends won't press, and it establishes
        a frame that makes ordering a $14 dish instead of a $36 one completely unremarkable.
      </p>
      <p>
        What you want to avoid is silently ordering a modest meal, then having someone propose
        splitting evenly — at which point you either overpay or have to object awkwardly. Get
        ahead of that by naming the split method before it becomes an issue.
      </p>

      <h2>Strategies for Common Budget Challenges</h2>
      <h3>When the group wants a more expensive restaurant than your budget allows</h3>
      <p>
        You have a few options: suggest an alternative venue that works for everyone, attend but
        eat strategically (appetizer as main, skip dessert), or decline gracefully ("I can't make
        this one, but let's do something soon"). Never agree to a venue that will put you in a
        difficult position and then feel stuck.
      </p>
      <h3>When everyone orders appetizers and desserts you can't afford to share in</h3>
      <p>
        It's fine to skip shared items. "I'm skipping the apps tonight" is easy to say and requires
        no explanation. If the table decides to split shared dishes evenly, you can participate
        minimally — take one small portion — or politely opt out and note it when the check comes.
      </p>
      <h3>When someone offers to cover you</h3>
      <p>
        If a friend offers to cover your share, accept graciously if you're comfortable with the
        relationship, and reciprocate when you're able. This is how friendships actually work —
        not every outing needs to be perfectly even in the moment. What matters is that the
        generosity flows in both directions over time.
      </p>

      <h2>The Longer-Term Picture</h2>
      <p>
        Budget constraints are often temporary. The habits you build during tighter periods —
        itemized splitting, pre-planning, honest communication — are actually better financial
        habits regardless of income level. Many high earners still prefer itemized splits because
        they hate subsidizing others. These skills carry forward.
      </p>
      <p>
        See also our guide on{" "}
        <Link href="/blog/splitting-bills-when-one-person-is-unemployed">
          splitting bills when one person in the group is unemployed
        </Link>{" "}
        for related strategies.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/why-equal-splits-arent-always-fair">
            Why Splitting the Bill Equally Isn't Always Fair
          </Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-when-one-person-is-unemployed">
            How to Split Bills When One Person Is Unemployed or Earning Less
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
