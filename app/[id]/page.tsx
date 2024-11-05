import Ads from "@/app/components/Ads/Ads";
import Breakingnews from "@/app/components/Breakingnews";
import FullNews from "@/app/components/Fullnews";

import TopNews from "@/app/components/TopNews";
import Custom404 from "@/app/not-found";
import NewsService from "@/services/NewsService";
import { Metadata } from "next";

async function fetchCommentData(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/comment/${id}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    if (!responseData.data) {
      console.log("Response does not contain 'data'. Full response:");
    }

    return responseData.data || null; // Return the data or null if it's not present
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
async function fetchLikeData(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/like/${id}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const responseData = await response.json();
    if (!responseData) {
      console.log("Response does not contain 'data'. Full response:");
    }

    return responseData.data || null; // Return the data or null if it's not present
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// Generate metadata for the blog page
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const singleNews = (
    await NewsService.getData(`/${params.id}`).catch(() => null)
  )?.data;

  if (!singleNews) return {};

  return {
    title: `${singleNews.title} | San Raj`,
    openGraph: {
      images: [singleNews.image],
    },
  };
}

// Main blog page component
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

  const comment = await fetchCommentData(singleNews.id);

  const like = await fetchLikeData(singleNews.id);

  return (
    <div className="mt-[70px] mb-20  flex  flex-col lg:flex-row h-full w-full lg:items-start  sm:items-center justify-center   ">
      <div className="order-1 lg:order-2 sm:w-full flex lg:w-[50%] container h-auto w-auto bg-[100%] flex-col">
        <FullNews item={singleNews} comments={comment} userLikedeta={like} />
      </div>
      <div className="order-3 lg:order-1 flex lg:w-[25%] lg:sticky top-[100px] container h-auto w-auto lg:h-[80vh] bg-[100%]  flex-col overflow-y-auto no-scrollbar">
        <TopNews news={topNews} />
        {/*  <Ads /> */}
      </div>

      <div className="order-2 lg:order-3 flex lg:w-[25%] lg:sticky top-[100px] container h-auto w-auto lg:h-[80vh] bg-[100%]  flex-col overflow-y-auto no-scrollbar">
        {/*   <Ads /> */}
        <Breakingnews news={breakingNews} />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
