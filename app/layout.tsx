"use client";
import "./globals.css";
import MainLayout from "./components/MainLayout";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import NewsService from "@/services/NewsService";

export const defaultMetadata: Metadata = {
  title:
    "sanraj.timesnews | Breaking News, Latest Headlines, San Raj Software Solutions",
  description:
    "Stay updated with the latest news, breaking headlines, and current events worldwide.",
  applicationName: "sanraj.timesnews",
  authors: [
    { name: "San Raj Software Solutions", url: "https://sanraj.vercel.app/" },
  ],
  generator: "San Raj CMS",
  keywords: [
    "news",
    "breaking news",
    "headlines",
    "technology",
    "current events",
  ],
  referrer: "origin",
  themeColor: "#000000",
  colorScheme: "dark",
  publisher: "San Raj Software Solutions",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://sanraj.vercel.app/" },
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
}: {
  children: React.ReactNode;
}) {
  const [dynamicMetadata, setDynamicMetadata] =
    useState<Metadata>(defaultMetadata);

  useEffect(() => {
    async function fetchMetadata() {
      try {
        const singleNews = (await NewsService.getData("/").catch(() => null))
          ?.data;

        if (!singleNews) return;

        setDynamicMetadata((prevMetadata) => ({
          ...prevMetadata,
          title: singleNews.title || prevMetadata.title,
          description: singleNews.description || prevMetadata.description,
          keywords: singleNews.keywords || prevMetadata.keywords,
          openGraph: {
            ...prevMetadata.openGraph,
            title: singleNews.title || prevMetadata.openGraph?.title,
            description:
              singleNews.description || prevMetadata.openGraph?.description,
            url: `https://sanraj.vercel.app/${singleNews.slug_key}`,
            images: [
              {
                url: singleNews.image_url || "/favicon.ico",
                width: 1200,
                height: 630,
                alt: singleNews.title || "San Raj Times News",
              },
            ],
          },
          twitter: {
            ...prevMetadata.twitter,
            title: singleNews.title || prevMetadata.twitter?.title,
            description:
              singleNews.description || prevMetadata.twitter?.description,
            images: singleNews.image_url || prevMetadata.twitter?.images,
          },
        }));
      } catch (error) {
        console.error("Failed to fetch metadata:", error);
      }
    }

    fetchMetadata();
  }, []);

  return <MainLayout metadata={dynamicMetadata}>{children}</MainLayout>;
}
