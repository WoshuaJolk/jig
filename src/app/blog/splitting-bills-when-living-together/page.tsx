import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bills When You First Move In Together";
const description =
  "Moving in together is exciting. Figuring out who pays for what is less so. Here's how to set up a fair system from day one.";
const slug = "/blog/splitting-bills-when-living-together";
const datePublished = "2026-02-26";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function SplittingBillsWhenLivingTogether() {
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

      <h2>Moving In Together: The Financial Reality</h2>
      <p>
        Moving in with a partner is one of the most significant relationship milestones — and one of the most financially complex. Before you were spending on dates. Now you are sharing a home, with all the associated fixed costs, variable expenses, and daily purchasing that comes with it.
      </p>
      <p>
        Couples who establish a clear financial system before moving in together have significantly less money-related conflict. This does not require a legal agreement or a detailed spreadsheet — but it does require an actual conversation about who pays for what.
      </p>

      <h2>Before You Move In: The Conversation to Have</h2>
      <p>
        The best time to discuss financial arrangements is before you sign the lease. Topics to cover:
      </p>
      <ul>
        <li>How will rent be split? Equally, or proportionally to income?</li>
        <li>Who pays which utilities?</li>
        <li>How will groceries be handled?</li>
        <li>What about individual expenses — personal subscriptions, gym memberships, personal care?</li>
        <li>Will you open a joint account, or handle everything separately with reimbursements?</li>
        <li>How often will you review the arrangement?</li>
      </ul>
      <p>
        For a detailed guide to this conversation, see our article on <a href="/blog/financial-expectations-before-moving-in">financial conversations to have before moving in together</a>.
      </p>

      <h2>Choosing a System</h2>

      <h3>Option 1: Fully Separate with Reimbursements</h3>
      <p>
        Each person maintains their own account. Shared expenses are paid by one person and reimbursed by the other, or you assign specific bills to each person and settle the differential monthly.
      </p>
      <p>
        This system works well for couples who value financial independence and are disciplined about prompt reimbursements. It breaks down if either person is inconsistent about paying back.
      </p>

      <h3>Option 2: Joint Account for Shared Expenses</h3>
      <p>
        Both partners contribute to a joint account (proportionally or equally, depending on income) from which all shared expenses — rent, utilities, groceries, household supplies — are paid. Personal spending stays in individual accounts.
      </p>
      <p>
        This is the most popular system for live-in couples because it creates clear visibility into shared costs without merging all finances. Both people can see the shared account balance, which removes accusations of mismanagement.
      </p>

      <h3>Option 3: Full Financial Merger</h3>
      <p>
        All income goes into joint accounts, all expenses are paid jointly. This is common among married couples and long-term partners who view their finances as fully shared. It requires a high level of trust, communication, and alignment on spending values.
      </p>

      <h2>How to Split Rent Specifically</h2>
      <p>
        Equal rent splits are the most common. But if one partner earns significantly more than the other, a proportional split — each contributes the same percentage of their income — puts the same financial burden on both people rather than the same dollar amount.
      </p>
      <p>
        Either approach is defensible. The key is that both partners genuinely agree to it, not that one person accepted it while quietly resenting it.
      </p>

      <h2>Day-to-Day Expenses</h2>
      <p>
        Beyond fixed monthly bills, you will constantly be making small joint purchases: groceries, household supplies, a dinner out, an item for the apartment. Establish a norm for these early.
      </p>
      <p>
        A practical approach: use a shared card for all joint purchases, or snap grocery and household receipts with <a href="/">Jig</a> and split them on the spot. The AI reads every line item, each person marks what's theirs, and shared items are split equally. No running tally, no "I'll get it next time" that never comes.
      </p>

      <h2>What to Do When the System Is Not Working</h2>
      <p>
        Signs your current system is not working:
      </p>
      <ul>
        <li>One person feels they are consistently covering more than their share</li>
        <li>Either person does not know what the shared account balance is</li>
        <li>You have had the same money argument more than once</li>
        <li>Someone is regularly late paying their share</li>
      </ul>
      <p>
        If any of these apply, the system needs adjusting — not your partner. Come to the conversation with a specific proposed change rather than a general complaint.
      </p>

      <h2>Review Regularly</h2>
      <p>
        Schedule a quick financial check-in every three to six months. Review what is working, what is not, and whether any circumstances have changed (income, expenses, lifestyle). This prevents resentment from building and keeps both partners in the same picture.
      </p>
      <p>
        The couples who handle money well are not the ones who never disagree — they are the ones who built a structure that prevents most disagreements from arising in the first place.
      </p>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/financial-expectations-before-moving-in">Financial Conversations to Have Before Moving In Together</a></li>
        <li><a href="/blog/how-couples-split-bills-fairly">How Couples Split Bills Fairly in 2026</a></li>
        <li><a href="/blog/how-to-split-bills-when-you-earn-more">How to Split Bills When You Earn More Than Your Partner</a></li>
        <li><a href="/blog/money-conversations-every-couple-should-have">Money Conversations Every Couple Should Have</a></li>
      </ul>
    </BlogPostLayout>
  );
}
