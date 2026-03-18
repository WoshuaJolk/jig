import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Wedding-Weekend Restaurant Dinner";
const description =
  "Wedding weekends often include group dinners the night before or after. Here's how to split those restaurant bills smoothly.";
const slug = "/blog/how-to-split-a-wedding-reception-dinner";
const datePublished = "2026-02-28";

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

export default function HowToSplitAWeddingReceptionDinner() {
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
        Wedding weekends rarely consist of just the wedding. There is almost
        always a group dinner somewhere in the mix — a rehearsal dinner the night
        before, a bridesmaid or groomsmen dinner, an out-of-town guest gathering,
        or a recovery brunch the morning after. These meals are wonderful, but
        the bill-splitting dynamics are more complicated than a normal group
        dinner because of who is covering whom and what the occasion actually
        calls for.
      </p>

      <h2>The Rehearsal Dinner</h2>
      <p>
        Traditionally, the rehearsal dinner is hosted and paid for by the groom's
        family. Guests — the wedding party, immediate family, and out-of-town
        guests — are not expected to pay. If that tradition is being followed, no
        splitting is needed; the hosting family pays the bill.
      </p>
      <p>
        The modern reality is more varied. Many couples host their own rehearsal
        dinner, or the two families split the cost, or it becomes a casual
        restaurant dinner where people pay their own way. Whatever the
        arrangement, communicate it clearly in the invitation: "Dinner is on us"
        vs. "We're doing a casual dinner — each paying our own way."
      </p>
      <p>
        If guests are paying their own way at a rehearsal dinner and the
        bride and groom's meals are being covered by their families, designate
        someone from each family to handle the relevant portion of the check.
        Splitting a large restaurant bill at a rehearsal dinner is exactly the
        kind of situation where scanning the receipt with{" "}
        <Link href="/">Jig</Link> and assigning items by person saves five minutes
        of confusion at the table.
      </p>

      <h2>The After-Party Dinner</h2>
      <p>
        Many wedding receptions end early enough that guests head to a nearby
        restaurant or bar for a continued celebration. These gatherings are
        informal and typically split per-person or each-pays-their-own.
      </p>
      <p>
        The new couple usually does not pay for the after-party dinner — they
        are in the thick of the wedding night and often are not even present for
        the full meal. If they do join, covering their dinner is a nice gesture
        from close friends, but it is not a social expectation the way a birthday
        dinner is.
      </p>

      <h2>Out-of-Town Guest Dinners</h2>
      <p>
        Some couples or families host a dinner for out-of-town guests the night
        before the wedding as a thank-you for traveling. If this is a hosted
        event, the hosts pay. If it is a "let's all meet at this restaurant"
        gathering where guests are paying for themselves, clarify that upfront.
      </p>
      <p>
        Out-of-town guests are already spending money on travel and hotels to
        attend the wedding. An unexpected restaurant bill on top of that — when
        they thought they were invited to a hosted event — is a poor experience.
        Clarity is the only thing needed here.
      </p>

      <h2>Who's Covering Whom: A Quick Reference</h2>
      <ul>
        <li>
          <strong>Rehearsal dinner (traditional):</strong> groom's family covers
          all guests. No splitting.
        </li>
        <li>
          <strong>Rehearsal dinner (modern/casual):</strong> communicate the
          arrangement clearly. If guests pay, use an itemized split.
        </li>
        <li>
          <strong>Bridesmaid/groomsmen dinner:</strong> typically covered by
          the bride or groom respectively as a thank-you. If splitting, each
          person covers their own.
        </li>
        <li>
          <strong>After-party dinner:</strong> each pays their own; covering the
          couple is optional and generous.
        </li>
        <li>
          <strong>Out-of-town guest gathering:</strong> if hosted, hosts pay; if
          casual meetup, each pays their own.
        </li>
      </ul>

      <h2>Large Tables and Mixed Groups</h2>
      <p>
        Wedding-weekend dinners often involve large tables with guests from
        different relationships to the couple — family, college friends,
        coworkers — who may not know each other. Splitting the bill cleanly
        is especially important at these dinners because the dynamics are
        more formal and the potential for awkwardness is higher.
      </p>
      <p>
        Best practice: one person (a maid of honor, a best man, or a family
        member) takes point on the check. They pay by card and send Venmo
        requests to the table afterward. An itemized split ensures that the
        aunt who had soup and water is not subsidizing the groomsman who ordered
        the ribeye and a bottle of wine.
      </p>
      <p>
        For the mechanics of splitting a large group restaurant bill, see our
        full guide on{" "}
        <Link href="/blog/how-to-split-a-large-group-dinner">how to split a large group dinner</Link>.
      </p>

      <h2>The Morning-After Brunch</h2>
      <p>
        The morning-after brunch is one of the most relaxed meals of a wedding
        weekend. If the couple or a family member is hosting it, they cover costs.
        If it is a casual "let's all grab brunch" situation, everyone pays their
        own way. The same rules apply as any group brunch — see our guide on
        <Link href="/blog/how-to-split-a-brunch-bill"> how to split a brunch bill</Link> for
        specific tips.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-large-group-dinner">How to Split a Large Group Dinner</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-brunch-bill">How to Split a Brunch Bill</Link>
        </li>
        <li>
          <Link href="/blog/receipt-splitting-etiquette">Receipt Splitting Etiquette</Link>
        </li>
        <li>
          <Link href="/how-it-works">How Jig Works</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
