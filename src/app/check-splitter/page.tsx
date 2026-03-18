import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Free Check Splitter — Split the Check Fairly",
  description:
    "Split the check fairly with Jig, the free AI-powered check splitter. Upload a receipt photo, assign items to each person, and share the split. No app or account needed.",
  alternates: { canonical: absoluteUrl("/check-splitter") },
  openGraph: {
    title: "Free Check Splitter — Split the Check Fairly",
    description:
      "Split the check fairly with Jig, the free AI-powered check splitter. Upload a receipt photo, assign items to each person, and share the split.",
    url: absoluteUrl("/check-splitter"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function CheckSplitterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    description:
      "Free AI-powered check splitting web app. Upload a receipt, assign items to people, and share the split.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Check Splitter", href: "/check-splitter" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Free Check Splitter
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Whether you call it a check, a bill, or a tab, splitting it fairly
            after a group meal is always the hardest part of the evening. Jig
            makes splitting the check effortless.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            &ldquo;Can We Split the Check?&rdquo;
          </h2>
          <p>
            Across the United States, Canada, and many other English-speaking
            regions, people ask the server to &ldquo;split the check&rdquo;
            rather than split the bill. The language varies, but the headache is
            universal. Someone has to figure out who ordered what, add tax, work
            out the tip, and then somehow collect money from everyone at the
            table.
          </p>
          <p>
            Restaurants sometimes agree to split the check onto separate cards,
            but that slows down the server, creates multiple receipts to manage,
            and still does not account for shared appetizers or bottles of wine.
            Splitting the check by hand with a calculator is worse. It is slow,
            error-prone, and inevitably leaves one person overpaying while
            another gets off easy.
          </p>
          <p>
            That is where a dedicated check splitter comes in. Instead of
            haggling over numbers at the table, you let software handle the
            math and everyone pays exactly what they owe.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Splits the Check in Under a Minute
          </h2>
          <p>
            Jig is a free web-based{" "}
            <Link href="/bill-splitter" className="underline">
              bill splitter
            </Link>{" "}
            that uses AI to read your receipt and calculate each person&apos;s
            share automatically. Here is how it works:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Snap a photo of the check.</strong> Use your phone camera
              to photograph the receipt, or upload an image you already have.
            </li>
            <li>
              <strong>AI reads the check.</strong> Jig&apos;s AI extracts every
              line item, price, tax, and tip from the image. No manual data
              entry needed.
            </li>
            <li>
              <strong>Add people and assign items.</strong> Enter the names of
              everyone in your group and tap to assign each item to whoever
              ordered it. Shared items get divided evenly among the people who
              shared them.
            </li>
            <li>
              <strong>Review the split.</strong> Jig calculates each
              person&apos;s subtotal, then distributes tax and{" "}
              <Link href="/tip-calculator" className="underline">
                tip
              </Link>{" "}
              proportionally so the person who spent more contributes more to
              tax and tip.
            </li>
            <li>
              <strong>Share and settle up.</strong> Send a shareable link to
              your group. Everyone sees what they owe and can pay via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>{" "}
              with one tap.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Fair Check Splitting Matters
          </h2>
          <p>
            Splitting the check evenly sounds simple, but it is rarely fair.
            When one person orders a salad and water while another orders a
            steak and two cocktails, an even split punishes the frugal diner. Over
            time, this creates resentment and can even discourage people from
            going out with certain groups.
          </p>
          <p>
            Jig solves this by doing item-level splitting. Each person pays for
            exactly what they ordered, plus their proportional share of tax and
            tip. No more subsidizing someone else&apos;s lobster dinner. No more
            awkward conversations about who owes what. Just scan, assign, and
            split.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Check Splitting Scenarios
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/restaurants" className="underline">
                Restaurant dinners
              </Link>{" "}
              with friends where everyone ordered differently
            </li>
            <li>
              Work team lunches where the company card is not available
            </li>
            <li>
              Birthday dinners where the guest of honor does not pay
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Group travel meals
              </Link>{" "}
              where you need a quick, accurate split
            </li>
            <li>
              Brunch with a large group and separate drink orders
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            No App, No Account, No Hassle
          </h2>
          <p>
            Jig works entirely in your web browser. There is nothing to download
            from the App Store or Google Play. You do not need to create an
            account or hand over your email address. Just open Jig, upload your
            check, and start splitting. It works on any phone, tablet, or
            computer with a modern browser.
          </p>
          <p>
            Looking for a more detailed comparison with other tools? See how Jig
            stacks up as a{" "}
            <Link href="/splitwise-alternative" className="underline">
              Splitwise alternative
            </Link>{" "}
            or check out our{" "}
            <Link href="/restaurant-bill-calculator" className="underline">
              restaurant bill calculator
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Split the Check in Seconds
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
