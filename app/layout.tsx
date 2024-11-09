import "./globals.css";
import { Metadata } from "next";
import MainLayout from "./components/MainLayout";

export const metadata: Metadata = {
  title: "Times News | Breaking News, Latest Headlines",
  description:
    "Stay updated with the latest news, breaking headlines, and current events worldwide. San Raj Software Solutions brings you comprehensive coverage on various topics, from technology to global affairs.",
  applicationName: "timesnews.sanraj",
  authors: [
    { name: "San Raj Software Solutions", url: "https://sanraj.vercel.app/" },
  ],
  generator: "San Raj ",
  keywords: [
    "news",
    "breaking news",
    "headlines",
    "technology",
    "news",
    "times news",
    "current events ,San, Raj, San Raj , Sanraaj, San Raj Software, San Raj Software Solutions, Software Solution",
  ],
  referrer: "origin",

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
    siteName: "timesnews.sanraj",
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
  },
  icons: {
    icon: "https://sanraj.vercel.app/favicon.ico",
    apple: "https://sanraj.vercel.app/favicon.ico",
  },
};

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}

export default RootLayout;
