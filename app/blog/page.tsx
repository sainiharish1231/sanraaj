import Image from "next/image";
import React from "react";
import { deta } from "./deta";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: `sri blog
`,
  description:
    "San Raj is a Software Development company providing technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.",
  keywords:
    "San, Raj, San Raj, Sanraaj, San Raj Software, San Raj Software solutions, Software Solution, Software Development, Technical Solutions, Business Solutions, Digital Transformation, IT Services, Web Development, Mobile App Development, Cloud Solutions, AI Solutions, San Raj Blog",
};

const Blog = () => {
  const items = Object.values(deta); // Get an array of all items in deta

  return (
    <div title="Blog  " className="bg-white dark:bg-black">
      <div className="sm:m-20 m-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="mb-32 mx-auto xl:max-w-[70%] grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center"
          >
            <div className="relative block group">
              <div
                className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <Image
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src={item.Image}
                  width={540}
                  height={303}
                  alt={"Blog post"}
                />
              </div>
            </div>
            <div>
              <div>
                <ul className="flex flex-wrap text-xs font-medium -m-1">
                  <li className="mb-4">
                    <span className="inline-flex text-center text-[#ffffff]k  py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-auto">
                      {item.Category}
                    </span>{" "}
                    <span className="inline-flex text-center  text-[#ffffff] k py-1 px-3 rounded-full bg-red-600 hover:bg-red-500 transition duration-150 ease-in-out cursor-auto">
                      {item.urlkey}
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                className="!no-underline text-2xl lg:text-3xl   dark:text-[#ffffff] text-black font-bold leading-tight mb-4"
                href={`blog/${item.urlkey}`}
              >
                <div className="transition duration-150 ease-in-out">
                  <h2 className="hover:underline  dark:text-[#ffffff] text-black ">
                    {item.title}
                  </h2>
                </div>
                <p className="text-lg flex-grow  dark:text-[#ffffff] text-black">
                  {item.description}
                </p>
              </Link>{" "}
              {/*  <Link
                className="flex !no-underline align-middle items-center"
                href={""}
              >
                <Image
                  className="rounded-full   items-center flex h-10 w-10 mr-4"
                  src="/1587048000468.jpeg"
                  width={100}
                  height={100}
                  alt="Author 04"
                />

                <div className="flex justify-between mt-5">
                  <p className="hover:underline font-medium transition duration-150 ease-in-out">
                    {item.profilName}
                  </p>
                  <p className="ml-2">-</p>
                  <p className="ml-2">{item.uploadTime}</p>
                </div>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
