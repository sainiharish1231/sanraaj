import React from "react";
import { NewsItem } from "../../types/news";
import Image from "next/image";
import Link from "next/link";

interface Props {
  news: NewsItem[];
}

const TopNews = ({ news: topNews }: Props) => {
  return (
    <div className="lg:px-4 max-h-[600px] lg:mb-[300px]">
      {topNews.map((item: any, i: any) => (
        <div
          key={i}
          className="flex 2xl:flex-row my-2   bg-[rgb(229,237,255)] dark:bg-slate-800   rounded-lg p-1  lg:flex-col"
        >
          <div
            className="flex p-1  
         justify-between  h-auto max-h-[150px] lg:h-[150px]  ]  2xl:h-auto 2xl:max-h-[150px] w-[150px] lg:w-full 2xl:w-[150px]"
          >
            <Image
              height={500}
              width={400}
              className="object-cover rounded-md"
              src={item.image_url}
              alt="Product"
            />
          </div>
          <div
            style={{ scrollbarWidth: "none" }}
            className="flex lg:ml-0 2xl:ml-3 ml-3  
         justify-between overflow-x-scroll flex-col  h-[150] w-full   max-h-[150px] "
          >
            <Link
              className="!no-underline mb-4 overflow-auto"
              href={`/${item.slug_key}`}
              style={{ scrollbarWidth: "none" }}
            >
              <div className="transition  duration-150 w-full text-inherit ease-in-out">
                <h2 className="hover:underline mb-2 text-lg">
                  {item.title.slice(0, 1).toUpperCase()}
                  {item.title.slice(1, item.length)}
                </h2>
              </div>
            </Link>
            <div className="flex  justify-between mt-2">
              <span className="text-sm">#TopNews</span>
              <p className="dark:text-gray-400 text-gray-500 text-sm ">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopNews;
