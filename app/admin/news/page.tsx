"use client";

import React, { useEffect, useState } from "react";
import AllNews from "@/app/components/Admin/AllNews";
import { useSession } from "next-auth/react";

const fetchNews = async (user: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/news/unpublish`,
    {
      headers: {
        authorization: `${user.token}`,
      },
      cache: "no-cache",
    }
  );
  const result = await response.json();
  return result;
};

const fetchCategory = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/category`, {
    cache: "no-cache",
  });
  const category = await response.json();
  return category;
};

function News() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const [news, setNews] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      if (user) {
        const newsData = await fetchNews(user);
        setNews(newsData.data);
        const categoryData = await fetchCategory();
        setCategory(categoryData);
      }
    };
    loadData();
  }, [user]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[100%]">{news && <AllNews news={news} />}</div>
    </div>
  );
}

export default News;
