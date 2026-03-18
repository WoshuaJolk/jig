import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Use Cases — How People Use Jig to Split Bills",
  description:
    "Discover how people use Jig to split bills in different scenarios: restaurants, groceries, travel, roommates, and more. Real use cases for the free receipt splitting tool.",
  alternates: { canonical: absoluteUrl("/use-cases") },
  openGraph: {
    title: "Use Cases — How People Use Jig to Split Bills",
    description:
      "Discover how people use Jig to split bills in different scenarios: restaurants, groceries, travel, roommates, and more.",
    url: absoluteUrl("/use-cases"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function UseCasesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "How People Use Jig to Split Bills",
    description:
      "Explore different scenarios where Jig helps people split receipts and bills fairly.",
    url: absoluteUrl("/use-cases"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Split Restaurant Bills",
          url: absoluteUrl("/use-cases/restaurants"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Split Bills with Roommates",
          url: absoluteUrl("/use-cases/roommates"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Split Travel Expenses",
          url: absoluteUrl("/use-cases/travel"),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Split Grocery Receipts",
          url: absoluteUrl("/use-cases/groceries"),
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Split Office Lunch Orders",
          url: absoluteUrl("/use-cases/office-lunches"),
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Split Wedding and Event Expenses",
          url: absoluteUrl("/use-cases/weddings"),
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Split Party Expenses",
          url: absoluteUrl("/use-cases/parties"),
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Splitting the Bill on a Date",
          url: absoluteUrl("/use-cases/dates"),
        },
      ],
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Use Cases", href: "/use-cases" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            How People Use Jig
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Jig works anywhere there is a receipt and more than one person
            paying. Here are the most common scenarios where people use Jig to
            split bills fairly and settle up fast.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            One Tool, Many Scenarios
          </h2>
          <p>
            Splitting a bill is not just a restaurant problem. Anytime a group
            shares an expense and one person pays the full amount, someone has
            to figure out who owes what. Jig automates that process regardless
            of the context. Upload the receipt, assign items, and share the
            split.
          </p>
          <p>
            Below are detailed guides for the most popular use cases. Each one
            walks through the specific challenges of that scenario and how Jig
            handles them.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Use Cases</h2>

          <Link
            href="/use-cases/restaurants"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Restaurant Bills
            </h3>
            <p className="mt-2 text-[#555]">
              The classic scenario. Large groups, different orders, shared
              appetizers, separate drinks, and the eternal tax-and-tip debate.
              Jig handles all of it in under a minute.
            </p>
          </Link>

          <Link
            href="/use-cases/roommates"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Roommates and Household Bills
            </h3>
            <p className="mt-2 text-[#555]">
              Groceries, cleaning supplies, household essentials — one person
              makes the run and everyone else pays their share. Jig makes it
              easy to figure out who bought what.
            </p>
          </Link>

          <Link
            href="/use-cases/travel"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Travel and Vacations
            </h3>
            <p className="mt-2 text-[#555]">
              Hotel bills, group dinners abroad, activity tickets, rental cars.
              Travel generates a constant stream of shared expenses that need
              splitting. Jig keeps it organized.
            </p>
          </Link>

          <Link
            href="/use-cases/groceries"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Grocery Receipts
            </h3>
            <p className="mt-2 text-[#555]">
              Grocery receipts can have dozens of items. Jig scans the entire
              receipt and lets you assign each item to the right person — your
              snacks, their toiletries, shared milk.
            </p>
          </Link>

          <Link
            href="/use-cases/office-lunches"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Office Lunch Orders
            </h3>
            <p className="mt-2 text-[#555]">
              Group orders from restaurants, catering, and delivery apps. One
              person pays, everyone else owes. Jig splits the receipt so you
              can get back to work.
            </p>
          </Link>

          <Link
            href="/use-cases/weddings"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Weddings and Events
            </h3>
            <p className="mt-2 text-[#555]">
              Bridesmaids splitting dress costs, groomsmen splitting bachelor
              party bills, group hotel rooms. Keep wedding finances transparent
              and fair.
            </p>
          </Link>

          <Link
            href="/use-cases/parties"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Parties
            </h3>
            <p className="mt-2 text-[#555]">
              House parties, supplies, alcohol runs, and shared costs among
              hosts. Scan every receipt and get a clear split so nobody
              overpays.
            </p>
          </Link>

          <Link
            href="/use-cases/dates"
            className="block rounded-lg border border-[#e5e3de] bg-white p-6 hover:border-[#999] transition-colors"
          >
            <h3 className="text-lg font-semibold">
              Dates
            </h3>
            <p className="mt-2 text-[#555]">
              Going dutch on a date? Split the bill fairly and without
              awkwardness. Jig handles the math so you can focus on the
              conversation.
            </p>
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Works for Any Receipt
          </h2>
          <p>
            These are the most common scenarios, but Jig works with any receipt
            from any store or establishment. Office lunch orders, bar tabs,
            hardware store runs, party supplies — if there is a receipt and
            multiple people paying, Jig can split it.
          </p>
          <p>
            The AI receipt scanner handles receipts from virtually any source.
            It does not matter if it is a fancy restaurant check or a wrinkled
            grocery store printout. Just snap a photo and Jig extracts the
            details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Learn More</h2>
          <p>
            Want to understand the tool itself before diving into use cases?
            Check out{" "}
            <Link href="/how-it-works" className="underline">
              how Jig works
            </Link>
            , explore our{" "}
            <Link href="/features" className="underline">
              features
            </Link>
            , or read the{" "}
            <Link href="/faq" className="underline">
              FAQ
            </Link>{" "}
            for answers to common questions. You can also see how Jig{" "}
            <Link href="/compare" className="underline">
              compares to other tools
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Have a Receipt to Split?
          </h2>
          <p className="mt-2 text-[#555]">
            Whatever the scenario, Jig handles it. Upload a receipt and split
            it in seconds.
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
