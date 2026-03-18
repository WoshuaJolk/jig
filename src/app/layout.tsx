import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import PostHogPageview from "./PostHogPageview";
import { JsonLd } from "./json-ld";
import { SITE_URL } from "@/lib/seo-config";

const receipt = localFont({
  src: "../fonts/Receipt.otf",
  variable: "--font-receipt",
  display: "swap",
  adjustFontFallback: "Arial",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "optional",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "optional",
});

const title = "Jig — Split Any Receipt";
const description =
  "Upload a receipt, assign items to people, and share the split.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Jig",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "receipt splitter",
    "bill splitter",
    "split receipt",
    "split bill",
    "tip calculator",
    "venmo split",
    "group dining",
    "restaurant bill",
    "expense sharing",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    generator: "Next.js",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${receipt.variable} ${geist.variable} ${geistMono.variable} font-receipt antialiased`}>
        <JsonLd />
        <Suspense fallback={null}>
          <PostHogPageview />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
