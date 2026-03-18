import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo-config";

const blogPosts = [
  {
    slug: "how-to-split-a-restaurant-bill",
    title: "How to Split a Restaurant Bill Fairly",
    description:
      "Learn the fairest ways to split a restaurant bill, from equal splits to itemized breakdowns. Practical tips for every group dining situation.",
    pubDate: "Sat, 01 Mar 2026 12:00:00 GMT",
  },
  {
    slug: "receipt-splitting-etiquette",
    title: "Receipt Splitting Etiquette: The Unwritten Rules",
    description:
      "Navigate the social dynamics of splitting the check. Etiquette tips for group dinners, dates, and work meals that keep things fair and friendly.",
    pubDate: "Wed, 25 Feb 2026 12:00:00 GMT",
  },
  {
    slug: "best-bill-splitting-apps",
    title: "Best Bill Splitting Apps in 2026",
    description:
      "A comprehensive comparison of the top bill splitting apps in 2026, including Jig, Splitwise, Tab, and more. Find the right tool for your group.",
    pubDate: "Fri, 20 Feb 2026 12:00:00 GMT",
  },
  {
    slug: "how-to-calculate-tax-and-tip-per-person",
    title: "How to Calculate Tax and Tip Per Person",
    description:
      "A clear guide to calculating each person's share of tax and tip when splitting a bill. Includes formulas, examples, and common mistakes to avoid.",
    pubDate: "Sun, 15 Feb 2026 12:00:00 GMT",
  },
  {
    slug: "group-dining-guide",
    title: "The Ultimate Group Dining Guide",
    description:
      "Everything you need to know about dining out with a group, from choosing a restaurant to splitting the bill. Tips for a smooth experience.",
    pubDate: "Tue, 10 Feb 2026 12:00:00 GMT",
  },
  {
    slug: "splitting-bills-with-venmo",
    title: "Splitting Bills with Venmo: A Complete Guide",
    description:
      "How to use Venmo to split bills and settle up with friends. Step-by-step instructions, tips, and how Jig makes Venmo splits even easier.",
    pubDate: "Thu, 05 Feb 2026 12:00:00 GMT",
  },
  {
    slug: "digital-receipt-management",
    title: "Digital Receipt Management: Organize Your Expenses",
    description:
      "How to manage and organize digital receipts for personal budgeting, expense tracking, and group bill splitting.",
    pubDate: "Fri, 30 Jan 2026 12:00:00 GMT",
  },
  {
    slug: "fair-bill-splitting-methods",
    title: "5 Fair Bill Splitting Methods Explained",
    description:
      "From equal splits to itemized breakdowns, explore five different methods for splitting a bill fairly and when to use each one.",
    pubDate: "Sun, 25 Jan 2026 12:00:00 GMT",
  },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = blogPosts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${post.pubDate}</pubDate>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${blogPosts[0].pubDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
