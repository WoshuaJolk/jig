import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "The Complete Guide to Splitting Bills as Roommates";
const description =
  "Everything you need to know about splitting bills with roommates: groceries, rent, utilities, household supplies, and systems for tracking shared expenses fairly.";
const slug = "/blog/splitting-bills-as-roommates";

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

export default function SplittingBillsAsRoommates() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-02-18",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: absoluteUrl(slug),
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        { label: "Blog", href: "/blog" },
        { label: "Splitting Bills as Roommates", href: slug },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="prose prose-neutral max-w-none">
        <time className="text-sm text-[#888]">February 18, 2026</time>
        <h1 className="mt-2">{title}</h1>

        <p>
          Living with roommates is one of the most common ways to make housing
          affordable. But it also means navigating a constant stream of shared
          expenses — rent, utilities, groceries, cleaning supplies, furniture,
          streaming subscriptions, and everything in between. Without a clear
          system, shared expenses become a source of friction that can
          deteriorate even the best roommate relationships.
        </p>
        <p>
          This guide covers every category of shared expense, the fairest ways
          to divide each one, and practical systems for tracking it all so
          nobody feels taken advantage of.
        </p>

        <nav className="my-8 rounded-lg border border-[#e5e3de] p-6">
          <h2 className="mt-0 text-lg font-semibold">Table of Contents</h2>
          <ol className="mb-0 list-decimal space-y-1 pl-5 text-sm">
            <li><a href="#rent">Splitting Rent</a></li>
            <li><a href="#utilities">Utilities and Recurring Bills</a></li>
            <li><a href="#groceries">Groceries and Food</a></li>
            <li><a href="#household">Household Supplies</a></li>
            <li><a href="#furniture">Furniture and Big Purchases</a></li>
            <li><a href="#subscriptions">Subscriptions and Services</a></li>
            <li><a href="#systems">Systems for Tracking Everything</a></li>
            <li><a href="#communication">Communication and Ground Rules</a></li>
            <li><a href="#tools">Tools That Help</a></li>
          </ol>
        </nav>

        <h2 id="rent">1. Splitting Rent</h2>
        <p>
          Rent is usually the largest shared expense and the one that causes the
          most debate. There are two main approaches:
        </p>
        <h3>Equal Split</h3>
        <p>
          The simplest method. Total rent divided by the number of roommates.
          This works when bedrooms are roughly the same size and quality. It is
          the default for most roommate situations and avoids any complex
          negotiations.
        </p>
        <h3>Proportional by Room</h3>
        <p>
          When rooms differ significantly — a master bedroom with an ensuite
          bathroom versus a small room next to the kitchen — a proportional
          split is fairer. Common methods include:
        </p>
        <ul>
          <li>
            <strong>Square footage.</strong> Measure each room and calculate
            the percentage of total living space. The person with 40% of the
            bedroom space pays 40% of the bedroom portion of rent, with common
            areas split equally.
          </li>
          <li>
            <strong>Amenity adjustment.</strong> Start with a base equal split
            and add premiums for desirable features: private bathroom (+$50 to
            $100), larger closet (+$25), more natural light (+$25). These
            numbers are negotiable but the framework gives everyone a fair
            starting point.
          </li>
          <li>
            <strong>Bidding.</strong> Each roommate bids on rooms. The person
            willing to pay the most for the best room gets it. This
            market-based approach surfaces what each person actually values.
          </li>
        </ul>
        <p>
          Whatever method you choose, agree on it before signing the lease and
          document it in writing.
        </p>

        <h2 id="utilities">2. Utilities and Recurring Bills</h2>
        <p>
          Utilities typically include electricity, gas, water, internet, and
          sometimes trash collection. The fairest approach for most roommate
          situations is an equal split:
        </p>
        <ul>
          <li>
            <strong>Electricity and gas:</strong> Split equally. While usage
            varies, tracking individual consumption is impractical. The cost
            difference between roommates is usually minimal.
          </li>
          <li>
            <strong>Internet:</strong> Split equally. Everyone uses it.
          </li>
          <li>
            <strong>Water:</strong> Split equally. Same reasoning as
            electricity.
          </li>
        </ul>
        <p>
          The exception: if one roommate has a significantly higher impact on a
          specific utility — such as running a space heater 24/7 or mining
          cryptocurrency — it is reasonable to discuss an adjusted split for
          that utility.
        </p>
        <p>
          For recurring bills, the cleanest system is to assign one utility per
          roommate. One person pays the electric bill, another pays internet,
          another pays gas. At the end of each month, tally up the totals and
          settle the difference. Or, simpler: one person pays all utilities
          and the others Venmo their share monthly.
        </p>

        <h2 id="groceries">3. Groceries and Food</h2>
        <p>
          Groceries are where roommate finances get tricky. There are several
          approaches depending on how you live:
        </p>
        <h3>Separate Groceries (Most Common)</h3>
        <p>
          Each person buys their own food. Shared staples like milk, eggs,
          butter, and cooking oil are either split or purchased on a rotating
          basis. This is the simplest approach and avoids arguments about who
          ate whose yogurt.
        </p>
        <h3>Shared Groceries</h3>
        <p>
          Some roommates shop and cook together. In this case, one person often
          makes the grocery run and the receipt needs to be split. This is
          where <Link href="/">Jig</Link> is especially useful. Scan the
          grocery receipt, assign personal items (your protein powder, their
          specialty cheese) to the individual, and shared items (milk, eggs,
          bread) to everyone. Tax is distributed proportionally. The whole
          process takes thirty seconds and eliminates any guesswork about who
          owes what.
        </p>
        <h3>Hybrid Approach</h3>
        <p>
          Buy personal items separately but split shared staples. Keep a
          shared shelf or section of the fridge for communal items. When
          someone buys shared items, scan the receipt with Jig and share the
          split. For more on splitting grocery receipts, see our{" "}
          <Link href="/use-cases/groceries">grocery splitting guide</Link>.
        </p>

        <h2 id="household">4. Household Supplies</h2>
        <p>
          Toilet paper, dish soap, paper towels, trash bags, cleaning products,
          light bulbs — the mundane purchases that keep a household running.
          These are almost always shared and should be split equally.
        </p>
        <p>
          Two systems work well:
        </p>
        <ul>
          <li>
            <strong>Rotation.</strong> Each roommate takes turns buying
            household supplies. Over time it evens out, and nobody has to track
            individual purchases. Works best when roommates have similar
            spending habits and do not buy dramatically different quality levels
            (one person buying premium toilet paper and expecting to be
            reimbursed equally can cause friction).
          </li>
          <li>
            <strong>Receipt splitting.</strong> Whoever buys household supplies
            scans the receipt with Jig and shares the split. This is more
            precise than rotation and works well when purchases vary in
            frequency and amount.
          </li>
        </ul>

        <h2 id="furniture">5. Furniture and Big Purchases</h2>
        <p>
          A couch, a dining table, a vacuum cleaner, kitchen appliances.
          Shared furniture and equipment need careful handling because they
          involve larger amounts and raise the question of ownership when
          someone moves out.
        </p>
        <ul>
          <li>
            <strong>Split the cost, one person keeps it.</strong> Agree upfront
            who will take the item when the living situation ends. The other
            roommates are essentially paying for usage, not ownership. This
            should be discussed before purchasing.
          </li>
          <li>
            <strong>One person buys it.</strong> The person who wants the item
            most buys it outright. Others benefit from it while living there,
            but there is no ambiguity about ownership.
          </li>
          <li>
            <strong>Buy used, split evenly, and leave it.</strong> For items
            with low resale value (a cheap bookshelf, basic kitchenware),
            splitting the cost and leaving it for the next tenant when everyone
            moves out is the simplest approach.
          </li>
        </ul>

        <h2 id="subscriptions">6. Subscriptions and Services</h2>
        <p>
          Streaming services, music subscriptions, and shared cleaning
          services are increasingly common shared expenses. Treat them like
          utilities:
        </p>
        <ul>
          <li>
            One person subscribes and the others pay their share monthly.
          </li>
          <li>
            Assign different subscriptions to different people. If the
            Netflix bill and the Spotify bill are roughly equal, each
            roommate can own one and everyone benefits.
          </li>
          <li>
            Keep a shared note or spreadsheet listing who pays for what. This
            prevents duplicate subscriptions and makes it easy to adjust when
            someone moves out.
          </li>
        </ul>

        <h2 id="systems">7. Systems for Tracking Everything</h2>
        <p>
          The biggest source of roommate financial friction is not any single
          expense — it is the cumulative lack of tracking. Small purchases go
          unrecorded. Someone buys paper towels three times in a row without
          being repaid. Resentment builds quietly.
        </p>
        <p>
          Here are proven systems for staying on top of shared expenses:
        </p>
        <ul>
          <li>
            <strong>Monthly settlement.</strong> Throughout the month, each
            person tracks what they bought for shared use. At the end of the
            month, tally everything up and settle the difference with one
            payment. Jig works well for this — scan each receipt as you shop,
            and at month&apos;s end you have a complete record of every shared
            purchase.
          </li>
          <li>
            <strong>Real-time splitting.</strong> Every shared purchase is
            scanned and split immediately using <Link href="/">Jig</Link>.
            People pay their share right away via Venmo or Zelle. Nothing
            accumulates, nothing is forgotten.
          </li>
          <li>
            <strong>Shared bank account.</strong> Some roommates open a joint
            account and each contribute a fixed amount monthly. Shared
            expenses come out of this account. This works well but requires
            a high level of trust and a clear agreement about what qualifies as
            a shared expense.
          </li>
          <li>
            <strong>Spreadsheet.</strong> A simple shared spreadsheet (Google
            Sheets works well) where each person logs their shared purchases
            with the date, amount, and category. Monthly settlement is based
            on the spreadsheet totals.
          </li>
        </ul>

        <h2 id="communication">8. Communication and Ground Rules</h2>
        <p>
          The financial system only works if everyone is on the same page.
          Establish these ground rules early:
        </p>
        <ul>
          <li>
            <strong>Agree on what is shared.</strong> Groceries? Cleaning
            supplies? Toilet paper? Netflix? Define the categories upfront so
            there are no surprises.
          </li>
          <li>
            <strong>Set a spending threshold.</strong> Purchases under $20 can
            be made unilaterally. Anything over $50 requires a group text.
            Anything over $200 requires a conversation. Adjust the numbers to
            your situation.
          </li>
          <li>
            <strong>Agree on a settlement schedule.</strong> Weekly, biweekly,
            or monthly. Regularity prevents accumulation and reduces the
            likelihood of disputes.
          </li>
          <li>
            <strong>Address issues early.</strong> If someone is consistently
            not paying their share or buying expensive items and expecting
            equal reimbursement, address it promptly and directly. Small
            problems become big problems when left unspoken.
          </li>
          <li>
            <strong>Put it in writing.</strong> A simple roommate agreement
            covering financial expectations is not excessive — it is smart. It
            does not need to be a legal document. A shared Google Doc listing
            the ground rules is sufficient.
          </li>
        </ul>

        <h2 id="tools">9. Tools That Help</h2>
        <p>
          The right tools make roommate finances almost effortless:
        </p>
        <ul>
          <li>
            <strong>
              <Link href="/">Jig</Link>
            </strong>{" "}
            — Scan any receipt and split it instantly among roommates. Assigns
            individual and shared items, calculates proportional tax, and
            generates a shareable link. Best for splitting grocery runs,
            household supply purchases, and any receipt-based shared expense.
          </li>
          <li>
            <strong>Venmo / Zelle / Cash App</strong> — For settling up. Pick
            whichever one your household already uses. See our{" "}
            <Link href="/blog/venmo-vs-zelle-vs-cashapp-for-splitting">
              comparison of payment apps
            </Link>{" "}
            for details on each.
          </li>
          <li>
            <strong>Google Sheets</strong> — For tracking ongoing expenses over
            time. A shared spreadsheet with columns for date, person, amount,
            and category gives everyone visibility into the running balance.
          </li>
          <li>
            <strong>Shared notes app</strong> — For maintaining the shopping
            list, documenting ground rules, and tracking whose turn it is to
            buy supplies.
          </li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          Splitting bills as roommates does not have to be a source of stress.
          The key ingredients are clear agreements, consistent tracking, and
          regular settlement. Decide upfront what is shared, use tools like{" "}
          <Link href="/">Jig</Link> to split receipt-based expenses fairly, and
          settle up on a regular schedule using your preferred payment app.
        </p>
        <p>
          The roommates who handle money well are the ones who talk about it
          openly, track it consistently, and never let small imbalances turn
          into big resentments. A little structure goes a long way toward
          keeping both the household and the friendships healthy.
        </p>

        <hr className="my-8" />
        <h3>Related Reading</h3>
        <ul>
          <li>
            <Link href="/use-cases/roommates">
              Split Bills with Roommates (Use Case Guide)
            </Link>
          </li>
          <li>
            <Link href="/use-cases/groceries">
              Split Grocery Receipts with Jig
            </Link>
          </li>
          <li>
            <Link href="/blog/how-to-ask-friends-to-pay-you-back">
              How to Ask Friends to Pay You Back Without Being Awkward
            </Link>
          </li>
          <li>
            <Link href="/blog/why-even-splits-arent-fair">
              Why Even Splits Are Not Fair (And What to Do Instead)
            </Link>
          </li>
        </ul>
      </article>
    </SeoPageLayout>
  );
}
