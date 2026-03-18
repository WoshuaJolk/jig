import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Pricing - Jig Is 100% Free",
  description:
    "Jig is completely free to use. No premium tiers, no hidden fees, no limits. Split unlimited receipts with AI-powered parsing, shareable links, and Venmo integration.",
  alternates: { canonical: absoluteUrl("/pricing") },
  openGraph: {
    title: "Pricing - Jig Is 100% Free",
    description:
      "Jig is completely free to use. No premium tiers, no hidden fees, no limits on receipts.",
    url: absoluteUrl("/pricing"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Jig",
    description:
      "Free AI-powered receipt splitting web app with Venmo integration.",
    url: absoluteUrl("/"),
    brand: {
      "@type": "Brand",
      name: "Jig",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "Jig is 100% free with no premium tiers or hidden costs.",
    },
  };

  return (
    <SeoPageLayout breadcrumbs={[{ label: "Pricing", href: "/pricing" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
          <p className="mt-4 text-lg text-[#555]">
            Jig is free. Not freemium. Not &ldquo;free with limits.&rdquo;
            Just free.
          </p>
        </header>

        {/* Pricing Card */}
        <section className="mx-auto max-w-md">
          <div className="rounded-xl border-2 border-[#1a1a1a] bg-white p-8 text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#666]">
              The Only Plan
            </h2>
            <div className="mt-4">
              <span className="text-5xl font-bold">$0</span>
              <span className="ml-1 text-lg text-[#666]">/ forever</span>
            </div>
            <p className="mt-2 text-[#555]">
              Everything included. No credit card needed.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block w-full rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              Start Splitting
            </Link>
            <ul className="mt-8 space-y-3 text-left text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>Unlimited receipt splits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>AI-powered receipt parsing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>Unlimited people per split</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>Proportional tax & tip distribution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>Shareable split links</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>Venmo payment integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>Receipt image viewer with zoom & pan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>Mobile-friendly design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>No account required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-green-600">&#10003;</span>
                <span>No ads</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            No Hidden Costs. No Catches.
          </h2>
          <p>
            We know &ldquo;free&rdquo; on the internet usually comes with an
            asterisk. Not here. There is no premium tier coming. There are no
            feature gates waiting to lock you out after a trial period. There
            are no in-app purchases, no ads, and no upsells.
          </p>
          <p>
            Every{" "}
            <Link href="/features" className="underline">
              feature
            </Link>{" "}
            Jig offers is available to every user, every time. AI receipt
            parsing, item assignment, tax and tip distribution, shareable
            links, Venmo integration &mdash; all of it, for free.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Why Is Jig Free?</h2>
          <p>
            Jig is a passion project. It was built to solve a real, everyday
            problem that we personally experienced: the awkward, error-prone
            process of splitting a restaurant bill with friends. We built Jig
            because we wanted it to exist, not because we wanted to build a
            business around it.
          </p>
          <p>
            Keeping Jig free means more people can use it without friction.
            There is no sign-up wall, no payment form, and no sales pitch. You
            just open the app and split your receipt. That is exactly how we
            think it should be.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Compares
          </h2>
          <div className="overflow-hidden rounded-lg border border-[#e5e3de]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f0efe9]">
                <tr>
                  <th className="px-4 py-3 font-medium">Feature</th>
                  <th className="px-4 py-3 font-medium">Jig</th>
                  <th className="px-4 py-3 font-medium">Other Apps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e3de] bg-white">
                <tr>
                  <td className="px-4 py-3">Price</td>
                  <td className="px-4 py-3 font-medium">Free</td>
                  <td className="px-4 py-3 text-[#666]">
                    Free tier + paid plans
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">AI receipt parsing</td>
                  <td className="px-4 py-3 font-medium">Included</td>
                  <td className="px-4 py-3 text-[#666]">
                    Often paid or limited
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Account required</td>
                  <td className="px-4 py-3 font-medium">No</td>
                  <td className="px-4 py-3 text-[#666]">Usually yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">App download</td>
                  <td className="px-4 py-3 font-medium">No (web app)</td>
                  <td className="px-4 py-3 text-[#666]">Usually required</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Receipt limits</td>
                  <td className="px-4 py-3 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-[#666]">
                    Often limited on free tier
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Ads</td>
                  <td className="px-4 py-3 font-medium">None</td>
                  <td className="px-4 py-3 text-[#666]">
                    Common on free tiers
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">
                Will Jig ever start charging?
              </h3>
              <p className="mt-1 text-[#444]">
                We have no plans to charge for Jig. It was built as a passion
                project, and our goal is to keep it free and accessible to
                everyone.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Is there a limit on how many receipts I can split?
              </h3>
              <p className="mt-1 text-[#444]">
                No. You can split as many receipts as you want, with as many
                people as you need, as often as you like. There are no usage
                limits.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Do you sell my data to keep Jig free?
              </h3>
              <p className="mt-1 text-[#444]">
                Absolutely not. We do not sell, share, or monetize your data in
                any way. Receipt images and split data are automatically deleted
                after 30 days. Read our{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>{" "}
                for full details.
              </p>
            </div>

            <div>
              <h3 className="font-medium">
                Are there ads in Jig?
              </h3>
              <p className="mt-1 text-[#444]">
                No. Jig has no ads and never will. We want the experience to be
                clean, fast, and focused on the task at hand.
              </p>
            </div>
          </div>

          <p className="text-[#555]">
            Have more questions? Visit our{" "}
            <Link href="/faq" className="underline">
              FAQ page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="underline">
              contact us
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Ready to Split a Receipt?
          </h2>
          <p className="mt-2 text-[#555]">
            It is free. It will always be free. Give it a try.
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
