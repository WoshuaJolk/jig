import Link from "next/link";

export function BlogCta() {
  return (
    <div className="my-10 border-y border-[#e5e3de] py-8 text-center">
      <p className="font-receipt text-xl font-bold text-[#1a1a1a]">
        Ready to split a receipt?
      </p>
      <p
        className="mx-auto mt-2 max-w-sm text-sm text-[#666]"
        style={{ fontFamily: "var(--font-geist), sans-serif" }}
      >
        Free, no account needed. Upload a photo and Jig handles the rest.
      </p>
      <Link
        href="/"
        className="mt-5 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-8 py-3 text-sm text-[#1a1a1a] no-underline transition-opacity hover:opacity-60"
        style={{ fontFamily: "var(--font-receipt), monospace" }}
      >
        Split a Receipt →
      </Link>
    </div>
  );
}
