import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BodyBg } from "@/components/body-bg";

const receipt = localFont({
  src: "../fonts/Receipt.otf",
  variable: "--font-receipt",
});

export const metadata: Metadata = {
  title: "Jig — Split Any Receipt",
  description: "Upload a receipt, assign items to people, and share the split.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${receipt.variable} font-receipt antialiased`}>
        <BodyBg />
        {children}
      </body>
    </html>
  );
}
