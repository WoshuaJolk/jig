import Link from "next/link";

export function SeoFooter() {
  return (
    <footer className="border-t border-[#e5e3de] px-6 py-8">
      <div className="mx-auto grid max-w-3xl gap-8 text-sm sm:grid-cols-3">
        <div>
          <h3 className="font-receipt mb-2 font-bold text-[#1a1a1a]">Product</h3>
          <ul className="space-y-1" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            <li><Link href="/" className="hover:underline">Split a Receipt</Link></li>
            <li><Link href="/features" className="hover:underline">Features</Link></li>
            <li><Link href="/how-it-works" className="hover:underline">How It Works</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-receipt mb-2 font-bold text-[#1a1a1a]">Resources</h3>
          <ul className="space-y-1" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/glossary" className="hover:underline">Glossary</Link></li>
            <li><Link href="/help" className="hover:underline">Help Center</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-receipt mb-2 font-bold text-[#1a1a1a]">Company</h3>
          <ul className="space-y-1" style={{ fontFamily: "var(--font-geist), sans-serif" }}>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <p
        className="mx-auto mt-8 max-w-3xl text-center text-xs text-[#999]"
        style={{ fontFamily: "var(--font-geist), sans-serif" }}
      >
        &copy; {new Date().getFullYear()} Jig. All rights reserved.
      </p>
    </footer>
  );
}
