import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Tasting Menu Bill";
const description =
  "Tasting menus make splitting simple in theory — same food, same price — but wine pairings, supplements, and special diets complicate things.";
const slug = "/blog/how-to-split-a-tasting-menu-bill";
const datePublished = "2026-03-03";

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

export default function HowToSplitATastingMenuBill() {
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
        A tasting menu is, in theory, the easiest restaurant bill to split: everyone has the same
        courses at the same fixed price. Divide total by headcount, done. In practice, tasting
        menus at fine dining establishments generate bills that are significantly more complicated,
        because the optional add-ons — wine pairings, supplement courses, non-alcoholic pairings,
        special dietary substitutions — can add hundreds of dollars and vary significantly between
        diners.
      </p>

      <h2>The Fixed Price Baseline</h2>
      <p>
        Start with what is truly equal: the base tasting menu price. If the menu is $185 per
        person and everyone at the table participated in the full tasting menu, that $185 is equal
        per person. Split that portion equally.
      </p>
      <p>
        Some tasting menus price differently based on the number of courses (5-course vs. 8-course
        vs. 12-course). If everyone chose the same tier, equal split. If different people chose
        different course counts, each pays their own tier price.
      </p>

      <h2>Wine Pairings: The Biggest Variable</h2>
      <p>
        Wine pairings at tasting menu restaurants are typically the most significant add-on. A
        standard wine pairing might run $95 per person; a premium or sommelier pairing $150 or
        more. Non-alcoholic pairings (juice pairings, tea pairings, zero-proof cocktails) are
        often $65-85.
      </p>
      <p>
        These are individual choices. Some people opt in, some do not. The rule is clear: each
        person pays for their own pairing selection. Do not average the pairing cost across the
        table.
      </p>
      <p>
        The exception: some restaurants price the wine pairing per table rather than per person,
        or require that all guests take the pairing if any do. In those cases, the pairing cost
        is genuinely shared and should be split equally. This is rare, but worth confirming when
        you book.
      </p>

      <h2>Supplement Courses</h2>
      <p>
        Tasting menus often offer optional supplements: a white truffle course for $85, an A5
        wagyu course for $65, a supplemental cheese course for $40. These are individual upgrades.
      </p>
      <p>
        If you ordered the truffle supplement and your dining partner did not, you pay for the
        truffle course. This should be listed as a separate line item on the bill. Handle it the
        same way you would any individual item: it belongs to the person who ordered it.
      </p>

      <h2>Dietary Substitutions and Vegetarian/Vegan Menus</h2>
      <p>
        Many upscale tasting menu restaurants offer a full vegetarian or vegan menu alongside
        the standard menu. These menus are sometimes the same price, sometimes slightly less.
        If there is a price difference, each person pays the price of the menu they received.
      </p>
      <p>
        When a restaurant makes custom substitutions for a dietary restriction (replacing a foie
        gras course with a vegetable course, for example), this is generally included in the
        standard menu price and does not affect the split.
      </p>
      <p>
        For a broader look at how dietary restrictions interact with bill splitting, see our post
        on{" "}
        <Link href="/blog/splitting-bills-with-dietary-restrictions">
          splitting bills when someone has dietary restrictions
        </Link>.
      </p>

      <h2>Large Table Coordination</h2>
      <p>
        Tasting menus at fine dining restaurants often require advance reservation for the entire
        party, and the restaurant charges per person at the time of booking or requires a
        per-person deposit. When this is the case, the base menu price is already settled
        individually.
      </p>
      <p>
        The final bill then only needs to sort out pairings, supplements, and any additional
        beverages ordered. These are smaller line items but still need to be divided correctly.
      </p>
      <p>
        For parties of 8 or more at a tasting menu restaurant, consider designating one person
        to photograph the final check and manage the split calculation. Tasting menu receipts
        are usually well-organized with clear per-person line items — they are one of the easier
        receipts to work with.
      </p>

      <h2>Sample Split Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Split Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base tasting menu (everyone)</td>
            <td>Equal per person</td>
          </tr>
          <tr>
            <td>Standard wine pairing (3 of 6 people)</td>
            <td>Divided among those 3 only</td>
          </tr>
          <tr>
            <td>Non-alcoholic pairing (1 person)</td>
            <td>That person only</td>
          </tr>
          <tr>
            <td>Truffle supplement (2 people)</td>
            <td>Divided between those 2 only</td>
          </tr>
          <tr>
            <td>After-dinner digestif (1 person)</td>
            <td>That person only</td>
          </tr>
          <tr>
            <td>Tax and service charge</td>
            <td>Proportional to each person&apos;s subtotal</td>
          </tr>
        </tbody>
      </table>

      <h2>Service Charges at Fine Dining</h2>
      <p>
        Many fine dining and tasting menu restaurants include a mandatory service charge (often
        18-22%) rather than leaving tipping to the diner&apos;s discretion. This will appear as
        a line item on the bill. Distribute it proportionally to each person&apos;s share of the
        food and beverage total.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Tasting menu bills are fair and simple at the base level — equal per person. The
        complexity comes from opt-in add-ons: wine pairings, supplement courses, specialty
        beverages. These are always individual costs. Keep the base equal, keep the add-ons
        individual, and distribute tax and service charges proportionally.
      </p>
      <p>
        For tasting menu dinners where the itemized receipt shows each person&apos;s selections,
        photograph it with <Link href="/">Jig</Link> and assign each line item. Tax and service
        charges are distributed proportionally without any manual calculation.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/splitting-bills-with-dietary-restrictions">
            How to Split Bills When Someone Has Dietary Restrictions
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
            How to Split the Bill When Some People Drink and Others Don&apos;t
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-large-group-dinner">
            How to Split a Large Group Dinner (10+ People)
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
