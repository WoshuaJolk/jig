import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "How Jig Works - Split Receipts in 5 Easy Steps",
  description:
    "Learn how to split a receipt with Jig in 5 simple steps. Upload a receipt photo, let AI parse it, add people, assign items, and share the split link.",
  alternates: { canonical: absoluteUrl("/how-it-works") },
  openGraph: {
    title: "How Jig Works - Split Receipts in 5 Easy Steps",
    description:
      "Learn how to split a receipt with Jig in 5 simple steps. Upload, parse, assign, and share.",
    url: absoluteUrl("/how-it-works"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function HowItWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split a Receipt with Jig",
    description:
      "Split any restaurant receipt fairly among friends in 5 easy steps using Jig's AI-powered receipt splitting tool.",
    totalTime: "PT2M",
    tool: [
      {
        "@type": "HowToTool",
        name: "A smartphone or computer with a web browser",
      },
      {
        "@type": "HowToTool",
        name: "A receipt image (photo or screenshot)",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Upload Your Receipt",
        text: "Take a photo of your receipt or upload an existing image. Jig accepts photos from your camera, screenshots, and image files. For best results, make sure the receipt is well-lit and the text is legible.",
        url: absoluteUrl("/how-it-works#step-1"),
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "AI Parses the Receipt",
        text: "Jig's AI automatically reads your receipt and extracts every line item, including item names, prices, quantities, tax, and tip. Review the parsed results and make any corrections if needed.",
        url: absoluteUrl("/how-it-works#step-2"),
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Add People to the Split",
        text: "Add the names of everyone who shared the meal. You can add as many people as you need. Optionally add their Venmo usernames for easy payment later.",
        url: absoluteUrl("/how-it-works#step-3"),
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Assign Items to People",
        text: "Tap on each item and assign it to the person (or people) who ordered it. Shared items are automatically split evenly among the assigned people. Tax and tip are distributed proportionally.",
        url: absoluteUrl("/how-it-works#step-4"),
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Share the Split Link",
        text: "Once all items are assigned, Jig generates a shareable link. Send it to your group so everyone can see their breakdown and settle up via Venmo with one tap.",
        url: absoluteUrl("/how-it-works#step-5"),
      },
    ],
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "How It Works", href: "/how-it-works" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-12">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            How Jig Works
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Split any receipt in under two minutes. No app to download, no
            account to create. Here is how it works, step by step.
          </p>
        </header>

        {/* Step 1 */}
        <section id="step-1" className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">
              1
            </span>
            <div>
              <h2 className="text-2xl font-semibold">Upload Your Receipt</h2>
              <p className="mt-2">
                Start by taking a photo of your receipt or uploading an existing
                image. Jig works with photos from your phone camera, screenshots
                from delivery apps, and standard image files (JPG, PNG, HEIC,
                and more).
              </p>
              <p className="mt-2">
                For the best results, make sure the receipt is relatively flat
                and the text is legible. You do not need a perfect photo. Jig's
                AI is trained to handle real-world receipt images, including
                slightly crumpled paper, uneven lighting, and angled shots.
              </p>
              <h3 className="mt-4 text-lg font-medium">
                Tips for a Great Receipt Photo
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Place the receipt on a flat, contrasting surface (e.g., a dark
                  table for a white receipt).
                </li>
                <li>
                  Make sure the entire receipt is visible in the frame, including
                  the totals at the bottom.
                </li>
                <li>
                  Avoid harsh shadows or glare from overhead lights.
                </li>
                <li>
                  If the receipt is long, you can take multiple photos or use a
                  panorama-style capture.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section id="step-2" className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">
              2
            </span>
            <div>
              <h2 className="text-2xl font-semibold">
                AI Parses the Receipt
              </h2>
              <p className="mt-2">
                Once your image is uploaded, Jig&apos;s AI goes to work. In just
                a few seconds, it reads the receipt and extracts every detail:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  <strong>Item names</strong> exactly as they appear on the
                  receipt.
                </li>
                <li>
                  <strong>Prices</strong> for each line item, including
                  per-unit and total prices.
                </li>
                <li>
                  <strong>Quantities</strong> when multiple of the same item
                  were ordered.
                </li>
                <li>
                  <strong>Tax</strong> amounts, automatically detected.
                </li>
                <li>
                  <strong>Tip</strong> if one was included on the receipt, or
                  you can add it manually.
                </li>
              </ul>
              <p className="mt-2">
                After parsing, you will see a clean, editable list of everything
                on the receipt. You can review the results alongside the
                original receipt image using Jig&apos;s built-in image viewer
                with zoom and pan. If the AI missed something or got a price
                wrong, you can easily correct it before moving on.
              </p>
              <p className="mt-2">
                Curious about what types of receipts work best? Check our{" "}
                <Link href="/faq" className="underline">
                  FAQ
                </Link>{" "}
                for details on supported receipt formats and accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section id="step-3" className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">
              3
            </span>
            <div>
              <h2 className="text-2xl font-semibold">
                Add People to the Split
              </h2>
              <p className="mt-2">
                Next, add the names of everyone who shared the meal. Simply type
                each person&apos;s name and press enter. You can add as many
                people as you need, whether it is a dinner for two or a large
                group gathering.
              </p>
              <p className="mt-2">
                Optionally, you can add each person&apos;s Venmo username at
                this stage. This enables one-tap Venmo payment links in the
                final split summary, making it effortless for everyone to settle
                up.
              </p>
              <h3 className="mt-4 text-lg font-medium">
                Best Practices for Groups
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Use first names or nicknames that everyone in the group will
                  recognize.
                </li>
                <li>
                  If a couple is sharing everything, you can add them as a
                  single entry (e.g., &ldquo;Mike & Sarah&rdquo;).
                </li>
                <li>
                  You can always add or remove people later before finalizing
                  the split.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 4 */}
        <section id="step-4" className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">
              4
            </span>
            <div>
              <h2 className="text-2xl font-semibold">
                Assign Items to People
              </h2>
              <p className="mt-2">
                This is where the magic happens. Go through the list of items
                and assign each one to the person (or people) who ordered it.
                Jig makes this fast and intuitive:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  <strong>Single person:</strong> Tap a person&apos;s name to
                  assign the full item to them.
                </li>
                <li>
                  <strong>Shared items:</strong> Assign an item to multiple
                  people and Jig automatically splits the cost evenly among
                  them. Perfect for shared appetizers, pitchers, or family-style
                  dishes.
                </li>
                <li>
                  <strong>Everyone:</strong> Quickly assign an item to the
                  entire group with one tap.
                </li>
              </ul>
              <p className="mt-2">
                As you assign items, Jig calculates each person&apos;s running
                total in real time. Tax and tip are distributed proportionally
                based on each person&apos;s share of the subtotal, so the math
                is always fair.
              </p>
              <h3 className="mt-4 text-lg font-medium">
                How Tax and Tip Distribution Works
              </h3>
              <p className="mt-2">
                Instead of splitting tax and tip evenly (which penalizes people
                who ordered less), Jig calculates each person&apos;s
                proportional share. If your items make up 30% of the subtotal,
                you pay 30% of the tax and tip. This approach ensures that
                everyone pays exactly their fair share.
              </p>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section id="step-5" className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-lg font-bold text-white">
              5
            </span>
            <div>
              <h2 className="text-2xl font-semibold">
                Share the Split Link
              </h2>
              <p className="mt-2">
                When all items are assigned, Jig generates a unique, shareable
                link for your split. Send it to your group through text, email,
                or any messaging app. When they open the link, they will see:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  A clear breakdown of the items assigned to them.
                </li>
                <li>
                  Their proportional share of tax and tip.
                </li>
                <li>
                  Their total amount owed.
                </li>
                <li>
                  A one-tap Venmo payment link (if Venmo usernames were added).
                </li>
              </ul>
              <p className="mt-2">
                No one in your group needs to download an app or create an
                account to view the split. They just open the link in any
                browser, see what they owe, and pay up. It is that simple.
              </p>
              <p className="mt-2">
                Split links remain active for 30 days, giving everyone plenty
                of time to review and settle up.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-lg border border-[#e5e3de] bg-white p-6">
          <h2 className="text-xl font-semibold">
            Why People Choose Jig
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Fast:</strong> Most splits take under two minutes from
              photo to shared link.
            </li>
            <li>
              <strong>Accurate:</strong> AI parsing plus proportional tax and
              tip distribution means no one overpays.
            </li>
            <li>
              <strong>Free:</strong> Jig is{" "}
              <Link href="/pricing" className="underline">
                100% free
              </Link>{" "}
              with no hidden costs.
            </li>
            <li>
              <strong>No friction:</strong> No downloads, no accounts, no
              sign-ups.
            </li>
            <li>
              <strong>Private:</strong> Receipt data is automatically deleted
              after 30 days. Read our{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <p>
            Still have questions? Our{" "}
            <Link href="/faq" className="underline">
              FAQ page
            </Link>{" "}
            covers everything from supported receipt types to how Venmo
            integration works. You can also explore all of Jig&apos;s{" "}
            <Link href="/features" className="underline">
              features
            </Link>{" "}
            or learn more{" "}
            <Link href="/about" className="underline">
              about us
            </Link>
            .
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Ready to Try It?</h2>
          <p className="mt-2 text-[#555]">
            Upload a receipt and see how easy splitting can be.
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
