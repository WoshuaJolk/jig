import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "Financial Conversations to Have Before Moving In Together";
const description =
  "Moving in together without talking about money is a mistake. Here's every financial conversation you should have first.";
const slug = "/blog/financial-expectations-before-moving-in";
const datePublished = "2026-02-22";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function FinancialExpectationsBeforeMovingIn() {
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

      <h2>Why This Conversation Cannot Wait</h2>
      <p>
        Moving in together is a major milestone, and the excitement around it often overwhelms the practical planning. Couples spend weeks finding the perfect apartment and one afternoon — if that — discussing how they will actually pay for it. Then they sign the lease, move in, and discover their financial expectations are completely misaligned.
      </p>
      <p>
        Money problems in cohabiting relationships almost always trace back to undiscussed assumptions. Someone assumed bills would be split equally; the other assumed proportionally. One person assumed all groceries would be shared; the other was not expecting that. These assumptions do not disappear — they surface as conflicts.
      </p>
      <p>
        The conversations below should happen before you sign any lease. They take a few hours total and prevent years of recurring arguments.
      </p>

      <h2>1. How Will Rent Be Split?</h2>
      <p>
        The most important number to agree on. Your options:
      </p>
      <ul>
        <li><strong>Equal split:</strong> Each person pays half regardless of income. Simple, treats both as equals.</li>
        <li><strong>Proportional to income:</strong> Each person pays a percentage matching their share of combined household income. Fairer when incomes differ significantly.</li>
        <li><strong>One person covers a larger share:</strong> The higher earner covers more rent in exchange for something (more savings capacity for the lower earner, or an explicit understanding that other costs are more equally shared).</li>
      </ul>
      <p>
        Whatever you choose, write it down.
      </p>

      <h2>2. How Will Utilities Be Handled?</h2>
      <p>
        Decide who pays which utilities and how reimbursements work. The cleanest system: one person pays each utility and the other Venmos their share when billed. Agree on the same-day or 24-hour payment expectation upfront.
      </p>
      <p>
        Also discuss: what happens if the electric bill is unusually high because one person worked from home all month?
      </p>

      <h2>3. What Is a Shared Expense vs. a Personal Expense?</h2>
      <p>
        This is where most couples have the least clarity. Draw explicit lines:
      </p>
      <ul>
        <li>Is a gym membership shared or personal? (Usually personal.)</li>
        <li>Are streaming services shared? (Discuss this specifically for each service.)</li>
        <li>If one person has a much more expensive commute, does that factor in?</li>
        <li>What about personal care products? Separate or shared household budget?</li>
        <li>What about pet costs if only one person has a pet?</li>
      </ul>
      <p>
        Going category by category prevents most of the "I thought that was shared" disputes.
      </p>

      <h2>4. How Will Groceries Work?</h2>
      <p>
        Groceries are the most frequent shared purchase you will make as housemates. Decide upfront:
      </p>
      <ul>
        <li>Do you shop together or separately?</li>
        <li>Is food mostly shared or mostly personal?</li>
        <li>How do you handle one person having special dietary needs that are more expensive?</li>
        <li>Who pays when you shop together, and how do you settle it?</li>
      </ul>
      <p>
        For joint grocery trips, <a href="/">Jig</a> makes the split fast and exact — snap the receipt, assign items, and each person pays their portion via Venmo. This removes the need to track or estimate, which is especially useful while you are still learning each other's shopping habits.
      </p>

      <h2>5. Will You Open a Joint Account?</h2>
      <p>
        A joint account for shared household expenses is one of the most practical moves cohabiting couples can make. It removes the need for constant reimbursements and gives both people visibility into shared spending.
      </p>
      <p>
        Discuss: how much will each person contribute monthly? Will contributions be equal or proportional? Who has authority to spend from it? What counts as a household expense that can be charged to the joint account?
      </p>
      <p>
        Even couples who are not ready for a full financial merger often find a limited joint account for household expenses to be an elegant middle ground.
      </p>

      <h2>6. How Will You Handle Savings Goals Together?</h2>
      <p>
        Moving in together often accelerates joint financial goals: a vacation, a new couch, eventually a down payment. Discuss whether you want to save toward any shared goals and how. A separate savings account that both contribute to, a fixed amount monthly, a specific timeline — having this conversation now is much easier than in the middle of planning a trip.
      </p>

      <h2>7. What Happens If Someone Cannot Pay Their Share?</h2>
      <p>
        Job loss, medical emergency, unexpected expense — life happens. Having a plan for how you handle a temporary shortfall prevents it from becoming a crisis. Does one person cover the other temporarily? Is there a repayment expectation and timeline? Is there a reserve fund?
      </p>
      <p>
        You do not need a full policy here, just an agreement that you will handle it as a team and communicate immediately rather than letting the other person get surprised by a late bill.
      </p>

      <h2>8. What Is Your Spending Style?</h2>
      <p>
        One of the most overlooked pre-move-in conversations: how do you each naturally relate to spending? Is one person a saver and the other more comfortable spending? Does one of you feel anxious when the checking account balance gets below a certain number? Does one person prefer spontaneous dinners out while the other budgets carefully?
      </p>
      <p>
        These differences are not dealbreakers, but they need to be acknowledged. Two people with very different money styles can cohabitate well with the right structure — and constant friction without one.
      </p>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/splitting-bills-when-living-together">How to Split Bills When You First Move In Together</a></li>
        <li><a href="/blog/how-couples-split-bills-fairly">How Couples Split Bills Fairly in 2026</a></li>
        <li><a href="/blog/money-conversations-every-couple-should-have">Money Conversations Every Couple Should Have</a></li>
        <li><a href="/blog/how-to-split-bills-when-you-earn-more">How to Split Bills When You Earn More Than Your Partner</a></li>
      </ul>
    </BlogPostLayout>
  );
}
