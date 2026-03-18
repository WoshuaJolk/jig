import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bills When Someone Has Dietary Restrictions";
const description =
  "Dietary restrictions change what people order — and how the bill should be split. Here's how to handle it fairly.";
const slug = "/blog/splitting-bills-with-dietary-restrictions";
const datePublished = "2026-02-23";

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

export default function SplittingBillsWithDietaryRestrictions() {
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
        Dietary restrictions are common and varied: vegetarianism, veganism, gluten-free,
        kosher, halal, dairy-free, severe allergies. They shape what someone can and wants
        to order — and often create real price differences from what others at the table are
        eating. How those differences interact with bill splitting is worth thinking through
        carefully, in both directions.
      </p>

      <h2>When Dietary Restrictions Mean Lower-Priced Orders</h2>
      <p>
        At most restaurants, plant-based and vegetarian dishes are priced lower than meat-based
        entrees. A vegetable pasta at $16 vs. a steak at $45. A vegan Buddha bowl at $18 vs.
        a salmon at $34. When someone is vegetarian or vegan by choice or necessity, their bill
        is often meaningfully lower than their dining companions&apos;.
      </p>
      <p>
        In this case, an equal split is clearly unfair to the person with the lower-cost order.
        They should pay for what they ordered — not an average that absorbs a significant portion
        of everyone else&apos;s meat-based meals.
      </p>
      <p>
        This is not a complicated principle: if you ordered less expensive food, you pay less.
        Dietary restrictions are just one reason why orders vary in price. The same logic that
        says &ldquo;the person who ordered the salad shouldn&apos;t subsidize the steak&rdquo;
        applies equally here.
      </p>
      <p>
        Itemized splitting is the right approach whenever there is a meaningful price gap between
        orders. For the general case, see our post on{" "}
        <Link href="/blog/why-even-splits-arent-fair">why even splits aren&apos;t fair</Link>.
      </p>

      <h2>When Dietary Restrictions Mean Higher-Priced Orders</h2>
      <p>
        Fairness cuts both ways. At some restaurants and for some restrictions, the
        dietary-compliant option is more expensive:
      </p>
      <ul>
        <li>
          <strong>Gluten-free upcharges.</strong> Many restaurants add $2-4 to dishes for
          gluten-free pasta, buns, or crusts. This is a real cost passed on by the restaurant.
        </li>
        <li>
          <strong>Vegan cheese or protein substitutes.</strong> Some restaurants charge extra
          for vegan cheese, plant-based proteins, or specialty dairy-free options.
        </li>
        <li>
          <strong>Allergen-specific dishes.</strong> Dishes prepared in allergen-controlled
          environments sometimes carry a premium.
        </li>
      </ul>
      <p>
        When dietary restrictions result in a higher-priced order, the person ordering pays that
        higher price — not the table. The restriction is the individual&apos;s constraint; the
        cost is theirs. Nobody at the table should have to subsidize a gluten-free upcharge that
        only one person needed, but similarly, the person with the restriction should not expect
        others to absorb their higher cost.
      </p>

      <h2>Shared Dishes and Dietary Restrictions</h2>
      <p>
        Shared appetizers and family-style dishes present a special case when some people at the
        table cannot eat from them. If the table orders a charcuterie board and the vegan at the
        table cannot eat most of it, they should not pay for it. If there is a shared pasta and
        the gluten-intolerant person avoids it, exclude them from that line item.
      </p>
      <p>
        The rule: only people who ate from a shared dish contribute to its cost. Dietary
        restrictions that prevent someone from eating a dish are a clear reason to exclude them.
      </p>
      <p>
        This is handled naturally when using <Link href="/">Jig</Link> — you assign each shared
        dish to the people who ate it. Someone with a restriction simply is not tagged on the
        dishes they could not eat.
      </p>

      <h2>Social Dynamics: Don&apos;t Make It Awkward</h2>
      <p>
        The person with dietary restrictions often feels they are &ldquo;being difficult&rdquo; or
        creating inconvenience. A few principles that make the social dynamic easier:
      </p>
      <ul>
        <li>
          <strong>Agree on itemized splitting before you order.</strong> When it is established
          from the start that everyone pays for what they ordered, no special accommodation
          is needed for the person with restrictions. It is just the system.
        </li>
        <li>
          <strong>Do not make the person with restrictions advocate for themselves repeatedly.</strong>{" "}
          If someone at the table notes they are gluten-free, keep it in mind during the bill
          split without requiring them to raise it again.
        </li>
        <li>
          <strong>The person with restrictions is not &ldquo;cheaper&rdquo; — they just ordered
          different food.</strong> Framing their lower bill as stinginess misses the point.
          They ordered what they could eat, and they should pay for it.
        </li>
      </ul>

      <h2>Tasting Menus with Dietary Substitutions</h2>
      <p>
        Tasting menus often accommodate dietary restrictions with substitutions — a vegetable
        course in place of a meat course, a dairy-free dessert. In most cases, these substitutions
        are included in the base tasting menu price.
      </p>
      <p>
        If the restaurant charges a different price for a full dietary-specific menu (a vegan
        tasting menu vs. the standard menu), each person pays the price of the menu they received.
        For more on this, see our post on{" "}
        <Link href="/blog/how-to-split-a-tasting-menu-bill">
          splitting a tasting menu bill
        </Link>.
      </p>

      <h2>A Practical Framework</h2>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>How to Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Restricted person ordered cheaper entree</td>
            <td>They pay their actual lower cost; no equal split</td>
          </tr>
          <tr>
            <td>Gluten-free upcharge on their dish</td>
            <td>They pay the upcharge; it is their personal cost</td>
          </tr>
          <tr>
            <td>Shared dish they could not eat from</td>
            <td>Exclude them from that item&apos;s cost</td>
          </tr>
          <tr>
            <td>Tasting menu with substitutions</td>
            <td>Base menu price equal; only adjust if menus are priced differently</td>
          </tr>
          <tr>
            <td>Restricted person ordered pricier specialty dish</td>
            <td>They pay their actual cost; no adjustment to others</td>
          </tr>
        </tbody>
      </table>

      <h2>The Bottom Line</h2>
      <p>
        Dietary restrictions create natural price differences at restaurants. The fair response
        is itemized splitting: each person pays for what they ordered, including upcharges for
        their restrictions and excluding shared items they could not eat. This approach works
        equitably in both directions — when the restricted person&apos;s meal is cheaper, they pay
        less; when it is more expensive, they pay more.
      </p>
      <p>
        Tools that handle itemized splitting make this straightforward without anyone needing
        to advocate for special treatment. <Link href="/">Jig</Link> assigns each item to the
        person who ordered it, and the math takes care of itself.
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
          <Link href="/blog/how-to-split-a-tasting-menu-bill">
            How to Split a Tasting Menu Bill
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
