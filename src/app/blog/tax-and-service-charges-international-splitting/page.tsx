import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/blog-post-layout";
import { SITE_URL, SITE_NAME, absoluteUrl } from "@/lib/seo-config";

const title = "How to Handle Tax and Service Charges When Splitting Internationally";
const description =
  "International restaurants often include service charges and calculate tax differently. Here's what to watch for when splitting abroad.";
const slug = "/blog/tax-and-service-charges-international-splitting";
const datePublished = "2026-02-23";

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

export default function TaxAndServiceChargesInternationalSplitting() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: absoluteUrl(slug),
  };

  return (
    <BlogPostLayout title={title} description={description} datePublished={datePublished}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p>
        American travelers abroad often encounter something surprising: restaurant bills that
        look very different from what they're used to. Tax is included in the displayed menu
        prices. A service charge of 10–15% appears on the receipt. A "cover charge" per person
        is listed before any food is ordered. And tipping may be either unnecessary, culturally
        different, or handled entirely differently.
      </p>
      <p>
        When splitting a bill in another country, understanding what each charge is — and who
        should pay for what — prevents both overpaying and undertipping.
      </p>

      <h2>Tax: Included vs. Added</h2>
      <p>
        In the United States, tax is added to menu prices at checkout. If a dish is listed at
        $18, you'll pay $18 plus whatever your local sales tax rate is (anywhere from 0% to 10%+).
      </p>
      <p>
        In most of Europe, Australia, Canada (for GST/HST), Japan, and many other countries, taxes
        like VAT (Value Added Tax) are included in the displayed menu price. If the menu says £18,
        you pay £18. There's no addition at checkout.
      </p>
      <p>
        For splitting purposes: in countries with tax-inclusive pricing, the receipt total is
        already the final food cost. Don't add a percentage on top — it's already there. This also
        means tip calculations work slightly differently.
      </p>

      <h2>Service Charges Abroad</h2>
      <p>
        Many restaurants in the UK, France, Australia, and other countries add a service charge
        of 10–15% to the bill automatically. This is similar to American auto-gratuity for large
        parties, except it often applies to all tables.
      </p>
      <p>
        In the UK, service charges are discretionary by law — you can ask for them to be removed,
        though this is uncommon and considered rude by most locals unless the service was genuinely
        poor. In many other countries, the service charge is mandatory.
      </p>
      <p>
        When you see a service charge on the bill, treat it the same way you would auto-gratuity
        in the US: split it proportionally among all diners as part of the shared cost. Do not
        add an additional tip unless the charge is clearly discretionary and you want to leave more.
      </p>

      <h2>Cover Charges and Bread Charges</h2>
      <p>
        In Italy and some other European countries, a <em>coperto</em> (cover charge) of €1–5 per
        person appears on the bill automatically. This covers the table setting, bread, and your
        seat. It's per person, so it splits evenly: each person at the table pays the same coperto.
      </p>
      <p>
        Similarly, a <em>pane e coperto</em> (bread and cover) charge functions the same way.
        Don't be surprised by it — it's entirely normal and expected.
      </p>

      <h2>Tipping Norms by Region</h2>
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Tip expected?</th>
            <th>Typical amount</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>United States</td>
            <td>Yes</td>
            <td>18–20%</td>
            <td>Added separately; servers depend on tips</td>
          </tr>
          <tr>
            <td>UK</td>
            <td>Often yes if no service charge</td>
            <td>10–12.5%</td>
            <td>Service charge may already be included</td>
          </tr>
          <tr>
            <td>France</td>
            <td>Optional</td>
            <td>5–10%</td>
            <td>Service compris usually included in price</td>
          </tr>
          <tr>
            <td>Italy</td>
            <td>Optional</td>
            <td>5–10% if desired</td>
            <td>Coperto already on bill; cash tip appreciated</td>
          </tr>
          <tr>
            <td>Japan</td>
            <td>No</td>
            <td>0%</td>
            <td>Tipping can be considered rude</td>
          </tr>
          <tr>
            <td>Australia</td>
            <td>Optional</td>
            <td>10% for good service</td>
            <td>Servers earn minimum wage; tips are a bonus</td>
          </tr>
        </tbody>
      </table>

      <h2>Currency and Splitting</h2>
      <p>
        When splitting a bill in a foreign currency, precision matters more than at home because
        small rounding errors in an unfamiliar currency can produce larger-than-expected
        differences when converted. Use the exact receipt amounts rather than mental estimates.
      </p>
      <p>
        <Link href="/">Jig</Link> works with receipts in any currency — photograph the bill and
        the AI reads the line items in whatever currency they appear. Each person's share is
        calculated in the local currency, making conversion and settlement straightforward.
        For more on this specific scenario, see our guide on{" "}
        <Link href="/blog/how-to-split-bills-in-foreign-currency">
          how to split bills in foreign currency
        </Link>
        .
      </p>

      <hr />
      <h3>Related Reading</h3>
      <ul>
        <li>
          <Link href="/blog/service-charge-vs-tip-difference">
            Service Charge vs Tip: What's the Difference?
          </Link>
        </li>
        <li>
          <Link href="/blog/how-to-split-bills-in-foreign-currency">
            How to Split Bills in Foreign Currency
          </Link>
        </li>
        <li>
          <Link href="/blog/bill-splitting-cultural-differences">
            Bill Splitting Cultural Differences Around the World
          </Link>
        </li>
      </ul>
    </BlogPostLayout>
  );
}
