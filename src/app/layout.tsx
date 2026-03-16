import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
