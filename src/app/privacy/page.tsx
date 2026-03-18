import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Jig",
  description:
    "Jig's Privacy Policy. Learn what data we collect, how we use it, and how we protect your privacy. No accounts, no data selling, automatic deletion after 30 days.",
  alternates: { canonical: absoluteUrl("/privacy") },
  openGraph: {
    title: "Privacy Policy - Jig",
    description:
      "Jig's Privacy Policy. Learn what data we collect, how we use it, and how we protect your privacy.",
    url: absoluteUrl("/privacy"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "Privacy Policy for Jig, the free AI-powered receipt splitting web app.",
    url: absoluteUrl("/privacy"),
    isPartOf: {
      "@type": "WebSite",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#666]">
            Last updated: March 17, 2026
          </p>
          <p className="mt-4 text-lg text-[#555]">
            Your privacy matters to us. Jig is designed to be as
            privacy-friendly as possible. We do not require accounts, we do not
            sell your data, and we automatically delete everything after 30
            days.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Overview</h2>
          <p>
            This Privacy Policy explains how Jig (&ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
            information when you use our receipt splitting web application at{" "}
            <Link href="/" className="underline">
              jig.so
            </Link>{" "}
            (&ldquo;the Service&rdquo;).
          </p>
          <p>
            By using the Service, you agree to the collection and use of
            information in accordance with this policy. If you do not agree with
            this policy, please do not use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p>
            Jig does not require you to create an account or provide any
            personal information to use the Service. However, we do collect
            certain data as part of the receipt splitting process:
          </p>

          <h3 className="mt-4 text-lg font-medium">2.1 Receipt Images</h3>
          <p>
            When you upload a receipt image, the image is transmitted to our
            servers for AI-powered parsing. The image is stored temporarily to
            enable the split functionality and to allow your group to reference
            the original receipt.
          </p>

          <h3 className="mt-4 text-lg font-medium">2.2 Split Data</h3>
          <p>When you create a split, we store the following information:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Parsed receipt items (names, prices, quantities)</li>
            <li>Tax and tip amounts</li>
            <li>Names of people in the split (as entered by the creator)</li>
            <li>Venmo usernames (if provided by the creator)</li>
            <li>Item assignments and calculated totals</li>
          </ul>
          <p>
            This data is stored solely to provide the split functionality and to
            generate shareable split links.
          </p>

          <h3 className="mt-4 text-lg font-medium">2.3 Usage Analytics</h3>
          <p>
            We use PostHog, a product analytics platform, to collect anonymous
            usage data about how the Service is used. This data helps us
            understand user behavior and improve the product. PostHog analytics
            may collect:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Pages visited and features used</li>
            <li>Browser type and version</li>
            <li>Device type (mobile, desktop, tablet)</li>
            <li>General geographic region (country or city level)</li>
            <li>Referral source</li>
            <li>Session duration and interaction patterns</li>
          </ul>
          <p>
            This analytics data is anonymous and cannot be used to identify
            individual users.
          </p>

          <h3 className="mt-4 text-lg font-medium">
            2.4 Information We Do Not Collect
          </h3>
          <p>Jig does not collect, request, or store:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Email addresses (we do not have accounts)</li>
            <li>Passwords</li>
            <li>Payment information or financial account details</li>
            <li>Social security numbers or government IDs</li>
            <li>Location data beyond general region from analytics</li>
            <li>Contacts or address books</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>The information we collect is used solely to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Provide the Service:</strong> Process receipt images with
              AI, store split data, and generate shareable links.
            </li>
            <li>
              <strong>Improve the Service:</strong> Analyze anonymous usage
              patterns to identify bugs, understand which features are most
              used, and guide product development.
            </li>
            <li>
              <strong>Maintain the Service:</strong> Monitor for technical
              issues, ensure uptime, and troubleshoot problems.
            </li>
          </ul>
          <p>
            We do not use your information for advertising, marketing, user
            profiling, or any purpose beyond operating and improving the
            Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            4. Data Storage and Retention
          </h2>
          <p>
            All receipt images, parsed data, and split information are stored
            for a maximum of <strong>30 days</strong> from the time of creation.
            After 30 days, all data associated with a split is automatically and
            permanently deleted.
          </p>
          <p>
            This 30-day retention period exists to give everyone in a split
            enough time to view the breakdown and settle up. We do not retain
            data beyond this period for any purpose.
          </p>
          <p>Data is stored using the following infrastructure providers:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Vercel:</strong> Our web application is hosted on Vercel,
              which provides the infrastructure for serving the app and
              processing requests. Vercel&apos;s privacy policy applies to their
              infrastructure services.
            </li>
            <li>
              <strong>Upstash:</strong> We use Upstash Redis for temporary data
              storage with automatic expiration. Upstash&apos;s privacy policy
              applies to their storage services.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Data Sharing</h2>
          <p>
            <strong>
              We do not sell, rent, or share your data with third parties for
              marketing or advertising purposes.
            </strong>
          </p>
          <p>
            Your split data is accessible only through the unique split link you
            choose to share. Anyone with the link can view the split breakdown.
            You control who receives this link.
          </p>
          <p>
            We may share data with third parties only in the following limited
            circumstances:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Service providers:</strong> We use Vercel (hosting),
              Upstash (data storage), and PostHog (analytics) to operate the
              Service. These providers process data on our behalf and are bound
              by their own privacy policies.
            </li>
            <li>
              <strong>AI processing:</strong> Receipt images are sent to AI
              services for parsing. These services process the image to extract
              text and structured data.
            </li>
            <li>
              <strong>Legal requirements:</strong> We may disclose data if
              required by law, legal process, or government request.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. Cookies</h2>
          <p>Jig uses a minimal number of cookies and similar technologies:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>PostHog analytics cookies:</strong> Used to collect
              anonymous usage data and distinguish unique sessions. These
              cookies do not contain personal information and are used solely
              for product analytics.
            </li>
            <li>
              <strong>Essential cookies:</strong> May be used for basic
              functionality such as maintaining session state during the split
              creation process.
            </li>
          </ul>
          <p>
            We do not use advertising cookies, tracking pixels, or any
            cross-site tracking technologies. We do not participate in ad
            networks or retargeting programs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Third-Party Services</h2>
          <p>
            The Service integrates with or links to the following third-party
            services:
          </p>

          <h3 className="mt-4 text-lg font-medium">7.1 Venmo</h3>
          <p>
            Jig can generate payment links that open the Venmo app or website.
            When you or your friends use these links, you interact directly with
            Venmo. Jig does not process, store, or have access to any payment
            information. Venmo&apos;s own privacy policy and terms of service
            govern your use of their platform.
          </p>

          <h3 className="mt-4 text-lg font-medium">7.2 Vercel</h3>
          <p>
            Our application is hosted on Vercel&apos;s platform. Vercel may
            collect standard server logs including IP addresses as part of their
            hosting infrastructure. See Vercel&apos;s privacy policy for
            details.
          </p>

          <h3 className="mt-4 text-lg font-medium">7.3 Upstash</h3>
          <p>
            We use Upstash Redis for storing split data with automatic
            time-based expiration. Data stored in Upstash is encrypted and
            automatically deleted after the retention period. See Upstash&apos;s
            privacy policy for details.
          </p>

          <h3 className="mt-4 text-lg font-medium">7.4 PostHog</h3>
          <p>
            We use PostHog for anonymous product analytics. PostHog collects
            usage data to help us understand how the Service is used and
            identify areas for improvement. See PostHog&apos;s privacy policy
            for details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Data Security</h2>
          <p>
            We take reasonable measures to protect the data processed by the
            Service, including:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>All data is transmitted over encrypted HTTPS connections</li>
            <li>Data storage uses industry-standard encryption at rest</li>
            <li>Automatic data deletion after the 30-day retention period</li>
            <li>
              Unique, randomly generated URLs for split links to prevent
              unauthorized guessing
            </li>
          </ul>
          <p>
            While we strive to protect your data, no method of electronic
            transmission or storage is 100% secure. We cannot guarantee absolute
            security.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Data Deletion</h2>
          <p>
            All split data is automatically deleted after 30 days. If you would
            like your data deleted before the 30-day period, please{" "}
            <Link href="/contact" className="underline">
              contact us
            </Link>{" "}
            with the split URL and we will delete the associated data promptly.
          </p>
          <p>
            Because Jig does not require accounts, there are no user profiles or
            stored account data to delete.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">
            10. Children&apos;s Privacy
          </h2>
          <p>
            The Service is not directed at children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            Since the Service does not require accounts and does not collect
            personal information, the risk of inadvertently collecting
            children&apos;s data is minimal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            changes, we will update the &ldquo;Last updated&rdquo; date at the
            top of this page. Your continued use of the Service after any
            changes constitutes acceptance of the updated policy.
          </p>
          <p>We encourage you to review this Privacy Policy periodically.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">12. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have certain rights
            regarding your data, including:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>The right to know what data is collected about you</li>
            <li>The right to request deletion of your data</li>
            <li>The right to opt out of analytics tracking</li>
          </ul>
          <p>
            Since Jig does not require accounts and stores minimal data with
            automatic deletion, exercising these rights is straightforward. For
            data deletion requests, contact us with your split URL. For
            analytics opt-out, you can use browser extensions that block PostHog
            tracking or enable &ldquo;Do Not Track&rdquo; in your browser
            settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">13. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, your data, or
            Jig&apos;s privacy practices, please contact us:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Email:{" "}
              <a href="mailto:josh@aico.nyc" className="underline">
                josh@aico.nyc
              </a>
            </li>
            <li>
              Contact page:{" "}
              <Link href="/contact" className="underline">
                jig.so/contact
              </Link>
            </li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-[#e5e3de] pt-8">
          <h2 className="text-lg font-semibold">Related</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/about" className="underline">
                About Jig
              </Link>
            </li>
            <li>
              <Link href="/faq" className="underline">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </SeoPageLayout>
  );
}
