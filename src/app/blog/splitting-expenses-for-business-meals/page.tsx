import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Split Expenses for a Group Business Meal";
const description =
  "Business meals involve reimbursement, expense reports, and mixed personal/work charges. Here's how to handle the split.";
const slug = "/blog/splitting-expenses-for-business-meals";
const datePublished = "2026-02-26";

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

export default function SplittingExpensesForBusinessMeals() {
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
        A group business meal involves more variables than a dinner with friends. There are
        expense reports to file, reimbursement policies to satisfy, possible tax considerations,
        and sometimes a mix of people whose meals are covered by the company and others who are
        paying personally. Getting the split right matters for accounting, not just for fairness.
      </p>
      <p>
        Here's how to approach business meal expenses clearly and correctly.
      </p>

      <h2>Understand the Reimbursement Policy First</h2>
      <p>
        Before the meal, know your company's expense policy. Key questions:
      </p>
      <ul>
        <li>Is there a per-person meal cap? (Common: $50–$75 per person for meals)</li>
        <li>Is alcohol reimbursable?</li>
        <li>Does the company require itemized receipts or just the total?</li>
        <li>Who is the "host" for expense purposes — i.e., whose card goes down?</li>
      </ul>
      <p>
        Many companies have a per-person limit rather than a total cap. If the policy allows
        $65 per person and there are eight attendees, the company will cover up to $520. If the
        bill is $480, the full amount is covered. If it's $620, someone is paying the overage
        personally or the meal needs to be documented differently.
      </p>

      <h2>Separating Reimbursable and Non-Reimbursable Items</h2>
      <p>
        The most common complication in business meal splitting is that some items aren't
        reimbursable. Alcohol is the most frequent example — many companies won't cover it on
        expense reports. If three people had wine and four had soft drinks, the wine drinkers
        should cover their own drinks rather than burying the cost in the total.
      </p>
      <p>
        This is where itemized receipt splitting becomes practically necessary rather than just
        preferable. You need to know exactly which line items are going to expense and which
        are being paid personally.
      </p>

      <h2>When One Person Pays the Whole Bill</h2>
      <p>
        It's common for one person — usually the most senior or the host — to put the full meal
        on their company card. In this case, they submit the receipt for reimbursement and the
        split is handled separately: each attendee may owe the host for their personal items
        (non-reimbursable), while the reimbursable items are covered through expense.
      </p>
      <p>
        Clear documentation matters here. Using <Link href="/">Jig</Link> to photograph the
        receipt and assign items gives you an itemized record of who ordered what. This is useful
        both for calculating who owes what personally and for justifying the expense report if
        the company requires itemization.
      </p>

      <h2>When Multiple People Submit Separate Expense Reports</h2>
      <p>
        Some teams prefer that each attendee submits their own meal expense separately. This
        requires separate checks — which you should request before sitting down — or itemized
        documentation of each person's total from a shared receipt.
      </p>
      <p>
        If you couldn't get separate checks, use an itemized split to determine each person's
        total (including their proportional share of tax and any shared items like appetizers),
        and each person submits their individual amount.
      </p>

      <h2>Mixed Company/Personal Groups</h2>
      <p>
        Sometimes a business meal includes guests who are not employees — clients, vendors,
        candidates — whose meals may be fully hosted by the company, while internal employees
        are covering their own food. Or some attendees are in-scope for reimbursement and others
        aren't.
      </p>
      <p>
        Define roles before the meal: who is being hosted (their meals go fully to company
        expense), who is a paying attendee (they cover their own items beyond any company cap),
        and who is the host (they manage the receipt and expense report).
      </p>

      <h2>Recordkeeping for Reimbursement</h2>
      <p>
        Most expense management systems require: the receipt, the amount, the business purpose,
        and a list of attendees. Keep the following for every business meal:
      </p>
      <ul>
        <li>A photo of the full receipt</li>
        <li>Names of all attendees</li>
        <li>The business purpose of the meeting</li>
        <li>Itemized breakdown if alcohol was present and needs to be separated</li>
      </ul>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/bill-splitting-for-freelancers">
            Bill Splitting for Freelancers: Tracking Client Meals and Team Expenses
          </Link>
        </li>
        <li>
          <Link href="/blog/tracking-shared-business-expenses">
            How to Track Shared Business Expenses with a Team
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-a-restaurant-bill">
            How to Split a Restaurant Bill
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
