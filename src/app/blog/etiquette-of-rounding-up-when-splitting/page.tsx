import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "The Etiquette of Rounding Up (or Down) When Splitting a Bill";
const description =
  "Should you round up or down when splitting? Here's what's polite, what's cheap, and the right approach for different situations.";
const slug = "/blog/etiquette-of-rounding-up-when-splitting";
const datePublished = "2026-02-22";

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

export default function EtiquetteOfRoundingUpWhenSplitting() {
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
        Your share of the dinner bill is $23.47. You Venmo $23. Or $24. Or $25. Each of those
        choices sends a small social signal — and in a group context, the cumulative effect of
        everyone rounding in the same direction is more significant than any individual cent.
      </p>
      <p>
        Here's a guide to the etiquette of rounding when splitting bills, including when rounding
        up is expected, when rounding down is acceptable, and how the group context changes the
        calculus.
      </p>

      <h2>The Default Rule: Round Up</h2>
      <p>
        The standard etiquette for personal payments — Venmo, cash — is to round up, not down.
        If your share is $23.47, you send $24. This is universally understood as the polite
        approach and has three practical justifications:
      </p>
      <ul>
        <li>
          <strong>It protects the person who covered the bill.</strong> If one person put their
          card down for the table and is collecting, rounding down from multiple people means
          they absorb the shortfall. Rounding up means they come out even or slightly ahead.
        </li>
        <li>
          <strong>It contributes to tip coverage.</strong> In many splitting scenarios, tip is
          estimated rather than precisely calculated per person. Rounding up provides a small
          buffer that helps tip the server correctly.
        </li>
        <li>
          <strong>The signal it sends.</strong> Rounding down to the exact cent reads as either
          miserly or passive-aggressive. Rounding up reads as generous.
        </li>
      </ul>

      <h2>How Much to Round Up</h2>
      <p>
        To the nearest dollar is the standard. If your share is $23.47, round to $24. You don't
        need to round to the nearest $5 unless that's a natural number for a very approximate
        split. Rounding up by $0.53 is generous enough; rounding up by $5.53 on a $23 share
        is well beyond expectation.
      </p>
      <p>
        The exception: very close friends in informal, recurring splitting situations often keep
        it loose in both directions. "Just send me $20" for a $19.80 share is common between
        close friends. The social relationship determines how precise you need to be.
      </p>

      <h2>When the Split Doesn't Divide Evenly</h2>
      <p>
        Equal splits on non-round totals create awkward remainders. $97 split four ways is $24.25
        each. There are a few ways to handle this:
      </p>
      <ul>
        <li>Three people pay $24, one person pays $25. The person collecting picks who gets the
        extra dollar, or volunteers to pay it themselves.</li>
        <li>Everyone rounds to $25 and the person collecting pockets the extra.</li>
        <li>Use an exact-calculation tool so each person pays to the cent.</li>
      </ul>
      <p>
        For precise splits, tools are better than rounding. <Link href="/">Jig</Link> calculates
        each person's itemized total to the cent and sends it to them directly — eliminating
        the rounding problem entirely by making the exact amount the expected amount.
      </p>

      <h2>Rounding and Tip</h2>
      <p>
        If tip has been calculated precisely per person, rounding up your payment covers any
        tip shortfall as well. If tip hasn't been calculated yet (you're doing an informal
        split of the food total), make sure someone has added it before rounding — otherwise
        your rounded-up $24 may not actually include any tip.
      </p>

      <h2>The One Time Rounding Down Is Fine</h2>
      <p>
        Rounding down is acceptable when you're collecting from others and the amounts are small.
        If five people each owe you $19.80 for a $99 shared meal and everyone sends $20, you come
        out $1 ahead. That's a reasonable outcome — you did the work of organizing and covering
        the bill.
      </p>
      <p>
        What's not acceptable is systematically rounding down each of your shares across many
        group outings. Over time, that's a pattern of underpaying that others will notice even
        if they don't say anything.
      </p>

      <h2>The Etiquette of Exact Calculation</h2>
      <p>
        Some people are sensitive about being charged to the exact cent for a $23.47 share. It
        can feel overly precise or transactional in a social context. The solution isn't to avoid
        precise calculation — it's to frame it correctly. "Just round up to $24 when you Venmo me"
        is friendly and exact. Demanding $23.47 in a social dinner context is technically correct
        but socially stiff.
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
          <Link href="/blog/how-to-calculate-tip-for-large-groups">
            How to Calculate Tip for Large Groups
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
