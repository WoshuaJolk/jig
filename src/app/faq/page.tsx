import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Jig",
  description:
    "Find answers to common questions about Jig, the free AI-powered receipt splitting app. Learn about features, privacy, accuracy, Venmo integration, and more.",
  alternates: { canonical: absoluteUrl("/faq") },
  openGraph: {
    title: "FAQ - Frequently Asked Questions About Jig",
    description:
      "Find answers to common questions about Jig, the free AI-powered receipt splitting app.",
    url: absoluteUrl("/faq"),
    siteName: SITE_NAME,
    type: "website",
  },
};

const faqs = [
  {
    question: "What is Jig?",
    answer:
      "Jig is a free web app that helps you split receipts with friends. Upload a photo of your receipt, and Jig's AI automatically reads and extracts every line item. Then you add people, assign items, and share a link so everyone knows exactly what they owe. There is no app to download and no account to create.",
  },
  {
    question: "How does Jig work?",
    answer:
      "Jig works in five simple steps: (1) Upload a receipt image, (2) AI parses the receipt and extracts items, prices, tax, and tip, (3) Add the people who shared the meal, (4) Assign each item to the person or people who ordered it, and (5) Share a link so everyone can see their total and pay via Venmo.",
  },
  {
    question: "Is Jig really free?",
    answer:
      "Yes, Jig is 100% free. There are no premium tiers, no hidden fees, and no limits on how many receipts you can split. Jig was built as a passion project and will remain free.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. Jig does not require any sign-up, login, or account creation. You can start splitting a receipt immediately without providing any personal information.",
  },
  {
    question: "How does the AI receipt parsing work?",
    answer:
      "Jig uses advanced computer vision and AI models to analyze your receipt image. The AI identifies item names, prices, quantities, tax, and tip from the receipt text. After parsing, you can review and edit the results to ensure accuracy before assigning items.",
  },
  {
    question: "What types of receipts does Jig support?",
    answer:
      "Jig works with most printed restaurant receipts, bar tabs, and delivery order receipts. It supports photos taken with your phone camera, screenshots from delivery apps (like DoorDash, Uber Eats, or Grubhub), and standard image files in JPG, PNG, HEIC, and WebP formats.",
  },
  {
    question: "How accurate is the AI parsing?",
    answer:
      "Jig's AI is highly accurate for clearly printed receipts with good image quality. It handles common challenges like slightly crumpled paper, uneven lighting, and angled shots well. For best results, make sure the receipt text is legible and the full receipt is visible. You can always review and correct any items after parsing.",
  },
  {
    question: "How does sharing work?",
    answer:
      "After you assign all items, Jig generates a unique URL for your split. Share this link with your group through text, email, or any messaging app. When they open the link, they see a clear breakdown of their items, their share of tax and tip, and their total. No one needs to download an app or create an account to view the split.",
  },
  {
    question: "How does Venmo integration work?",
    answer:
      "When adding people to a split, you can optionally include their Venmo usernames. The shared split page then includes one-tap Venmo payment links, so each person can quickly send their share. Jig does not process payments directly; it creates deep links to the Venmo app for convenience.",
  },
  {
    question: "What happens to my data and privacy?",
    answer:
      "Jig takes privacy seriously. Receipt images and split data are stored temporarily and automatically deleted after 30 days. We do not require accounts, do not sell your data, and do not track you across the web. We use PostHog for anonymous usage analytics to improve the product. See our full Privacy Policy for details.",
  },
  {
    question: "How long is my data stored?",
    answer:
      "Receipt images, parsed data, and split information are stored for 30 days to give everyone in your group time to view the split and settle up. After 30 days, all data associated with the split is automatically deleted.",
  },
  {
    question: "Does Jig work on mobile devices?",
    answer:
      "Yes. Jig is a mobile-friendly web app that works on any smartphone, tablet, or computer with a modern browser. The interface is designed to be touch-friendly and responsive, so splitting receipts on your phone is just as easy as on a desktop.",
  },
  {
    question: "How does tip calculation work?",
    answer:
      "If a tip is included on your receipt, Jig's AI will automatically detect it. You can also manually add or adjust the tip amount. The tip is then distributed proportionally among all people based on their share of the subtotal, ensuring fair distribution.",
  },
  {
    question: "How is tax distributed?",
    answer:
      "Tax is distributed proportionally based on each person's share of the pre-tax subtotal. For example, if your items make up 25% of the subtotal, you pay 25% of the total tax. This is fairer than splitting tax evenly, especially when people ordered items with different price points.",
  },
  {
    question: "Is there a limit on group size?",
    answer:
      "There is no hard limit on the number of people you can add to a split. Jig handles groups of any size, from a simple dinner for two to a large party. The interface scales smoothly regardless of group size.",
  },
  {
    question: "Can I edit the split after creating it?",
    answer:
      "Yes. You can edit item names, prices, quantities, tax, tip, and item assignments at any time before sharing. The split link reflects the final state of your assignments. If you need to make changes after sharing, you can go back to the edit view and update assignments, then share the same link again.",
  },
  {
    question: "Can I split multiple receipts?",
    answer:
      "Each split in Jig corresponds to one receipt. If you have multiple receipts from the same outing (for example, a dinner receipt and a separate bar tab), you can create a separate split for each one and share both links with your group.",
  },
  {
    question: "Does Jig work offline?",
    answer:
      "Jig requires an internet connection to upload receipt images, run AI parsing, and generate shareable links. The core functionality relies on cloud-based AI processing, so an internet connection is needed throughout the splitting process.",
  },
  {
    question: "What browsers does Jig support?",
    answer:
      "Jig works on all modern browsers, including Safari, Chrome, Firefox, and Edge on both desktop and mobile. We recommend using the latest version of your browser for the best experience.",
  },
  {
    question: "Is Jig accessible?",
    answer:
      "We strive to make Jig accessible to as many people as possible. The app follows web accessibility best practices, including semantic HTML, keyboard navigation support, and appropriate contrast ratios. If you encounter any accessibility issues, please let us know through our Contact page.",
  },
  {
    question: "What if the AI gets something wrong?",
    answer:
      "After AI parsing, you see a fully editable list of items alongside the original receipt image. You can zoom and pan the receipt image to double-check details, then correct any item names, prices, or quantities that the AI may have misread. The edit process is designed to be quick and intuitive.",
  },
  {
    question: "Can I use Jig for non-restaurant receipts?",
    answer:
      "While Jig is designed primarily for restaurant and bar receipts, it can work with any receipt that has clearly printed line items and prices. People have used it for grocery shopping, shared household purchases, and group activity expenses.",
  },
  {
    question: "Do I need to assign every item?",
    answer:
      "For the most accurate split, every item should be assigned to at least one person. Unassigned items will not be included in anyone's total. Jig makes it easy to see which items still need to be assigned so nothing falls through the cracks.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach us through our Contact page. We are happy to help with any questions, bug reports, or feedback.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SeoPageLayout breadcrumbs={[{ label: "FAQ", href: "/faq" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Everything you need to know about splitting receipts with Jig. Can
            not find your answer here?{" "}
            <Link href="/contact" className="underline">
              Get in touch
            </Link>
            .
          </p>
        </header>

        <nav className="space-y-2">
          <h2 className="text-lg font-semibold">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            <a
              href="#general"
              className="rounded-md border border-[#e5e3de] px-3 py-1 text-sm hover:bg-[#f0efe9]"
            >
              General
            </a>
            <a
              href="#ai-parsing"
              className="rounded-md border border-[#e5e3de] px-3 py-1 text-sm hover:bg-[#f0efe9]"
            >
              AI Parsing
            </a>
            <a
              href="#splitting"
              className="rounded-md border border-[#e5e3de] px-3 py-1 text-sm hover:bg-[#f0efe9]"
            >
              Splitting & Sharing
            </a>
            <a
              href="#payments"
              className="rounded-md border border-[#e5e3de] px-3 py-1 text-sm hover:bg-[#f0efe9]"
            >
              Payments
            </a>
            <a
              href="#privacy-data"
              className="rounded-md border border-[#e5e3de] px-3 py-1 text-sm hover:bg-[#f0efe9]"
            >
              Privacy & Data
            </a>
            <a
              href="#technical"
              className="rounded-md border border-[#e5e3de] px-3 py-1 text-sm hover:bg-[#f0efe9]"
            >
              Technical
            </a>
          </div>
        </nav>

        {/* General */}
        <section id="general" className="space-y-6">
          <h2 className="text-2xl font-semibold">General</h2>
          {faqs.slice(0, 4).map((faq, i) => (
            <div key={i} className="space-y-2 border-b border-[#e5e3de] pb-6">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="text-[#444]">{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* AI Parsing */}
        <section id="ai-parsing" className="space-y-6">
          <h2 className="text-2xl font-semibold">AI Receipt Parsing</h2>
          {faqs.slice(4, 7).map((faq, i) => (
            <div key={i} className="space-y-2 border-b border-[#e5e3de] pb-6">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="text-[#444]">{faq.answer}</p>
            </div>
          ))}
          <div className="space-y-2 border-b border-[#e5e3de] pb-6">
            <h3 className="text-lg font-medium">
              {faqs[20].question}
            </h3>
            <p className="text-[#444]">{faqs[20].answer}</p>
          </div>
          <div className="space-y-2 border-b border-[#e5e3de] pb-6">
            <h3 className="text-lg font-medium">
              {faqs[21].question}
            </h3>
            <p className="text-[#444]">{faqs[21].answer}</p>
          </div>
        </section>

        {/* Splitting & Sharing */}
        <section id="splitting" className="space-y-6">
          <h2 className="text-2xl font-semibold">Splitting & Sharing</h2>
          {[faqs[7], faqs[12], faqs[13], faqs[14], faqs[15], faqs[16], faqs[22]].map(
            (faq, i) => (
              <div
                key={i}
                className="space-y-2 border-b border-[#e5e3de] pb-6"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <p className="text-[#444]">{faq.answer}</p>
              </div>
            )
          )}
        </section>

        {/* Payments */}
        <section id="payments" className="space-y-6">
          <h2 className="text-2xl font-semibold">Payments</h2>
          {[faqs[2], faqs[8]].map((faq, i) => (
            <div key={i} className="space-y-2 border-b border-[#e5e3de] pb-6">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="text-[#444]">{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Privacy & Data */}
        <section id="privacy-data" className="space-y-6">
          <h2 className="text-2xl font-semibold">Privacy & Data</h2>
          {[faqs[9], faqs[10]].map((faq, i) => (
            <div key={i} className="space-y-2 border-b border-[#e5e3de] pb-6">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="text-[#444]">{faq.answer}</p>
            </div>
          ))}
          <p className="text-[#555]">
            For the full details, read our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>
            .
          </p>
        </section>

        {/* Technical */}
        <section id="technical" className="space-y-6">
          <h2 className="text-2xl font-semibold">Technical</h2>
          {[faqs[11], faqs[17], faqs[18], faqs[19]].map((faq, i) => (
            <div key={i} className="space-y-2 border-b border-[#e5e3de] pb-6">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <p className="text-[#444]">{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Contact Support */}
        <section className="space-y-2 border-b border-[#e5e3de] pb-6">
          <h3 className="text-lg font-medium">{faqs[23].question}</h3>
          <p className="text-[#444]">
            You can reach us through our{" "}
            <Link href="/contact" className="underline">
              Contact page
            </Link>
            . We are happy to help with any questions, bug reports, or
            feedback.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Learn More</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/how-it-works" className="underline">
                How Jig Works
              </Link>{" "}
              &mdash; a step-by-step walkthrough
            </li>
            <li>
              <Link href="/features" className="underline">
                Features
              </Link>{" "}
              &mdash; everything Jig can do
            </li>
            <li>
              <Link href="/about" className="underline">
                About Jig
              </Link>{" "}
              &mdash; our mission and story
            </li>
            <li>
              <Link href="/pricing" className="underline">
                Pricing
              </Link>{" "}
              &mdash; spoiler: it is free
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">Still Have Questions?</h2>
          <p className="mt-2 text-[#555]">
            We are here to help. Reach out and we will get back to you as soon
            as we can.
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
