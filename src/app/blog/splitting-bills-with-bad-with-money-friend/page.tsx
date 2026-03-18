import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bills with a Friend Who's Bad with Money";
const description =
  "Dining with someone who consistently underpays or forgets to Venmo is frustrating. Here's how to handle it diplomatically.";
const slug = "/blog/splitting-bills-with-bad-with-money-friend";
const datePublished = "2026-03-05";

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

export default function SplittingBillsWithBadWithMoneyFriend() {
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
        Being "bad with money" covers a wide range of behaviors: chronic forgetfulness about
        paying, a pattern of underpaying, ordering expensive things and then splitting evenly,
        or never having cash or Venmo set up. The friend is usually likable in every other respect.
        That's what makes it complicated.
      </p>
      <p>
        The goal isn't to end the friendship — it's to change the financial dynamic so it stops
        bothering you. Here's how to do it without making every dinner feel like a debt negotiation.
      </p>

      <h2>Understand Which Type You're Dealing With</h2>
      <p>
        "Bad with money" is not one thing. The approaches differ depending on the pattern:
      </p>
      <ul>
        <li>
          <strong>The Forgetter:</strong> Genuinely means to pay and usually does when reminded.
          Needs a system, not a confrontation.
        </li>
        <li>
          <strong>The Underpayer:</strong> Consistently pays less than their share, whether by
          rounding down aggressively, "forgetting" the tip, or calculating their share loosely.
        </li>
        <li>
          <strong>The High-Orderer:</strong> Always gets the most expensive thing and then pushes
          for an even split. May not realize how this lands.
        </li>
        <li>
          <strong>The Chronically Broke:</strong> Genuinely doesn't have the money, which is a
          different situation than the above and calls for a different response.
        </li>
      </ul>

      <h2>Change the Process, Not Just the Conversation</h2>
      <p>
        Repeated conversations about money rarely change behavior. What changes behavior is
        changing the system so the right behavior is the path of least resistance.
      </p>
      <h3>Pay at the time, not later</h3>
      <p>
        The biggest single change you can make is eliminating the "I'll Venmo you later" step.
        Split the bill at the restaurant using <Link href="/">Jig</Link> — photograph the receipt,
        assign items, share the split link — and everyone pays before leaving the table. There's
        no collection step, no reminders, no awkward follow-ups.
      </p>
      <h3>Use Venmo requests instead of asking verbally</h3>
      <p>
        A Venmo request is less confrontational than "hey, you owe me money" and creates a
        notification the person can act on immediately. Send the request the same night, while
        the dinner is still recent.
      </p>
      <h3>Suggest itemized splits proactively</h3>
      <p>
        If the problem is a high-orderer, switch to itemized splits as the default. "Let's just
        pay for what we each got tonight" is a reasonable suggestion before ordering. Make it
        the standard, not a special exception tied to that person's behavior.
      </p>

      <h2>If It's About Financial Hardship</h2>
      <p>
        A friend who is genuinely struggling financially is a different situation. If you want to
        maintain the friendship and can afford to occasionally cover them, be explicit about it:
        "I'm getting this one — don't worry about it." That transforms the dynamic from
        expectation to gift.
      </p>
      <p>
        If you can't afford to cover them regularly, be honest about that too. Suggest lower-cost
        outings — coffee instead of dinner, potlucks instead of restaurants. The goal is to find
        formats where the cost difference doesn't become a recurring issue.
      </p>

      <h2>The Direct Conversation</h2>
      <p>
        When structural changes aren't enough, a direct conversation is necessary. Choose a
        neutral moment away from a restaurant or checkout situation. Be specific:
      </p>
      <ul>
        <li>"I've noticed I'm often covering the difference when we go out. Can we try to be more careful about splitting correctly?"</li>
        <li>"I want to keep hanging out, but I'm not in a position to keep covering more than my share."</li>
      </ul>
      <p>
        Avoid generalizations ("you always do this") and focus on the pattern ("this has happened
        a few times recently"). The goal is to solve the problem together, not to deliver a verdict.
      </p>

      <h2>When to Stop Covering</h2>
      <p>
        If you've had the conversation, changed the system, and the problem persists — it's time
        to simply stop covering them. This isn't unkind; it's accurate. Continuing to absorb the
        cost while resenting it helps no one. Stop fronting money, suggest separate checks or
        pay-at-the-time setups, and let the natural consequences play out.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/what-to-do-when-friend-never-pays-back">
            What to Do When a Friend Never Pays You Back
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-remind-someone-they-owe-you">
            How to Remind Someone They Owe You Money (With Scripts)
          </Link>
        </li>
        <li>
          <Link href="/blog/when-someone-ordered-way-more">
            How to Handle It When Someone Ordered Way More Than Everyone Else
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
