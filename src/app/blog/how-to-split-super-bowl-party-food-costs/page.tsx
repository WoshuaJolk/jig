import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Super Bowl Party Food and Drink Costs";
const description =
  "Super Bowl parties involve big grocery runs and big food orders. Here's how to split costs fairly among attendees.";
const slug = "/blog/how-to-split-super-bowl-party-food-costs";
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

export default function HowToSplitSuperBowlPartyFoodCosts() {
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
        The Super Bowl is the single biggest eating day of the American year.
        Chicken wings, dips, sliders, pizza — and enough beer to float a small
        vessel. For the host, a Super Bowl party means a serious grocery run,
        possibly a large food order, and the kind of shopping trip where it is
        easy to spend $200 without blinking.
      </p>
      <p>
        Whether you are hosting or attending, here is how to approach Super Bowl
        party costs so the person who shopped and cooked is not also the person
        who paid for everything.
      </p>

      <h2>The Potluck Approach</h2>
      <p>
        The Super Bowl potluck is the most common and arguably the best way to
        handle a party where the host is already providing the space, TV, and
        setup. Each attendee brings something: a case of beer, a bag of chips and
        dips, a tray of wings, nachos, or a dessert.
      </p>
      <p>
        Assign categories rather than leaving it open. "Bring whatever" results
        in five bags of tortilla chips. A quick group text saying "Marcos brings
        wings, Sarah brings drinks, Derek and Amy bring a dip tray" distributes
        the real costs and makes sure the table is actually covered.
      </p>
      <p>
        The host is contributing the venue, the setup, the plates and napkins,
        and usually the core food. Guests contribute the snacks and drinks that
        make it a party.
      </p>

      <h2>Who Buys the Beer?</h2>
      <p>
        Beer is one of the biggest line items at any Super Bowl party. A case of
        decent beer for fifteen people runs $25–40. Two or three cases is
        easily $75–100.
      </p>
      <p>
        Options:
      </p>
      <ul>
        <li>
          <strong>Assign the beer to specific attendees.</strong> "Mike and
          Chris, can you handle the beer?" is clear and works well if you have
          people in the group who regularly drink beer and will appreciate having
          their brand represented.
        </li>
        <li>
          <strong>Everyone brings their own.</strong> For more casual groups,
          BYOB keeps things simple. The host does not have to play guessing games
          about how much to buy.
        </li>
        <li>
          <strong>Host buys and gets reimbursed per-person.</strong> If the host
          wants to centralize the drinks, they buy everything and collect a flat
          per-person drink fee ($10–15) from attendees.
        </li>
      </ul>

      <h2>When the Host Does a Big Grocery Run</h2>
      <p>
        Sometimes the host prefers to buy everything and have attendees chip in.
        This keeps logistics simple and ensures there is actually food at the
        party. Here is how to handle it:
      </p>
      <ol>
        <li>
          The host shops and saves the receipt.
        </li>
        <li>
          Take a photo of the grocery receipt and scan it with{" "}
          <Link href="/">Jig</Link>. This gives you an itemized breakdown of
          every purchase so you can split accurately rather than guessing.
        </li>
        <li>
          Divide the total by the number of people attending and send Venmo
          requests.
        </li>
        <li>
          Alternatively, split only the food and drink items (not paper plates
          and other supplies the host might keep) equally among guests.
        </li>
      </ol>
      <p>
        A typical Super Bowl grocery run for fifteen people might be $150–200.
        At $10–14 per person, that is a reasonable ask and saves each person the
        hassle of shopping and bringing something themselves.
      </p>

      <h2>Ordering Food (Wings, Pizza, Subs)</h2>
      <p>
        Many Super Bowl parties involve a big food order — a hundred wings from
        the wing place, three large pizzas, a sub party platter. When the food
        is ordered collectively, the cost is shared collectively.
      </p>
      <p>
        The simplest approach: collect money before the order. A group text
        saying "wings order is $120 total, that's $12 each for 10 people" with
        a Venmo request attached means the host is not fronting $120 and chasing
        people down during the game.
      </p>
      <p>
        If some people placed specific orders (extra sauce, a separate pizza with
        specific toppings), break those out as individual costs rather than
        splitting equally among everyone.
      </p>

      <h2>Potluck vs. Shared Cost: Which Is Better?</h2>
      <p>
        Both approaches work well with the right group. The potluck assigns
        responsibility; the shared cost pool centralizes logistics. Some factors
        to consider:
      </p>
      <table>
        <thead>
          <tr>
            <th>Potluck</th>
            <th>Shared Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Good for groups that enjoy contributing something personal</td>
            <td>Good for groups that prefer simplicity</td>
          </tr>
          <tr>
            <td>Risk: someone brings nothing or something unwanted</td>
            <td>Risk: host has to front money and collect later</td>
          </tr>
          <tr>
            <td>Harder to ensure equal cost contribution</td>
            <td>Equal per-person cost is easy to enforce</td>
          </tr>
          <tr>
            <td>More variety, more personality</td>
            <td>Host controls the menu</td>
          </tr>
        </tbody>
      </table>

      <h2>After the Party: Settling Up</h2>
      <p>
        If you went the shared-cost route, send payment requests the day of the
        party or the morning after. Do not wait. People are always most willing
        to pay immediately after a great party. A week later, inertia sets in.
        Keep the final number per person reasonable — $15–20 for a full Super
        Bowl spread is a good deal and nobody will hesitate.
      </p>
      <p>
        For more on splitting food costs at group events, see our guide on
        <Link href="/blog/how-to-split-costs-for-a-dinner-party"> how to split costs for a dinner party at home</Link>.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-tailgate-party-bill">How to Split a Tailgate Party Bill</Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-potluck-shopping-costs">How to Split Potluck Shopping Costs</Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-with-venmo">How to Split Bills with Venmo</Link>
        </li>
        <li>
          <Link href="/how-it-works">How Jig Works</Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
