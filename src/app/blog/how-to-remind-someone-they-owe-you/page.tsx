import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Remind Someone They Owe You Money (With Scripts)";
const description =
  "Reminding someone they owe you money is awkward. Here are the exact messages to send — and when to send them.";
const slug = "/blog/how-to-remind-someone-they-owe-you";
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

export default function HowToRemindSomeoneTheyOweYou() {
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
        Few things are more socially uncomfortable than following up with someone who owes you
        money. You don't want to seem petty. You don't want to pressure them. You don't know if
        they forgot or if they're avoiding it. So the message sits in drafts, or you just don't
        send it — and the money never comes.
      </p>
      <p>
        Here's a practical guide to timing, wording, and medium, along with actual message scripts
        you can use right now.
      </p>

      <h2>When to Send the First Reminder</h2>
      <p>
        The sweet spot for a first reminder is 24–48 hours after the expense. At this point:
      </p>
      <ul>
        <li>The dinner or outing is fresh in both people's minds</li>
        <li>Enough time has passed that it doesn't feel frantic</li>
        <li>Not enough time has passed for the debt to feel buried or forgotten</li>
      </ul>
      <p>
        If you used a tool like <Link href="/">Jig</Link> to split the bill at the restaurant and
        shared the link, the recipient already knows exactly what they owe. A reminder message can
        be very short: just a link re-send or a quick note.
      </p>

      <h2>The Best Channel for the Reminder</h2>
      <p>
        Match the reminder channel to how you normally communicate with this person. A close friend
        gets a text. A colleague might get a Slack message. Someone you don't know well might get
        a Venmo request with a note.
      </p>
      <p>
        Venmo requests are actually excellent for this — they're built-in reminders with a
        built-in payment mechanism. Sending a Venmo request is socially lower-stakes than a
        direct "you owe me money" message because it's transactional by nature.
      </p>
      <p>
        Avoid email for small social debts — it feels too formal and is easy to miss. Don't use
        public channels or group chats — it's embarrassing for everyone.
      </p>

      <h2>First Reminder Scripts (0–48 hours)</h2>
      <p>These are light, assume good faith, and give the person an easy out:</p>
      <ul>
        <li>"Hey! Don't forget to send your share from last night — $23. Here's my Venmo: [handle]"</li>
        <li>"Sending a Venmo request for dinner — $18.50 when you get a chance!"</li>
        <li>"Reminder to Venmo me for [dinner/bar/etc.] — $31. No rush, just don't want to forget!"</li>
      </ul>

      <h2>Second Reminder Scripts (3–7 days later)</h2>
      <p>Still friendly, but slightly more direct:</p>
      <ul>
        <li>"Hey, just following up on the $23 from Friday dinner — did the Venmo request come through?"</li>
        <li>"Wanted to check in — did you get my Venmo request from last week? Let me know if there was any issue."</li>
        <li>"Hey, still showing you owe me $31 from [event]. Can you send it this week?"</li>
      </ul>

      <h2>Third Reminder (2+ weeks later)</h2>
      <p>At this point, be direct without being hostile:</p>
      <ul>
        <li>"Hey — I've sent a couple reminders about the $23 from [event]. Can you please send it this week?"</li>
        <li>"I don't want to keep following up, but I'm still waiting on $31 from two weeks ago. Please send it when you can."</li>
      </ul>

      <h2>When to Stop Asking</h2>
      <p>
        At some point — usually after three reminders with no response — you need to make a
        decision: write it off or have a real conversation. If the amount is small enough to let
        go and the friendship matters more, write it off and adjust your behavior with this person
        going forward (no more covering them).
      </p>
      <p>
        If the amount is significant or if this is a pattern, a direct in-person conversation is
        more effective than another text. "Hey, I've tried to collect what you owe a few times and
        haven't heard back — can we sort this out?" is uncomfortable but necessary.
      </p>

      <h2>Preventing the Problem Next Time</h2>
      <p>
        The easiest follow-up is no follow-up at all — everyone pays at the time. Use a receipt
        splitting tool at the restaurant so people can pay before they leave, rather than promising
        to Venmo later. The "later" step is where money gets lost.
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
          <Link href="/blog/how-to-handle-bill-splitting-dispute">
            How to Handle a Bill Splitting Dispute Without Drama
          </Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-with-venmo">
            Splitting Bills with Venmo: A Complete Guide
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
