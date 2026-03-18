import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Jig",
  description:
    "Terms of Service for Jig, the free AI-powered receipt splitting web app. Read about usage terms, user conduct, intellectual property, and limitation of liability.",
  alternates: { canonical: absoluteUrl("/terms") },
  openGraph: {
    title: "Terms of Service - Jig",
    description:
      "Terms of Service for Jig, the free AI-powered receipt splitting web app.",
    url: absoluteUrl("/terms"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    description:
      "Terms of Service for Jig, the free AI-powered receipt splitting web app.",
    url: absoluteUrl("/terms"),
    isPartOf: {
      "@type": "WebSite",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Terms of Service", href: "/terms" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[#666]">
            Last updated: March 17, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Jig (&ldquo;the Service&rdquo;), available at{" "}
            <Link href="/" className="underline">
              jig.so
            </Link>
            , you agree to be bound by these Terms of Service
            (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you
            should not use the Service.
          </p>
          <p>
            These Terms apply to all users of the Service, including those who
            create receipt splits and those who view shared split links. By
            using the Service in any capacity, you acknowledge that you have
            read, understood, and agree to be bound by these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          <p>
            Jig is a free, web-based receipt splitting tool. The Service allows
            users to:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Upload images of receipts for AI-powered parsing</li>
            <li>Create splits by assigning receipt items to individuals</li>
            <li>Generate shareable links that display split breakdowns</li>
            <li>
              Facilitate payment through third-party services such as Venmo
            </li>
          </ul>
          <p>
            Jig does not process payments directly. Any payment transactions
            occur through third-party platforms (such as Venmo) and are subject
            to those platforms&apos; own terms of service.
          </p>
          <p>
            The Service is provided &ldquo;as is&rdquo; and is offered free of
            charge. We reserve the right to modify, suspend, or discontinue the
            Service at any time, with or without notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">3. User Conduct</h2>
          <p>When using the Service, you agree to:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Use the Service only for its intended purpose of splitting
              receipts and bills
            </li>
            <li>
              Not upload content that is illegal, harmful, threatening, abusive,
              defamatory, or otherwise objectionable
            </li>
            <li>
              Not attempt to gain unauthorized access to the Service, its
              servers, or any related systems
            </li>
            <li>
              Not use the Service to transmit viruses, malware, or any other
              malicious code
            </li>
            <li>
              Not use automated systems, bots, or scripts to access or interact
              with the Service in a manner that could overload or impair its
              performance
            </li>
            <li>
              Not misrepresent the contents of receipts or split amounts for
              fraudulent purposes
            </li>
            <li>
              Not use the Service in any way that violates applicable local,
              state, national, or international laws or regulations
            </li>
          </ul>
          <p>
            We reserve the right to restrict or terminate access to the Service
            for any user who violates these terms of conduct.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">4. User Content</h2>
          <p>
            &ldquo;User Content&rdquo; refers to any images, text, or other data
            you upload to or create through the Service, including receipt
            images, item descriptions, names, and Venmo usernames.
          </p>
          <p>
            You retain ownership of your User Content. By uploading content to
            the Service, you grant Jig a limited, non-exclusive license to
            process, store, and display that content solely for the purpose of
            providing the Service to you and your designated recipients.
          </p>
          <p>
            User Content is stored temporarily and is automatically deleted
            after 30 days. You are responsible for ensuring that you have the
            right to upload any content you submit to the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p>
            The Service, including its design, code, features, and branding, is
            owned by Jig and is protected by applicable intellectual property
            laws. You may not copy, modify, distribute, or create derivative
            works based on the Service without prior written permission.
          </p>
          <p>
            The name &ldquo;Jig,&rdquo; the Jig logo, and all related marks are
            trademarks of Jig. You may not use these marks without prior written
            permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">6. AI Parsing Disclaimer</h2>
          <p>
            Jig uses artificial intelligence to parse receipt images. While the
            AI is designed to be accurate, it may occasionally misread items,
            prices, or other receipt details. You are responsible for reviewing
            and verifying the accuracy of parsed receipt data before finalizing
            and sharing a split.
          </p>
          <p>
            Jig does not guarantee the accuracy of AI-parsed data and is not
            liable for any errors in receipt parsing or the resulting financial
            calculations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">7. Third-Party Services</h2>
          <p>
            The Service may integrate with or link to third-party services,
            including but not limited to Venmo for payment facilitation. These
            third-party services are not operated by Jig, and their use is
            subject to their own terms of service and privacy policies.
          </p>
          <p>
            Jig is not responsible for the availability, accuracy, or
            reliability of any third-party services. Any transactions conducted
            through third-party services are solely between you and the
            third-party provider.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Jig and its creators,
            contributors, and affiliates shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising out
            of or related to your use of the Service, including but not limited
            to:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Errors or inaccuracies in AI-parsed receipt data</li>
            <li>
              Financial disputes between users arising from split calculations
            </li>
            <li>Loss of data or content uploaded to the Service</li>
            <li>Service interruptions, downtime, or unavailability</li>
            <li>
              Actions of third-party services linked from or integrated with the
              Service
            </li>
          </ul>
          <p>
            The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis without warranties of any kind, either
            express or implied, including but not limited to implied warranties
            of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Jig and its
            creators from any claims, damages, losses, liabilities, and expenses
            (including reasonable legal fees) arising out of or related to your
            use of the Service, your violation of these Terms, or your violation
            of any rights of a third party.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will
            update the &ldquo;Last updated&rdquo; date at the top of this page.
            Your continued use of the Service after any changes constitutes
            acceptance of the updated Terms.
          </p>
          <p>
            We encourage you to review these Terms periodically to stay informed
            about our terms of use.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States, without regard to conflict of law
            principles. Any disputes arising from these Terms or your use of the
            Service shall be resolved in the courts of competent jurisdiction.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">12. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision shall be limited or eliminated to the
            minimum extent necessary so that these Terms shall otherwise remain
            in full force and effect.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">13. Contact</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us:
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
              <Link href="/privacy" className="underline">
                Privacy Policy
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
