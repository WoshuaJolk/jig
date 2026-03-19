import type { Metadata } from "next";
import Link from "next/link";
import { SeoPageLayout } from "@/components/seo-page-layout";
import { SITE_NAME, absoluteUrl } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME} - Tips for Splitting Bills & Receipts`,
  description:
    "Practical guides on splitting restaurant bills, receipt etiquette, tip calculations, and group dining. Learn the fairest ways to divide expenses with friends.",
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Practical guides on splitting restaurant bills, receipt etiquette, tip calculations, and group dining.",
    url: absoluteUrl("/blog"),
    siteName: SITE_NAME,
    type: "website",
  },
};

type Post = { slug: string; title: string; date: string };

const categories: { label: string; posts: Post[] }[] = [
  {
    label: "The Basics",
    posts: [
      { slug: "how-to-split-a-restaurant-bill", title: "How to Split a Restaurant Bill Fairly: The Complete Guide", date: "2026-03-01" },
      { slug: "fair-bill-splitting-methods", title: "5 Fair Bill Splitting Methods and When to Use Each", date: "2026-01-25" },
      { slug: "why-even-splits-arent-fair", title: "Why Even Splits Aren't Fair (And What to Do Instead)", date: "2026-02-22" },
      { slug: "best-bill-splitting-apps", title: "Best Bill Splitting Apps in 2026: A Comparison", date: "2026-02-20" },
      { slug: "how-to-calculate-tax-and-tip-per-person", title: "How to Calculate Tax and Tip Per Person", date: "2026-02-15" },
      { slug: "receipt-splitting-etiquette", title: "Receipt Splitting Etiquette: The Unwritten Rules", date: "2026-02-25" },
      { slug: "digital-receipt-management", title: "Digital Receipt Management: Why Paper Is Becoming Obsolete", date: "2026-01-30" },
      { slug: "why-receipt-scanning-is-the-future", title: "Why Receipt Scanning Is the Future of Bill Splitting", date: "2026-02-20" },
      { slug: "top-receipt-splitting-apps", title: "Top 7 Receipt Splitting Apps You Should Know About", date: "2026-03-18" },
      { slug: "best-receipt-splitting-apps-2026", title: "5 Best Receipt Splitting Apps in 2026", date: "2026-03-18" },
      { slug: "best-apps-to-split-a-receipt", title: "8 Best Apps to Split a Receipt With Friends", date: "2026-03-18" },
      { slug: "free-receipt-splitting-apps", title: "6 Free Receipt Splitting Apps That Actually Work", date: "2026-03-18" },
      { slug: "apps-that-scan-and-split-receipts", title: "Apps That Scan and Split Receipts Automatically", date: "2026-03-18" },
      { slug: "best-receipt-scanner-for-splitting-bills", title: "Best Receipt Scanner for Splitting Bills in 2026", date: "2026-03-18" },
      { slug: "ai-receipt-splitting-apps", title: "AI Receipt Splitting Apps: How They Work and Which Are Best", date: "2026-03-18" },
      { slug: "receipt-splitter-app-comparison", title: "5 Receipt Splitter Apps Compared: Which One Is Right for You?", date: "2026-03-18" },
      { slug: "best-free-bill-splitter-app", title: "Best Free Bill Splitter App in 2026", date: "2026-03-18" },
      { slug: "best-receipt-splitting-app-no-account", title: "Best Receipt Splitting Apps That Don't Require an Account", date: "2026-03-18" },
      { slug: "best-app-to-split-bills-without-downloading", title: "Best App to Split Bills Without Downloading Anything", date: "2026-03-18" },
      { slug: "best-app-to-photograph-and-split-receipt", title: "Best App to Photograph and Split a Receipt", date: "2026-03-18" },
      { slug: "best-app-to-scan-receipt-and-split-costs", title: "Best App to Scan a Receipt and Split Costs", date: "2026-03-18" },
      { slug: "best-receipt-splitting-app-with-venmo", title: "Best Receipt Splitting App With Venmo Integration", date: "2026-03-18" },
      { slug: "best-receipt-splitting-app-iphone", title: "Best Receipt Splitting App for iPhone in 2026", date: "2026-03-18" },
      { slug: "best-receipt-splitting-app-android", title: "Best Receipt Splitting App for Android in 2026", date: "2026-03-18" },
      { slug: "best-app-to-split-bills-with-friends", title: "Best App to Split Bills With Friends", date: "2026-03-18" },
    ],
  },
  {
    label: "Restaurants & Food",
    posts: [
      { slug: "group-dining-guide", title: "The Ultimate Group Dining Guide: From Planning to Payment", date: "2026-02-10" },
      { slug: "how-to-split-a-sushi-bill", title: "How to Split a Sushi Restaurant Bill", date: "2026-03-12" },
      { slug: "how-to-split-a-pizza-bill", title: "How to Split a Pizza Bill with Friends", date: "2026-03-11" },
      { slug: "how-to-split-a-brunch-bill", title: "How to Split a Brunch Bill (Including Bottomless Mimosas)", date: "2026-03-10" },
      { slug: "how-to-split-a-bar-tab", title: "How to Split a Bar Tab Fairly", date: "2026-03-09" },
      { slug: "how-to-split-a-food-delivery-order", title: "How to Split a Food Delivery Order (Uber Eats, DoorDash)", date: "2026-03-08" },
      { slug: "how-to-split-a-buffet-bill", title: "How to Split a Buffet Bill", date: "2026-03-07" },
      { slug: "how-to-split-a-wine-tasting-bill", title: "How to Split a Wine Tasting Bill", date: "2026-03-06" },
      { slug: "how-to-handle-separate-checks", title: "How to Ask for Separate Checks Without the Awkward", date: "2026-03-05" },
      { slug: "how-to-split-a-bbq-restaurant-bill", title: "How to Split a BBQ Restaurant Bill", date: "2026-03-04" },
      { slug: "how-to-split-a-tasting-menu-bill", title: "How to Split a Tasting Menu Bill", date: "2026-03-03" },
      { slug: "when-restaurants-wont-split-the-bill", title: "What to Do When a Restaurant Won't Split the Bill", date: "2026-03-02" },
      { slug: "how-to-split-shared-appetizers", title: "How to Split Shared Appetizers Fairly", date: "2026-03-01" },
      { slug: "how-to-split-a-large-group-dinner", title: "How to Split a Large Group Dinner (10+ People)", date: "2026-02-28" },
      { slug: "how-to-split-a-costco-run", title: "How to Split a Costco Run with Friends or Roommates", date: "2026-02-26" },
      { slug: "how-to-split-a-byob-restaurant-bill", title: "How to Split a BYOB Restaurant Bill", date: "2026-02-24" },
      { slug: "splitting-bills-with-dietary-restrictions", title: "How to Split Bills When Someone Has Dietary Restrictions", date: "2026-02-23" },
      { slug: "who-pays-for-table-appetizers", title: "Who Should Pay for the Appetizers When No One Asked?", date: "2026-02-22" },
      { slug: "how-to-split-dessert-costs", title: "How to Split Dessert Costs at a Restaurant", date: "2026-02-21" },
      { slug: "how-to-split-a-meal-prep-grocery-haul", title: "How to Split a Meal Prep Grocery Haul with Roommates", date: "2026-02-27" },
      { slug: "top-apps-for-splitting-restaurant-bills", title: "7 Top Apps for Splitting Restaurant Bills", date: "2026-03-18" },
      { slug: "best-app-to-split-dinner-bill", title: "Best App to Split the Dinner Bill", date: "2026-03-18" },
      { slug: "best-app-to-split-check-at-restaurant", title: "Best App to Split the Check at a Restaurant", date: "2026-03-18" },
      { slug: "best-app-for-splitting-group-meals", title: "Best App for Splitting Group Meals", date: "2026-03-18" },
      { slug: "best-bill-splitting-app-for-groups", title: "5 Best Bill Splitting Apps for Large Groups", date: "2026-03-18" },
      { slug: "best-app-to-split-grocery-receipt", title: "Best App to Split a Grocery Receipt", date: "2026-03-18" },
      { slug: "best-app-to-split-takeout-order", title: "Best App to Split a Takeout Order", date: "2026-03-18" },
      { slug: "best-app-to-split-uber-eats-order", title: "Best App to Split an Uber Eats or DoorDash Order", date: "2026-03-18" },
      { slug: "best-app-to-split-bar-tab", title: "Best App to Split a Bar Tab", date: "2026-03-18" },
      { slug: "apps-to-split-bills-evenly", title: "Apps to Split Bills Evenly: When Equal Is Good Enough", date: "2026-03-18" },
    ],
  },
  {
    label: "Occasions & Events",
    posts: [
      { slug: "how-to-split-a-birthday-dinner-bill", title: "How to Split a Birthday Dinner Bill", date: "2026-03-11" },
      { slug: "how-to-split-bachelorette-party-expenses", title: "How to Split Bachelorette Party Expenses Fairly", date: "2026-03-10" },
      { slug: "how-to-split-bachelor-party-expenses", title: "How to Split Bachelor Party Expenses", date: "2026-03-09" },
      { slug: "how-to-split-baby-shower-costs", title: "How to Split Baby Shower Costs Among Co-Hosts", date: "2026-03-08" },
      { slug: "how-to-split-holiday-dinner-costs", title: "How to Split Holiday Dinner Costs with Family", date: "2026-03-07" },
      { slug: "how-to-split-thanksgiving-dinner-expenses", title: "How to Split Thanksgiving Dinner Expenses Fairly", date: "2026-03-06" },
      { slug: "how-to-split-christmas-party-costs", title: "How to Split Office Christmas Party Costs", date: "2026-03-05" },
      { slug: "how-to-split-new-years-eve-dinner-bill", title: "How to Split a New Year's Eve Dinner Bill", date: "2026-03-04" },
      { slug: "how-to-split-super-bowl-party-food-costs", title: "How to Split Super Bowl Party Food and Drink Costs", date: "2026-03-03" },
      { slug: "how-to-split-expenses-at-a-music-festival", title: "How to Split Expenses at a Music Festival", date: "2026-03-02" },
      { slug: "how-to-split-expenses-at-a-sporting-event", title: "How to Split Expenses at a Sporting Event", date: "2026-03-01" },
      { slug: "how-to-split-a-wedding-reception-dinner", title: "How to Split a Wedding-Weekend Restaurant Dinner", date: "2026-02-28" },
      { slug: "how-to-split-a-graduation-dinner-bill", title: "How to Split a Graduation Dinner Bill", date: "2026-02-27" },
      { slug: "how-to-split-reunion-dinner-bills", title: "How to Split Reunion Dinner Bills", date: "2026-02-26" },
      { slug: "how-to-split-a-going-away-party-bill", title: "How to Split a Going-Away Party Bill", date: "2026-02-25" },
      { slug: "how-to-split-office-party-expenses", title: "How to Split Office Party Expenses Fairly", date: "2026-02-24" },
      { slug: "how-to-split-potluck-shopping-costs", title: "How to Split Potluck Shopping Costs Fairly", date: "2026-02-23" },
      { slug: "how-to-split-a-group-gift-purchase", title: "How to Split the Cost of a Group Gift", date: "2026-02-22" },
      { slug: "how-to-split-costs-for-a-dinner-party", title: "How to Split Costs for a Dinner Party at Home", date: "2026-02-21" },
      { slug: "how-to-split-a-tailgate-party-bill", title: "How to Split a Tailgate Party Bill", date: "2026-02-20" },
    ],
  },
  {
    label: "Relationships & Living",
    posts: [
      { slug: "how-couples-split-bills-fairly", title: "How Couples Split Bills Fairly in 2026", date: "2026-03-11" },
      { slug: "how-to-split-bills-when-you-earn-more", title: "How to Split Bills When You Earn More Than Your Partner", date: "2026-03-10" },
      { slug: "money-conversations-every-couple-should-have", title: "Money Conversations Every Couple Should Have", date: "2026-02-20" },
      { slug: "financial-expectations-before-moving-in", title: "Financial Conversations to Have Before Moving In Together", date: "2026-02-22" },
      { slug: "splitting-bills-when-living-together", title: "How to Split Bills When You First Move In Together", date: "2026-02-26" },
      { slug: "splitting-bills-after-a-breakup", title: "How to Split Bills After a Breakup", date: "2026-03-04" },
      { slug: "how-to-split-bills-with-roommates", title: "How to Split Bills with Roommates: A Complete System", date: "2026-03-09" },
      { slug: "splitting-bills-as-roommates", title: "The Complete Guide to Splitting Bills as Roommates", date: "2026-02-18" },
      { slug: "splitting-household-expenses-system", title: "A System for Splitting Household Expenses That Actually Works", date: "2026-03-06" },
      { slug: "how-to-split-utility-bills-with-roommates", title: "How to Split Utility Bills with Roommates Fairly", date: "2026-03-08" },
      { slug: "how-to-split-a-joint-grocery-order", title: "How to Split a Joint Grocery Order Fairly", date: "2026-03-07" },
      { slug: "how-to-split-a-costco-membership", title: "How to Split a Costco Membership with Friends or Roommates", date: "2026-03-05" },
      { slug: "splitting-bills-on-a-first-date", title: "Should You Split the Bill on a First Date?", date: "2026-03-01" },
      { slug: "should-you-split-on-a-second-date", title: "Who Pays on a Second Date? Modern Expectations Explained", date: "2026-02-28" },
      { slug: "splitting-expenses-in-a-new-relationship", title: "How to Split Expenses in a New Relationship", date: "2026-02-27" },
      { slug: "how-college-students-split-bills", title: "How College Students Split Bills Without Ruining Friendships", date: "2026-03-03" },
      { slug: "how-to-split-bills-in-a-college-dorm", title: "How to Split Expenses in a College Dorm or Shared Apartment", date: "2026-03-02" },
      { slug: "splitting-bills-when-one-person-is-unemployed", title: "How to Split Bills When One Person Is Unemployed", date: "2026-02-21" },
      { slug: "how-to-split-shared-subscriptions", title: "How to Split Shared Subscription Costs Fairly", date: "2026-02-25" },
      { slug: "splitting-amazon-prime-membership", title: "How to Split an Amazon Prime Membership", date: "2026-02-24" },
      { slug: "how-to-split-streaming-service-costs", title: "How to Split Streaming Service Costs with Roommates", date: "2026-02-23" },
      { slug: "best-app-to-split-bills-with-roommates", title: "Best App to Split Bills With Roommates", date: "2026-03-18" },
      { slug: "best-bill-splitting-app-for-couples", title: "Best Bill Splitting App for Couples", date: "2026-03-18" },
      { slug: "top-bill-splitting-apps-for-college-students", title: "6 Top Bill Splitting Apps for College Students", date: "2026-03-18" },
    ],
  },
  {
    label: "Travel & Technology",
    posts: [
      { slug: "how-to-split-airbnb-costs", title: "How to Split Airbnb Costs with a Group", date: "2026-03-11" },
      { slug: "how-to-split-hotel-bills-group-trip", title: "How to Split Hotel Bills on a Group Trip", date: "2026-03-10" },
      { slug: "how-to-split-expenses-on-a-road-trip", title: "How to Split Expenses on a Road Trip", date: "2026-03-09" },
      { slug: "how-to-split-expenses-on-a-cruise", title: "How to Split Expenses on a Group Cruise", date: "2026-03-08" },
      { slug: "how-to-split-bills-in-foreign-currency", title: "How to Split Bills in a Foreign Currency", date: "2026-03-07" },
      { slug: "splitting-group-travel-expenses-in-europe", title: "How to Split Group Travel Expenses in Europe", date: "2026-03-06" },
      { slug: "how-to-track-group-expenses-during-travel", title: "How to Track Group Expenses During Travel", date: "2026-03-03" },
      { slug: "splitting-expenses-when-some-paid-cash", title: "How to Split Expenses When Some People Paid Cash", date: "2026-03-04" },
      { slug: "how-to-split-doordash-uber-eats-orders", title: "How to Split DoorDash and Uber Eats Group Orders", date: "2026-03-02" },
      { slug: "how-to-split-grubhub-orders-at-the-office", title: "How to Split a Grubhub Office Order Fairly", date: "2026-03-01" },
      { slug: "how-to-use-apple-pay-to-split-bills", title: "How to Use Apple Pay and Apple Cash to Split Bills", date: "2026-02-28" },
      { slug: "how-to-split-bills-using-google-pay", title: "How to Split Bills Using Google Pay", date: "2026-02-27" },
      { slug: "best-way-to-split-bills-2026", title: "The Best Way to Split Bills in 2026", date: "2026-02-26" },
      { slug: "how-technology-changed-bill-splitting", title: "How Technology Has Changed Bill Splitting", date: "2026-02-25" },
      { slug: "ai-receipt-scanning-vs-ocr", title: "AI Receipt Scanning vs OCR: What's the Difference?", date: "2026-02-24" },
      { slug: "history-of-going-dutch", title: "The History of Going Dutch: Origin and Modern Meaning", date: "2026-02-23" },
      { slug: "why-venmo-took-over-bill-splitting", title: "Why Venmo Took Over Bill Splitting Among Millennials", date: "2026-02-22" },
      { slug: "how-gen-z-splits-bills", title: "How Gen Z Splits Bills Differently Than Millennials", date: "2026-02-21" },
      { slug: "bill-splitting-cultural-differences", title: "Bill Splitting Around the World: Cultural Differences", date: "2026-02-20" },
    ],
  },
  {
    label: "Payment Apps",
    posts: [
      { slug: "splitting-bills-with-venmo", title: "How to Split Bills and Request Money on Venmo", date: "2026-02-05" },
      { slug: "venmo-vs-zelle-vs-cashapp-for-splitting", title: "Venmo vs Zelle vs Cash App vs PayPal: Best for Splitting Bills", date: "2026-03-10" },
      { slug: "how-to-use-venmo-for-group-expenses", title: "How to Use Venmo for Group Expenses (The Right Way)", date: "2026-03-05" },
    ],
  },
  {
    label: "Etiquette & Money",
    posts: [
      { slug: "how-to-calculate-tip-for-large-groups", title: "How to Calculate Tip for Large Groups", date: "2026-03-11" },
      { slug: "how-to-handle-auto-gratuity", title: "How to Handle Auto-Gratuity Charges When Splitting", date: "2026-03-10" },
      { slug: "service-charge-vs-tip-difference", title: "Service Charge vs Tip: What's the Difference?", date: "2026-03-09" },
      { slug: "when-someone-ordered-way-more", title: "How to Handle It When Someone Ordered Way More Than Everyone Else", date: "2026-03-08" },
      { slug: "what-to-do-when-friend-never-pays-back", title: "What to Do When a Friend Never Pays You Back", date: "2026-03-07" },
      { slug: "how-to-remind-someone-they-owe-you", title: "How to Remind Someone They Owe You Money (With Scripts)", date: "2026-03-06" },
      { slug: "how-to-ask-friends-to-pay-you-back", title: "How to Ask Friends to Pay You Back Without Being Awkward", date: "2026-02-28" },
      { slug: "splitting-bills-with-bad-with-money-friend", title: "How to Split Bills with a Friend Who's Bad with Money", date: "2026-03-05" },
      { slug: "how-to-split-bills-on-a-budget", title: "How to Split Bills Fairly When You're on a Tight Budget", date: "2026-03-04" },
      { slug: "psychology-of-splitting-bills", title: "The Psychology of Splitting Bills: Why Money Feels Personal", date: "2026-03-03" },
      { slug: "non-drinker-splitting-bills", title: "I Don't Drink — Should I Still Split the Bill Evenly?", date: "2026-03-05" },
      { slug: "how-to-split-alcohol-vs-non-alcohol", title: "How to Split the Bill When Some People Drink and Others Don't", date: "2026-02-25" },
      { slug: "etiquette-of-rounding-up-when-splitting", title: "The Etiquette of Rounding Up (or Down) When Splitting a Bill", date: "2026-02-22" },
    ],
  },
  {
    label: "Practical Guides",
    posts: [
      { slug: "how-to-split-a-receipt-with-discounts", title: "How to Split a Receipt That Has Discounts or Coupons", date: "2026-03-01" },
      { slug: "how-to-split-when-someone-used-gift-card", title: "How to Split a Bill When Someone Used a Gift Card", date: "2026-02-28" },
      { slug: "how-to-handle-bill-splitting-dispute", title: "How to Handle a Bill Splitting Dispute Without Drama", date: "2026-02-27" },
      { slug: "how-to-split-a-very-long-receipt", title: "How to Split a Very Long Receipt (50+ Items)", date: "2026-02-21" },
      { slug: "tax-and-service-charges-international-splitting", title: "How to Handle Tax and Service Charges When Splitting Internationally", date: "2026-02-23" },
      { slug: "splitting-expenses-for-business-meals", title: "How to Split Expenses for a Group Business Meal", date: "2026-02-26" },
      { slug: "bill-splitting-for-freelancers", title: "Bill Splitting for Freelancers: Tracking Client Meals and Team Expenses", date: "2026-02-25" },
      { slug: "tracking-shared-business-expenses", title: "How to Track Shared Business Expenses with a Team", date: "2026-02-24" },
    ],
  },
];

export default function BlogIndex() {
  const allPosts = categories.flatMap((c) => c.posts);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${SITE_NAME} Blog`,
    description:
      "Practical guides on splitting restaurant bills, receipt etiquette, tip calculations, and group dining.",
    url: absoluteUrl("/blog"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allPosts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };

  return (
    <SeoPageLayout breadcrumbs={[{ label: "Blog", href: "/blog" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mb-10 text-base text-[#555]">
        Guides on splitting bills, managing receipts, and dining out fairly.
      </p>

      <div className="space-y-12">
        {categories.map((cat) => (
          <section key={cat.label}>
            <h2 className="mb-4 border-b border-[#e5e3de] pb-2 text-sm font-semibold uppercase tracking-widest text-[#999]">
              {cat.label}
            </h2>
            <ul className="space-y-1">
              {cat.posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-baseline justify-between gap-4 py-1.5 hover:opacity-70"
                  >
                    <span className="text-sm text-[#1a1a1a]">{post.title}</span>
                    <span className="shrink-0 text-xs text-[#aaa]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SeoPageLayout>
  );
}
