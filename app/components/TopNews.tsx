import React from "react";
import { NewsItem } from "../context/Context";
import Image from "next/image";
import Link from "next/link";

interface Props {
  news: NewsItem[];
}

const TopNews = ({ news: topNews }: Props) => {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="p-4 h-[600px] overflow-y-scroll"
    >
      {topNews.map((item: any, i: any) => (
        /*  <div
          key={i}
          className="flex lg:flex-col xl:flex-row items-start mb-9    "
        >
          <div className="inline-block mr-4 ">
            <div className="w-32  h-auto lg:w-[230px]  xl:w-32 xl:h-auto bg-cover bg-center">
              <Image src={item.image_url} alt={""} height={1200} width={1200} />
            </div>
          </div>
          <div className=" w-2/3   lg:h-full lg:w-full   xl:h-auto  flex  flex-col justify-between h-32 ">
            <a
              style={{ scrollbarWidth: "none" }}
              href="#"
              className=" font-bold mb-2 break-all whitespace-pre-wrap hover:underline overflow-x-auto word-break  h-[80%]"
            >
              {item.title}
            </a>
            <div className="flex  justify-between mt-2">
              <span className="text-sm">#TopNews</span>
              <span className="text-sm">{item?.createdAt?.slice(0, 10)}</span>
            </div>
          </div>
        </div> */
        <div
          key={i}
          className="flex 2xl:flex-row my-2  bg-[rgb(229,237,255)] dark:bg-slate-800   rounded-lg p-1  lg:flex-col"
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
            <Link className="!no-underline mb-4" href={`/${item.slug_key}`}>
              <div className="transition  duration-150 w-full text-inherit ease-in-out">
                <h2 className="text-lg font-normal  mb-2  text-justify font-psemibold  whitespace-pre-wrap hover:underline overflow-wrap word-break  ">
                  {item.title.slice(0, 1).toUpperCase()}
                  {item.title.slice(1, item.length)}
                </h2>
              </div>
            </Link>
            <div className="flex  justify-between mt-2">
              <span className="text-sm">#TopNews</span>
              <span className="text-sm">{item?.createdAt?.slice(0, 10)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopNews;
