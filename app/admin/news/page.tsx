import React from "react";
import AllNews from "@/app/components/Admin/AllNews";

const getNews = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/news`, {
    cache: "no-cache",
  });
  const result = await response.json();
  return result;
};

const getCategory = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/category`, {
    cache: "no-cache",
  });
  const category = await response.json();
  return category;
};

async function News() {
  const result = await getNews();
  const category = await getCategory();
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[100%]">
        <AllNews news={result.data} />
      </div>
    </div>
  );
}

export default News;
