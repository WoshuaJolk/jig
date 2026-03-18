import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Utility Bills with Roommates Fairly";
const description =
  "Electric, gas, internet, water — utility bills need a clear splitting system. Here's how to divide them fairly.";
const slug = "/blog/how-to-split-utility-bills-with-roommates";
const datePublished = "2026-03-08";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function HowToSplitUtilityBillsWithRoommates() {
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

      <h2>The Basics: Equal Splits Usually Work</h2>
      <p>
        For most roommate situations, splitting utilities equally is the right call. Electric, gas, internet, and water bills are shared infrastructure — everyone benefits roughly equally, and trying to track individual usage creates more friction than it saves money.
      </p>
      <p>
        Where equal splits start to feel unfair is in edge cases: one roommate works from home and runs the AC all day, another is rarely home, a third takes long showers. If your household has significant usage imbalances, you will want a more nuanced approach.
      </p>

      <h2>Setting Up the Accounts</h2>
      <p>
        One of the most practical decisions you can make early is assigning each utility to one roommate. Roommate A handles electricity, Roommate B handles internet, Roommate C handles gas or streaming services. Each person pays their assigned bill in full and the others Venmo their share immediately.
      </p>
      <p>
        Benefits of this approach:
      </p>
      <ul>
        <li>No one person carries all the administrative burden</li>
        <li>Account credit builds with individual roommates (useful for their credit history)</li>
        <li>It is clear who is responsible for what</li>
        <li>If one person leaves, only one account needs to be transferred</li>
      </ul>
      <p>
        The downside: it requires everyone to pay on time. If one person consistently delays reimbursing the bill payer, that arrangement quickly becomes a source of tension.
      </p>

      <h2>Electricity</h2>
      <p>
        Electric bills vary significantly based on usage — appliances, lighting, heating, cooling, and especially whether anyone works from home. For most roommate groups, an equal split is fine. But if one person noticeably drives up the bill (always leaves the AC on 68°F, runs a high-draw home office setup), a conversation about it is reasonable.
      </p>
      <p>
        A practical approach: split equally, but set a threshold. If the bill is more than 15% above the prior-month average, the group checks in about what drove it and whether the split should be adjusted.
      </p>

      <h2>Internet</h2>
      <p>
        Internet is almost always split equally. Unlike electricity, usage does not meaningfully vary the bill — you pay a flat rate regardless of how much bandwidth each person consumes. Split it equally and move on.
      </p>
      <p>
        The only exception: if one roommate works entirely remotely and specifically chose a higher-tier plan to support video calls, a slight adjustment may be fair.
      </p>

      <h2>Gas and Heating</h2>
      <p>
        Gas and heating bills are shared infrastructure and should generally be split equally. If your building has individual unit metering, you may already have separate bills. If not, an equal split is standard.
      </p>
      <p>
        Temperature preferences can be a sticking point. The classic solution: agree on a default thermostat setting, and anyone who wants it different when they're the only one home can adjust it themselves (and change it back when others return). Do not let thermostat wars bleed into bill disputes.
      </p>

      <h2>Water</h2>
      <p>
        Water bills are almost always split equally. They are typically low enough that calculating individual usage is not worth the effort. Equal split, done.
      </p>

      <h2>Streaming and Shared Subscriptions</h2>
      <p>
        Many roommate groups also share streaming services — Netflix, Hulu, Spotify family plans, etc. These work best when treated like utilities: one person holds the account and everyone pays their equal share. Settle up monthly alongside other utilities.
      </p>
      <p>
        For more on this topic, see our guide to <a href="/blog/how-to-split-shared-subscriptions">splitting shared subscription costs</a>.
      </p>

      <h2>When and How to Pay</h2>
      <p>
        The best reimbursement approach: pay as soon as the bill payer sends the amount. Do not let it sit. A quick Venmo the same day removes any lingering debt from the relationship.
      </p>
      <p>
        Set a group norm: bill payer texts the group with each person's share as soon as the bill arrives. Others pay within 24 hours. This creates a clear, low-friction cycle and prevents any one person from feeling like they are constantly chasing reimbursements.
      </p>

      <h2>When a Roommate Moves Out Mid-Month</h2>
      <p>
        Prorate the departing roommate's share based on how many days they were in the apartment. If rent is $2,400/month and they leave on the 15th of a 30-day month, they owe half. The same logic applies to utilities. It is simple, fair, and avoids arguments.
      </p>

      <h2>The Key Is Agreement, Not Perfection</h2>
      <p>
        The specific method you use matters less than whether everyone actually agrees to it and follows through. A slightly imperfect system that everyone honors is far better than a theoretically perfect one that creates constant friction.
      </p>
      <p>
        For the grocery and household supply runs that happen alongside utilities, <a href="/">Jig</a> makes splitting the receipt fast and exact — so when Roommate B picks up dish soap, trash bags, and everyone's snacks on one Target run, the math takes care of itself.
      </p>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/how-to-split-bills-with-roommates">How to Split Bills with Roommates: A Complete System</a></li>
        <li><a href="/blog/splitting-household-expenses-system">A System for Splitting Household Expenses That Actually Works</a></li>
        <li><a href="/blog/how-to-split-shared-subscriptions">How to Split Shared Subscription Costs Fairly</a></li>
      </ul>
    </BlogPostLayout>
  );
}
