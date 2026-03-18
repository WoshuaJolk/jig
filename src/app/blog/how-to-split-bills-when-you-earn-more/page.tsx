import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Bills When You Earn More Than Your Partner";
const description =
  "Income disparity in relationships creates real tension around money. Here are fair systems for splitting bills when incomes aren't equal.";
const slug = "/blog/how-to-split-bills-when-you-earn-more";
const datePublished = "2026-03-10";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: { title, description, url: absoluteUrl(slug), siteName: SITE_NAME, type: "article" },
};

export default function HowToSplitBillsWhenYouEarnMore() {
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

      <h2>The Income Gap Is Common — and Uncomfortable</h2>
      <p>
        Most couples have some income disparity. According to recent surveys, fewer than a third of partnered adults earn within 10% of each other. Yet the default assumption in many relationships is still a 50/50 split. That mismatch between reality and expectation is where financial resentment starts.
      </p>
      <p>
        If you earn significantly more than your partner, you face a specific dilemma: insisting on a strict 50/50 split can strain your partner financially, but covering more than your share can create its own dynamic of dependency or obligation. Neither extreme is ideal.
      </p>

      <h2>Why 50/50 Often Isn't Actually Fair</h2>
      <p>
        Fairness is not the same as equality. Two people paying identical dollar amounts on different incomes are experiencing very different financial burdens. If you earn $100,000 and your partner earns $40,000, and you split a $2,400/month rent evenly, you're each paying $1,200. That's 14% of your gross monthly income — and 36% of theirs.
      </p>
      <p>
        Proportional fairness means both people carry the same <em>relative</em> weight. Same percentage of income, not same dollar amount. This is how progressive tax systems work, and there's a reason: equal burden requires proportional contribution.
      </p>

      <h2>Three Systems That Work When Incomes Differ</h2>

      <h3>1. Proportional Income Split</h3>
      <p>
        Calculate each partner's share of total household income, then apply those percentages to shared expenses. If Partner A earns $6,000/month and Partner B earns $3,000/month, Partner A contributes 67% and Partner B contributes 33% of every shared bill.
      </p>
      <p>
        This is widely regarded as the most equitable approach because it normalizes the burden across different income levels. It adjusts automatically as incomes change. And it avoids the dynamic where the lower earner is perpetually stressed about money while the higher earner is comfortable.
      </p>

      <h3>2. Higher Earner Covers Fixed Costs, Split Variable Costs</h3>
      <p>
        A simpler version: the higher earner covers the large fixed expenses — rent, utilities, insurance — and you split variable expenses like groceries, dining, and entertainment. This keeps daily spending feeling equal while removing the heaviest financial pressure from the lower earner.
      </p>
      <p>
        The risk is that this can blur into the lower earner feeling financially dependent. Clear communication about what falls into each category prevents this from becoming a source of resentment.
      </p>

      <h3>3. Contribution Pool + Equal Discretionary</h3>
      <p>
        Each partner contributes to a shared account — proportionally based on income — and all household bills are paid from the pool. After the pool is funded, both partners keep an equal amount for personal discretionary spending. This system levels the lifestyle after fixed obligations are met, which many couples find psychologically satisfying.
      </p>

      <h2>What to Actually Say to Your Partner</h2>
      <p>
        The conversation itself is the hard part. A few approaches that tend to work:
      </p>
      <ul>
        <li><strong>Frame it as a math problem, not a judgment.</strong> "I've been running the numbers and I think a proportional split would work better for us" lands differently than "I think you're not contributing enough."</li>
        <li><strong>Propose a specific number.</strong> Vague conversations about fairness go in circles. Come with a proposal: "What if I cover 65% of fixed costs and we split dining and groceries evenly?"</li>
        <li><strong>Acknowledge the awkwardness.</strong> Money conversations are uncomfortable. Naming that directly — "This is a weird conversation but I want us to be on the same page" — actually makes it easier.</li>
      </ul>

      <h2>Handling Day-to-Day Expenses</h2>
      <p>
        Even with a clear monthly system, individual purchases still come up: dinner out, a weekend away, a home item one of you suggested. Who pays for what in the moment?
      </p>
      <p>
        The simplest approach is to alternate paying for casual expenses and settle up at the end of the month. For bigger or itemized purchases — a grocery run, a takeout order — using a tool like <a href="/">Jig</a> to split the receipt item-by-item ensures each person pays exactly their share without anyone tallying in their head.
      </p>

      <h2>When the Gap Changes</h2>
      <p>
        Income gaps shift over time. Promotions, job changes, periods of unemployment, going back to school — all of these change the equation. A system built for your current situation should be revisited whenever a significant change occurs. Set a reminder every six months to check in on whether the arrangement still feels fair to both of you.
      </p>
      <p>
        The goal is a system where neither person is quietly stressed, resentful, or feels like they are being supported as a charity rather than loved as a partner. That requires ongoing, honest conversation — which is harder than any bill-splitting math, but more important than all of it.
      </p>

      <h2>Related Reading</h2>
      <ul>
        <li><a href="/blog/how-couples-split-bills-fairly">How Couples Split Bills Fairly in 2026</a></li>
        <li><a href="/blog/splitting-bills-when-one-person-is-unemployed">How to Split Bills When One Person Is Unemployed</a></li>
        <li><a href="/blog/financial-expectations-before-moving-in">Financial Conversations to Have Before Moving In Together</a></li>
        <li><a href="/blog/money-conversations-every-couple-should-have">Money Conversations Every Couple Should Have</a></li>
      </ul>
    </BlogPostLayout>
  );
}
