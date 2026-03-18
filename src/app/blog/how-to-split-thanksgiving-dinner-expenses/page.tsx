import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Thanksgiving Dinner Expenses Fairly";
const description =
  "Thanksgiving is the biggest group meal of the year. Here's how to fairly divide the costs whether you're cooking or dining out.";
const slug = "/blog/how-to-split-thanksgiving-dinner-expenses";
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

export default function HowToSplitThanksgivingDinnerExpenses() {
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
        Thanksgiving is the biggest group meal most Americans eat all year. A
        table of fifteen people, a twenty-pound turkey, twelve side dishes, three
        pies — and all of it organized weeks in advance by whoever drew the short
        straw on hosting. The grocery bill alone can hit three or four hundred
        dollars, and that is before you factor in wine, the extra tables and
        chairs, and the paper plates someone always forgets.
      </p>
      <p>
        Whether you are cooking at home or booking a restaurant for the holiday,
        here is how to divide the costs so no one person absorbs an
        unreasonable share.
      </p>

      <h2>The Potluck Approach</h2>
      <p>
        The classic solution to Thanksgiving cost-splitting is the potluck:
        each family or individual brings an assigned dish, distributing both the
        work and the cost across the group. When done well, it is the fairest
        and most fun approach. When done poorly, you get four sweet potato
        casseroles and no stuffing.
      </p>
      <p>
        The key is assignment rather than open volunteering. The host takes on
        the turkey and the core logistics. Every other family unit gets an
        assigned category:
      </p>
      <ul>
        <li>Mashed potatoes and gravy</li>
        <li>Stuffing</li>
        <li>Green beans or another vegetable</li>
        <li>Cranberry sauce and bread</li>
        <li>One or two desserts</li>
        <li>Wine and/or beer</li>
        <li>Non-alcoholic drinks and ice</li>
      </ul>
      <p>
        This structure distributes real cost. Wine for fifteen people runs $40–80.
        A Costco pie is $12. A homemade dessert takes two hours of labor. Everyone
        contributes meaningfully.
      </p>

      <h2>Who Buys the Turkey?</h2>
      <p>
        The turkey is the most expensive item on the Thanksgiving table, typically
        running $40–100+ depending on size and source. It is not fair for the
        host to absorb this every year in addition to the costs of hosting the
        meal (table setup, cleanup, utilities, kitchen supplies).
      </p>
      <p>
        A few approaches:
      </p>
      <ul>
        <li>
          <strong>Rotate the turkey.</strong> A different family unit buys the
          turkey each year. The host hosts; another family provides the
          centerpiece.
        </li>
        <li>
          <strong>Split the grocery run.</strong> Do a shared grocery trip for
          the host household's items and split the cost via Venmo. One person
          pays at the register; everyone else reimburses.
        </li>
        <li>
          <strong>Cash contribution to the host.</strong> Some families simply
          give the host a cash or Venmo contribution of $20–30 per adult
          attending. Simple, low-friction, appreciated.
        </li>
      </ul>

      <h2>Restaurant Thanksgiving: Per-Family vs. Per-Person</h2>
      <p>
        More families are opting for restaurant Thanksgivings to spare the host
        the marathon of preparation. Restaurants often offer a fixed prix fixe
        menu at a set price per person — commonly $60–120 per adult, with a
        lower rate for children.
      </p>
      <p>
        Two clean ways to split a restaurant Thanksgiving:
      </p>

      <h3>Per-family split</h3>
      <p>
        Each family unit (a couple, a single adult, a family of four) pays for
        the people in their group. This is the fairest approach when family
        compositions vary. The family of five pays more than the couple — which
        is correct, because they ate more.
      </p>

      <h3>Per-person split</h3>
      <p>
        Total bill divided equally by the number of adults (and children counted
        at a fraction). This works when families are similar sizes and nobody
        feels like they are subsidizing another family's headcount.
      </p>
      <p>
        For restaurant Thanksgivings where the receipt has individual charges,
        drinks, and possible shared items, <Link href="/">Jig</Link> can scan
        the receipt and help you divide it fairly. Assign each family their
        items and let the app calculate proportional tax and tip automatically.
        Check out the <Link href="/how-it-works">how it works</Link> page to see
        the full flow.
      </p>

      <h2>Handling Alcohol Separately</h2>
      <p>
        Wine at Thanksgiving can easily run $60–120 for a large group. If some
        family members do not drink, it is fair to track alcohol separately and
        split it only among those who participated. Asking a non-drinking relative
        to subsidize three bottles of wine is a quick way to cause friction.
      </p>
      <p>
        The simplest approach: bring your own wine (BYOB style, even at home) or
        designate one family to bring all the wine and get reimbursed by the
        drinkers.
      </p>

      <h2>The "Orphan Thanksgiving" Friend Group Split</h2>
      <p>
        Not everyone goes home for the holidays. Friend groups who host their
        own Thanksgiving typically split costs more evenly than families —
        everyone chips in on the grocery run, tasks are assigned, and the social
        norms around money are generally more comfortable among peers.
      </p>
      <p>
        For a friend group Thanksgiving, the cleanest approach is a shared
        grocery run with everyone at the store, or a Venmo collection before
        the host shops. Agree on a per-person budget, the host shops to that
        number, and reimburses are sent the same day.
      </p>

      <h2>What Not to Do</h2>
      <ul>
        <li>
          <strong>Do not let the host absorb everything silently.</strong>{" "}
          If you are the host, say what you need. If you are a guest, ask.
        </li>
        <li>
          <strong>Do not surprise people with the bill at a restaurant.</strong>{" "}
          Tell the group the price range when you book so everyone can plan.
        </li>
        <li>
          <strong>Do not let this year's Thanksgiving repeat last year's
          imbalance.</strong> If someone hosted and absorbed all the costs last
          year, rotate the responsibility this year.
        </li>
      </ul>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-holiday-dinner-costs">How to Split Holiday Dinner Costs with Family</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-potluck-shopping-costs">How to Split Potluck Shopping Costs</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-large-group-dinner">How to Split a Large Group Dinner</Link>
        </li>
        <li>
          <Link href="/faq">Jig FAQ</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
