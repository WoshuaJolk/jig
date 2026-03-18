import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "What to Do When a Friend Never Pays You Back";
const description =
  "You're tired of covering for someone who never pays back. Here's how to handle it without blowing up the friendship.";
const slug = "/blog/what-to-do-when-friend-never-pays-back";
const datePublished = "2026-03-07";

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

export default function WhatToDoWhenFriendNeverPaysBack() {
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
        Every friend group has one: the person who always seems to be a little short, always
        forgets to Venmo, always says "I'll get you next time" — and next time never quite arrives.
        If this is a pattern rather than an isolated incident, it's worth addressing directly
        rather than letting the resentment build.
      </p>
      <p>
        Here's a practical guide to handling a friend who never pays you back, including how to
        have the conversation and how to restructure future outings so the problem stops repeating.
      </p>

      <h2>First: Distinguish Forgetful from Freeloading</h2>
      <p>
        There's an important difference between a friend who genuinely forgets to pay and a friend
        who is deliberately avoiding it. The forgetful friend often pays immediately when reminded.
        They just need a prompt. The freeloader either ignores reminders, agrees and then doesn't
        follow through, or creates excuses each time.
      </p>
      <p>
        Before escalating, give a genuine reminder (see our guide on{" "}
        <Link href="/blog/how-to-remind-someone-they-owe-you">
          how to remind someone they owe you money
        </Link>
        ). If they pay right away and it doesn't happen again, problem solved. If the pattern
        continues after reminders, you're dealing with something more deliberate.
      </p>

      <h2>Have the Conversation Directly</h2>
      <p>
        Avoiding the conversation doesn't make the problem go away — it just shifts the cost onto
        you while you quietly seethe. A direct conversation, handled calmly, is almost always
        better than letting it fester.
      </p>
      <p>
        Choose a private moment, not at the table in front of others. Keep it matter-of-fact and
        specific rather than emotional or accusatory:
      </p>
      <ul>
        <li>"Hey, I've been covering you for dinner a few times and I haven't been paid back. Can we settle up?"</li>
        <li>"I know money's been tight — I just want to make sure we're square before it adds up further."</li>
        <li>"I don't mind covering sometimes, but it's been pretty consistent. Can we sort this out?"</li>
      </ul>
      <p>
        These frames acknowledge reality without attacking the person. Most decent people, when
        confronted clearly and calmly, will apologize and pay. If they become defensive or flip
        it back on you, that tells you something important about the friendship.
      </p>

      <h2>Change the Structure Going Forward</h2>
      <p>
        Even if you resolve the backlog, you need to change how you handle the split going forward
        or the same pattern will repeat. A few structural changes:
      </p>
      <h3>Stop fronting money</h3>
      <p>
        If you front the bill and ask for Venmo later, you're the one carrying the risk of
        non-payment. Instead, ask to pay separately or have everyone pay their own share at the
        time of checkout. This removes the follow-up step entirely.
      </p>
      <h3>Use a receipt splitting tool in real time</h3>
      <p>
        When you use <Link href="/">Jig</Link> to split the bill at the restaurant, everyone sees
        exactly what they owe and can pay via Venmo right then. There's no "I'll send it later"
        because the moment to pay is right now, before everyone leaves the table.
      </p>
      <h3>Suggest separate checks proactively</h3>
      <p>
        When you're with a friend who has a history of not paying back, suggest separate checks
        when you sit down. "Let's just do separate tonight — easier for everyone." This isn't
        confrontational; it's just logistics.
      </p>

      <h2>Decide What the Friendship Is Worth</h2>
      <p>
        At some point you have to make a decision about the friendship itself. If the person is
        a close friend who is genuinely going through financial hardship, you may choose to
        occasionally cover them while being honest about the fact that you're doing it as a
        gift, not an expectation of repayment. "I know things are tight — let me get this one,
        no need to pay me back."
      </p>
      <p>
        That framing removes the resentment by making it explicit. You're choosing to cover them;
        you're not being taken advantage of.
      </p>
      <p>
        If the person isn't in financial hardship and simply doesn't pay because they can get away
        with it, that's a different situation — and the friendship itself may need reassessment.
      </p>

      <h2>How Much Is Actually Owed?</h2>
      <p>
        Before any conversation, it helps to have a rough accounting of what's outstanding. Go
        through your Venmo history and identify the gaps. Having a specific number — "about $85
        over the last few months" — makes the conversation more grounded than a vague sense that
        "you always owe me."
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-remind-someone-they-owe-you">
            How to Remind Someone They Owe You Money (With Scripts)
          </Link>
        </li>
        <li>
          <Link href="/blog/splitting-bills-with-bad-with-money-friend">
            How to Split Bills with a Friend Who's Bad with Money
          </Link>
        </li>
        <li>
          <Link href="/blog/psychology-of-splitting-bills">
            The Psychology of Splitting Bills: Why Money Feels Personal
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
