import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Compare Jig to Other Bill Splitting Tools",
  description:
    "See how Jig compares to Splitwise, Tab, Venmo, and other bill splitting tools. Honest comparisons to help you choose the right tool for your needs.",
  alternates: { canonical: absoluteUrl("/compare") },
  openGraph: {
    title: "Compare Jig to Other Bill Splitting Tools",
    description:
      "See how Jig compares to Splitwise, Tab, Venmo, and other bill splitting tools. Honest comparisons to help you choose the right tool for your needs.",
    url: absoluteUrl("/compare"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ComparePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Compare Jig to Other Bill Splitting Tools",
    description:
      "Honest comparisons between Jig and other popular bill splitting and expense sharing tools.",
    url: absoluteUrl("/compare"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Jig vs Splitwise",
          url: absoluteUrl("/compare/jig-vs-splitwise"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Jig vs Tab",
          url: absoluteUrl("/compare/jig-vs-tab"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Jig vs Venmo",
          url: absoluteUrl("/compare/jig-vs-venmo"),
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Jig vs Plates",
          url: absoluteUrl("/compare/jig-vs-plates"),
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Jig vs Tricount",
          url: absoluteUrl("/compare/jig-vs-tricount"),
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Jig vs Splid",
          url: absoluteUrl("/compare/jig-vs-splid"),
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Jig vs Easy Check Splitter",
          url: absoluteUrl("/compare/jig-vs-easy-check-splitter"),
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Jig vs OneSplit",
          url: absoluteUrl("/compare/jig-vs-onesplit"),
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Jig vs Splitty",
          url: absoluteUrl("/compare/jig-vs-splitty"),
        },
      ],
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Compare", href: "/compare" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Compare Jig to Other Tools
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            There are several ways to split bills and share expenses. Here is
            how Jig stacks up against the most popular alternatives so you can
            choose the right tool for your situation.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Choosing the Right Splitting Tool
          </h2>
          <p>
            Different tools solve different problems. Some are built for
            ongoing expense tracking among groups who spend together regularly.
            Others focus on quick, one-time splits. Some handle payments
            directly while others focus purely on the calculation side.
          </p>
          <p>
            Jig is designed for one thing:{" "}
            <Link href="/split-receipt" className="underline">
              splitting receipts
            </Link>{" "}
            quickly and fairly, right when the bill arrives. It uses AI to read
            the receipt, lets you assign items to people, distributes tax and
            tip proportionally, and generates a shareable link. It is free, runs
            in the browser, and requires no account.
          </p>
          <p>
            Below are our detailed comparisons with specific alternatives. Each
            page breaks down the key differences so you can decide what works
            best for you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Comparisons</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                href: "/compare/jig-vs-splitwise",
                title: "Jig vs Splitwise",
                desc: "Jig is built for quick, one-time receipt splits with AI scanning. Splitwise is built for ongoing expense tracking among groups. Find out which fits your needs.",
              },
              {
                href: "/compare/jig-vs-tab",
                title: "Jig vs Tab",
                desc: "Both Jig and Tab scan receipts for splitting. Compare their approaches to receipt parsing, feature sets, pricing, and platform support.",
              },
              {
                href: "/compare/jig-vs-venmo",
                title: "Jig vs Venmo",
                desc: "Venmo is a payment app. Jig is a splitting tool. They work great together — learn how they complement each other and where each one shines.",
              },
              {
                href: "/compare/jig-vs-plates",
                title: "Jig vs Plates",
                desc: "Plates by Splitwise is designed for restaurant dining. Jig uses AI to scan any receipt in the browser. See which fits your workflow.",
              },
              {
                href: "/compare/jig-vs-tricount",
                title: "Jig vs Tricount",
                desc: "Tricount tracks ongoing group expenses with no login required. Jig focuses on AI-powered one-time receipt splits.",
              },
              {
                href: "/compare/jig-vs-splid",
                title: "Jig vs Splid",
                desc: "Splid is built for travelers with offline support and 150+ currencies. Jig is a web-based AI receipt splitter.",
              },
              {
                href: "/compare/jig-vs-easy-check-splitter",
                title: "Jig vs Easy Check Splitter",
                desc: "Easy Check Splitter handles tax and tip with manual or scanned entry. Jig uses AI parsing and adds shareable links and Venmo integration.",
              },
              {
                href: "/compare/jig-vs-onesplit",
                title: "Jig vs OneSplit",
                desc: "Both Jig and OneSplit scan receipts, but Jig uses AI parsing while OneSplit uses OCR. Compare scanning accuracy, features, and accessibility.",
              },
              {
                href: "/compare/jig-vs-splitty",
                title: "Jig vs Splitty",
                desc: 'Splitty says "the receipt knows who ordered what." Jig takes the same receipt-first approach with AI parsing, shareable links, and no app download.',
              },
            ].map(({ href, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col rounded-lg border border-[#e5e3de] bg-white p-6 transition-colors hover:border-[#999]"
              >
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-[#555]">{desc}</p>
                <span className="mt-4 text-xs font-medium text-[#1a1a1a]">
                  Read comparison →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Makes Jig Unique
          </h2>
          <p>
            Across all these comparisons, a few things consistently set Jig
            apart:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>AI receipt scanning</strong> — no manual data entry
            </li>
            <li>
              <strong>Item-level assignment</strong> — everyone pays for what
              they ordered
            </li>
            <li>
              <strong>Proportional tax and tip</strong> — mathematically fair
              distribution
            </li>
            <li>
              <strong>No app download</strong> — works in any browser
            </li>
            <li>
              <strong>No account required</strong> — zero friction to start
            </li>
            <li>
              <strong>Completely free</strong> — no premium tiers or limits
            </li>
            <li>
              <strong>Shareable split links</strong> — transparent, verifiable
              breakdowns
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Try Jig for Yourself</h2>
          <p className="mt-2 text-[#555]">
            The best way to compare is to try it. Upload a receipt and see how
            fast and fair splitting can be.
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
