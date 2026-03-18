import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Easy Check Splitter",
  description:
    "Compare Jig and Easy Check Splitter for dividing restaurant bills. Jig uses AI to parse receipts automatically. Easy Check Splitter handles tax and tip with manual or scanned entry.",
  alternates: {
    canonical: absoluteUrl("/compare/jig-vs-easy-check-splitter"),
  },
  openGraph: {
    title: "Jig vs Easy Check Splitter",
    description:
      "Compare Jig and Easy Check Splitter for dividing restaurant bills. Jig uses AI to parse receipts automatically. Easy Check Splitter handles tax and tip with manual or scanned entry.",
    url: absoluteUrl("/compare/jig-vs-easy-check-splitter"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsEasyCheckSplitterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jig vs Easy Check Splitter",
    description:
      "An honest comparison of Jig and Easy Check Splitter for dividing restaurant bills and receipts.",
    url: absoluteUrl("/compare/jig-vs-easy-check-splitter"),
    publisher: {
      "@type": "Organization",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        { label: "Compare", href: "/compare" },
        {
          label: "Jig vs Easy Check Splitter",
          href: "/compare/jig-vs-easy-check-splitter",
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
            Jig vs Easy Check Splitter
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Both Jig and Easy Check Splitter help you divide a bill among
            friends, handling the tricky parts like tax and tip. But they
            differ in how they get the data, what platform they run on, and
            how you share results. Here is a straightforward comparison.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Comparison</h2>
          <div className="rounded-lg border border-[#e5e3de] bg-white overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e3de]">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Jig</th>
                  <th className="px-4 py-3 text-left font-semibold">Easy Check Splitter</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Receipt input method</td>
                  <td className="px-4 py-3">AI-powered photo parsing</td>
                  <td className="px-4 py-3">Manual entry or basic scan</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level assignment</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Tax handling</td>
                  <td className="px-4 py-3">Automatic proportional</td>
                  <td className="px-4 py-3">Yes (manual entry)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Tip handling</td>
                  <td className="px-4 py-3">Automatic proportional</td>
                  <td className="px-4 py-3">Yes (percentage or flat)</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Platform</td>
                  <td className="px-4 py-3">Web (any browser)</td>
                  <td className="px-4 py-3">iOS app</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free with in-app purchases</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Shareable split link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Venmo integration</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">App download required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Jig Does Best</h2>
          <p>
            Jig&apos;s core strength is AI-powered receipt parsing. You take a
            photo of any receipt and the AI extracts every line item, the
            subtotal, tax, and tip. No typing required. You then assign items
            to the people at your table, and Jig automatically distributes{" "}
            <Link href="/tax-calculator" className="underline">
              tax
            </Link>{" "}
            and{" "}
            <Link href="/tip-calculator" className="underline">
              tip
            </Link>{" "}
            proportionally based on what each person ordered.
          </p>
          <p>
            When the split is done, Jig generates a shareable link. Everyone
            in the group can open it in their browser and see exactly what
            they owe with a full itemized breakdown. They can settle up
            directly through{" "}
            <Link href="/venmo-calculator" className="underline">
              Venmo
            </Link>{" "}
            with one tap. No one else needs to download an app or create an
            account.
          </p>
          <p>
            Jig works on any device with a browser — phones, tablets,
            laptops. It is completely free with no premium tiers, no ads, and
            no feature limits.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Easy Check Splitter Does Best
          </h2>
          <p>
            Easy Check Splitter is a straightforward iOS app focused on
            dividing checks at restaurants. It supports both manual item
            entry and basic receipt scanning. You add items, assign them to
            diners, enter the tax and tip amounts, and it calculates each
            person&apos;s total.
          </p>
          <p>
            The app handles the math that most people find tedious: figuring
            out how to distribute tax and tip fairly when different people
            ordered different amounts. It provides a clean interface for
            entering this information and shows each person&apos;s final
            amount.
          </p>
          <p>
            Easy Check Splitter does not require an account and has a simple,
            focused feature set. For iPhone users who prefer a native app
            experience and do not mind manual data entry, it gets the job
            done.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Differences</h2>
          <p>
            The biggest difference is data entry. Jig uses AI to read the
            receipt automatically — you just take a photo and the items
            appear. Easy Check Splitter relies primarily on manual entry,
            where you type each item and its price. For a receipt with many
            items, this can take several minutes of careful typing.
          </p>
          <p>
            The second significant difference is sharing. Jig produces a
            shareable link that anyone can open in a browser to see their
            breakdown. Easy Check Splitter runs locally on your phone — to
            share results, you would need to read the amounts aloud or take
            a screenshot. There is no built-in way to send each person their
            itemized total.
          </p>
          <p>
            Platform availability also differs. Jig works in any browser on
            any device. Easy Check Splitter is only available as an iOS app,
            which means Android users and anyone who prefers not to download
            an app cannot use it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">When to Use Each Tool</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use Jig</strong> when you want AI to handle the data
              entry, need to share the split via a link, or want Venmo
              integration for easy payment. Especially useful for long
              receipts and mixed groups where not everyone has the same phone.
            </li>
            <li>
              <strong>Use Easy Check Splitter</strong> if you are an iPhone
              user who prefers a native app and does not mind entering items
              manually. It is a simple, no-frills tool for basic check
              splitting.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Bottom Line</h2>
          <p>
            Both tools solve the same core problem: splitting a bill fairly
            including tax and tip. Easy Check Splitter takes a manual,
            native-app approach. Jig automates the hard part with AI and
            adds sharing and payment features on top. If speed, accuracy, and
            shareability matter to you, Jig is the more capable option — and
            it works on every device without a download.
          </p>
          <p>
            See how Jig compares to other splitting tools:{" "}
            <Link href="/compare/jig-vs-onesplit" className="underline">
              OneSplit
            </Link>
            ,{" "}
            <Link href="/compare/jig-vs-splitty" className="underline">
              Splitty
            </Link>
            , and{" "}
            <Link href="/compare/jig-vs-tab" className="underline">
              Tab
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Try Jig for Your Next Split
          </h2>
          <p className="mt-2 text-[#555]">
            No account, no download, no cost. Upload a receipt and split it in
            under a minute.
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
