import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Page Not Found | Jig",
  description:
    "The page you are looking for does not exist. Head back to Jig to split a receipt, read our blog, or explore our help center.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Page Not Found | Jig",
    description:
      "The page you are looking for does not exist. Head back to Jig to split a receipt.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function NotFoundPage() {
  return (
    <SeoPageLayout>
      <article className="space-y-8 text-center">
        <header>
          <p className="text-6xl font-bold text-[#ccc]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            The page you are looking for does not exist or may have been moved.
            Here are some helpful links to get you back on track.
          </p>
        </header>

        <div className="mx-auto max-w-md">
          <Link
            href="/"
            className="inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Split a Receipt
          </Link>
        </div>

        <nav className="mx-auto max-w-sm">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#999]">
            Helpful Links
          </h2>
          <ul className="space-y-3 text-left">
            <li className="rounded-md border border-[#e5e3de] px-4 py-3">
              <Link href="/" className="font-medium hover:underline">
                Home
              </Link>
              <p className="mt-1 text-sm text-[#555]">
                Upload a receipt and split it instantly
              </p>
            </li>
            <li className="rounded-md border border-[#e5e3de] px-4 py-3">
              <Link href="/about" className="font-medium hover:underline">
                About
              </Link>
              <p className="mt-1 text-sm text-[#555]">
                Learn what Jig is and how it works
              </p>
            </li>
            <li className="rounded-md border border-[#e5e3de] px-4 py-3">
              <Link href="/faq" className="font-medium hover:underline">
                FAQ
              </Link>
              <p className="mt-1 text-sm text-[#555]">
                Answers to common questions
              </p>
            </li>
            <li className="rounded-md border border-[#e5e3de] px-4 py-3">
              <Link href="/blog" className="font-medium hover:underline">
                Blog
              </Link>
              <p className="mt-1 text-sm text-[#555]">
                Tips and guides for splitting bills
              </p>
            </li>
            <li className="rounded-md border border-[#e5e3de] px-4 py-3">
              <Link href="/help" className="font-medium hover:underline">
                Help Center
              </Link>
              <p className="mt-1 text-sm text-[#555]">
                Get help using Jig
              </p>
            </li>
          </ul>
        </nav>
      </article>
    </SeoPageLayout>
  );
}
