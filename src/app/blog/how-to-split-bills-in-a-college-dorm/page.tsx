import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Expenses in a College Dorm or Shared Apartment";
const description =
  "Shared mini-fridges, communal snacks, and group food orders — here's how to manage money fairly in a college living situation.";
const slug = "/blog/how-to-split-bills-in-a-college-dorm";
const datePublished = "2026-03-02";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function HowToSplitBillsInACollegeDorm() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <h2>College Living and Shared Money</h2>
      <p>
        Whether you're in a double dorm room or a shared off-campus apartment, college living involves constant small financial decisions: who buys the toilet paper, how to split the Seamless order, whether the communal snack stash should be shared equally. These questions seem minor but they are formative — the habits you build now will shape how you handle shared finances for years.
      </p>
      <p>
        The good news is that college is also the perfect time to build good habits, because the stakes are relatively low and the lessons stick.
      </p>

      <h2>Dorm Room Situations</h2>
      <p>
        In a standard dorm room, most expenses are either personal or small enough to alternate. A few categories where clarity helps:
      </p>

      <h3>Shared Dorm Supplies</h3>
      <p>
        If you and your roommate buy shared dorm supplies together — a mini-fridge, a microwave, a rug, cleaning supplies — settle on who buys what at the start of the year so each person ends up contributing roughly equally. Keep a running tally if needed.
      </p>
      <p>
        At year end, whoever took the item keeps it, or you sell it and split the proceeds. Agree on this before buying so there is no dispute at the end of the year.
      </p>

      <h3>Communal Food in Dorms</h3>
      <p>
        If you stock a mini-fridge together, a simple approach: each person contributes equally to shared snacks and drinks on a rotating basis. Person A buys this week, Person B buys next week. Or keep it fully separate — your food is yours, their food is theirs — which is also completely valid and prevents a lot of potential friction.
      </p>

      <h2>Off-Campus Apartment Situations</h2>
      <p>
        Off-campus living involves more complex financial arrangements: rent, utilities, groceries, household supplies. This is real adulting, and it requires a real system.
      </p>

      <h3>Rent</h3>
      <p>
        Split rent based on room equity. Equal rooms get equal splits. Significantly different rooms (size, natural light, private bathroom) warrant a discussion. Agree on the split before signing the lease, not after.
      </p>

      <h3>Utilities</h3>
      <p>
        Assign each utility to one person's name. They pay and others Venmo their share immediately when billed. Rotate who holds accounts each semester so the burden is shared over time.
      </p>

      <h3>Groceries and Household Supplies</h3>
      <p>
        The most common approach that works for college apartments: keep personal groceries separate (your food, your shelf in the fridge), but split household essentials equally. Paper towels, dish soap, trash bags, cleaning supplies — these get added to a shared list and split when someone does a household run.
      </p>
      <p>
        When someone does the household supply run, they photograph the receipt and run it through <a href="/">Jig</a>. Everyone pays their share immediately. This prevents the classic situation where one person is always buying toilet paper and quietly fuming about it.
      </p>

      <h2>Group Food Orders</h2>
      <p>
        Late-night delivery orders for the whole apartment are a staple of college life. The logistics:
      </p>
      <ul>
        <li>Use a delivery app with a group order feature, or have each person add their own items and Venmo the payer their exact amount when the order is placed</li>
        <li>Include tax and delivery fee in the split — whoever pays should not absorb those solo</li>
        <li>Tip is a shared expense; split it proportionally with the food cost</li>
      </ul>
      <p>
        If the restaurant uses a physical receipt, a quick photo upload to Jig handles the full breakdown including tax and tip.
      </p>

      <h2>The "Who Used More?" Debate</h2>
      <p>
        In shared apartments, someone often notices that they seem to use utilities, cleaning supplies, or shared food less than their roommates but pays the same share. This is a real dynamic and worth addressing directly rather than letting it simmer.
      </p>
      <p>
        The practical answer: for most shared expenses, the difference in individual usage is small enough that tracking it creates more friction than it saves. Spend your energy on the categories where the difference is genuinely significant — electricity if one person is home all day, food if dietary habits are very different. Let the small stuff be equal.
      </p>

      <h2>Handling Money Awkwardness</h2>
      <p>
        College friendships often involve awkwardness around money because people have different backgrounds and different amounts of financial support from family. The best way to handle this: normalize talking about money directly. "Can we keep this dinner under $20/person? My budget is tight" is a completely reasonable thing to say to a real friend.
      </p>
      <p>
        If you are in a situation with more financial flexibility than a roommate, extending grace — covering a meal occasionally, not sweating small imbalances — is a form of friendship, not charity.
      </p>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/how-college-students-split-bills">How College Students Split Bills Without Ruining Friendships</a></li>
        <li><a href="/blog/how-to-split-bills-with-roommates">How to Split Bills with Roommates: A Complete System</a></li>
        <li><a href="/blog/splitting-household-expenses-system">A System for Splitting Household Expenses That Actually Works</a></li>
      </ul>
    </BlogPostLayout>
  );
}
