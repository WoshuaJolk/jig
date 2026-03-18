import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Group Expense Calculator — Split Costs Among Friends",
  description:
    "Calculate and split group expenses fairly with Jig. Upload a receipt, assign items to each person, and get instant totals with proportional tax and tip. Free, no account needed.",
  alternates: { canonical: absoluteUrl("/group-expense-calculator") },
  openGraph: {
    title: "Group Expense Calculator — Split Costs Among Friends",
    description:
      "Calculate and split group expenses fairly with Jig. Upload a receipt, assign items to each person, and get instant totals.",
    url: absoluteUrl("/group-expense-calculator"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function GroupExpenseCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free group expense calculator. Upload a receipt, assign items to people, and calculate each person's fair share instantly.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        {
          label: "Group Expense Calculator",
          href: "/group-expense-calculator",
        },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Group Expense Calculator
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Splitting costs among a group should not require a math degree. Jig
            is a free group expense calculator that figures out exactly what
            each person owes in under a minute.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Group Expenses Get Complicated
          </h2>
          <p>
            Any time money is shared among a group, the math gets messy. One
            person pays for dinner. Another covers the cab. Someone picks up
            drinks. By the end of the night, nobody knows who owes whom, and
            the group chat fills up with conflicting calculations and
            unanswered Venmo requests.
          </p>
          <p>
            Even a single shared receipt can be tricky. A restaurant bill with
            fifteen line items, two shared appetizers, a bottle of wine split
            three ways, eight percent sales tax, and a twenty percent tip
            requires careful arithmetic. An even split ignores the fact that
            people ordered very different things. And manual item-by-item
            calculation is tedious enough that most people give up and just
            round.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Calculates Group Expenses
          </h2>
          <p>
            Jig is a{" "}
            <Link href="/bill-splitter" className="underline">
              bill splitting tool
            </Link>{" "}
            that automates the entire expense calculation process:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload the receipt.</strong> Photograph any receipt or
              upload an existing image. Restaurant bills, grocery receipts, bar
              tabs, and any other itemized expense all work.
            </li>
            <li>
              <strong>AI extracts the data.</strong> Jig&apos;s{" "}
              <Link href="/receipt-scanner" className="underline">
                AI receipt scanner
              </Link>{" "}
              reads every line item, price, tax, and tip from the receipt image.
              No manual data entry required.
            </li>
            <li>
              <strong>Add your group.</strong> Enter the names of everyone
              involved in the expense.
            </li>
            <li>
              <strong>Assign items to people.</strong> Tap each item to assign
              it to the person or people who consumed it. An entree goes to one
              person. A shared appetizer gets split among whoever shared it.
            </li>
            <li>
              <strong>Get instant totals.</strong> Jig calculates each
              person&apos;s subtotal, then adds their proportional share of{" "}
              <Link href="/tip-calculator" className="underline">
                tax and tip
              </Link>
              . The math is precise and transparent.
            </li>
            <li>
              <strong>Share and settle.</strong> Send a link to the group.
              Everyone sees their amount and can pay via{" "}
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
              , or any other method.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Group Expense Scenarios
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Restaurant Groups</h3>
              <p className="mt-1">
                The classic scenario.{" "}
                <Link href="/dinner-split-calculator" className="underline">
                  Dinner with friends
                </Link>{" "}
                where the bill needs to be divided fairly. Jig handles
                everything from a casual pizza night to a multi-course tasting
                menu with wine pairings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Roommate Expenses</h3>
              <p className="mt-1">
                <Link href="/use-cases/roommates" className="underline">
                  Roommates
                </Link>{" "}
                constantly share expenses: groceries, cleaning supplies, toilet
                paper, shared streaming subscriptions. When one person makes a
                run to the store, Jig splits the receipt so everyone pays for
                their own items plus their share of communal purchases.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Travel Groups</h3>
              <p className="mt-1">
                <Link href="/use-cases/travel" className="underline">
                  Group trips
                </Link>{" "}
                generate a steady stream of shared costs: hotels, rental cars,
                gas, meals, activities, and souvenirs. Jig lets you split each
                expense individually as it arises, keeping the math clean
                throughout the trip.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Events and Parties</h3>
              <p className="mt-1">
                Hosting a barbecue, holiday party, or birthday gathering? One
                person usually does the shopping. Jig splits the grocery
                receipt among all the attendees so the host does not absorb the
                full cost.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Not Just Split Evenly?
          </h2>
          <p>
            Even splitting is the quickest option, but it is often the least
            fair. When one person spent forty dollars and another spent twelve,
            splitting the total evenly at twenty-six dollars each means the
            light spender is subsidizing the heavy spender. Over time, this
            builds resentment and discourages people from joining group
            activities.
          </p>
          <p>
            Jig gives you the option to split evenly if that is what your group
            prefers, but it also makes item-level splitting just as fast. With
            AI handling the data entry, assigning individual items takes seconds,
            not minutes. Fair splitting is no longer the slow option.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Free and Instant
          </h2>
          <p>
            Jig is completely free. There is no account to create, no app to
            download, and no premium tier. It works in any modern browser on
            any device. For ongoing group expense tracking over weeks or months,
            a tool like{" "}
            <Link href="/splitwise-alternative" className="underline">
              Splitwise
            </Link>{" "}
            might be a better fit. But for calculating a single group expense
            from a receipt, Jig is the fastest tool available.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Calculate Your Group Expense Now
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
