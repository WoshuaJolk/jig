import Link from "next/link";
import { SeoHeader } from "./seo-header";
import { SeoFooter } from "./seo-footer";
import { BlogCta } from "./blog-cta";

interface BlogPostLayoutProps {
  title: string;
  description: string;
  datePublished: string;
  children: React.ReactNode;
}

export function BlogPostLayout({
  title,
  description,
  datePublished,
  children,
}: BlogPostLayoutProps) {
  const formattedDate = new Date(datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <SeoHeader />

      <nav
        aria-label="Breadcrumb"
        className="px-6 pt-4"
        style={{ fontFamily: "var(--font-geist), sans-serif" }}
      >
        <ol className="mx-auto flex max-w-3xl gap-2 text-sm text-[#666]">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="flex gap-2">
            <span>/</span>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li className="flex gap-2">
            <span>/</span>
            <span className="text-[#1a1a1a]">{title}</span>
          </li>
        </ol>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-8">
          <h1 className="font-receipt text-3xl font-bold leading-tight text-[#1a1a1a] sm:text-4xl">
            {title}
          </h1>
          <p
            className="mt-3 text-base text-[#666]"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}
          >
            {description}
          </p>
          <p
            className="mt-2 text-sm text-[#999]"
            style={{ fontFamily: "var(--font-geist), sans-serif" }}
          >
            <time dateTime={datePublished}>{formattedDate}</time>
          </p>
          <hr className="mt-6 border-[#e5e3de]" />
        </div>

        <BlogCta />

        <div className="blog-prose">{children}</div>

        <BlogCta />

        <div
          className="mt-10 border-t border-[#e5e3de] pt-8"
          style={{ fontFamily: "var(--font-geist), sans-serif" }}
        >
          <p className="font-receipt text-base font-semibold text-[#1a1a1a]">
            More from the blog
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="text-sm text-[#1a1a1a] underline underline-offset-2 hover:opacity-70"
            >
              ← All articles
            </Link>
            <Link
              href="/faq"
              className="text-sm text-[#1a1a1a] underline underline-offset-2 hover:opacity-70"
            >
              FAQ
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-[#1a1a1a] underline underline-offset-2 hover:opacity-70"
            >
              How Jig works
            </Link>
            <Link
              href="/glossary"
              className="text-sm text-[#1a1a1a] underline underline-offset-2 hover:opacity-70"
            >
              Glossary
            </Link>
          </div>
        </div>
      </main>

      <SeoFooter />
    </div>
  );
}
