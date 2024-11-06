"use client";
import React, { useState } from "react";
import { NewsItem } from "../context/Context";
import Image from "next/image";
import Link from "next/link";

interface Props {
  news: NewsItem[];
}

const Breakingnews = ({ news }: Props) => {
  const BreakingNews = news.filter((item: any) => item.isBreakingNews === true);
  const [readMoreId, setReadMoreId] = useState<number | null>(null);
  const toggleEdit = (id: number) => {
    setReadMoreId((prev) => (prev === id ? null : id));
  };
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="grid grid-cols-1 gap-y-10 gap-x-6 lg:mb-20 sm:max-h-[1200px]  max-h-[800px] overflow-hidden overflow-y-scroll  items-start p-4"
    >
      <div className="relative flex flex-col   items-start">
        {BreakingNews.map((item: any, i) => (
          <div
            className=" bg-[rgb(229,237,255)] dark:bg-slate-800   p-2 my-3 rounded-lg"
            key={i}
          >
            <Image
              className="mb-3 rounded-lg  "
              src={item.image_url}
              alt=""
              height={200}
              width={1600}
            />

            <span className="mb-1 font-semibold block text-sm leading-6  text-[#9333ea]">
              {item.category}
            </span>

            <Link className="!no-underline mb-4" href={`/${item.slug_key}`}>
              <div className="transition duration-150 w-full text-inherit ease-in-out">
                <h2 className="mb-1 font-normal text-lg   font-psemibold text-justify whitespace-pre-wrap hover:underline overflow-wrap word-break  ">
                  {item.title.slice(0, 1).toUpperCase()}
                  {item.title.slice(1, item.length)}
                </h2>
              </div>
            </Link>
            <div className="flex flex-row">
              {readMoreId === item.id ? (
                <>
                  <div className="prose prose-slate prose-sm ">
                    <div>{item.description}</div>
                    <button
                      onClick={() => toggleEdit(item.id)}
                      className="group inline-flex items-center h-9 mb-10 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6 mr-2 "
                    >
                      Read Less
                    </button>
                    <Link
                      className="group inline-flex items-center h-9 mb-10 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                      href={`/${item.slug_key}`}
                    >
                      fullNews
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => toggleEdit(item.id)}
                    className="group inline-flex items-center h-9 mb-10 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                  >
                    Read more
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakingnews;
