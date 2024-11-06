import "./globals.css";
import { Metadata } from "next";
import MainLayout from "./components/MainLayout";
export const metadata: Metadata = {
  title:
    "sanraj.timesnews | Breaking News, Latest Headlines, San Raj Software Solutions",
  description:
    "Stay updated with the latest news, breaking headlines, and current events worldwide. San Raj Software Solutions brings you comprehensive coverage on various topics, from technology to global affairs.",
  applicationName: "sanraj.timesnews",
  authors: [
    { name: "San Raj Software Solutions", url: "https://sanraj.vercel.app/" },
  ],
  generator: "San Raj ",
  keywords: [
    "news",
    "breaking news",
    "headlines",
    "technology",
    "current events ,San, Raj, San Raj , Sanraaj, San Raj Software, San Raj Software Solutions, Software Solution",
  ],
  referrer: "origin",
  themeColor: "#000000",
  colorScheme: "dark",

  publisher: "San Raj Software Solutions",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sanraj.vercel.app/",
  },
  openGraph: {
    type: "website",
    url: "https://sanraj.vercel.app/",
    title: "San Raj Times News",
    description:
      "Get the latest headlines and in-depth news coverage from around the world.",
    siteName: "sanraj.timesnews",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "San Raj Times News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sri_software",
    title: "San Raj Times News",
    description: "Breaking news and updates from around the globe.",
    images: "https://sanraj.vercel.app//favicon.ico",
  },
  icons: {
    icon: "https://sanraj.vercel.app//favicon.ico",
    apple: "https://sanraj.vercel.app//favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainLayout>{children}</MainLayout>;
}
