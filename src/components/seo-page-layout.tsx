import Link from "next/link";
import { SeoHeader } from "./seo-header";
import { SeoFooter } from "./seo-footer";

export function SeoPageLayout({
  children,
  breadcrumbs,
}: {
  children: React.ReactNode;
  breadcrumbs?: { label: string; href: string }[];
}) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">
      <SeoHeader />
      {breadcrumbs && breadcrumbs.length > 0 && (
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
            {breadcrumbs.map((bc, i) => (
              <li key={bc.href} className="flex gap-2">
                <span>/</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-[#1a1a1a]">{bc.label}</span>
                ) : (
                  <Link href={bc.href} className="hover:underline">
                    {bc.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="content-prose">{children}</div>
      </main>
      <SeoFooter />
    </div>
  );
}
