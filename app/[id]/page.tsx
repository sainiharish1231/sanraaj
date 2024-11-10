import Ads from "@/app/components/Ads/Ads";
import Breakingnews from "@/app/components/Breakingnews";
import FullNews from "@/app/components/Fullnews";

import TopNews from "@/app/components/TopNews";
import Custom404 from "@/app/not-found";
import NewsService from "@/services/NewsService";
import { Metadata } from "next";
import { fetchCommentData, fetchLikeData } from "./helpers";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const singleNews = (
    await NewsService.getData(`/${params.id}`).catch(() => null)
  )?.data;

  if (!singleNews) return {};

  return {
    title: `${singleNews.title} | Times News`,
    description: `${singleNews.description} | Times News`,
    applicationName: "timesnews.sanraj",
    authors: [
      {
        name: "Times News | San Raj Software Solutions",
        url: "https://sanraj.vercel.app/",
      },
    ],
    generator: "Times News",
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

  const comment = await fetchCommentData(singleNews.id);

  const like = await fetchLikeData(singleNews.id);

  const jsonLd = {
    "@context": "https://sanraj.vercel.app/",
    "@type": "Times News",
    name: singleNews.title,
    image: singleNews.image_url,
    description: singleNews.description,
  };

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
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": singleNews.id,
          },
          headline: singleNews.title,
          image: singleNews.image_url,
          author: {
            "@type": "Organization",
            name: "Times News",
            url: "https://sanraj.vercel.app/",
          },
          publisher: {
            "@type": "Organization",
            name: "San Raj Software Solutions",
            logo: {
              "@type": "ImageObject",
              url: "https://lh5.googleusercontent.com/p/AF1QipMP_m5WTcBaKo14c_5F4gCwFfb3Rojp-0W0wdcm=w159-h160-k-no",
            },
          },
          datePublished: singleNews.createdAt,
          dateModified: singleNews.updatedAt,
        })}
      </script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default NewsDetailsPage;
