import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Features - Jig Receipt Splitting App",
  description:
    "Explore Jig's features: AI receipt parsing, smart item assignment, proportional tax and tip distribution, shareable split links, Venmo integration, and more. All free.",
  alternates: { canonical: absoluteUrl("/features") },
  openGraph: {
    title: "Features - Jig Receipt Splitting App",
    description:
      "Explore Jig's features: AI receipt parsing, smart item assignment, proportional tax and tip, shareable links, and Venmo integration.",
    url: absoluteUrl("/features"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function FeaturesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Jig",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free AI-powered receipt splitting web app with Venmo integration. Upload a receipt, assign items, and share the split.",
    url: absoluteUrl("/"),
    featureList: [
      "AI-powered receipt parsing",
      "Smart item assignment",
      "Proportional tax and tip distribution",
      "Shareable split links",
      "Venmo payment integration",
      "No account required",
      "Mobile-friendly design",
      "Real-time editing",
      "Receipt image viewer with zoom and pan",
    ],
  };

  return (
    <SeoPageLayout breadcrumbs={[{ label: "Features", href: "/features" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-12">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">Features</h1>
          <p className="mt-4 text-lg text-[#555]">
            Everything you need to split a receipt fairly, quickly, and without
            the headache. All features are free, no strings attached.
          </p>
        </header>

        {/* AI Receipt Parsing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            AI-Powered Receipt Parsing
          </h2>
          <p>
            The core of Jig is its AI receipt reader. Instead of manually typing
            in every item from the receipt, just snap a photo and let the AI do
            the work. In seconds, Jig extracts:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Item names as printed on the receipt</li>
            <li>Individual prices and quantities</li>
            <li>Subtotals, tax amounts, and tips</li>
            <li>Discounts and adjustments when present</li>
          </ul>
          <p>
            The AI handles real-world conditions well: slightly crumpled
            receipts, uneven lighting, thermal paper fade, and angled photos. It
            works with printed restaurant receipts, bar tabs, and screenshots
            from delivery apps like DoorDash, Uber Eats, and Grubhub.
          </p>
          <p>
            After parsing, you see a clean, editable list of every item. Review
            the results, make any corrections, and move on. The heavy lifting is
            done.
          </p>
        </section>

        {/* Item Assignment */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Smart Item Assignment</h2>
          <p>
            Assigning items to people is fast and intuitive. Jig gives you
            several ways to handle different scenarios:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Single person assignment:</strong> Tap a person&apos;s
              name to assign the full cost of an item to them.
            </li>
            <li>
              <strong>Shared items:</strong> Select multiple people for an item
              and Jig splits the cost evenly among them. Great for shared
              appetizers, pitchers, or desserts.
            </li>
            <li>
              <strong>Assign to everyone:</strong> With one tap, assign an item
              to the entire group. Perfect for that bread basket the table
              shared.
            </li>
          </ul>
          <p>
            As you assign items, each person&apos;s running total updates in
            real time, so you always know where the split stands.
          </p>
        </section>

        {/* Tax and Tip */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Proportional Tax & Tip Distribution
          </h2>
          <p>
            One of the most common complaints about splitting bills is unfair
            tax and tip distribution. Splitting these evenly penalizes people
            who ordered less expensive items. Jig solves this with proportional
            distribution.
          </p>
          <p>
            Here is how it works: Jig calculates each person&apos;s percentage
            of the pre-tax subtotal and applies that same percentage to the tax
            and tip. If your items represent 20% of the subtotal, you pay 20%
            of the tax and 20% of the tip. The math is precise down to the
            penny.
          </p>
          <p>
            You can set the tip amount in several ways:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Let the AI detect the tip from the receipt</li>
            <li>Enter a custom tip amount</li>
            <li>Choose a tip percentage (15%, 18%, 20%, 25%, or custom)</li>
          </ul>
        </section>

        {/* Shareable Links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Shareable Split Links</h2>
          <p>
            When your split is ready, Jig generates a unique URL you can send to
            anyone. When your friends open the link, they see a clear, detailed
            breakdown of their share:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>The specific items assigned to them</li>
            <li>Their proportional share of tax and tip</li>
            <li>Their total amount owed</li>
            <li>One-tap Venmo payment links (when usernames are provided)</li>
          </ul>
          <p>
            Nobody in your group needs to download an app or create an account
            to view the split. They just open the link in any browser. Split
            links remain active for 30 days, giving everyone plenty of time to
            review and settle up.
          </p>
        </section>

        {/* Venmo Integration */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Venmo Integration</h2>
          <p>
            Jig makes settling up seamless with built-in Venmo support. When you
            add people to a split, you can optionally include their Venmo
            usernames. The shared split page then shows one-tap payment links
            for each person.
          </p>
          <p>
            When someone taps their Venmo link, it opens the Venmo app (or
            website) with the payment amount pre-filled and a description of
            what the payment is for. No more copy-pasting amounts or sending
            vague Venmo requests.
          </p>
          <p>
            Venmo integration is completely optional. If your group prefers to
            settle up with cash, Zelle, or another method, the split summary
            still shows exactly what everyone owes.
          </p>
        </section>

        {/* No Account Required */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">No Account Required</h2>
          <p>
            Jig has zero barriers to entry. There is no sign-up form, no email
            verification, no password to remember. You open the website, upload
            a receipt, and start splitting. The same goes for your friends: when
            they open a split link, they see their breakdown immediately without
            any login prompt.
          </p>
          <p>
            We believe a tool this simple should not require you to create yet
            another account. Your time is valuable, and we respect it.
          </p>
        </section>

        {/* Mobile-Friendly */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Mobile-Friendly Design</h2>
          <p>
            Jig is built to work beautifully on any device. The interface is
            fully responsive and optimized for touch interactions, so splitting
            a receipt on your phone at the dinner table is just as smooth as
            using a desktop computer at home.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Take receipt photos directly from your phone camera</li>
            <li>Touch-friendly item assignment</li>
            <li>Responsive layouts that adapt to any screen size</li>
            <li>Fast loading even on mobile data connections</li>
          </ul>
          <p>
            Because Jig is a web app, it works on iPhones, Android phones,
            iPads, and any other device with a modern browser. No app store
            required.
          </p>
        </section>

        {/* Real-Time Editing */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Real-Time Editing</h2>
          <p>
            Everything in Jig is editable. After the AI parses your receipt, you
            have full control to adjust:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Item names, prices, and quantities</li>
            <li>Tax and tip amounts</li>
            <li>People in the split and their Venmo usernames</li>
            <li>Item assignments at any point before sharing</li>
          </ul>
          <p>
            Changes are reflected in real time. As you adjust items or
            reassign them, each person&apos;s total updates instantly. There is
            no save button to forget, no lag to wait through.
          </p>
        </section>

        {/* Image Viewer */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Receipt Image Viewer with Zoom & Pan
          </h2>
          <p>
            After uploading your receipt, Jig shows the original image alongside
            the parsed items. The built-in image viewer lets you:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Zoom in</strong> to read small or blurry text on the
              receipt
            </li>
            <li>
              <strong>Pan</strong> across the image to check different sections
            </li>
            <li>
              Cross-reference parsed items with the original receipt to verify
              accuracy
            </li>
          </ul>
          <p>
            This side-by-side view makes it easy to catch any parsing errors and
            ensures you are splitting the right amounts. It is especially useful
            for long receipts with many items.
          </p>
        </section>

        {/* Feature Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Feature Summary</h2>
          <div className="overflow-hidden rounded-lg border border-[#e5e3de]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f0efe9]">
                <tr>
                  <th className="px-4 py-3 font-medium">Feature</th>
                  <th className="px-4 py-3 font-medium">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e3de] bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium">AI Receipt Parsing</td>
                  <td className="px-4 py-3">
                    Automatic extraction of items, prices, tax, and tip
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Item Assignment</td>
                  <td className="px-4 py-3">
                    Single, shared, and group assignment options
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Tax & Tip</td>
                  <td className="px-4 py-3">
                    Proportional distribution based on item totals
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Sharing</td>
                  <td className="px-4 py-3">
                    Unique URLs with full split breakdown
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Venmo</td>
                  <td className="px-4 py-3">
                    One-tap payment links with pre-filled amounts
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Account</td>
                  <td className="px-4 py-3">
                    None required for creators or viewers
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Platform</td>
                  <td className="px-4 py-3">
                    Web-based, works on all modern browsers and devices
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Price</td>
                  <td className="px-4 py-3">
                    Free, forever
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">See It in Action</h2>
          <p>
            The best way to understand Jig is to try it. Walk through the
            process step by step on our{" "}
            <Link href="/how-it-works" className="underline">
              How It Works
            </Link>{" "}
            page, or just jump right in and{" "}
            <Link href="/" className="underline">
              split a receipt
            </Link>
            . Have questions? Check the{" "}
            <Link href="/faq" className="underline">
              FAQ
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="underline">
              contact us
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Try Jig for Free</h2>
          <p className="mt-2 text-[#555]">
            No download, no sign-up. Just upload a receipt and start splitting.
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
