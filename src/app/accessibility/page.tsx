import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement | Jig",
  description:
    "Jig is committed to making receipt splitting accessible to everyone. Learn about our WCAG compliance efforts, keyboard navigation, screen reader support, and more.",
  alternates: { canonical: absoluteUrl("/accessibility") },
  openGraph: {
    title: "Accessibility Statement | Jig",
    description:
      "Jig is committed to making receipt splitting accessible to everyone. Learn about our accessibility efforts.",
    url: absoluteUrl("/accessibility"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function AccessibilityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Accessibility Statement",
    description: "Jig's commitment to web accessibility and WCAG compliance.",
    url: absoluteUrl("/accessibility"),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Accessibility", href: "/accessibility" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Accessibility Statement
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Jig is committed to ensuring that our receipt splitting tool is
            accessible to all users, regardless of ability or assistive
            technology. We believe everyone should be able to split a bill
            easily and fairly.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Commitment</h2>
          <p>
            We strive to conform to the{" "}
            <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong> at
            the AA level. These guidelines provide a framework for making web
            content more accessible to people with disabilities, including
            visual, auditory, motor, and cognitive impairments.
          </p>
          <p>
            Accessibility is an ongoing effort. We continuously review and
            improve our app to address accessibility barriers and ensure that{" "}
            <Link href="/" className="underline">
              Jig
            </Link>{" "}
            works well for everyone.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Keyboard Navigation</h2>
          <p>
            Jig is designed to be fully navigable using a keyboard alone. All
            interactive elements, including buttons, links, form fields, and
            item assignment controls, can be reached and operated using the Tab
            key, arrow keys, Enter, and Escape.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Tab</strong> moves focus forward through interactive
              elements
            </li>
            <li>
              <strong>Shift + Tab</strong> moves focus backward
            </li>
            <li>
              <strong>Enter or Space</strong> activates buttons and links
            </li>
            <li>
              <strong>Escape</strong> closes modals and menus
            </li>
          </ul>
          <p>
            Visible focus indicators are present on all interactive elements so
            keyboard users can always see where they are on the page.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Screen Reader Support</h2>
          <p>
            We use semantic HTML elements such as headings, landmarks, lists,
            and form labels to provide meaningful structure for screen reader
            users. Key features include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Descriptive page titles and heading hierarchy for easy navigation
            </li>
            <li>
              ARIA labels and roles where native HTML semantics are insufficient
            </li>
            <li>Alt text for images, including receipt previews</li>
            <li>
              Live regions to announce dynamic content updates, such as when
              items are assigned or totals change
            </li>
            <li>Form inputs with associated labels and error messages</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Color and Contrast</h2>
          <p>
            We design with sufficient color contrast to ensure text is readable
            for users with low vision or color vision deficiencies. Our design
            choices include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Text color contrast ratios that meet or exceed WCAG AA
              requirements (4.5:1 for normal text, 3:1 for large text)
            </li>
            <li>
              Information is never conveyed by color alone. Visual indicators
              such as icons, patterns, or text labels accompany color cues
            </li>
            <li>
              A clean, high-contrast design that works well in both light
              environments and reduced-light settings
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Responsive Design</h2>
          <p>
            Jig is built with a responsive layout that adapts to different
            screen sizes and orientations. The app works on mobile phones,
            tablets, and desktop computers. We support:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Text resizing up to 200% without loss of content or functionality
            </li>
            <li>
              Content reflow so that horizontal scrolling is not required at
              standard zoom levels
            </li>
            <li>
              Touch targets that meet the minimum recommended size of 44x44
              pixels for mobile users
            </li>
            <li>Support for both portrait and landscape orientations</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Motion and Animations</h2>
          <p>
            We respect the <code>prefers-reduced-motion</code> media query. When
            a user has requested reduced motion in their system settings, Jig
            minimizes or disables animations and transitions to prevent
            discomfort for users sensitive to motion.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Known Limitations</h2>
          <p>
            While we work hard to make Jig accessible, we are aware of some
            areas where improvements can be made:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Receipt images uploaded by users may not always have alt text that
              describes their contents, since they are user-generated
            </li>
            <li>
              Some third-party integrations (such as Venmo deep links) may
              redirect to external apps whose accessibility is outside our
              control
            </li>
          </ul>
          <p>
            We are actively working to address these limitations and welcome
            feedback on how we can improve.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of Jig. If you
            encounter any accessibility barriers or have suggestions for
            improvement, please let us know:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Visit our{" "}
              <Link href="/contact" className="underline">
                Contact
              </Link>{" "}
              page to send us a message
            </li>
            <li>
              Email us at{" "}
              <a href="mailto:josh@aico.nyc" className="underline">
                josh@aico.nyc
              </a>
            </li>
          </ul>
          <p>
            We take accessibility feedback seriously and will do our best to
            respond within five business days.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Pages</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/about" className="underline">
                About Jig
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/help" className="underline">
                Help Center
              </Link>
            </li>
          </ul>
        </section>

        <p className="text-sm text-[#999]">
          This accessibility statement was last updated on March 1, 2026.
        </p>
      </article>
    </SeoPageLayout>
  );
}
