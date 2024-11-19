"use client";
import React, { useEffect, useState } from "react";
import AllNews from "@/app/components/Admin/AllNews";
import { useSession } from "next-auth/react";

const getNews = async (token: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/news/unpublish`,
    {
      cache: "no-cache",
      headers: {
        authorization: `${token}`,
      },
    }
  );
  const result = await response.json();
  return result;
};
const News: React.FC = () => {
  const { data: session }: any = useSession();
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.token) {
        try {
          const fetchedNews = await getNews(session.user.token);
          setNews(fetchedNews?.data || null);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      }
    };

    fetchData();
  }, [session]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full">{news && <AllNews news={news} />}</div>
    </div>
  );
};

export default News;
