import "./globals.css";
import { Metadata } from "next";
import MainLayout from "./components/MainLayout";

export const metadata: Metadata = {
  title:
    "Time News | Breaking News, Latest Headlines & Updates from India and Worldwide",
  description:
    "Stay informed with Time News! Get the latest breaking news, trending headlines, and comprehensive updates on politics, technology, business, sports, and global affairs. Trusted news at your fingertips.",
  applicationName: "times-news",
  authors: [{ name: "Times News", url: "https://www.times-news.in/" }],
  generator: "times news",
  keywords: [
    "times-news",
    "news",
    "breaking news",
    "headlines",
    "technology",
    "times news",
    "current events",
    "San Raj",
    "San",
    "Raj",
    "Sanraaj",
    "San Raj Software",
    "Times News",
    "Software Solution",
    "daily news updates",
    "latest news",
    "trending news",
    "world news",
    "local news",
    "politics",
    "sports news",
    "entertainment news",
    "business news",
    "science and technology news",
    "international news",
    "top stories",
    "live updates",
    "breaking headlines",
    "today's news",
    "online news portal",
    "news articles",
    "current affairs",
    "news analysis",
    "regional news",
    "tech updates",
    "world headlines",
    "digital news",
    "San Raj Software Solutions",
    "online news platform",
  ],

  referrer: "origin",

  publisher: "Times News",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.times-news.in/",
  },
  openGraph: {
    type: "website",
    url: "https://www.times-news.in/",
    title: "Time News",
    description:
      "Get the latest headlines and in-depth news coverage from around the world.",
    siteName: "times-news",
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
    site: "@sri_software",
    title: "San Raj Times News",
    description: "Breaking news and updates from around the globe.",
    images: "https://sanraj.vercel.app/favicon.ico",
  },
  icons: {
    icon: "/favicon.ico", // Setting the favicon as singleNews.image
  },
};

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

function RootLayout({ children }: LayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}

export default RootLayout;
