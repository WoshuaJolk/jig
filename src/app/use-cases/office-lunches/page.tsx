import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Split Office Lunch Orders with Jig — Group Orders Made Easy",
  description:
    "Split office lunch orders fairly with Jig. Handle group restaurant orders, catering invoices, and delivery receipts. Free, no account needed.",
  alternates: { canonical: absoluteUrl("/use-cases/office-lunches") },
  openGraph: {
    title: "Split Office Lunch Orders with Jig — Group Orders Made Easy",
    description:
      "Split office lunch orders fairly with Jig. Handle group restaurant orders, catering invoices, and delivery receipts.",
    url: absoluteUrl("/use-cases/office-lunches"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function OfficeLunchesUseCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Split an Office Lunch Order with Jig",
    description:
      "Step-by-step guide to splitting office lunch orders fairly using Jig's AI-powered receipt scanner.",
    step: [
      {
        "@type": "HowToStep",
        name: "Collect the receipt",
        text: "When the food arrives, grab the receipt from the restaurant, delivery app, or catering order.",
      },
      {
        "@type": "HowToStep",
        name: "Upload to Jig",
        text: "Snap a photo of the receipt or screenshot the digital order confirmation. Jig's AI reads every item and price.",
      },
      {
        "@type": "HowToStep",
        name: "Add your coworkers",
        text: "Enter the names of everyone who ordered food.",
      },
      {
        "@type": "HowToStep",
        name: "Assign items",
        text: "Tap each item and select who ordered it. Shared items like drinks or sides are split among the relevant people.",
      },
      {
        "@type": "HowToStep",
        name: "Share the split",
        text: "Send the shareable link to your team via Slack, email, or text so everyone can see what they owe and pay back the person who placed the order.",
      },
    ],
    tool: {
      "@type": "SoftwareApplication",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[
        { label: "Use Cases", href: "/use-cases" },
        { label: "Office Lunches", href: "/use-cases/office-lunches" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Split Office Lunch Orders with Jig
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Someone places the order, everyone eats, and then the awkward
            question: who owes what? Jig handles the math so you can get back
            to work.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Office Lunch Problem
          </h2>
          <p>
            Office lunch orders are a daily occurrence in workplaces everywhere.
            One person volunteers to place the group order from a restaurant,
            delivery app, or catering service. They pay upfront with their own
            card, and then the real challenge begins: figuring out who owes what
            and actually collecting the money.
          </p>
          <p>
            The math gets complicated quickly. Different people order different
            items at different price points. Someone adds a drink. Someone else
            upgrades to a large. There are delivery fees, service charges, taxes,
            and sometimes a tip for the driver. Splitting these costs evenly
            penalizes the person who ordered a simple sandwich while subsidizing
            the coworker who got a full entree with extras.
          </p>
          <p>
            Worse, the person who placed the order is now stuck chasing down
            payments from half the office. Nobody wants to be the person sending
            follow-up Slack messages about $14.50 for three days straight.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Solves Group Orders
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Grab the receipt.</strong> Whether it is a paper receipt
              from a restaurant, a delivery confirmation email, or a catering
              invoice, snap a photo or take a screenshot and upload it to Jig.
            </li>
            <li>
              <strong>AI does the reading.</strong> Jig&apos;s AI extracts every
              line item including individual meals, drinks, sides, delivery fees,
              tax, and tip. No manual entry needed.
            </li>
            <li>
              <strong>Add your coworkers.</strong> Type in the names of everyone
              who ordered. Jig handles any group size, from a team of three to
              a department-wide lunch of thirty.
            </li>
            <li>
              <strong>Assign items in seconds.</strong> Tap each item and select
              who ordered it. If the office shared a tray of cookies or a
              pitcher of iced tea, assign it to everyone who partook. Jig splits
              shared items automatically.
            </li>
            <li>
              <strong>Drop the link in Slack.</strong> Jig generates a shareable
              URL showing each person&apos;s itemized total with their
              proportional share of fees, tax, and tip. Paste it in your team
              channel and everyone can settle up via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>{" "}
              or any payment app.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Common Office Lunch Scenarios
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                Group Delivery Orders
              </h3>
              <p className="mt-1">
                Ordering from DoorDash, Uber Eats, or Grubhub for the whole
                team is convenient but creates a receipt with delivery fees and
                service charges on top of individual items. Jig reads the full
                receipt and distributes those extra costs proportionally. The
                person who ordered a $10 salad pays less in fees than the person
                who ordered a $25 entree.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Catering for Meetings
              </h3>
              <p className="mt-1">
                When a team orders catering for a meeting or working lunch, the
                invoice often includes platters, beverages, and setup fees. If
                the cost is being split among attendees rather than expensed,
                Jig makes it easy. Upload the catering invoice, assign shared
                platters to everyone, and individual add-ons to the people who
                requested them.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                The Daily Lunch Run
              </h3>
              <p className="mt-1">
                In many offices, someone makes a daily run to a nearby
                restaurant and picks up orders for the group. They come back
                with one receipt covering eight different meals. Without Jig,
                they are stuck at their desk with a calculator trying to figure
                out each person&apos;s share. With Jig, they scan the receipt,
                assign items, and share the link before they have even finished
                eating.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Team Celebrations
              </h3>
              <p className="mt-1">
                Birthday lunches, farewell dinners, promotion celebrations. When
                the team goes out together and splits the bill, Jig ensures the
                person being celebrated does not accidentally end up paying for
                their own party. Assign their items to everyone else and Jig
                handles the redistribution.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Why Itemized Splitting Matters at Work
          </h2>
          <p>
            Workplace dynamics make fair splitting especially important. Unlike
            splitting a bill with close friends where small differences are
            easily forgiven, office lunch orders involve professional
            relationships where resentment builds quietly. The intern who
            ordered a $8 soup should not be paying the same as the manager who
            ordered a $22 entree with a side and a drink.
          </p>
          <p>
            Itemized splitting also eliminates the social pressure to order at
            the same price point as everyone else. When people know they will
            only pay for what they ordered, they can choose freely based on their
            budget and appetite. This is especially important in workplaces with
            diverse salary levels.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Tips for Smoother Office Lunch Orders
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Announce the plan upfront.</strong> Before placing the
              order, let everyone know you will use Jig to split the receipt.
              This sets expectations and avoids any post-lunch confusion.
            </li>
            <li>
              <strong>Keep the receipt.</strong> Whether paper or digital, hold
              onto it until the split is done. A clear, complete receipt makes
              Jig&apos;s AI scan more accurate.
            </li>
            <li>
              <strong>Share the link immediately.</strong> The longer you wait to
              send the split, the less likely people are to pay promptly. Share
              it right after lunch while the meal is fresh in everyone&apos;s
              mind.
            </li>
            <li>
              <strong>Rotate who places the order.</strong> Sharing the
              responsibility of ordering and fronting the payment keeps things
              fair and prevents burnout.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Resources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link
                href="/use-cases/restaurants"
                className="underline"
              >
                Split Restaurant Bills
              </Link>{" "}
              — for dine-in group meals
            </li>
            <li>
              <Link href="/blog/how-to-ask-friends-to-pay-you-back" className="underline">
                How to Ask Friends to Pay You Back
              </Link>{" "}
              — works for coworkers too
            </li>
            <li>
              <Link href="/how-it-works" className="underline">
                How Jig Works
              </Link>{" "}
              — full walkthrough of the tool
            </li>
          </ul>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Lunch Just Arrived? Split It Now.
          </h2>
          <p className="mt-2 text-[#555]">
            Scan the receipt, assign items, and share the link with your team.
            Free, no account needed.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] bg-transparent px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-60"
          >
            Start Splitting Now
          </Link>
        </section>
      </article>
    </SeoPageLayout>
  );
}
