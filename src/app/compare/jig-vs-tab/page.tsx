import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig vs Tab: Receipt Splitting Comparison",
  description:
    "Compare Jig and Tab for receipt splitting. Both scan receipts, but they differ in AI approach, pricing, features, and platform support. See the full comparison.",
  alternates: { canonical: absoluteUrl("/compare/jig-vs-tab") },
  openGraph: {
    title: "Jig vs Tab: Receipt Splitting Comparison",
    description:
      "Compare Jig and Tab for receipt splitting. Both scan receipts, but they differ in AI approach, pricing, features, and platform support.",
    url: absoluteUrl("/compare/jig-vs-tab"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function JigVsTabPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Jig vs Tab: Receipt Splitting Comparison",
    description:
      "A detailed comparison of Jig and Tab for receipt splitting, covering features, pricing, and platform support.",
    url: absoluteUrl("/compare/jig-vs-tab"),
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
        { label: "Jig vs Tab", href: "/compare/jig-vs-tab" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig vs Tab
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Both Jig and Tab let you scan receipts to split bills. But they
            take different approaches to the problem. Here is a detailed
            comparison to help you pick the right one.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Feature Comparison</h2>
          <div className="rounded-lg border border-[#e5e3de] bg-white overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e3de]">
                  <th className="px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold">Jig</th>
                  <th className="px-4 py-3 text-left font-semibold">Tab</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Receipt scanning</td>
                  <td className="px-4 py-3">AI-powered (LLM-based)</td>
                  <td className="px-4 py-3">OCR-based</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Platform</td>
                  <td className="px-4 py-3">Web app (any browser)</td>
                  <td className="px-4 py-3">iOS app</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3">Free</td>
                  <td className="px-4 py-3">Free with premium features</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3">No</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Item-level splitting</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Proportional tax/tip</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Shareable split link</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Limited</td>
                </tr>
                <tr className="border-b border-[#e5e3de]">
                  <td className="px-4 py-3">Venmo integration</td>
                  <td className="px-4 py-3">Yes</td>
                  <td className="px-4 py-3">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Android support</td>
                  <td className="px-4 py-3">Yes (web)</td>
                  <td className="px-4 py-3">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Receipt Scanning: AI vs Traditional OCR
          </h2>
          <p>
            The biggest technical difference between Jig and Tab is how they
            read receipts. Tab uses traditional optical character recognition
            (OCR) to extract text from receipt images. This works reasonably
            well for clean, well-printed receipts but can struggle with
            crumpled paper, poor lighting, unusual fonts, or handwritten
            additions.
          </p>
          <p>
            Jig uses a modern AI approach powered by large language models.
            Rather than just recognizing characters, the AI understands the
            structure of a receipt — it knows what an item name looks like
            versus a price, it can distinguish tax lines from subtotals, and it
            handles messy or partially obscured text more gracefully. The result
            is generally more accurate parsing with fewer manual corrections
            needed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Platform and Accessibility
          </h2>
          <p>
            Tab is a native iOS app, which means it is only available on
            iPhones and iPads. If anyone in your group uses Android or wants to
            split from a laptop, Tab is not an option for them.
          </p>
          <p>
            Jig is a web app that runs in any modern browser. It works on
            iPhones, Android phones, tablets, and desktop computers. There is
            nothing to download from the App Store or Google Play. You just open
            the site and start splitting. This also means the shareable split
            link works for everyone regardless of what device they use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Pricing and Accounts
          </h2>
          <p>
            Jig is completely free with no account required. There are no
            premium tiers, no per-receipt limits, and no feature gates. You get
            full functionality every time, including AI scanning, item
            assignment, proportional tax and{" "}
            <Link href="/tip-calculator" className="underline">
              tip distribution
            </Link>
            , and shareable links.
          </p>
          <p>
            Tab offers a free tier with basic features and a premium
            subscription that unlocks additional functionality. You also need to
            create an account to use Tab, which adds a step before you can
            start splitting.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Sharing and Settlement
          </h2>
          <p>
            Both Jig and Tab offer Venmo integration for settling up. Where
            they differ is in how the split results are shared with the group.
          </p>
          <p>
            Jig generates a permanent shareable link for each split. Anyone
            with the link can view the full itemized breakdown — which items
            were assigned to them, how tax and tip were calculated, and their
            total. This transparency builds trust and eliminates
            &ldquo;why do I owe this much?&rdquo; conversations.
          </p>
          <p>
            Tab&apos;s sharing is more centered around the app itself, which
            means recipients may need the app installed to see full details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When to Choose Jig
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>You want to split a receipt right now without downloading anything</li>
            <li>Your group includes Android users or people on laptops</li>
            <li>You prefer not to create an account</li>
            <li>You want a shareable link that works for everyone</li>
            <li>You want completely free access to all features</li>
            <li>You value AI-powered receipt parsing for better accuracy</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When to Choose Tab
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Everyone in your group uses iPhones</li>
            <li>You prefer a native app experience</li>
            <li>You want features beyond basic receipt splitting</li>
            <li>You do not mind creating an account</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Bottom Line
          </h2>
          <p>
            Both Jig and Tab solve the receipt splitting problem, but Jig
            offers broader accessibility (any device, any browser), stronger AI
            scanning, and a completely free experience with no account required.
            If you want the fastest, most frictionless way to{" "}
            <Link href="/split-receipt" className="underline">
              split a receipt
            </Link>
            , Jig is the way to go.
          </p>
          <p>
            See how Jig also compares to{" "}
            <Link href="/compare/jig-vs-splitwise" className="underline">
              Splitwise
            </Link>{" "}
            and{" "}
            <Link href="/compare/jig-vs-venmo" className="underline">
              Venmo
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Try Jig Free — No Download Needed
          </h2>
          <p className="mt-2 text-[#555]">
            Upload a receipt in your browser and see the difference AI scanning
            makes.
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
