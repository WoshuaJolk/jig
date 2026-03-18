import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Reunion Dinner Bills (High School, College, Family)";
const description =
  "Reunions mean big group dinners with people you haven't seen in years. Here's how to split the bill without adding awkwardness.";
const slug = "/blog/how-to-split-reunion-dinner-bills";
const datePublished = "2026-02-26";

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

export default function HowToSplitReunionDinnerBills() {
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
        Reunion dinners are uniquely charged social events. Everyone at the table
        shares a common history, but time has sent each person on a different
        trajectory. Some people have become comfortable financially; others have
        had harder roads. Some are single; others have families. The last time
        you all split a dinner bill you were splitting a $12 pizza in a dorm room.
        Now you are at a downtown steakhouse with a $400 check.
      </p>
      <p>
        Here is how to handle the money without making it the thing everyone
        remembers about the night.
      </p>

      <h2>The Reconnecting Dynamic</h2>
      <p>
        At a reunion dinner, there is often a subtle competitive tension between
        two impulses: people who want to seem generous (and may order and drink
        freely as a result) and people who feel financial anxiety about the cost
        but do not want to say so.
      </p>
      <p>
        The organizer of the dinner can defuse both by being upfront about the
        cost range when the restaurant is announced. "Dinner will be around
        $60–80 per person with drinks" eliminates guessing and lets people plan
        accordingly. It also gives people a graceful way to suggest a different
        venue if the price is a concern.
      </p>

      <h2>High School Reunions</h2>
      <p>
        High school reunions often involve the widest income disparity of any
        group dinner you will ever attend. The class of a given year includes
        people at every income level twenty years later: some have done extremely
        well; others are still working through challenges that started before the
        last reunion.
      </p>
      <p>
        A few principles that work well:
      </p>
      <ul>
        <li>
          Choose a restaurant with genuine price range, not just one expensive
          section of the menu. When people can choose to order something
          affordable, they do not feel trapped.
        </li>
        <li>
          Use an itemized split rather than an equal split. Splitting a
          $400 check by twelve people means the person who had soup and a soda
          pays the same as the one who had the ribeye and three whiskeys. That
          is a social tax nobody asked for.
        </li>
        <li>
          If an equal split is the tradition, let people know in advance so
          they can plan their order accordingly.
        </li>
      </ul>

      <h2>College Reunions</h2>
      <p>
        College reunion dinners tend to be somewhat more financially homogeneous,
        though the decade-plus since graduation still produces variation. The
        social norms from college (everyone chips in, nobody over-thinks it) can
        persist in a way that does not always serve everyone well.
      </p>
      <p>
        If you are ten years out from college and some people are doing very well
        while others are not, the "just split it evenly" approach that felt
        natural in college can now mean someone is effectively covering hundreds
        of dollars of someone else's food and drinks. An itemized split respects
        where everyone actually is.
      </p>

      <h2>Family Reunions</h2>
      <p>
        Family reunion dinners have their own layer of complexity: the family
        dynamics around money that have existed for decades. Some families have
        a member who always treats everyone; others have careful negotiations
        about fairness that have played out over generations.
      </p>
      <p>
        For family reunions, a per-family-unit split tends to work best. Each
        nuclear family or household unit pays for what they ordered. This prevents
        the family of seven from splitting equally with the single cousin.
      </p>

      <h2>Organizing Payment for Large Groups</h2>
      <p>
        Reunion dinners are frequently large — 15, 20, 30 people. This makes
        bill logistics genuinely complicated. Here is a workflow that scales:
      </p>
      <ol>
        <li>
          Designate one person to manage the check. They pay by card and
          collect from everyone else.
        </li>
        <li>
          Take a photo of the receipt and use <Link href="/">Jig</Link> to
          parse every line item. Assign items to each person or couple, and
          the app calculates proportional tax and tip automatically.
        </li>
        <li>
          Share a split link with the group so everyone can see their total
          before any payment is requested.
        </li>
        <li>
          Send Venmo requests directly from the app so each person gets their
          exact amount with one tap.
        </li>
      </ol>
      <p>
        For a group of twenty people who have not seen each other in years, this
        approach turns a fifteen-minute bill negotiation into a two-minute wrap-up.
        See <Link href="/how-it-works">how Jig works</Link> for the full flow.
      </p>

      <h2>Income Disparity in Older Groups</h2>
      <p>
        As groups get older, income gaps tend to widen. The person who struggled
        financially at 25 may be doing well at 45, or vice versa. Assumptions
        about who can afford what are often wrong.
      </p>
      <p>
        The best approach: do not make assumptions. Structure the split to be fair
        by default (itemized, per family unit) and let the naturally generous
        people in the group offer to do more if they want to. Do not engineer
        situations where someone has to ask for help or quietly underpay.
      </p>
      <p>
        An itemized split removes the social awkwardness because the math is
        objective. Everyone pays for what they ordered. No negotiation, no
        resentment, no need to discuss anyone's financial situation.
      </p>

      <h2>The "We'll Just Split It Evenly" Debate</h2>
      <p>
        Equal splits remain popular at reunion dinners because they feel simple
        and egalitarian. For some groups, especially when spending levels are
        similar, they work fine. But when spending varies significantly, they
        create a hidden subsidy from modest orders to expensive ones.
      </p>
      <p>
        If someone suggests an equal split and you think an itemized split would
        be fairer, you do not have to make it a debate. You can simply say "let
        me scan the receipt real quick and we'll figure out what everyone had"
        and pull up <Link href="/">Jig</Link>. It feels matter-of-fact rather
        than confrontational.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-large-group-dinner">How to Split a Large Group Dinner</Link>
        </li>
        <li>
          <Link href="/blog/fair-bill-splitting-methods">Fair Bill Splitting Methods</Link>
        </li>
        <li>
          <Link href="/blog/receipt-splitting-etiquette">Receipt Splitting Etiquette</Link>
        </li>
        <li>
          <Link href="/faq">Jig FAQ</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
