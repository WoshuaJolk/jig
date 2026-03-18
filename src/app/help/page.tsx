import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Jig Help Center - How to Use Jig to Split Receipts",
  description:
    "Get help using Jig. Learn how to upload receipts, split bills, assign items to people, share split links, and troubleshoot common issues.",
  alternates: { canonical: absoluteUrl("/help") },
  openGraph: {
    title: "Jig Help Center - How to Use Jig to Split Receipts",
    description:
      "Get help using Jig. Learn how to upload receipts, split bills, assign items, share links, and troubleshoot issues.",
    url: absoluteUrl("/help"),
    siteName: SITE_NAME,
    type: "website",
  },
};

const faqSections = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I upload a receipt to Jig?",
        a: "Open Jig in your browser and tap the upload area on the home page. You can take a photo with your camera or select an existing image from your device. Jig accepts JPEG, PNG, HEIC, and WebP formats. The image is sent to our AI, which reads and extracts all the line items automatically.",
      },
      {
        q: "What image formats does Jig support?",
        a: "Jig supports JPEG, PNG, HEIC (common on iPhones), and WebP image formats. For best results, make sure the receipt is well-lit, in focus, and the text is readable. Avoid cropping out parts of the receipt, as Jig needs to see the full document to extract all items and totals.",
      },
      {
        q: "Do I need to create an account to use Jig?",
        a: "No. Jig does not require an account, login, or email address. Just open the website and start splitting. Your receipt data is stored temporarily and automatically deleted after 30 days.",
      },
      {
        q: "Does Jig work on my phone?",
        a: "Yes. Jig is a web app that works in any modern mobile browser, including Safari on iPhone and Chrome on Android. There is no app to download from the App Store or Google Play.",
      },
    ],
  },
  {
    category: "Splitting Bills",
    questions: [
      {
        q: "How do I add people to a split?",
        a: "After your receipt is parsed, you will see a screen where you can add the names of the people in your group. Type each person's name and press enter or tap the add button. You can add as many people as needed.",
      },
      {
        q: "How do I assign items to specific people?",
        a: "Once you have added people, tap on each line item from the receipt and select the person (or people) who ordered it. If an item was shared, you can assign it to multiple people and Jig will split the cost evenly among them.",
      },
      {
        q: "How does Jig handle shared items like appetizers?",
        a: "When you assign an item to multiple people, Jig splits the cost of that item equally among all the selected people. For example, if a $12 appetizer was shared by three people, each person is charged $4 for that item.",
      },
      {
        q: "How are tax and tip calculated per person?",
        a: "Jig distributes tax and tip proportionally based on each person's share of the pre-tax subtotal. If your items make up 40% of the subtotal, you pay 40% of the tax and 40% of the tip. This is the fairest method of distribution.",
      },
      {
        q: "Can I edit the tax or tip amount?",
        a: "Yes. After the receipt is parsed, you can manually adjust the tax amount and set the tip as a dollar amount or percentage. Jig will recalculate each person's total automatically when you make changes.",
      },
    ],
  },
  {
    category: "Sharing and Payment",
    questions: [
      {
        q: "How do I share the split with my group?",
        a: "After completing the split, Jig generates a unique shareable link. You can copy this link and send it to your group via text, email, or any messaging app. Everyone can view the breakdown without needing a Jig account.",
      },
      {
        q: "How does Venmo integration work?",
        a: "Each person viewing their split can tap a Venmo button to open the Venmo app with the correct payment amount pre-filled. This makes it easy to settle up without manually entering amounts.",
      },
      {
        q: "How long do split links stay active?",
        a: "Split links remain active for 30 days after creation. After that, the receipt data and split information are automatically deleted for privacy.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "My receipt did not parse correctly. What should I do?",
        a: "If the AI misreads your receipt, you can manually edit any line item, price, or quantity directly on the split screen. For better results, try retaking the photo with better lighting, making sure the receipt is flat and all text is visible. Avoid shadows and glare.",
      },
      {
        q: "Some items are missing from the parsed receipt. Why?",
        a: "Items can be missed if part of the receipt was cut off in the photo, the print is faded, or the text is blurry. Make sure to photograph the entire receipt with all items visible. You can also manually add missing items using the add item button.",
      },
      {
        q: "Can I edit the split after sharing the link?",
        a: "Yes. As the person who created the split, you can go back and make changes. The shared link will reflect the updated split once you save your edits.",
      },
      {
        q: "The prices on my receipt are in a different currency. Does Jig support that?",
        a: "Jig works with any currency since it reads the numbers directly from your receipt. The amounts shown in the split will match the currency on your receipt. Jig does not perform currency conversion.",
      },
    ],
  },
];

export default function HelpPage() {
  const allQuestions = faqSections.flatMap((s) => s.questions);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Jig Help Center",
    description:
      "Help documentation for Jig, the free AI-powered receipt splitting app.",
    url: absoluteUrl("/help"),
    mainEntity: allQuestions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Help Center", href: "/help" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Jig Help Center
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Everything you need to know about using{" "}
            <Link href="/" className="underline">
              Jig
            </Link>{" "}
            to split receipts fairly and settle up fast. Browse by topic or
            search for your question below.
          </p>
        </header>

        <nav className="rounded-lg border border-[#e5e3de] bg-white p-4">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#999]">
            Topics
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {faqSections.map((section) => (
              <a
                key={section.category}
                href={`#${section.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-md border border-[#e5e3de] px-4 py-3 text-sm font-medium hover:bg-[#f0efec]"
              >
                {section.category}
              </a>
            ))}
          </div>
        </nav>

        {faqSections.map((section) => (
          <section
            key={section.category}
            id={section.category.toLowerCase().replace(/\s+/g, "-")}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">{section.category}</h2>
            <div className="space-y-6">
              {section.questions.map((item) => (
                <div
                  key={item.q}
                  className="border-b border-[#e5e3de] pb-5 last:border-b-0"
                >
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-2 text-[#555]">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">More Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/how-it-works" className="underline">
                How Jig Works
              </Link>{" "}
              &mdash; a visual step-by-step guide
            </li>
            <li>
              <Link href="/faq" className="underline">
                FAQ
              </Link>{" "}
              &mdash; frequently asked questions about Jig
            </li>
            <li>
              <Link href="/glossary" className="underline">
                Glossary
              </Link>{" "}
              &mdash; bill splitting terms defined
            </li>
            <li>
              <Link href="/blog" className="underline">
                Blog
              </Link>{" "}
              &mdash; tips and guides for splitting bills
            </li>
            <li>
              <Link href="/features" className="underline">
                Features
              </Link>{" "}
              &mdash; everything Jig can do
            </li>
            <li>
              <Link href="/contact" className="underline">
                Contact Us
              </Link>{" "}
              &mdash; reach out if you need more help
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Still Have Questions?</h2>
          <p className="mt-2 text-[#555]">
            We are happy to help. Reach out and we will get back to you as soon
            as possible.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Contact Us
          </Link>
        </section>
      </article>
    </SeoPageLayout>
  );
}
