import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bills After a Breakup";
const description =
  "Breaking up means untangling shared expenses. Here's how to handle the financial side of a split clearly and without drama.";
const slug = "/blog/splitting-bills-after-a-breakup";
const datePublished = "2026-03-04";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function SplittingBillsAfterABreakup() {
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

      <h2>The Financial Untangling</h2>
      <p>
        Breaking up is emotionally difficult enough. Sorting out shared finances while you're grieving the relationship adds a layer of stress that can make an already hard situation worse. The goal with the financial side of a breakup is to resolve things clearly, quickly, and without unnecessary drama — so both people can actually move on.
      </p>
      <p>
        This guide focuses on the practical side: how to settle outstanding shared expenses, how to divide recurring bills, and how to cleanly separate your finances.
      </p>

      <h2>Audit Everything You Share</h2>
      <p>
        Before you can split anything, you need a complete picture of your shared financial entanglements. Make a list of:
      </p>
      <ul>
        <li>Joint accounts or credit cards</li>
        <li>Recurring bills in one person's name that both were splitting</li>
        <li>Subscriptions you share (streaming, music, software)</li>
        <li>Any outstanding loans or debts between you</li>
        <li>Deposits (apartment, utilities) that either person has held</li>
        <li>Recent large purchases that were split or shared</li>
      </ul>
      <p>
        Getting everything on paper first makes the conversation cleaner. You are not discovering new obligations mid-discussion — you are working through a predetermined list.
      </p>

      <h2>Settle Recent Shared Expenses First</h2>
      <p>
        Any recent shared costs that have not been settled need to be squared up immediately. This includes recent restaurant bills, grocery runs, shared purchases, or anything one person paid that the other still owes on. Even in the emotional chaos of a breakup, clear these promptly. Small unresolved debts have a way of becoming symbols of larger grievances.
      </p>
      <p>
        If you are unsure of the exact breakdown on a shared receipt, upload it to <a href="/">Jig</a>, assign items, and settle the balance via Venmo. Getting a clean number removes the negotiation entirely.
      </p>

      <h2>Recurring Bills: The Transition Plan</h2>
      <p>
        Bills do not stop because you broke up. Here is how to handle each category:
      </p>

      <h3>Shared Housing</h3>
      <p>
        If you were living together, you need to figure out who stays and who goes, or whether both of you leave. If one person stays, they take over all housing bills in their name. If there was a joint lease, contact the landlord about removing one person. Most landlords will work with you if you communicate proactively.
      </p>
      <p>
        Deposits in one person's name but contributed to by both should be split according to each person's actual contribution when they are returned.
      </p>

      <h3>Utilities</h3>
      <p>
        Transfer utilities in the departing person's name to the remaining tenant immediately. Do not leave this to chance — a bill in your ex's name that they are no longer monitoring can result in service interruption or credit damage.
      </p>

      <h3>Shared Subscriptions</h3>
      <p>
        Cancel or transfer shared streaming services, music subscriptions, and any other joint accounts. Decide who keeps which service and who needs to create their own. Set a hard deadline of two weeks post-breakup to have all subscriptions sorted. Leaving them in limbo means you are still financially entangled and communicating about it.
      </p>

      <h2>Joint Accounts and Credit Cards</h2>
      <p>
        If you have a joint bank account, settle the balance equitably and close it. If there is a joint credit card, pay off the balance together (proportional to who charged what, or split equally if it has been genuinely shared), then close the card or remove one person as an authorized user.
      </p>
      <p>
        Do not leave joint accounts open with the expectation of sorting it out later. The longer they remain open, the more opportunity there is for misuse — intentional or otherwise.
      </p>

      <h2>Debts Between Partners</h2>
      <p>
        If one person lent the other money, or if one person has been paying more than their share for an extended period, this is the time to address it. Be specific: "I've been covering about $X more per month for the past Y months" is a conversation. "You owe me a lot of money" is an argument.
      </p>
      <p>
        Write down the specific amounts, agree to them, and settle in one transaction. Venmo with a clear note. This creates a record and a clean endpoint.
      </p>

      <h2>What to Do When Your Ex Won't Cooperate</h2>
      <p>
        Not every breakup is amicable. If your ex refuses to pay their share, delays returning a deposit, or goes silent on financial matters, you have options:
      </p>
      <ul>
        <li>Send a written summary of what is owed via text or email (creates a record)</li>
        <li>For small claims amounts, small claims court is an option</li>
        <li>For shared leases, contact the landlord to document the situation</li>
        <li>For joint accounts, most banks will let you close them or place a hold if you can demonstrate the partnership has ended</li>
      </ul>

      <h2>Moving Forward Clean</h2>
      <p>
        The financial goal of a breakup is to reach a state where you have zero shared financial obligations with your ex. No joint accounts, no shared subscriptions, no outstanding debts in either direction. This clean separation is not just practical — it is emotionally important. Every remaining financial tie is a reason to keep communicating, and that makes moving on harder.
      </p>
      <p>
        Handle it promptly. Handle it clearly. Then close the ledger and move forward.
      </p>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/splitting-bills-when-living-together">How to Split Bills When You First Move In Together</a></li>
        <li><a href="/blog/financial-expectations-before-moving-in">Financial Conversations to Have Before Moving In Together</a></li>
        <li><a href="/blog/how-to-split-shared-subscriptions">How to Split Shared Subscription Costs Fairly</a></li>
      </ul>
    </BlogPostLayout>
  );
}
