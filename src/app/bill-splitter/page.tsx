import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Free Bill Splitter — Split Any Bill Instantly",
  description:
    "Split any bill instantly with Jig, the free AI-powered bill splitter. Upload a receipt, assign items, and share the split. No app or account required.",
  alternates: { canonical: absoluteUrl("/bill-splitter") },
  openGraph: {
    title: "Free Bill Splitter — Split Any Bill Instantly",
    description:
      "Split any bill instantly with Jig, the free AI-powered bill splitter. Upload a receipt, assign items, and share the split.",
    url: absoluteUrl("/bill-splitter"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function BillSplitterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free AI-powered bill splitting web app. Upload a receipt, assign items to people, and share the split.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Bill Splitter", href: "/bill-splitter" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Free Bill Splitter
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Splitting bills manually is tedious and error-prone. Jig automates
            the entire process so you can settle up in seconds, not minutes.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Problem with Splitting Bills by Hand
          </h2>
          <p>
            Every group dinner ends the same way. The bill arrives and the mood
            shifts. Someone pulls out their phone calculator and starts reading
            off prices. Others try to remember what they ordered. Shared items
            get awkwardly divided. Tax and tip calculations go sideways. And by
            the time everyone has Venmo-ed each other, at least one person paid
            too much and another paid too little.
          </p>
          <p>
            Manual bill splitting is slow, inaccurate, and frankly annoying. It
            turns a fun meal into a math problem nobody signed up for. The
            bigger the group, the worse it gets. Five people at dinner? Manageable.
            Twelve people at a birthday celebration? Pure chaos.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Jig: The Bill Splitter That Does It All
          </h2>
          <p>
            Jig eliminates every painful step of splitting a bill. Instead of
            typing in items, calculating shares, and chasing down payments, you
            just upload a photo of the receipt and let AI do the work.
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Photograph the bill.</strong> Take a quick photo of the
              receipt or upload an existing image.
            </li>
            <li>
              <strong>AI extracts everything.</strong> Jig&apos;s AI reads every
              line item, price, tax charge, and tip automatically. No typing
              required.
            </li>
            <li>
              <strong>Add your group and assign items.</strong> Name the people
              in your group and tap to assign each item to the right person.
              Shared items get divided evenly among whoever shared them.
            </li>
            <li>
              <strong>Get the split instantly.</strong> Jig calculates each
              person&apos;s total including their fair share of tax and tip,
              distributed proportionally based on what they ordered.
            </li>
            <li>
              <strong>Share and settle up.</strong> Send a link to your group.
              Everyone sees exactly what they owe with a one-tap option to pay
              via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Jig Beats Other Bill Splitters
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                Item-Level Splitting, Not Just Even Splits
              </h3>
              <p className="mt-1">
                Many bill splitters just divide the total evenly. That is fine
                when everyone ordered the same thing, but when one person had
                water and a side salad while another had a steak and three
                cocktails, an even split is anything but fair. Jig lets you
                assign each item to the person who ordered it, so everyone pays
                for what they actually had.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                AI Does the Data Entry
              </h3>
              <p className="mt-1">
                The most tedious part of splitting a bill is entering all the
                items and prices. With Jig, you skip that entirely. The AI reads
                the receipt and populates everything for you. Just review the
                results and start assigning.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Proportional Tax and Tip
              </h3>
              <p className="mt-1">
                Jig distributes tax and tip based on each person&apos;s share
                of the subtotal. This means the person who spent the most pays
                the most in tax and tip, which is the fairest way to handle it.
                Learn more about how{" "}
                <Link href="/tip-calculator" className="underline">
                  tip calculation
                </Link>{" "}
                works.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Works Everywhere, No Download
              </h3>
              <p className="mt-1">
                Jig is a web app that runs in any modern browser. There is
                nothing to download from the App Store or Google Play. No
                account sign-up. No email required. Just open the site and
                split.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When Do You Need a Bill Splitter?
          </h2>
          <p>
            Bill splitting comes up more often than you think. Here are some of
            the most common scenarios where Jig saves the day:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/restaurants" className="underline">
                Group dinners
              </Link>{" "}
              where everyone ordered something different
            </li>
            <li>
              <Link href="/use-cases/roommates" className="underline">
                Roommates
              </Link>{" "}
              splitting household purchases or shared subscriptions
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Trips and vacations
              </Link>{" "}
              with shared hotel rooms, rental cars, and group meals
            </li>
            <li>
              <Link href="/use-cases/groceries" className="underline">
                Grocery runs
              </Link>{" "}
              where each person grabs their own items plus some shared staples
            </li>
            <li>
              Office lunches, birthday dinners, happy hours, and any other group
              outing where one person picks up the tab
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Compares
          </h2>
          <p>
            Not sure if Jig is the right bill splitting tool for you? Check out
            our detailed comparisons with other popular options:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/compare/jig-vs-splitwise" className="underline">
                Jig vs Splitwise
              </Link>{" "}
              — one-time splits vs ongoing expense tracking
            </li>
            <li>
              <Link href="/compare/jig-vs-tab" className="underline">
                Jig vs Tab
              </Link>{" "}
              — comparing receipt scanning approaches
            </li>
            <li>
              <Link href="/compare/jig-vs-venmo" className="underline">
                Jig vs Venmo
              </Link>{" "}
              — splitting tool vs payment tool
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split Your Next Bill in Seconds
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
