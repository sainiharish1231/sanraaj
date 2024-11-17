import Ads from "@/app/components/Ads/Ads";
import Breakingnews from "@/app/components/Breakingnews";
import FullNews from "@/app/components/Fullnews";

import TopNews from "@/app/components/TopNews";
import Custom404 from "@/app/not-found";
import NewsService from "@/services/NewsService";
import { Metadata } from "next";
import { fetchCommentData, fetchLikeData } from "./helpers";
const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const singleNews = (
    await NewsService.getData(`/${params.id}`).catch(() => null)
  )?.data;

  if (!singleNews) return {};

  // Apply character limits
  const title = truncateText(singleNews.title || "Untitled", 70);
  const description = truncateText(
    singleNews.description || "No description available.",
    160
  );
  return {
    title: `${title} | Times News`,
    description: `${description} | Times News`,
    applicationName: "times-news",
    authors: [
      {
        name: "Times News | San Raj ",
        url: "https://times-news.in/",
      },
    ],
    generator: "times-news",
    keywords: [`${singleNews.keywords} | Times News`],
    openGraph: {
      images: [singleNews.image_url],
    },
    icons: {
      icon: singleNews.image_url, // Setting the favicon as singleNews.image
    },
  };
}
// Main news page component
const NewsDetailsPage = async ({ params }: any) => {
  const breakingNews =
    (await NewsService.getBreakingNews().catch(() => {}))?.data || [];
  const topNews = (await NewsService.getTopNews().catch(() => {}))?.data || [];

  const singleNews = (
    await NewsService.getData(`/${params.id}`).catch(() => null)
  )?.data;

  if (!singleNews) {
    return <Custom404 />;
  }

  const comment = await fetchCommentData(singleNews.id || "1234");

  const like = await fetchLikeData(singleNews.id || "1234");

  return (
    <>
      <div className="mt-[70px] mb-20  flex  flex-col lg:flex-row h-full w-full lg:items-start  sm:items-center justify-center px-4 md:px-6 lg:px-4">
        <div
          style={{ scrollbarWidth: "none" }}
          className="order-2 lg:order-1 flex lg:w-[25%] lg:sticky top-0 lg:max-h-[calc(100vh-110px)] overflow-y-auto flex-col w-full no-scrollbar pt-4"
        >
          {/*  <Ads /> */}
          <h2 className="text-sm lg:px-4">Breaking News</h2>
          <Breakingnews news={breakingNews} />
        </div>

        <div className="order-1 lg:order-2 flex sm:w-full lg:w-[50%] flex-col lg:px-4">
          <FullNews item={singleNews} comments={comment} userLikedeta={like} />
        </div>
        <div
          style={{ scrollbarWidth: "none" }}
          className="order-3 lg:order-3 dc flex lg:w-[25%] lg:sticky top-0 lg:max-h-[calc(100vh-110px)] overflow-y-auto flex-col w-full no-scrollbar pt-4"
        >
          <h2 className="text-sm lg:px-4">Top News</h2>
          <TopNews news={topNews} />
          {/*  <Ads /> */}
        </div>
      </div>
    </>
  );
};

export default NewsDetailsPage;
