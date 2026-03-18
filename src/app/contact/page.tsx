import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - Jig",
  description:
    "Get in touch with the Jig team. Have questions about receipt splitting, need help, or want to share feedback? We'd love to hear from you.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact Us - Jig",
    description:
      "Get in touch with the Jig team. Questions, feedback, or bug reports — we're here to help.",
    url: absoluteUrl("/contact"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Jig",
    description:
      "Get in touch with the Jig team for questions, feedback, or support.",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Organization",
      name: "Jig",
      url: absoluteUrl("/"),
      email: "josh@aico.nyc",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "josh@aico.nyc",
        url: absoluteUrl("/contact"),
        availableLanguage: "English",
      },
    },
  };

  return (
    <SeoPageLayout breadcrumbs={[{ label: "Contact", href: "/contact" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-[#555]">
            Have a question, found a bug, or just want to share feedback? We
            would love to hear from you.
          </p>
        </header>

        <section className="space-y-6">
          <div className="rounded-lg border border-[#e5e3de] bg-white p-6">
            <h2 className="text-2xl font-semibold">Email Us</h2>
            <p className="mt-2">
              The best way to reach us is by email. We read every message and
              aim to respond within 24 hours.
            </p>
            <a
              href="mailto:josh@aico.nyc"
              className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              josh@aico.nyc
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What to Include</h2>
          <p>
            To help us respond as quickly and helpfully as possible, here is
            what to include depending on the type of message:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Bug Reports</h3>
              <p className="mt-1">
                If something is not working right, the more detail you can
                share, the faster we can fix it. Helpful information includes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>What you were trying to do</li>
                <li>What happened instead of what you expected</li>
                <li>
                  Your device and browser (e.g., iPhone 15 with Safari, or
                  Chrome on Windows)
                </li>
                <li>
                  A screenshot if possible (but do not include sensitive receipt
                  data)
                </li>
                <li>The split URL if applicable</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Feature Requests</h3>
              <p className="mt-1">
                We love hearing ideas for making Jig better. Tell us what you
                would like to see, why it would be useful, and how you imagine
                it working. We consider every suggestion.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">General Questions</h3>
              <p className="mt-1">
                For general questions about how Jig works, you may find the
                answer in our{" "}
                <Link href="/faq" className="underline">
                  FAQ
                </Link>{" "}
                or{" "}
                <Link href="/how-it-works" className="underline">
                  How It Works
                </Link>{" "}
                pages. If your question is not covered there, feel free to email
                us.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Privacy and Data Requests
              </h3>
              <p className="mt-1">
                If you need to request data deletion before the automatic 30-day
                expiration, or have any questions about how your data is
                handled, email us with your split URL and we will take care of
                it. Read our full{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>{" "}
                for more information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Feedback and Kind Words</h3>
              <p className="mt-1">
                If Jig helped make a dinner, trip, or group outing easier, we
                would love to hear about it. Positive feedback keeps us
                motivated and helps us know what is working well.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Response Time</h2>
          <p>
            We are a small team, but we prioritize responding to every message.
            You can generally expect a response within 24 hours on business
            days. Bug reports and urgent issues are addressed as quickly as
            possible.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <p>
            Before reaching out, these resources may have the answer you are
            looking for:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/faq" className="underline">
                Frequently Asked Questions
              </Link>{" "}
              &mdash; answers to the most common questions about Jig
            </li>
            <li>
              <Link href="/how-it-works" className="underline">
                How It Works
              </Link>{" "}
              &mdash; step-by-step guide to splitting a receipt
            </li>
            <li>
              <Link href="/features" className="underline">
                Features
              </Link>{" "}
              &mdash; a detailed look at what Jig can do
            </li>
            <li>
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>{" "}
              &mdash; how we handle your data
            </li>
            <li>
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>{" "}
              &mdash; usage terms for the Service
            </li>
            <li>
              <Link href="/about" className="underline">
                About Jig
              </Link>{" "}
              &mdash; our mission and story
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Ready to Split a Receipt?</h2>
          <p className="mt-2 text-[#555]">
            No need to contact us to get started. Just upload a receipt and go.
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
