import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Jig - Free AI-Powered Receipt Splitting App",
  description:
    "Learn about Jig, the free receipt splitting tool that uses AI to parse receipts and make splitting bills with friends effortless. No app download, no account required.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Jig - Free AI-Powered Receipt Splitting App",
    description:
      "Learn about Jig, the free receipt splitting tool that uses AI to parse receipts and make splitting bills with friends effortless.",
    url: absoluteUrl("/about"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jig",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.png"),
    description:
      "Jig is a free, AI-powered receipt splitting web app that makes dividing bills with friends effortless.",
    foundingDate: "2024",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "josh@aico.nyc",
      url: absoluteUrl("/contact"),
    },
  };

  return (
    <SeoPageLayout breadcrumbs={[{ label: "About", href: "/about" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">About Jig</h1>
          <p className="mt-4 text-lg text-[#555]">
            Splitting bills should be the easiest part of eating out with
            friends. Jig makes it that way.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Problem We Solve</h2>
          <p>
            You know the scene. The check arrives, and suddenly everyone is
            squinting at a crumpled receipt, trying to remember what they
            ordered. Someone pulls out a calculator. Someone else insists on
            &ldquo;just splitting it evenly,&rdquo; even though they only had a
            salad. The tax and tip math gets fuzzy. Venmo requests go out days
            later with vague descriptions like &ldquo;dinner lol.&rdquo;
          </p>
          <p>
            It does not have to be this way. Splitting a receipt should take
            seconds, not minutes. It should be accurate, not approximate. And it
            should not require everyone at the table to download yet another
            app.
          </p>
          <p>
            That is why we built{" "}
            <strong>
              <Link href="/" className="underline">
                Jig
              </Link>
            </strong>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Jig Does</h2>
          <p>
            Jig is a free web app that takes the pain out of splitting receipts.
            Here is how it works in a nutshell:
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong>Snap a photo</strong> of your receipt or upload an image.
            </li>
            <li>
              <strong>AI reads the receipt</strong> and extracts every line
              item, including tax and tip.
            </li>
            <li>
              <strong>Add the people</strong> who shared the meal.
            </li>
            <li>
              <strong>Assign items</strong> to whoever ordered them, with shared
              items split automatically.
            </li>
            <li>
              <strong>Share a link</strong> so everyone can see exactly what
              they owe, with one-tap Venmo requests built in.
            </li>
          </ol>
          <p>
            Want the full walkthrough? Check out our{" "}
            <Link href="/how-it-works" className="underline">
              How It Works
            </Link>{" "}
            guide.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What Makes Jig Different</h2>
          <p>
            There are other receipt-splitting tools out there. Here is why
            people choose Jig:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                AI-Powered Receipt Parsing
              </h3>
              <p className="mt-1">
                Most splitting apps make you type in every item by hand. Jig
                uses computer vision and AI to read your receipt automatically.
                It identifies item names, prices, quantities, tax, and tip in
                seconds. You review and adjust if needed, but the heavy lifting
                is done for you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">No App to Download</h3>
              <p className="mt-1">
                Jig runs entirely in your browser. No app store, no
                installation, no storage space. Just open{" "}
                <Link href="/" className="underline">
                  jig.so
                </Link>{" "}
                and start splitting. It works on any device with a modern
                browser, from iPhones to Android phones to laptops.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">No Account Required</h3>
              <p className="mt-1">
                You do not need to sign up, log in, or hand over your email.
                Just upload a receipt and go. We believe splitting a bill should
                not come with strings attached.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Completely Free</h3>
              <p className="mt-1">
                Jig is free to use. No premium tiers. No hidden fees. No limits
                on how many receipts you split. Learn more on our{" "}
                <Link href="/pricing" className="underline">
                  Pricing
                </Link>{" "}
                page.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Fair Tax and Tip Distribution
              </h3>
              <p className="mt-1">
                Jig proportionally distributes tax and tip based on each
                person&apos;s share of the subtotal. No more rounding errors or
                unfair splits. Everyone pays their fair share, down to the
                penny.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Shareable Split Links</h3>
              <p className="mt-1">
                When the split is done, Jig generates a shareable link. Send it
                to your group and everyone can see exactly what they owe, which
                items were theirs, and settle up directly through Venmo. No more
                &ldquo;how much do I owe you again?&rdquo; texts.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            Jig exists to make shared meals more enjoyable by removing the most
            awkward part: figuring out who owes what. We believe that technology
            should simplify everyday problems, and splitting a bill is one of
            those small but universal headaches that deserves a clean solution.
          </p>
          <p>
            We are not trying to become the next fintech unicorn. Jig is a
            focused tool built with care. It does one thing, and it does it
            well: take a receipt, split it fairly, and help everyone settle up
            fast.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Built as a Passion Project</h2>
          <p>
            Jig was born out of personal frustration. After one too many dinners
            where the bill-splitting process took longer than dessert, we
            decided to build something better. It started as a weekend project
            and grew into a polished tool that thousands of people use to split
            their receipts.
          </p>
          <p>
            Because Jig is a passion project, it will always be free. We built
            it because we wanted it to exist, not because we wanted to monetize
            your dinner.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Privacy First</h2>
          <p>
            We take your privacy seriously. Receipt images and split data are
            stored temporarily and automatically deleted after 30 days. We do
            not require accounts, we do not sell your data, and we do not track
            you across the web. Read our full{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p>
            Have questions, feedback, or just want to say hi? We would love to
            hear from you. Visit our{" "}
            <Link href="/contact" className="underline">
              Contact
            </Link>{" "}
            page or check the{" "}
            <Link href="/faq" className="underline">
              FAQ
            </Link>{" "}
            for quick answers to common questions.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Ready to Split a Receipt?</h2>
          <p className="mt-2 text-[#555]">
            No sign-up required. Just upload a receipt and start splitting.
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
