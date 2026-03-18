import Link from "next/link";

export function SeoHeader() {
  return (
    <header className="border-b border-[#e5e3de] px-6 py-4">
      <nav className="mx-auto flex max-w-3xl items-center justify-between">
        <Link
          href="/"
          className="font-receipt text-xl font-bold tracking-tight text-[#1a1a1a]"
        >
          Jig
        </Link>
        <div className="flex gap-6 font-receipt text-sm">
          <Link href="/about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link href="/how-it-works" className="hover:opacity-60 transition-opacity">
            How It Works
          </Link>
          <Link href="/faq" className="hover:opacity-60 transition-opacity">
            FAQ
          </Link>
          <Link href="/blog" className="hover:opacity-60 transition-opacity">
            Blog
          </Link>
          <Link href="/compare" className="hover:opacity-60 transition-opacity">
            Compare
          </Link>
        </div>
      </nav>
    </header>
  );
}
