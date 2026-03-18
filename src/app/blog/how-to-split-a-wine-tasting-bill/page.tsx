import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Wine Tasting Bill";
const description =
  "Whether at a winery or a wine bar, splitting a tasting bill fairly requires tracking tastings, bottles, and food separately.";
const slug = "/blog/how-to-split-a-wine-tasting-bill";
const datePublished = "2026-03-06";

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

export default function HowToSplitAWineTastingBill() {
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
        A wine tasting outing — whether at a vineyard, a wine bar, or a tasting event — comes
        with its own unique billing structure. Unlike a restaurant meal where you order food
        and drinks, a tasting experience blends admission fees, per-flight charges, individual
        glasses, shared bottles, and often a food component. Knowing how to split each layer
        fairly makes the outing more enjoyable for everyone.
      </p>

      <h2>Tasting Flights: The Standard Case</h2>
      <p>
        Most winery visits involve a tasting flight — a set of pours (typically 5-8 wines) for a
        flat fee per person. If everyone in the group did the same tasting flight, this is a simple
        equal split: divide the tasting fee total by the number of people.
      </p>
      <p>
        Complications arise when people chose different flight tiers. Many wineries offer a
        standard flight ($20/person) and a reserve or library flight ($40/person). If three people
        did the standard flight and two did the premium flight, each person pays for their own
        flight tier — not an average.
      </p>

      <h2>When Someone Does Not Drink</h2>
      <p>
        Wine tastings with a non-drinker in the group require some thought. Many wineries charge
        a flat tasting fee regardless of whether you drink; others waive or reduce the fee for
        designated drivers or non-drinkers. Check ahead if this matters to the group.
      </p>
      <p>
        If the winery charges a fee for the table (some do a table minimum rather than per-person
        pricing), split it among the drinkers only. The non-drinker should not pay the same
        amount as someone who tasted 8 wines.
      </p>
      <p>
        For the broader fairness question, see our post on{" "}
        <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
          splitting the bill when some people drink and others don&apos;t
        </Link>.
      </p>

      <h2>Buying a Bottle: Who Wanted It?</h2>
      <p>
        After a tasting, some people will want to buy a bottle (or three) to open at the table.
        This is where splits get interesting. A $45 bottle of reserve cabernet purchased for the
        table to share is genuinely a shared cost — split it equally among the people who drank
        from it.
      </p>
      <p>
        The problem is when one person enthusiastically orders a bottle that not everyone wanted.
        If two people were happy with their tasting pours and two others pushed for an extra
        bottle, the bottle cost should fall primarily on the people who wanted it. If everyone
        agreed, everyone shares it.
      </p>
      <p>
        The social rule that applies here: if you ordered it for the table, you are implicitly
        agreeing to split it. If you ordered a specific bottle for yourself, it is yours. When
        in doubt, ask &ldquo;should we split this?&rdquo; before it arrives.
      </p>

      <h2>Food Pairings and Charcuterie</h2>
      <p>
        Many wine bars and wineries offer food: a cheese and charcuterie board, olive oil
        tastings, bread service, small plates. If these are ordered for the table, split them
        equally among everyone at the table (or among those who ate from them, if someone notably
        did not).
      </p>
      <p>
        Individual food orders — a bowl of soup, a sandwich, a personal cheese plate — belong to
        the person who ordered them.
      </p>

      <h2>Winery Tour Add-Ons</h2>
      <p>
        Some wineries offer a cave tour, a barrel tasting, or a private guided experience as an
        add-on to the standard tasting. These are typically flat per-person fees. If everyone in
        the group participated, split the tour cost equally. If only some people joined the tour,
        only those people pay the tour fee.
      </p>

      <h2>Wine Bar vs. Winery: Key Differences</h2>
      <table>
        <thead>
          <tr>
            <th>Setting</th>
            <th>Typical Structure</th>
            <th>Split Approach</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Winery tasting room</td>
            <td>Per-person flat tasting fee, optional bottle purchase</td>
            <td>Each person pays their tier; bottles split among drinkers</td>
          </tr>
          <tr>
            <td>Wine bar (by the glass)</td>
            <td>Individual glasses ordered from menu</td>
            <td>Itemized — each person pays for their own pours</td>
          </tr>
          <tr>
            <td>Wine bar (shared bottle)</td>
            <td>One bottle for the table</td>
            <td>Equal split among everyone who drank from it</td>
          </tr>
          <tr>
            <td>Private tasting event</td>
            <td>Flat admission or per-pour pricing</td>
            <td>Admission split equally; extras individually</td>
          </tr>
        </tbody>
      </table>

      <h2>A Practical Approach</h2>
      <p>
        At the end of a wine tasting, the receipt typically has clear line items: tasting fees
        per person, any bottles purchased, food items, and tax. This receipt is actually one of
        the easier ones to split because most items are already per-person.
      </p>
      <p>
        If bottles and food complicate the math, photograph the receipt with{" "}
        <Link href="/">Jig</Link> and assign each line item. Tasting fees go to individuals,
        shared bottles go to the group who drank them, and food items split among those who ate.
        The tool handles the tax and tip distribution automatically.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Wine tasting splits are cleaner than most restaurant bills because the base tasting fee
        is already per-person. The complications — different flight tiers, shared bottles,
        food, tour add-ons — all follow the same principle: individual costs stay individual,
        shared costs split among those who shared them.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
            How to Split the Bill When Some People Drink and Others Don&apos;t
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-byob-restaurant-bill">
            How to Split a BYOB Restaurant Bill
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
