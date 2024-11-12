"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Breakingnews from "./Breakingnews";
import TopNews from "./TopNews";
import Ads from "./Ads/Ads";
import SkeletonPlaceholder from "./Dammydeta";
import { GrNext, GrPrevious } from "react-icons/gr";
import { NewsItem } from "../../types/news";
import { useSession } from "next-auth/react";
import { customToast } from "./CustomToast";

interface NewNewsProps {
  news: NewsItem[];
  topNews: NewsItem[];
  breakingNews: NewsItem[];
}

const NewNews = ({ news, topNews, breakingNews }: NewNewsProps) => {
  const [selectedcategory, setSelectedcategory] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [savedNews, setSavedNews] = useState<any>([]);

  const { data: user }: any = useSession();
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (user?.token) {
      const fetchSavedNews = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST_URL}/saved-news`,
          {
            method: "GET",
            headers: {
              "Content-Type": "Application/json",
              authorization: `${user.token}`,
            },
          }
        );
        const result = await res.json();
        const ids = result.data.map((item: any) => item.id);
        setSavedNews(ids);
      };
      fetchSavedNews();
    }
  }, [user]);
  const handleSavedNews = async (newsId: any, isSaved: any) => {
    if (!user?.token) {
      console.error("User token is not available.");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/saved-news`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            authorization: `${user.token}`, // Use the token here
          },
          body: JSON.stringify({ newsId: newsId }),
        }
      );

      const result = await res.json();

      if (!isSaved) {
        setSavedNews([...savedNews, result?.data?.newsId]);
        customToast("News saved successfully!", "success");
      } else {
        const updatedData = savedNews.filter((id: any) => id !== newsId);
        setSavedNews(updatedData);
        customToast("News unsaved successfully!", "success");
      }
    } catch (error) {
      console.error("Error in handleSavedNews:", error);
    }
  };

  const categories = Array.from(
    new Set(Object.values(news).map((item: any) => item.category))
  );

  const filteredItems = selectedcategory
    ? Object.values(news).filter(
        (item: any) => item.category === selectedcategory
      )
    : Object.values(news);

  if (!news)
    return (
      <>
        {/* <div className=" flex justify-center items-center">
          <div className=" animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        </div> */}
        <div className="p-6  container ">
          <SkeletonPlaceholder />
        </div>
      </>
    );

  return (
    <>
      <div className="bg-white dark:bg-[#121212] pl-4 sm:pl-0 w-full">
        <div className="flex touch-auto w-[100%] sm:mt-0 mt-1 h-[50px]">
          {categories.length >= 14 && (
            <GrPrevious
              className="text-2xl cursor-pointer hidden sm:flex"
              onClick={scrollLeft}
            />
          )}
          <div className="flex touch-auto  justify-center items-center sm:ml-6 ">
            <button
              className={`py-1 px-3 rounded-xl  ${
                selectedcategory === null
                  ? "bg-[#9333ea] text-white"
                  : "bg-black dark:bg-[#ffffff] text-white dark:text-black border-[#9333ea] "
              }`}
              onClick={() => setSelectedcategory(null)}
            >
              All
            </button>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex justify-start items-center ml-3 mr-3 w-full overflow-x-auto space-x-2"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`flex py-1 px-3  whitespace-nowrap rounded-xl ${
                  selectedcategory === category
                    ? "bg-[#9333ea] text-white"
                    : "bg-black dark:bg-[#ffffff] text-white dark:text-black border-[#9333ea]"
                }`}
                onClick={() => setSelectedcategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {categories.length >= 14 && (
            <GrNext
              className="text-2xl cursor-pointer hidden sm:flex"
              onClick={scrollRight}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start sm:items-center justify-center w-full h-full lg:max-h-[calc(100vh-110px)] overflow-y-auto px-4 md:px-6  no-scrollbar lg:px-2">
        <div
          style={{ scrollbarWidth: "none" }}
          className="order-2 lg:order-1 flex lg:w-[25%] lg:sticky top-0 lg:max-h-[calc(100vh-110px)] overflow-y-auto flex-col w-full no-scrollbar pt-4"
        >
          {/*  <Ads /> */}
          <h2 className="text-sm lg:px-4">Breaking News</h2>
          <Breakingnews news={breakingNews} />
        </div>

        <div className="order-1 lg:order-2 flex sm:w-full lg:w-[50%] flex-col">
          <h2 className="text-sm pt-4 mb-4">Recent News</h2>
          {filteredItems.map((item: any, index: any) => {
            const isSaved = savedNews.includes(item.id);
            return (
              <div key={index} className="rounded-lg">
                <div className="relative overflow-hidden">
                  <div className="w-full mb-2 relative aspect-[1.67]">
                    <Image
                      className="rounded-md object-cover"
                      fill
                      src={item.image_url}
                      alt={"Times news image for " + item.title}
                    />
                  </div>
                  <div className="mt-2">
                    <Link
                      className="!no-underline mb-4"
                      href={`/${item.slug_key}`}
                    >
                      <div className="transition duration-150 w-full text-inherit ease-in-out">
                        <h2 className="hover:underline mb-2 text-xl">
                          {item.title.slice(0, 1).toUpperCase()}
                          {item.title.slice(1, item.length)}
                        </h2>
                      </div>
                    </Link>
                    <div className="font-psemibold text-[rgba(var(--color-typo-default), transition var(--tw-text-opacity))]">
                      {item.description}
                    </div>
                    <div className="flex justify-between  items-center ">
                      <div>
                        <ul className="flex flex-wrap text-xs font-medium mt-4">
                          <li className="mb-2">
                            <span className="inline-flex text-center text-[#ffffff] py-1 px-3 rounded-full bg-[#9333ea]">
                              #{item.category}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div
                        onClick={() => handleSavedNews(item.id, isSaved)}
                        className="  cursor-pointer"
                      >
                        {isSaved ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.3}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.3}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

export default NewNews;
