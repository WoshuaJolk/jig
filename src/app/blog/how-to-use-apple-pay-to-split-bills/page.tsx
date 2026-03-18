import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Use Apple Pay and Apple Cash to Split Bills";
const description =
  "Apple Pay and Apple Cash can help settle group expenses. Here's how to use Apple's tools alongside receipt scanning.";
const slug = "/blog/how-to-use-apple-pay-to-split-bills";
const datePublished = "2026-02-28";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function HowToUseApplePayToSplitBills() {
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

      <p>
        Apple Pay is primarily known as a contactless payment method — tap your iPhone at a terminal and pay. But Apple also offers Apple Cash, a peer-to-peer payment feature built into iMessage, that lets you send and receive money directly with other iPhone users. For groups of friends and family who are all in the Apple ecosystem, this can be a seamless way to settle shared expenses without switching to a third-party app.
      </p>
      <p>
        Here is how Apple's payment tools work, what they are good for, and how to combine them with receipt splitting for maximum efficiency.
      </p>

      <h2>Apple Pay vs. Apple Cash: What's the Difference?</h2>
      <p>
        These two features get conflated but serve different purposes:
      </p>
      <ul>
        <li><strong>Apple Pay:</strong> A contactless payment method for purchases at stores, apps, and websites. You use your iPhone or Apple Watch to pay merchants. This is not a peer-to-peer payment tool — you cannot use Apple Pay to send money to a friend.</li>
        <li><strong>Apple Cash:</strong> A peer-to-peer payment feature integrated into the Messages app on iPhone. You can send and receive money with other iPhone users via iMessage. Funds are stored in an Apple Cash card in your Wallet app, which you can use with Apple Pay or transfer to a bank account.</li>
      </ul>
      <p>
        For bill splitting, Apple Cash is the relevant tool.
      </p>

      <h2>How to Send and Receive Money with Apple Cash</h2>
      <p>
        Apple Cash requires iOS 11 or later, Face ID or Touch ID setup, and a US-issued debit card or bank account linked to your Apple ID. Both the sender and recipient need Apple Cash enabled.
      </p>
      <p>
        To send money:
      </p>
      <ol>
        <li>Open a Messages conversation with the person you want to pay.</li>
        <li>Tap the plus (+) icon and select "Apple Cash."</li>
        <li>Enter the amount and tap Send.</li>
        <li>Authorize with Face ID, Touch ID, or your passcode.</li>
      </ol>
      <p>
        To request money: same process, but tap "Request" instead of "Send."
      </p>

      <h2>The Bill Splitting Workflow with Apple Cash</h2>
      <p>
        Apple Cash handles the transfer, but it does not calculate what anyone owes. You need to figure out the amounts first, then use Apple Cash to collect.
      </p>
      <p>
        The fastest workflow for a group dinner:
      </p>
      <ol>
        <li>Photograph the restaurant receipt.</li>
        <li>Use <Link href="/">Jig</Link> to assign each item to the person who ordered it. Jig calculates each person's share including proportional tax and tip.</li>
        <li>Share the Jig split link with the group so everyone can see their amount.</li>
        <li>Each person sends their amount to the bill payer via Apple Cash in iMessage.</li>
      </ol>
      <p>
        This is particularly smooth for groups that already communicate primarily over iMessage — the Apple Cash request or payment happens in the same thread where everyone is already talking.
      </p>

      <h2>Apple Cash Limits and Fees</h2>
      <p>
        Apple Cash has transfer limits to be aware of:
      </p>
      <ul>
        <li>Minimum transaction: $1</li>
        <li>Maximum single transaction: $10,000</li>
        <li>Weekly sending limit: $10,000</li>
        <li>Apple Cash balance limit: $20,000</li>
      </ul>
      <p>
        Transfers between individuals using Apple Cash are free. Transferring your Apple Cash balance to a bank account is free via standard transfer (1–3 business days) or instant for a 1.5% fee (minimum $0.25).
      </p>

      <h2>Apple Cash vs. Venmo for Bill Splitting</h2>
      <p>
        Both are viable options for settling group expenses. The main differences:
      </p>
      <ul>
        <li><strong>Ecosystem:</strong> Apple Cash works only between iPhone users. Venmo works across iPhone and Android. For mixed groups, Venmo is the safer choice.</li>
        <li><strong>Integration:</strong> Apple Cash is built into iMessage — no app switching required. Venmo requires opening a separate app.</li>
        <li><strong>Social features:</strong> Venmo has a social feed (which you can set to private). Apple Cash does not — transfers are private by default.</li>
        <li><strong>Availability:</strong> Apple Cash is US-only. So is Venmo. For international use, consider Wise or Revolut.</li>
      </ul>

      <h2>Using Apple Pay to Split at Checkout</h2>
      <p>
        Some newer payment terminals in restaurants and cafes support Apple Pay split at the point of sale — meaning the terminal prompts for multiple Apple Pay payments. This is still uncommon but growing, especially in fast-casual settings. When available, each person taps to pay their share directly, eliminating any post-dinner calculation.
      </p>
      <p>
        When this is not available (which is most of the time), the standard workflow — one card pays, others reimburse via Apple Cash or Venmo — is the practical alternative.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Apple Cash is a convenient and seamless way to settle group expenses among iPhone users, with no app switching and tight integration into iMessage. It does not replace the need to calculate what each person owes — that step still requires a tool like <Link href="/">Jig</Link> for receipt-based splits. But for the transfer step, Apple Cash is fast, private, and free for standard bank transfers.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li><Link href="/blog/how-to-split-bills-using-google-pay">How to Split Bills Using Google Pay</Link></li>
        <li><Link href="/blog/how-to-use-venmo-for-group-expenses">How to Use Venmo for Group Expenses</Link></li>
        <li><Link href="/blog/venmo-vs-zelle-vs-cashapp-for-splitting">Venmo vs. Zelle vs. Cash App for Splitting Bills</Link></li>
        <li><Link href="/blog/best-way-to-split-bills-2026">The Best Way to Split Bills in 2026</Link></li>
      </ul>
    </BlogPostLayout>
  );
}
