import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import PostHogPageview from "./PostHogPageview";

const receipt = localFont({
  src: "../fonts/Receipt.otf",
  variable: "--font-receipt",
});

export const metadata: Metadata = {
  title: "Jig — Split Any Receipt",
  description: "Upload a receipt, assign items to people, and share the split.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${receipt.variable} font-receipt antialiased`}>
        <Suspense fallback={null}>
          <PostHogPageview />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
