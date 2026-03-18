import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Handle It When Someone Ordered Way More Than Everyone Else";
const description =
  "One person at the table ordered an expensive steak and three cocktails. How do you split the bill fairly? Here's the guide.";
const slug = "/blog/when-someone-ordered-way-more";
const datePublished = "2026-03-08";

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

export default function WhenSomeoneOrderedWayMore() {
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
        The scenario is familiar: a table of six, most people order a pasta or a burger and one
        drink. One person orders the ribeye, a starter, two cocktails, and a dessert. At the end
        of the night, someone suggests splitting evenly. The four people who had $30 meals are now
        covering part of the $120 that one person consumed.
      </p>
      <p>
        This is one of the most common sources of resentment in group dining. Here's how to handle
        it before, during, and after dinner — without making it weird.
      </p>

      <h2>The Problem with the Automatic Even Split</h2>
      <p>
        An even split is the path of least resistance. It avoids the awkward conversation about
        who ordered what and gets everyone out the door faster. But it only feels fair when
        everyone ordered roughly the same amount. When there's a significant outlier, the even
        split is a transfer of money from the people who ordered modestly to the person who
        ordered extravagantly.
      </p>
      <p>
        The person who ordered the least usually knows this and feels it — they just don't say
        anything because they don't want to seem cheap. Over time, this builds resentment in
        group friendships.
      </p>

      <h2>Set Expectations Before Ordering</h2>
      <p>
        The cleanest solution is to establish the split method before anyone opens the menu. A
        single sentence does the job: "Should we split evenly at the end, or just pay for what
        we each get?" This normalizes itemized splitting and gives everyone a chance to order what
        they actually want without fear of subsidizing someone else's choices.
      </p>
      <p>
        It also gives the high-orderer a chance to be gracious: "I'm going to get the steak so
        let's just do itemized tonight." That's a normal, mature thing to say and it resolves the
        situation before it becomes one.
      </p>

      <h2>When You're Already at the End of the Meal</h2>
      <p>
        If the check arrives and the split method was never discussed, you still have options that
        don't require a confrontation:
      </p>
      <h3>The quiet itemized split</h3>
      <p>
        Rather than announcing "we're not splitting evenly," just take out your phone and use
        <Link href="/"> Jig</Link> to photograph the receipt. Assign each item to the person who
        ordered it. Share the link. Everyone sees their own total and pays accordingly. No
        accusation, no drama — just the math.
      </p>
      <h3>The hybrid approach</h3>
      <p>
        Some groups split the food evenly but separate out the alcohol. This works when the
        primary outlier is drinks: two people had four cocktails each, everyone else had water.
        Total the alcohol separately, have those two people cover it, then split the food portion
        evenly. This is a reasonable middle ground.
      </p>
      <h3>The direct but light approach</h3>
      <p>
        If you know the person well: "Hey, I think you got a bit more tonight — want to just do
        our own items?" Most people, when they realize the disparity, will agree without issue.
        What they resist is being singled out and made to feel judged. Keep the tone matter-of-fact,
        not accusatory.
      </p>

      <h2>What If the High-Orderer Insists on Splitting Evenly?</h2>
      <p>
        This does happen. Someone ordered the most and also pushes hardest for an even split — a
        dynamic that ranges from oblivious to manipulative depending on the person and context.
      </p>
      <p>
        Your options here are practical: you can pay the even split this time and note that you'll
        order accordingly next time (get the ribeye yourself), you can suggest separate checks
        upfront at the next outing, or you can have a direct conversation outside the restaurant
        context if this is a recurring pattern.
      </p>
      <p>
        For situations where the pattern repeats, see our guide on{" "}
        <Link href="/blog/splitting-bills-with-bad-with-money-friend">
          splitting bills with a friend who's bad with money
        </Link>
        .
      </p>

      <h2>The Case for Normalizing Itemized Splits</h2>
      <p>
        There's a cultural association in some friend groups where asking for an itemized split
        feels miserly or distrustful. This norm is worth pushing back on. Paying for what you
        ordered is not cheap — it's accurate. And tools like Jig make the itemized split so fast
        and frictionless that the "it's too complicated" objection no longer holds.
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
          <Link href="/blog/splitting-bills-with-bad-with-money-friend">
            How to Split Bills with a Friend Who's Bad with Money
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
            How to Split the Bill Between Drinkers and Non-Drinkers
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
