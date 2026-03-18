import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Changelog - Product Updates | Jig",
  description:
    "See what is new in Jig. A timeline of product updates, new features, and improvements to the free AI-powered receipt splitting app.",
  alternates: { canonical: absoluteUrl("/changelog") },
  openGraph: {
    title: "Changelog - Product Updates | Jig",
    description:
      "See what is new in Jig. A timeline of product updates, new features, and improvements.",
    url: absoluteUrl("/changelog"),
    siteName: SITE_NAME,
    type: "website",
  },
};

const updates = [
  {
    date: "March 2026",
    title: "Venmo Integration",
    tag: "New Feature",
    description:
      "Jig now integrates directly with Venmo. When viewing a split, each person can tap a button to open Venmo with the correct payment amount pre-filled. No more manually typing in amounts or guessing who owes what. Settlement is now one tap away.",
  },
  {
    date: "February 2026",
    title: "AI Receipt Parsing Improvements",
    tag: "Improvement",
    description:
      "We upgraded our AI model to better handle handwritten receipts, faded thermal prints, and receipts with complex layouts. Item extraction accuracy improved by approximately 25%, and the parser now correctly identifies multi-line item descriptions and quantity notations.",
  },
  {
    date: "January 2026",
    title: "Shareable Split Links",
    tag: "New Feature",
    description:
      "You can now generate a unique link for any split and share it with your group via text, email, or any messaging app. Everyone can view the full breakdown of what they owe without needing a Jig account. Links remain active for 30 days.",
  },
  {
    date: "December 2025",
    title: "Receipt Image Viewer with Zoom and Pan",
    tag: "Improvement",
    description:
      "We added a built-in receipt image viewer that lets you zoom in and pan around your uploaded receipt photo. This makes it easier to verify item names and prices while editing your split, especially on mobile devices with smaller screens.",
  },
  {
    date: "November 2025",
    title: "Editable Tax and Tip Percentages",
    tag: "New Feature",
    description:
      "You can now manually adjust the tax amount and set tip as either a fixed dollar amount or a percentage. Jig automatically recalculates each person's share when you make changes. This is useful when receipts have incorrect tax amounts or when the group wants to adjust the tip.",
  },
  {
    date: "October 2025",
    title: "Multi-Person Item Assignment",
    tag: "New Feature",
    description:
      "Items can now be assigned to multiple people at once. Perfect for shared appetizers, pitchers, or desserts. When an item is assigned to multiple people, the cost is split equally among them, and their proportional share of tax and tip adjusts accordingly.",
  },
  {
    date: "September 2025",
    title: "Initial Launch",
    tag: "Launch",
    description:
      "Jig launched as a free web app for splitting receipts. The initial release included AI-powered receipt parsing, item-by-item assignment, proportional tax distribution, and a clean mobile-friendly interface. No account required, no app to download.",
  },
];

export default function ChangelogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Jig Changelog",
    description:
      "A timeline of product updates and new features for Jig, the free AI-powered receipt splitting app.",
    url: absoluteUrl("/changelog"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Changelog", href: "/changelog" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
          <p className="mt-4 text-lg text-[#555]">
            A timeline of updates, new features, and improvements to{" "}
            <Link href="/" className="underline">
              Jig
            </Link>
            . We are always working to make receipt splitting better.
          </p>
        </header>

        <section className="space-y-8">
          {updates.map((update, index) => (
            <div
              key={update.title}
              className="relative border-l-2 border-[#e5e3de] pl-6"
            >
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-[#e5e3de] bg-white" />
              <div className="flex flex-wrap items-center gap-3">
                <time className="text-sm font-medium text-[#999]">
                  {update.date}
                </time>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    update.tag === "New Feature"
                      ? "bg-[#e8f5e9] text-[#2e7d32]"
                      : update.tag === "Improvement"
                        ? "bg-[#e3f2fd] text-[#1565c0]"
                        : "bg-[#fff3e0] text-[#e65100]"
                  }`}
                >
                  {update.tag}
                </span>
              </div>
              <h2 className="mt-2 text-xl font-semibold">{update.title}</h2>
              <p className="mt-2 text-[#555]">{update.description}</p>
              {index === 0 && (
                <p className="mt-2 text-sm text-[#555]">
                  Learn more about using Venmo with Jig in our{" "}
                  <Link
                    href="/blog/splitting-bills-with-venmo"
                    className="underline"
                  >
                    guide to splitting bills with Venmo
                  </Link>
                  .
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What is Next</h2>
          <p>
            We have more improvements planned. Want to suggest a feature or
            report a bug? Visit our{" "}
            <Link href="/contact" className="underline">
              Contact
            </Link>{" "}
            page and let us know.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Learn More</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/features" className="underline">
                Features
              </Link>{" "}
              &mdash; see everything Jig can do
            </li>
            <li>
              <Link href="/how-it-works" className="underline">
                How It Works
              </Link>{" "}
              &mdash; a step-by-step walkthrough
            </li>
            <li>
              <Link href="/blog" className="underline">
                Blog
              </Link>{" "}
              &mdash; tips and guides for bill splitting
            </li>
            <li>
              <Link href="/help" className="underline">
                Help Center
              </Link>{" "}
              &mdash; get help using Jig
            </li>
            <li>
              <Link href="/about" className="underline">
                About
              </Link>{" "}
              &mdash; the story behind Jig
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Try the Latest Version</h2>
          <p className="mt-2 text-[#555]">
            All updates are live right now. No downloads, no updates to install.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Split a Receipt Now
          </Link>
        </section>
      </article>
    </SeoPageLayout>
  );
}
