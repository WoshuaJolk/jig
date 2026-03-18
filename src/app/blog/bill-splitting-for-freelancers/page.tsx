import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "Bill Splitting for Freelancers: Tracking Client Meals and Team Expenses";
const description =
  "Freelancers deal with client dinners, team lunches, and shared expenses. Here's how to track and split them efficiently.";
const slug = "/blog/bill-splitting-for-freelancers";
const datePublished = "2026-02-25";

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

export default function BillSplittingForFreelancers() {
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
        Freelancers navigate an unusual expense landscape: some meals are fully personal, some
        are fully deductible client entertainment, and some sit in a gray zone — a lunch with a
        colleague you're working with on a project, a coffee with someone who might become a
        client, a working dinner where half the conversation was personal.
      </p>
      <p>
        Adding group splitting to the mix creates another layer of complexity. Here's how to
        handle it clearly.
      </p>

      <h2>The Tax Deductibility Question</h2>
      <p>
        In the United States, business meals are currently 50% deductible when they meet the
        IRS criteria: the meal has a clear business purpose, you or an employee were present, and
        the expense is ordinary and necessary for the business. Client entertainment meals that
        meet these criteria can be deducted at 50% of the cost.
      </p>
      <p>
        This means keeping records matters. Not just the receipt amount, but who was there, the
        business purpose, and — for split meals — what your specific portion was.
      </p>

      <h2>When You're Treating a Client</h2>
      <p>
        If you're taking a client to lunch and covering their meal, the full amount of the meal
        (up to the 50% deduction) is your deductible business expense. You need the receipt,
        a note about the client's name and the business discussed, and a record of the amount.
      </p>
      <p>
        Don't split this with the client. You're the host. Pay the bill, keep the receipt, and
        record it as a client entertainment expense.
      </p>

      <h2>When You're Splitting with Other Freelancers</h2>
      <p>
        A working lunch with a collaborator, contractor, or fellow freelancer is a common
        scenario. If you're working together on a project and the meal has a genuine business
        purpose, the meal can be deductible — but only your portion.
      </p>
      <p>
        This is where itemized splitting matters for tax purposes. Your deduction is your cost,
        not the full table total. Use <Link href="/">Jig</Link> to photograph the receipt and
        assign items: you'll have a clear record of what you specifically paid, which is what
        goes into your expense tracking.
      </p>

      <h2>Separating Business and Personal Items on the Same Bill</h2>
      <p>
        Sometimes a meal starts as business and ends personal — or includes a mix. You ordered
        a business lunch with your client, they left, you stayed for dessert and a glass of wine
        with a friend. The bill includes both.
      </p>
      <p>
        The clean approach: ask the server to split the check at the point of transition, or
        note which line items are business vs. personal when you photograph the receipt. The
        business items go to your expense tracking; the personal items don't.
      </p>

      <h2>Team Lunches and Shared Expenses</h2>
      <p>
        If you work with a small team of contractors or collaborators and periodically share
        meals, a few systems help keep it clean:
      </p>
      <ul>
        <li>
          <strong>Per-project expense tracking:</strong> Assign shared meal costs to the project
          they relate to. When invoicing the client, include the itemized meal costs as a
          reimbursable line item.
        </li>
        <li>
          <strong>Running tab:</strong> Track who pays for what across multiple meals and settle
          up monthly. Keeps each outing simple without requiring payment every time.
        </li>
        <li>
          <strong>Itemize at the time:</strong> For larger groups or larger bills, split itemized
          at the restaurant so each person's cost is clear immediately.
        </li>
      </ul>

      <h2>Documentation You Need to Keep</h2>
      <p>
        For any meal you're treating as a business expense, keep:
      </p>
      <ul>
        <li>The itemized receipt (photo is fine — digital is preferred)</li>
        <li>Name of attendees and their relationship to your business</li>
        <li>Brief note on the business purpose</li>
        <li>Your specific cost if it was a split meal</li>
      </ul>
      <p>
        Most bookkeeping tools (QuickBooks, Wave, FreshBooks) have a way to attach receipt photos
        to expense entries. Keep the habit of photographing every business meal receipt before
        leaving the restaurant.
      </p>

      <h2>When to Keep Business and Personal Cards Separate</h2>
      <p>
        If you don't already have a dedicated business credit or debit card, this is worth
        considering. All business meals on one card makes reconciliation much simpler at tax time.
        Your business meal category is one card statement rather than a scavenger hunt through
        your personal card.
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/splitting-expenses-for-business-meals">
            How to Split Expenses for a Group Business Meal
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
