import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { absoluteUrl, SITE_NAME } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Going Dutch Calculator — Split the Bill Your Way",
  description:
    "Going dutch made easy with Jig. Calculate each person's fair share when splitting the bill. Free going dutch calculator with AI receipt scanning and proportional tax and tip.",
  alternates: { canonical: absoluteUrl("/going-dutch") },
  openGraph: {
    title: "Going Dutch Calculator — Split the Bill Your Way",
    description:
      "Going dutch made easy with Jig. Calculate each person's fair share when splitting the bill. Free going dutch calculator with AI receipt scanning.",
    url: absoluteUrl("/going-dutch"),
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function GoingDutchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Going Dutch Calculator",
    description:
      "Learn about going dutch and use Jig to split bills fairly among friends. Free AI-powered bill splitting tool.",
    url: absoluteUrl("/going-dutch"),
    isPartOf: {
      "@type": "WebSite",
      name: "Jig",
      url: absoluteUrl("/"),
    },
  };

  return (
    <SeoPageLayout
      breadcrumbs={[{ label: "Going Dutch", href: "/going-dutch" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="space-y-10">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            Going Dutch Calculator
          </h1>
          <p className="mt-4 text-lg text-[#555]">
            Going dutch is the practice of each person paying their own way when
            dining out or sharing an expense. Jig makes it easy to calculate
            exactly what each person owes.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Does &ldquo;Going Dutch&rdquo; Mean?
          </h2>
          <p>
            The phrase &ldquo;going dutch&rdquo; or &ldquo;dutch treat&rdquo;
            means that each person in a group pays for their own share of a
            meal or expense rather than having one person cover the whole bill.
            The expression dates back to the 17th century, likely originating
            from British-Dutch trade rivalry. English speakers used
            &ldquo;Dutch&rdquo; as a tongue-in-cheek prefix to imply
            stinginess, though the practice itself is perfectly reasonable and
            widely accepted today.
          </p>
          <p>
            In many countries, going dutch is the default. In the Netherlands,
            Germany, and Scandinavia, splitting the bill individually is
            standard practice. In the United States, it has become increasingly
            common, especially among younger generations who prefer the
            transparency and fairness of everyone paying their own way.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            The Problem with Simple Dutch Splits
          </h2>
          <p>
            When people say they are going dutch, they usually mean one of two
            things: splitting the total bill evenly, or having each person pay
            for exactly what they ordered. These are very different approaches,
            and only one of them is truly fair.
          </p>
          <p>
            An even split is quick but problematic. If you ordered a pasta dish
            and water for fifteen dollars while your friend had a filet mignon
            and two cocktails for fifty, an even split at thirty-two fifty each
            means you are subsidizing their meal. Multiply that across a table
            of eight people, and the discrepancy becomes significant.
          </p>
          <p>
            True dutch splitting means each person pays for what they consumed.
            But calculating that manually is where things get complicated. You
            need to account for shared appetizers, proportional tax, and how to
            divide the tip fairly. That is where a purpose-built tool helps.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            How Jig Makes Going Dutch Easy
          </h2>
          <p>
            Jig is a free{" "}
            <Link href="/bill-splitter" className="underline">
              bill splitter
            </Link>{" "}
            designed for exactly this scenario. Instead of passing the receipt
            around the table and squinting at prices, you just photograph it
            and let AI handle the rest.
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Upload the receipt.</strong> Take a photo of the bill at
              the restaurant or any shared expense receipt.
            </li>
            <li>
              <strong>AI reads every line item.</strong> Jig&apos;s{" "}
              <Link href="/receipt-scanner" className="underline">
                AI receipt scanner
              </Link>{" "}
              extracts items, prices, tax, and tip automatically.
            </li>
            <li>
              <strong>Assign items to each person.</strong> Tap to assign each
              dish or item to whoever ordered it. Shared appetizers or bottles
              of wine can be split among multiple people.
            </li>
            <li>
              <strong>Get fair totals.</strong> Each person&apos;s share
              includes their items plus a proportional portion of tax and{" "}
              <Link href="/tip-calculator" className="underline">
                tip
              </Link>
              , calculated based on their percentage of the subtotal.
            </li>
            <li>
              <strong>Share and pay.</strong> Send a link so everyone can see
              their amount. Pay via{" "}
              <Link href="/venmo-calculator" className="underline">
                Venmo
              </Link>
              ,{" "}
              <Link href="/zelle-split" className="underline">
                Zelle
              </Link>
              , or any other method.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            When Going Dutch Makes Sense
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <Link href="/use-cases/restaurants" className="underline">
                Group dinners
              </Link>{" "}
              where people order items at very different price points
            </li>
            <li>
              First dates or casual meetups where neither party expects to treat
            </li>
            <li>
              Large group outings like birthday dinners or holiday celebrations
            </li>
            <li>
              Work lunches or team outings without a company card
            </li>
            <li>
              <Link href="/use-cases/travel" className="underline">
                Travel meals
              </Link>{" "}
              where the group wants to keep things fair throughout the trip
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Dutch Splitting vs Even Splitting
          </h2>
          <p>
            Jig supports both approaches. If your group genuinely prefers an
            even split, you can assign all items to everyone and the math works
            out to equal shares. But if you want true dutch splitting where each
            person pays for their own order, Jig&apos;s item-level assignment
            makes that effortless. You get to choose the approach that fits your
            group.
          </p>
          <p>
            Many groups find that the fairest approach is a hybrid: split
            individual entrees by person, divide shared appetizers and drinks
            among whoever had them, and let Jig handle the proportional tax and
            tip math. It takes the awkwardness out of asking who had what, because
            the receipt has all the answers.
          </p>
        </section>

        <section className="rounded-lg border border-[#e5e3de] bg-white p-6 text-center">
          <h2 className="text-xl font-semibold">
            Go Dutch the Easy Way
          </h2>
          <p className="mt-2 text-[#555]">
            Free forever. No account needed. Just upload a receipt and split
            fairly.
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
