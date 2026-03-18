import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Dessert Costs at a Restaurant";
const description =
  "Splitting dessert is easy when everyone shares one. It gets complicated when only some people want dessert. Here's how to handle it.";
const slug = "/blog/how-to-split-dessert-costs";
const datePublished = "2026-02-21";

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

export default function HowToSplitDessertCosts() {
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
        Dessert is where group dinner math makes its final appearance. The meal is almost over,
        people are tired and full, and the question of what to do about the dessert order on the
        bill is often the last thing anyone wants to deal with. Here is how to handle it cleanly.
      </p>

      <h2>Scenario 1: One Dessert, Everyone Shares It</h2>
      <p>
        The table orders a single dessert — a slice of cake, a lava cake, a crème brûlée —
        and passes it around. This is the simplest case: split the cost equally among everyone
        at the table (or among everyone who had any of it).
      </p>
      <p>
        A shared dessert for 5 people at $14 is $2.80 each. This is small enough that the
        fairness question barely matters. Split it equally and move on.
      </p>
      <p>
        The only wrinkle: if someone did not have any dessert (too full, not a sweets person,
        dietary restriction), they should not be charged for it. The cost should split among
        the people who actually ate from it.
      </p>

      <h2>Scenario 2: Everyone Orders Their Own Dessert</h2>
      <p>
        When each person orders their own dessert — a tiramisu, a molten chocolate cake, a scoop
        of sorbet — each person pays for their own. These are individual items on the receipt,
        and they should be treated like any other individual food order.
      </p>
      <p>
        If the group is doing an itemized split, this is already handled. If the group was
        planning to do an equal split for the meal, desserts are the moment to reconsider.
        Three $14 individual desserts and two people who passed on dessert is a $42 difference
        that should not be evenly distributed.
      </p>

      <h2>Scenario 3: Some People Want Dessert, Others Don&apos;t</h2>
      <p>
        This is the most common and most fraught dessert scenario. Three people order individual
        desserts. Two people passed. The bill comes. How do you split it?
      </p>
      <p>
        The answer is clear: dessert is optional, and the people who chose it pay for it. The
        two people who passed should not share in the dessert cost. Add each dessert to its
        owner&apos;s individual total and exclude the non-dessert people entirely from those
        line items.
      </p>
      <p>
        This is exactly why itemized splitting is useful even for groups who do a rough equal
        split for the main meal. Dessert is an optional add-on that some people specifically
        chose — treating it like a shared table cost is unfair to those who declined.
      </p>

      <h2>Scenario 4: One Dessert Ordered &ldquo;For the Table&rdquo;</h2>
      <p>
        Someone orders a dessert to share and assumes the table will split it. This is the
        same dynamic as appetizers ordered without universal agreement.
      </p>
      <p>
        If the table discussed it and agreed to share, split it equally among everyone who
        participated. If one person ordered it without asking and not everyone wanted it or ate
        from it, the person who ordered it covers the primary cost, with contributions from
        those who ate meaningfully from it.
      </p>
      <p>
        For the broader principle here, see our post on{" "}
        <Link href="/blog/who-pays-for-table-appetizers">
          who should pay when no one asked for the appetizers
        </Link>.
      </p>

      <h2>Scenario 5: Splitting a Single Dessert Multiple Ways</h2>
      <p>
        &ldquo;We&apos;ll share the chocolate lava cake — just bring extra spoons.&rdquo; Four
        people, one dessert, extra spoons. Split the dessert cost equally among the four people
        who participated.
      </p>
      <p>
        This is common, clean, and fair. Each person had a quarter of a dessert and pays a
        quarter of the price. No complications.
      </p>

      <h2>Dessert as Truly Optional</h2>
      <p>
        One thing worth stating clearly: dessert is categorically optional at a restaurant
        dinner. Unlike the appetizers that arrived before everyone settled in, dessert requires
        a specific post-meal choice. People who are full, watching their budget, keeping it
        light, or simply not interested have every right to pass — and every right not to be
        charged for the desserts others ordered.
      </p>
      <p>
        A group that routinely pressures non-dessert people to split dessert costs equally is,
        even if unintentionally, creating a financial dynamic that benefits the dessert-orderers
        at the expense of the others. Over the course of many group dinners, this adds up.
      </p>

      <h2>Tax and Tip on Dessert</h2>
      <p>
        Tax and tip on dessert should be treated like tax and tip on any other item: proportional
        to the cost. If your dessert represents $14 of the total bill and the total is $200,
        your dessert represents 7% of the total, and you pay 7% of the tax and tip.
      </p>
      <p>
        When using <Link href="/">Jig</Link> for the split, this is handled automatically.
        Assign each dessert to its person, and the proportional tax and tip flows accordingly.
      </p>

      <h2>Quick Reference</h2>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>How to Split</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>One shared dessert, everyone ate from it</td>
            <td>Equal split among all who ate</td>
          </tr>
          <tr>
            <td>Individual desserts ordered by some people</td>
            <td>Each person pays for their own dessert only</td>
          </tr>
          <tr>
            <td>Someone passed on dessert</td>
            <td>Exclude them from dessert costs entirely</td>
          </tr>
          <tr>
            <td>Dessert ordered &ldquo;for the table&rdquo; without asking</td>
            <td>Orderer covers primary cost; others who ate can contribute</td>
          </tr>
          <tr>
            <td>Single dessert shared by 3-4 people intentionally</td>
            <td>Equal split among those who shared it</td>
          </tr>
        </tbody>
      </table>

      <h2>The Bottom Line</h2>
      <p>
        Dessert costs are individual unless explicitly shared by mutual agreement. People who
        ordered dessert pay for their dessert. People who passed do not. When a single dessert
        is shared by everyone who wanted it, split it equally among that group.
      </p>
      <p>
        If the group is using an itemized split with <Link href="/">Jig</Link>, dessert
        items get assigned to their owners along with everything else, and no special handling
        is needed. The proportional tax and tip calculation takes care of itself.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/who-pays-for-table-appetizers">
            Who Should Pay for the Appetizers When No One Asked?
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-shared-appetizers">
            How to Split Shared Appetizers Fairly
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-restaurant-bill">
            How to Split a Restaurant Bill Fairly: The Complete Guide
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
