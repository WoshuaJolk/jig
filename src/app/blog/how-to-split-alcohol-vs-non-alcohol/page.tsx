import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split the Bill When Some People Drink and Others Don't";
const description =
  "Should non-drinkers pay for alcohol? The answer is almost always no. Here's the fair way to separate alcohol and non-alcohol costs.";
const slug = "/blog/how-to-split-alcohol-vs-non-alcohol";
const datePublished = "2026-02-25";

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

export default function HowToSplitAlcoholVsNonAlcohol() {
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
        This is one of the most common and most contentious bill-splitting questions. Someone
        is pregnant, sober, driving, or simply does not drink. The table runs up a significant
        bar tab. The check arrives, and someone suggests splitting it equally. The non-drinker
        faces an awkward choice: pay for alcohol they did not consume, or speak up and risk
        feeling like they are being difficult.
      </p>
      <p>
        The answer is clear: non-drinkers should not pay for alcohol. Here is why and how.
      </p>

      <h2>The Fairness Argument</h2>
      <p>
        Bill splitting is fundamentally about each person paying for what they consumed. Alcohol
        is not a shared amenity like the table, the service, or the ambient experience of the
        restaurant. It is a discretionary consumable with a direct cost per unit.
      </p>
      <p>
        When someone did not drink, they received no benefit from the $48 in cocktails the table
        ordered. Asking them to pay for it anyway is not splitting a bill — it is making them
        subsidize other people&apos;s choices. That is unfair by any reasonable standard.
      </p>
      <p>
        This principle holds regardless of the reason for not drinking: religious beliefs, health
        conditions, sobriety, pregnancy, designated driving, or simply preferring not to. The
        reason does not matter. The consumption — or lack of it — is what matters.
      </p>

      <h2>Why Equal Splits Feel Easier (But Are Not Fair)</h2>
      <p>
        Equal splits are emotionally simpler. Nobody has to acknowledge who drank what. The
        math is a single division. No awkward itemization. The problem is that &ldquo;simpler&rdquo;
        is not the same as &ldquo;fair.&rdquo;
      </p>
      <p>
        At a table where drinkers and non-drinkers both pay the same amount, the drinkers are
        getting a discount on their drinks. The non-drinker is subsidizing them. This dynamic,
        if it recurs across multiple group meals, adds up to a real financial transfer. Over the
        course of a year of group dinners, a non-drinker could pay hundreds of dollars for
        alcohol they never touched.
      </p>
      <p>
        For more on why equal splits often fail, see our post on{" "}
        <Link href="/blog/why-even-splits-arent-fair">why even splits aren&apos;t fair</Link>.
      </p>

      <h2>How to Separate Alcohol and Non-Alcohol Costs</h2>
      <p>
        The mechanics of separating drinks from food are simple when you have an itemized receipt.
        Most restaurant receipts list drinks as separate line items. The process:
      </p>
      <ol>
        <li>Identify every alcoholic drink on the receipt.</li>
        <li>
          Assign those drinks to the individuals who ordered them, or split them among the
          drinkers if they were genuinely shared (a bottle of wine, for instance).
        </li>
        <li>Exclude non-drinkers from those line items entirely.</li>
        <li>
          Split food, shared appetizers, and non-alcoholic drinks using whatever method the
          group is using (equal or itemized).
        </li>
        <li>
          Apply tax and tip proportionally to each person&apos;s subtotal (which, for non-drinkers,
          will not include any alcohol).
        </li>
      </ol>
      <p>
        <Link href="/">Jig</Link> makes this exact process fast. Photograph the receipt, assign
        alcoholic drinks to the people who ordered them, and let non-drinkers be assigned only
        their food and non-alcoholic drinks. Tax and tip distribute proportionally so everyone
        pays their actual share of the service cost too.
      </p>

      <h2>What About Shared Bottles of Wine?</h2>
      <p>
        A common complication: the table orders a bottle of wine that is not specifically anyone&apos;s
        drink. How do you handle it?
      </p>
      <p>
        If the non-drinker was not offered any wine (or declined a glass), they do not share in
        the cost of the bottle. The bottle is divided among those who drank from it. If a table
        of 6 had a bottle of wine and only 4 people drank from it, those 4 people share the
        bottle cost.
      </p>
      <p>
        The key is participation. Did you drink from it? You share it. Did you not? You do not.
      </p>

      <h2>The Social Pressure Issue</h2>
      <p>
        The hardest part of this situation is not the math — it is the social dynamic. Raising
        the issue can feel like accusing the group of being unfair, which nobody wants to do.
      </p>
      <p>
        A few approaches that reduce friction:
      </p>
      <ul>
        <li>
          <strong>Mention it casually when ordering.</strong> Early in the meal: &ldquo;By the
          way, I&apos;m not drinking tonight, so just so we know — let&apos;s track drinks
          individually.&rdquo; This sets expectations before the bill exists.
        </li>
        <li>
          <strong>Let a tool handle the itemization.</strong> When someone suggests &ldquo;let&apos;s
          just use Jig to split it,&rdquo; the tool does the itemization naturally. Nobody has
          to make an argument — the receipt just gets assigned item by item, and drinks end up
          with the drinkers.
        </li>
        <li>
          <strong>Frame it as a general principle, not a personal grievance.</strong>
          &ldquo;We should probably split drinks individually since some of us aren&apos;t drinking&rdquo;
          is less charged than &ldquo;I shouldn&apos;t have to pay for your drinks.&rdquo;
        </li>
      </ul>

      <h2>The Designated Driver Deserves Extra Acknowledgment</h2>
      <p>
        When someone in the group is not drinking specifically because they are driving everyone
        home, the fair treatment extends beyond just not splitting their drinks. Consider:
      </p>
      <ul>
        <li>The driver often saves the table $30-60 in cab or rideshare costs.</li>
        <li>They are doing the group a real service.</li>
        <li>
          Some groups offer to cover the driver&apos;s meal or dessert as a thank-you. This is a
          generous gesture, not an obligation — but it is a nice way to acknowledge what they
          are doing for the group.
        </li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>
        Non-drinkers should not pay for alcohol. Full stop. The fair approach is to assign
        alcoholic drinks to the people who drank them, apply the standard equal or itemized
        split to food and non-alcoholic items, and distribute tax and tip proportionally.
        This is not complicated math — it just requires actually doing the itemization instead
        of defaulting to an equal split.
      </p>
      <p>
        An itemized receipt tool removes the social awkwardness by making the split objective.
        Visit <Link href="/">jig.so</Link> to try it on your next group dinner.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/why-even-splits-arent-fair">
            Why Even Splits Aren&apos;t Fair
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-bar-tab">
            How to Split a Bar Tab Fairly
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-brunch-bill">
            How to Split a Brunch Bill (Including Bottomless Mimosas)
          </Link>
        </li>
        <li>
          <Link href="/blog/receipt-splitting-etiquette">
            Receipt Splitting Etiquette
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
