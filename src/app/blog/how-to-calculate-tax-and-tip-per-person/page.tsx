import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title =
  "How to Calculate Tax and Tip Per Person When Splitting a Bill";
const description =
  "Simple math for dividing tax and tip fairly when splitting a restaurant bill. Pre-tax vs post-tax tipping, proportional distribution, and common mistakes to avoid.";
const slug = "/blog/how-to-calculate-tax-and-tip-per-person";

export const metadata: Metadata = {
  title: `${title} | ${SITE_NAME}`,
  description,
  alternates: { canonical: absoluteUrl(slug) },
  openGraph: {
    title,
    description,
    url: absoluteUrl(slug),
    siteName: SITE_NAME,
    type: "article",
  },
};

export default function HowToCalculateTaxAndTip() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-03-01",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: absoluteUrl(slug),
  };

  return (
    <BlogPostLayout title={title} description={description} datePublished="2026-02-15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <time className="text-sm text-[#888]">March 1, 2026</time>
        <h1 className="mt-2">{title}</h1>

        <p>
          Dividing the food is the easy part. The real confusion starts when you
          have to figure out how to split tax and tip fairly across the table.
          Should everyone pay the same amount of tax regardless of what they
          ordered? Should you tip on the pre-tax total or the post-tax total?
          And what happens when one person&apos;s order was three times as
          expensive as another&apos;s?
        </p>
        <p>
          This guide explains the math behind fair tax and tip splitting in
          plain language, with real examples you can follow. Whether you are
          doing the math on a napkin or using a tool like{" "}
          <Link href="/">Jig</Link>, understanding the principles helps you
          verify that the split is correct.
        </p>

        <nav className="my-8 rounded-lg border border-[#e5e3de] p-6">
          <h2 className="mt-0 text-lg font-semibold">Table of Contents</h2>
          <ol className="mb-0 list-decimal space-y-1 pl-5 text-sm">
            <li><a href="#equal-split-math">The Math for Equal Splits</a></li>
            <li><a href="#proportional">Proportional Distribution</a></li>
            <li><a href="#example">Worked Example with Four People</a></li>
            <li><a href="#pre-vs-post">Pre-Tax vs. Post-Tax Tipping</a></li>
            <li><a href="#shared-items">Factoring in Shared Items</a></li>
            <li><a href="#common-mistakes">Common Mistakes</a></li>
            <li><a href="#shortcut">The Shortcut</a></li>
          </ol>
        </nav>

        <h2 id="equal-split-math">The Math for Equal Splits</h2>
        <p>
          If everyone at the table agrees to split equally, the math is
          straightforward:
        </p>
        <p className="rounded-lg bg-[#f0eeea] p-4 font-mono text-sm">
          Per person = (subtotal + tax + tip) / number of people
        </p>
        <p>
          For example, if the subtotal is $120, tax is $10.80 (9%), and you are
          tipping 20% on the pre-tax total ($24), the grand total is $154.80.
          Split four ways, that is $38.70 per person.
        </p>
        <p>
          Equal splits work well when everyone ordered roughly the same thing.
          But when orders vary significantly, this approach means the person who
          ordered a $12 salad is subsidizing the person who ordered a $45
          steak. That is where proportional distribution comes in.
        </p>

        <h2 id="proportional">Proportional Distribution</h2>
        <p>
          Proportional distribution is the fairest way to divide tax and tip
          when people ordered different things. The principle is simple: each
          person pays a percentage of the tax and tip that matches their
          percentage of the subtotal.
        </p>
        <p className="rounded-lg bg-[#f0eeea] p-4 font-mono text-sm">
          Person&apos;s share of tax = total tax &times; (person&apos;s items / subtotal)<br />
          Person&apos;s share of tip = total tip &times; (person&apos;s items / subtotal)<br />
          Person&apos;s total = person&apos;s items + their share of tax + their share of tip
        </p>
        <p>
          This means the person who ordered more food pays more tax and more
          tip, which is exactly how it should work. They benefited more from
          the service and their items generated more tax.
        </p>

        <h2 id="example">Worked Example with Four People</h2>
        <p>
          Let&apos;s walk through a concrete example. Four friends have dinner
          at a restaurant with 8.5% sales tax, and they agree to tip 20% on the
          pre-tax subtotal.
        </p>
        <h3>What everyone ordered</h3>
        <ul>
          <li><strong>Alex:</strong> chicken sandwich ($16) + iced tea ($3) = $19</li>
          <li><strong>Blake:</strong> steak ($42) + glass of wine ($14) = $56</li>
          <li><strong>Casey:</strong> pasta ($22) + soda ($3) = $25</li>
          <li><strong>Dana:</strong> salad ($14) + water ($0) = $14</li>
        </ul>
        <p>
          <strong>Subtotal:</strong> $19 + $56 + $25 + $14 = $114<br />
          <strong>Tax (8.5%):</strong> $114 &times; 0.085 = $9.69<br />
          <strong>Tip (20% pre-tax):</strong> $114 &times; 0.20 = $22.80
        </p>

        <h3>Each person&apos;s proportion of the subtotal</h3>
        <ul>
          <li>Alex: $19 / $114 = 16.7%</li>
          <li>Blake: $56 / $114 = 49.1%</li>
          <li>Casey: $25 / $114 = 21.9%</li>
          <li>Dana: $14 / $114 = 12.3%</li>
        </ul>

        <h3>Each person&apos;s share of tax and tip</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Person</th>
                <th className="text-right">Items</th>
                <th className="text-right">Tax</th>
                <th className="text-right">Tip</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alex</td>
                <td className="text-right">$19.00</td>
                <td className="text-right">$1.62</td>
                <td className="text-right">$3.80</td>
                <td className="text-right font-semibold">$24.42</td>
              </tr>
              <tr>
                <td>Blake</td>
                <td className="text-right">$56.00</td>
                <td className="text-right">$4.76</td>
                <td className="text-right">$11.20</td>
                <td className="text-right font-semibold">$71.96</td>
              </tr>
              <tr>
                <td>Casey</td>
                <td className="text-right">$25.00</td>
                <td className="text-right">$2.13</td>
                <td className="text-right">$5.00</td>
                <td className="text-right font-semibold">$32.13</td>
              </tr>
              <tr>
                <td>Dana</td>
                <td className="text-right">$14.00</td>
                <td className="text-right">$1.19</td>
                <td className="text-right">$2.80</td>
                <td className="text-right font-semibold">$17.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t font-semibold">
                <td>Total</td>
                <td className="text-right">$114.00</td>
                <td className="text-right">$9.69</td>
                <td className="text-right">$22.80</td>
                <td className="text-right">$146.49</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p>
          Compare this to an equal split, where everyone would pay $36.62. Dana
          would be overpaying by almost $19, and Blake would be underpaying by
          $35. Proportional distribution is significantly fairer when orders
          vary.
        </p>
        <p>
          This is exactly the math that <Link href="/">Jig</Link> does
          automatically. When you scan a receipt and assign items, the app
          calculates each person&apos;s proportional share of tax and tip
          without anyone needing to pull out a calculator.
        </p>

        <h2 id="pre-vs-post">Pre-Tax vs. Post-Tax Tipping</h2>
        <p>
          One of the most debated questions in restaurant etiquette: should you
          calculate the tip based on the pre-tax subtotal or the total after tax?
        </p>
        <p>
          <strong>The standard practice</strong> is to tip on the pre-tax
          subtotal. The tax is a charge from the government, not a reflection of
          the service you received. Most etiquette guides, servers, and
          restaurant industry groups agree on this.
        </p>
        <p>
          <strong>The practical reality</strong> is that the difference is
          small. On a $100 bill with 9% tax, the tip difference between pre-tax
          and post-tax at 20% is $1.80. Many people tip on the post-tax total
          simply because it is the bigger number on the receipt and easier to
          see.
        </p>
        <p>
          Either approach is acceptable. What matters more is the tip percentage
          itself. Tipping 20% on the pre-tax total is considered standard for
          good service in the United States. If the service was exceptional, 22-25%
          is a generous acknowledgment.
        </p>
        <p>
          For more context on tipping norms and group dynamics, see our guide on{" "}
          <Link href="/blog/receipt-splitting-etiquette">
            receipt splitting etiquette
          </Link>.
        </p>

        <h2 id="shared-items">Factoring in Shared Items</h2>
        <p>
          Shared appetizers, bottles of wine, and desserts add complexity.
          Here is how to handle them in a proportional split:
        </p>
        <ol>
          <li>
            <strong>Determine who shared the item.</strong> If three out of
            four people shared an appetizer, divide the cost by three, not four.
          </li>
          <li>
            <strong>Add each person&apos;s share to their individual subtotal.</strong>{" "}
            If a $18 appetizer was shared among three people, each person adds
            $6 to their item total.
          </li>
          <li>
            <strong>Calculate proportional tax and tip on the updated subtotals.</strong>{" "}
            The same formula applies. Each person&apos;s proportion is now
            based on their items plus their share of shared items.
          </li>
        </ol>
        <p>
          This is where manual math starts to get genuinely tedious, and where a
          tool like <Link href="/">Jig</Link> saves time. When multiple people
          select the same item, Jig splits the cost among them automatically
          and recalculates tax and tip proportionally.
        </p>

        <h2 id="common-mistakes">Common Mistakes</h2>
        <h3>1. Splitting tax and tip equally when orders vary</h3>
        <p>
          This is the most common error. If Blake&apos;s steak was $42 and
          Dana&apos;s salad was $14, they should not pay the same amount of tax
          and tip. Always use proportional distribution when doing an itemized
          split.
        </p>

        <h3>2. Forgetting about tax entirely</h3>
        <p>
          It is surprisingly common for a group to add up their items, calculate
          the tip, and forget to account for sales tax. The result is a bill
          that comes up short, and whoever paid the check absorbs the
          difference.
        </p>

        <h3>3. Double-tipping on automatic gratuity</h3>
        <p>
          Many restaurants add an automatic gratuity (usually 18-20%) for large
          parties, typically groups of six or more. This is listed on the bill,
          sometimes in small print. If you do not notice it and add a full tip
          on top, you have tipped 36-40%. Always check the bill for
          &ldquo;service charge,&rdquo; &ldquo;gratuity,&rdquo; or
          &ldquo;auto-grat&rdquo; before calculating your tip.
        </p>

        <h3>4. Rounding errors across the group</h3>
        <p>
          When several people each round down by a dollar, the total comes up
          short. The person who paid the bill ends up subsidizing the rounding.
          The fix: round up, not down. If your share is $24.42, send $25. The
          extra 58 cents is not going to break anyone, and it ensures the bill
          is fully covered.
        </p>

        <h3>5. Using the wrong subtotal</h3>
        <p>
          Some receipts list a &ldquo;subtotal&rdquo; that includes some
          charges and excludes others. Make sure you are using the pre-tax food
          and drink total as your base for both tax and tip calculations.
        </p>

        <h2 id="shortcut">The Shortcut</h2>
        <p>
          If you do not want to do any of this math by hand, here is the
          fastest approach:
        </p>
        <ol>
          <li>Open <Link href="/">Jig</Link> on your phone.</li>
          <li>Take a photo of the receipt.</li>
          <li>Add the people at the table.</li>
          <li>Everyone selects their items.</li>
          <li>Set the tip percentage.</li>
          <li>Share the link.</li>
        </ol>
        <p>
          Jig handles the proportional tax and tip calculation automatically.
          Everyone sees a transparent breakdown of exactly what they owe, with
          no rounding disputes or forgotten tax. You can add your Venmo username
          so friends can pay you back with one tap.
        </p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>
            For equal splits, divide the grand total (subtotal + tax + tip) by
            the number of people.
          </li>
          <li>
            For itemized splits, use proportional distribution: each person pays
            tax and tip based on their share of the subtotal.
          </li>
          <li>
            Tip on the pre-tax subtotal. The standard in the US is 18-20%.
          </li>
          <li>
            Watch for automatic gratuity on large-party bills.
          </li>
          <li>
            Round up, not down, to avoid shortfalls.
          </li>
          <li>
            Use <Link href="/">Jig</Link> to skip the math entirely.
          </li>
        </ul>

        <hr className="my-8" />
        <h3>Related Reading</h3>
        <ul>
          <li>
            <Link href="/blog/how-to-split-a-restaurant-bill">
              How to Split a Restaurant Bill Fairly: The Complete Guide
            </Link>
          </li>
          <li>
            <Link href="/blog/fair-bill-splitting-methods">
              5 Fair Bill Splitting Methods and When to Use Each
            </Link>
          </li>
          <li>
            <Link href="/blog/best-bill-splitting-apps">
              Best Bill Splitting Apps in 2026
            </Link>
          </li>
          <li>
            <Link href="/blog/group-dining-guide">
              The Ultimate Group Dining Guide
            </Link>
          </li>
        </ul>
    </BlogPostLayout>
  );
}
