import type { Metadata } from "next";
import { Content, Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "San Raj Software Solutions",
  description:
    "San Raj is a Software Development company providing technical solutions to business/individuals to transform their full of emotion ventures in to a digital reality.",
  keywords: ` "San",
  "Raj",
  "San Raj",
  "Sanraaj",
  "San Raj Software",
  "San raj Software solutions",
  "Software Solution",`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
