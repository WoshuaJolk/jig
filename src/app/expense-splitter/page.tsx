import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Expense Splitter — Split Shared Expenses Instantly",
  description:
    "Split shared expenses instantly with Jig. Upload a receipt, assign items to each person, and calculate everyone's share. Free expense splitter with AI-powered parsing.",
  alternates: { canonical: absoluteUrl("/expense-splitter") },
  openGraph: {
    title: "Expense Splitter — Split Shared Expenses Instantly",
    description:
      "Split shared expenses instantly with Jig. Upload a receipt, assign items to each person, and calculate everyone's share.",
    url: absoluteUrl("/expense-splitter"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ExpenseSplitterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free AI-powered expense splitting web app. Upload a receipt, assign items to people, and share the split.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Expense Splitter", href: "/expense-splitter" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Expense Splitter
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Shared expenses are a fact of life. Whether you are splitting a
            dinner tab, dividing up a grocery run, or settling costs from a
            weekend trip, Jig makes it fast and fair.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Shared Expenses Are Everywhere
          </h2>
          <p>
            Expenses do not just come up at restaurants. Every day, people split
            costs for groceries, household supplies, travel accommodations,
            event tickets, office meals, and more. The challenge is always the
            same: someone pays upfront, and then everyone has to figure out who
            owes what.
          </p>
          <p>
            Spreadsheets work in theory but are tedious to set up. Group chats
            devolve into a mess of numbers and Venmo requests. And simple
            even-split calculators ignore the fact that different people
            consumed different things. What you really need is an expense
            splitter that handles the details automatically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Splits Expenses
          </h2>
          <p>
            Jig is a free{" "}
            <Link href="/bill-splitter" className="underline">
              bill splitter
            </Link>{" "}
            that works for any type of shared expense. Here is the process:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload the receipt.</strong> Take a photo of the receipt
              from any purchase, whether it is a restaurant check, a grocery
              store receipt, or an online order confirmation.
            </li>
            <li>
              <strong>AI parses the details.</strong> Jig&apos;s{" "}
              <Link href="/receipt-scanner" className="underline">
                AI receipt scanner
              </Link>{" "}
              reads every line item and price from the image, saving you from
              manual data entry.
            </li>
            <li>
              <strong>Assign items to people.</strong> Add the names of everyone
              involved and tap to assign each item to whoever it belongs to.
              Shared items get split among the people who shared them.
            </li>
            <li>
              <strong>Tax and fees are distributed proportionally.</strong> Jig
              calculates each person&apos;s share of tax, service fees, and{" "}
              <Link href="/tip-calculator" className="underline">
                tip
              </Link>{" "}
              based on what they ordered, ensuring fairness.
            </li>
            <li>
              <strong>Share the results.</strong> Send a link to your group so
              everyone can see their total and settle up via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>
              ,{" "}
              <Link href="/zelle-split" className="underline">
                Zelle
              </Link>
              ,{" "}
              <Link href="/cash-app-split" className="underline">
                Cash App
              </Link>
              , or any other payment method.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Expense Splitting Scenarios
          </h2>
          <p>
            Jig is designed for any scenario where money needs to be divided
            among a group:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Groceries and Household Supplies</h3>
              <p className="mt-1">
                When{" "}
                <Link href="/use-cases/roommates" className="underline">
                  roommates
                </Link>{" "}
                go on a shared grocery run, some items are communal and some are
                personal. Jig lets you assign each item individually so nobody
                pays for someone else&apos;s specialty yogurt.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Travel and Vacations</h3>
              <p className="mt-1">
                Group{" "}
                <Link href="/use-cases/travel" className="underline">
                  travel
                </Link>{" "}
                involves a constant stream of shared expenses: hotels, rental
                cars, meals out, activity tickets, and gas. Jig handles each
                receipt individually, making it easy to split costs as they
                arise throughout the trip.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Office and Work Events</h3>
              <p className="mt-1">
                Team lunches, happy hours, and conference expenses often get
                paid by one person who then needs to collect from everyone else.
                Jig streamlines the reimbursement process by showing each
                person exactly what they owe.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Events and Celebrations</h3>
              <p className="mt-1">
                Birthday dinners, holiday parties, and group outings often
                involve one organizer fronting costs. Jig makes it simple to
                split the total fairly and collect payments from all
                participants.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Jig Over a Spreadsheet?
          </h2>
          <p>
            A spreadsheet can technically split expenses, but it requires
            significant setup time. You need to type in every item, set up
            formulas for tax distribution, and manually share the document. With
            Jig, the AI handles data entry, the math is built in, and sharing is
            a single link. The whole process takes under a minute instead of
            fifteen.
          </p>
          <p>
            For ongoing group expenses over weeks or months, an app like
            Splitwise might be a better fit. But for one-time splits from a
            specific receipt, Jig is faster and simpler. Learn more in our{" "}
            <Link href="/splitwise-alternative" className="underline">
              Splitwise alternative
            </Link>{" "}
            comparison.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Free, Instant, No Account Required
          </h2>
          <p>
            Jig is completely free to use. There is no account to create, no app
            to download, and no email to provide. It runs in any modern web
            browser on any device. Open the site, upload a receipt, and start
            splitting expenses right away.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split Any Expense in Seconds
          </h2>
          <p className="mt-2 text-[#555]">
            Free forever. No account needed. Just upload a receipt and go.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Start Splitting Now
          </Link>
        </section>
      </article>
    </SeoPageLayout>
  );
}
