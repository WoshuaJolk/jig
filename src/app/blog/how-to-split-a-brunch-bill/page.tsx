import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Brunch Bill (Including Bottomless Mimosas)";
const description =
  "Brunch bills are notoriously tricky. Here's how to handle the tab when half the table got bottomless mimosas and half ordered coffee.";
const slug = "/blog/how-to-split-a-brunch-bill";
const datePublished = "2026-03-10";

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

export default function HowToSplitABrunchBill() {
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
        Brunch has a unique billing problem. It sits at the intersection of meals (varied prices,
        shared dishes) and drinks (bottomless packages, cocktails, coffee), and the gap between
        what different people spend can be massive. The person who did bottomless mimosas for two
        hours spent $35 on drinks alone. The person who ordered coffee and water spent $0 on
        drinks. Splitting that equally is not just unfair — it tends to create real tension.
      </p>
      <p>
        Here is how to navigate every brunch billing scenario without ruining the mood.
      </p>

      <h2>The Bottomless Mimosa Problem</h2>
      <p>
        Bottomless mimosas (or bottomless bellinis, bloody marys, etc.) are typically sold as a
        flat add-on: pay $22 and drink as many as you want for 90 minutes. It is a great deal for
        the person buying it — and a terrible deal for non-drinkers if it gets folded into the
        shared total.
      </p>
      <p>
        The right approach is simple: bottomless packages are individual charges. Each person who
        opted in pays their package price. The people who did not opt in do not pay for it.
      </p>
      <p>
        When the check arrives, look for the bottomless add-ons as separate line items (most
        restaurants itemize them this way). Have those amounts added to the individual tabs of the
        people who ordered them before dividing the rest of the bill.
      </p>

      <h2>Regular Cocktails and Drinks at Brunch</h2>
      <p>
        Beyond bottomless packages, brunch tables often accumulate individual cocktails, beer,
        juice, coffee, tea, and specialty drinks. Each of these is an individual cost.
      </p>
      <p>
        The cleanest method: everyone pays for their own drinks. Alcohol goes on the drinkers,
        coffee goes on the coffee orderers, and non-drinkers who had water pay nothing for
        beverages.
      </p>
      <p>
        This rule — that non-drinkers should not subsidize alcohol — is covered in more depth in
        our post on{" "}
        <Link href="/blog/how-to-split-alcohol-vs-non-alcohol">
          splitting the bill when some people drink and others don&apos;t
        </Link>.
      </p>

      <h2>Shared Brunch Dishes</h2>
      <p>
        Brunch menus often encourage sharing: a plate of shared pastries at the start, a fruit
        bowl for the table, a shared side of bacon that went around. These shared items should be
        split among everyone who ate from them.
      </p>
      <p>
        The challenge at brunch is that shared items often get ordered casually (&ldquo;let&apos;s
        just get some pastries for the table&rdquo;) without a clear agreement on who is paying.
        When the bill comes, that shared basket of croissants sits there and nobody quite
        remembers whose idea it was.
      </p>
      <p>
        The fair approach: split shared items equally among everyone at the table, or among those
        who ate from them if someone notably did not. For the etiquette of uninvited shared items,
        see our post on{" "}
        <Link href="/blog/who-pays-for-table-appetizers">
          who should pay for appetizers when no one asked
        </Link>.
      </p>

      <h2>The Classic Brunch Split Debate</h2>
      <p>
        Brunch is a social occasion where people have strong opinions about splitting. A few common
        positions:
      </p>
      <ul>
        <li>
          <strong>&ldquo;We always just split it.&rdquo;</strong> Fine for groups where
          everyone&apos;s orders are similar and everyone drinks roughly the same amount. Falls apart
          when there is a wide spending gap.
        </li>
        <li>
          <strong>&ldquo;Pay for your own stuff.&rdquo;</strong> The fairest method in mixed
          groups. Prevents resentment and lets everyone order according to their preferences and
          budget.
        </li>
        <li>
          <strong>&ldquo;We&apos;ll figure it out at the end.&rdquo;</strong> The least reliable
          approach. This is how 20-minute bill negotiations happen while your server hovers.
        </li>
      </ul>
      <p>
        The best time to align on the approach is before anyone orders. A quick &ldquo;should we
        each get our own or split it?&rdquo; takes 10 seconds and prevents confusion later.
      </p>

      <h2>Tipping at Brunch</h2>
      <p>
        Brunch service often extends over a longer period than other meals, especially if the table
        occupies a prime spot for 90 minutes over bottomless drinks. Consider tipping on the higher
        end — 20% or more — to reflect the time and service the server devoted to your group.
      </p>
      <p>
        If there is an automatic gratuity (common for tables of 6+), check the bill before adding
        additional tip. You do not want to accidentally double-tip. For full guidance on tip math,
        see our{" "}
        <Link href="/blog/how-to-calculate-tax-and-tip-per-person">
          guide to calculating tax and tip per person
        </Link>.
      </p>

      <h2>A Practical Brunch Split Workflow</h2>
      <ol>
        <li>Agree on equal vs. itemized before ordering.</li>
        <li>When the bill arrives, identify bottomless packages and individual drinks first.</li>
        <li>Assign those to the people who ordered them.</li>
        <li>Identify shared items and split those equally among the table.</li>
        <li>Assign individual food items to their owners.</li>
        <li>Calculate tax and tip proportionally on each person&apos;s subtotal.</li>
        <li>Collect via Venmo or cash.</li>
      </ol>
      <p>
        If that sounds like too many steps for a Sunday morning, use{" "}
        <Link href="/">Jig</Link> — upload the receipt photo, assign each item to a person, and
        get a shareable split link in under a minute.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        The key to a fair brunch split is separating drinks from food. Bottomless packages and
        individual cocktails belong to the people who ordered them. Shared dishes split among
        those who ate them. Individual food items stay individual. Handle the tip proportionally,
        and you are done.
      </p>
      <p>
        The worst brunch splits happen when nobody agrees on the method upfront. A 10-second
        conversation before ordering is worth it.
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
          <Link href="/blog/who-pays-for-table-appetizers">
            Who Should Pay for the Appetizers When No One Asked?
          </Link>
        </li>
        <li>
          <Link href="/blog/receipt-splitting-etiquette">
            Receipt Splitting Etiquette
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-calculate-tax-and-tip-per-person">
            How to Calculate Tax and Tip Per Person
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
