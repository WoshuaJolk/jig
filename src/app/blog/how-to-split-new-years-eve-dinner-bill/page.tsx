import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a New Year's Eve Dinner Bill";
const description =
  "NYE dinners often come with fixed menus, champagne packages, and cover charges. Here's how to split the bill fairly.";
const slug = "/blog/how-to-split-new-years-eve-dinner-bill";
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

export default function HowToSplitNewYearsEveDinnerBill() {
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
        New Year's Eve is the most expensive single-night restaurant event of
        the year. Restaurants capitalize on the demand by switching to fixed prix
        fixe menus, adding champagne toast packages, charging cover fees, and
        sometimes including entertainment in the ticket price. You can easily
        spend two to three times what a normal dinner would cost — before you
        have even looked at the wine list.
      </p>
      <p>
        When you are going with a group, understanding exactly what the bill will
        contain — and how to split it fairly — prevents a rocky start to the new
        year.
      </p>

      <h2>Prix Fixe Menus</h2>
      <p>
        Most restaurants on New Year's Eve offer a set menu rather than their
        standard à la carte options. A prix fixe means everyone at the table is
        charged the same base price per person regardless of exactly what they
        ordered within the menu. This actually makes splitting easier: the food
        component is already an equal per-person charge.
      </p>
      <p>
        What varies — and what causes confusion — are the add-ons on top of the
        fixed price.
      </p>

      <h2>The Champagne Toast Charge</h2>
      <p>
        Many restaurants include a midnight champagne toast in their NYE package,
        either bundled into the prix fixe price or listed as a separate line item
        on the bill. A few scenarios:
      </p>
      <ul>
        <li>
          <strong>Bundled into the fixed price:</strong> Everyone pays the same
          rate including the champagne. If some people do not drink, it is worth
          asking the restaurant if there is a non-alcohol substitute option — some
          will offer sparkling water at the same price point for the toast.
        </li>
        <li>
          <strong>Listed separately:</strong> If the champagne toast is a
          separate line item (say, $15 per person), it is fair to split it only
          among those who had champagne. Ask the server to note who opted in and
          out before the midnight toast.
        </li>
      </ul>
      <p>
        Either way, clarify before you sit down. Look at the menu online ahead
        of time and ask the restaurant when you make the reservation exactly what
        is included in the per-person price.
      </p>

      <h2>Cover Charges and Late-Night Fees</h2>
      <p>
        Some venues — especially restaurants that transition into a party or
        club atmosphere after midnight — charge a separate cover fee on top of
        the dinner. This might be $25–75 per person and goes toward the DJ,
        entertainment, or event overhead.
      </p>
      <p>
        This charge is typically equal per person and should be included in your
        per-head estimate when you tell the group what to expect. A simple way
        to handle it: the total per-person cost is prix fixe + cover + champagne
        package + expected wine/cocktails. Share a rough number with your group
        at the time of the reservation so no one is surprised at midnight.
      </p>

      <h2>Wine and Cocktails</h2>
      <p>
        Drinks are where the NYE bill gets complex, because people order very
        different amounts. The prix fixe menu may include food, but wine and
        cocktails during dinner are almost always à la carte and can easily add
        $40–100 per person to the bill.
      </p>
      <p>
        The fairest approach: split food and drinks separately. Everyone pays
        the equal per-person food charge; drinks are itemized by who ordered
        what. Use <Link href="/">Jig</Link> to scan the receipt — it reads every
        line item including individual drink orders and lets each person claim
        what they had. Tax and tip are applied proportionally to everyone's
        individual total.
      </p>

      <h2>When the Bill Has Both Fixed and Variable Components</h2>
      <p>
        A typical NYE receipt might look like this:
      </p>
      <ul>
        <li>Prix fixe × 6 people = $540 (equal split: $90 each)</li>
        <li>Champagne package × 6 = $90 (equal split: $15 each)</li>
        <li>Wine during dinner (various bottles, different amounts): variable</li>
        <li>Cover charge × 6 = $150 (equal split: $25 each)</li>
        <li>Tax + service charge: applied proportionally</li>
      </ul>
      <p>
        The fixed components ($90 + $15 + $25 = $130) are split equally. The
        variable component (wine and cocktails) is itemized. Everyone's final
        total is their $130 fixed share plus whatever they ordered to drink.
      </p>
      <p>
        If someone had three cocktails at $18 each and another person only had
        one glass of wine at $14, an equal split of the drinks would be
        meaningfully unfair. An itemized approach respects actual consumption.
      </p>

      <h2>Gratuity on NYE</h2>
      <p>
        Many restaurants automatically add 20–22% gratuity on NYE, both because
        of the occasion and because large groups are standard. Check the bill
        before you add an additional tip — a common mistake is tipping on top
        of an already-included service charge, which doubles the tip
        unintentionally.
      </p>
      <p>
        If the service was exceptional and you want to add to the included
        gratuity, a few extra dollars per person is a generous gesture. If the
        service was poor, you can speak to a manager — removing an included
        gratuity requires their authorization.
      </p>

      <h2>Pre-Collect to Keep the Night Smooth</h2>
      <p>
        For NYE group dinners, consider collecting the fixed-cost portion (prix
        fixe + champagne package + cover charge) from everyone before the event.
        Venmo request it the week before. Then at dinner, the only thing left to
        settle is individual drinks. This keeps the midnight moment from
        dissolving into a bill calculation session.
      </p>
      <p>
        See our <Link href="/faq">FAQ</Link> for how Jig's sharing feature lets
        everyone view and confirm their split before payment goes out.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-large-group-dinner">How to Split a Large Group Dinner</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">How to Split Alcohol vs. Non-Alcohol Fairly</Link>
        </li>
        <li>
          <Link href="/blog/how-to-calculate-tax-and-tip-per-person">How to Calculate Tax and Tip Per Person</Link>
        </li>
        <li>
          <Link href="/how-it-works">How Jig Works</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
