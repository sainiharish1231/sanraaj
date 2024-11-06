import "./globals.css";
import MainLayout from "./components/MainLayout";
import NewsService from "@/services/NewsService";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const singleNews = (await NewsService.getData("/").catch(() => null))?.data;

  // Randomly select a news item from the array
  const randomIndex = singleNews
    ? Math.floor(Math.random() * singleNews.length)
    : 0;
  const newsItem = singleNews ? singleNews[randomIndex] : null;

  return (
    <MainLayout>
      <head>
        {newsItem && (
          <>
            <title>{` ${newsItem.title} sanraj.timesnews  | Breaking News,news `}</title>
            <meta
              name="description"
              content={`${newsItem.description},Stay updated with the latest news, breaking headlines, and current events worldwide. `}
            />
            <meta name="keywords" content={newsItem.keywords.join(", ")} />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="article" />
            <meta property="og:title" content={newsItem.title} />
            <meta property="og:description" content={newsItem.description} />
            <meta property="og:image" content={newsItem.image_url} />
            <meta
              property="og:url"
              content={`https://yourwebsite.com/news/${newsItem.slug_key}`}
            />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={newsItem.title} />
            <meta name="twitter:description" content={newsItem.description} />
            <meta name="twitter:image" content={newsItem.image_url} />
          </>
        )}
      </head>
      {children}
    </MainLayout>
  );
}
