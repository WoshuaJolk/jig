import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split a Bill When Someone Used a Gift Card";
const description =
  "When someone pays part of a shared bill with a gift card, the math gets awkward. Here's how to handle it fairly.";
const slug = "/blog/how-to-split-when-someone-used-gift-card";
const datePublished = "2026-02-28";

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

export default function HowToSplitWhenSomeoneUsedGiftCard() {
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
        Someone at the table has a $50 gift card to the restaurant you're eating at. They want to
        use it. The group wants to split the bill. Now the question is: how exactly does the gift
        card interact with everyone else's share?
      </p>
      <p>
        This is one of those situations where intuition and math diverge, and where different
        people will arrive at different answers. Here's how to handle it clearly.
      </p>

      <h2>The Core Question: Whose Money Is the Gift Card?</h2>
      <p>
        A gift card is pre-loaded money that belongs to the person who has it. It's a payment
        method — functionally equivalent to cash — that draws from a stored balance rather than a
        bank account. This is the key insight for figuring out how to split.
      </p>
      <p>
        If someone uses a $50 gift card to pay part of the bill, they are contributing $50 toward
        the total on behalf of themselves. Other people at the table still owe their own shares.
      </p>

      <h2>Scenario 1: The Gift Card Covers Only the Card Holder's Share</h2>
      <p>
        The cleanest case: the group splits the bill itemized, each person's total is calculated,
        and the person with the gift card uses it to pay their share. If their share is $48, they
        put the $50 gift card toward it and the restaurant owes them $2 change (or carries over
        a balance on the card). Everyone else pays their own share separately.
      </p>
      <p>
        This is the preferred approach. The gift card functions like cash for that person.
      </p>

      <h2>Scenario 2: One Person Pays the Whole Bill (Including the Gift Card)</h2>
      <p>
        This is where it gets complicated. Sometimes one person puts their card down for the full
        table and then collects from everyone — and they want to use the gift card as part of that
        payment.
      </p>
      <p>
        If the bill is $200 and they pay $50 via gift card and $150 on their credit card, they
        need to collect $150 from the rest of the group. But here's the part people get confused
        about: the person using the gift card is effectively getting $50 of credit. They should
        pay that $50 toward their own share, not reduce what they collect from others.
      </p>
      <p>
        In practice: calculate each person's share normally. The gift card user's out-of-pocket
        cost is their share minus the gift card value (up to the card balance). They collect from
        everyone else at full price.
      </p>
      <p>
        Example: $200 total, four people at $50 each. Person A has a $50 gift card. Person A
        pays their full $50 share using the gift card. Others pay $50 each to Person A. Person A
        collects $150 and covers the remaining $50 (their own share) with the card. Everyone
        pays exactly their fair share.
      </p>

      <h2>Scenario 3: The Gift Card Holder Wants to Apply It to the Shared Total</h2>
      <p>
        Some people want to use the gift card to reduce the group's total: "I have a $50 gift
        card, so we all pay a bit less." This is generous — the gift card holder is effectively
        gifting some of that value to the group.
      </p>
      <p>
        If they want to do this, the math is: subtract the gift card from the total before
        splitting. $200 minus $50 = $150 to split four ways = $37.50 each. The gift card holder
        pays nothing additional out of pocket (their $50 card is their contribution plus their
        share of the $50 gift). This is a generous approach, not a default expectation.
      </p>

      <h2>When the Restaurant Charges the Card First</h2>
      <p>
        Restaurants often process gift cards first and then charge the remainder to a credit card.
        If one person hands their card plus a gift card to the server, the server will apply the
        gift card balance and charge the rest to the credit card. The person then needs to collect
        from others for the full amount they covered — not the reduced credit card charge.
      </p>

      <h2>Keeping It Clear</h2>
      <p>
        When a gift card is in play, be explicit before the check arrives. "I want to use my gift
        card for my share" avoids confusion at checkout. Using <Link href="/">Jig</Link> to
        calculate each person's itemized share first makes the gift card question easier: you
        know exactly what everyone owes, and the card holder can apply their card to their own
        total.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/how-to-split-a-receipt-with-discounts">
            How to Split a Receipt That Has Discounts or Coupons
          </Link>
        </li>
        <li>
          <Link href="/blog/splitting-expenses-when-some-paid-cash">
            How to Split When Some People Paid with Cash
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
