"use client";
import React from "react";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";
import { AnchorTab, Container, H2 } from "../src/Styled/Career";
import { ContentContainer } from "../src/Styled/Overview";
import { Paragraph } from "../src/Components/common";
import Image from "next/image";
import Link from "next/link";
import { deta } from "./deta";
import Banner from "../src/Components/Header/Banner";

const Blog = () => {
    const items = Object.values(deta); // Get an array of all items in deta

    return (
        <DetailsLayout title="Blog">
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
                                        <span className="inline-flex text-center text-[#ffffff] py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out cursor-auto">
                                            {item.Category}
                                        </span>{" "}
                                        <span className="inline-flex text-center text-[#ffffff] py-1 px-3 rounded-full bg-red-600 hover:bg-red-500 transition duration-150 ease-in-out cursor-auto">
                                            {item.urlkey}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <AnchorTab
                                className="!no-underline text-2xl lg:text-3xl font-bold leading-tight mb-4"
                                href={`blog/${item.urlkey}`}
                            >
                                <div className="transition duration-150 ease-in-out">
                                    <H2 className="hover:underline">
                                        {item.title}
                                    </H2>
                                </div>
                                <Paragraph className="text-lg flex-grow">
                                    {item.description}
                                </Paragraph>
                            </AnchorTab>
                            <Link
                                className="flex !no-underline align-middle items-center"
                                href={""}
                            >
                                <div>
                                    <Image
                                        className="rounded-full flex-shrink-0 mr-4"
                                        src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
                                        width={40}
                                        height={40}
                                        alt="Author 04"
                                    />
                                </div>
                                <div className="flex justify-between mt-5">
                                    <Paragraph className="hover:underline font-medium transition duration-150 ease-in-out">
                                        {item.profilName}
                                    </Paragraph>
                                    <Paragraph className="ml-2">-</Paragraph>
                                    <Paragraph className="ml-2">
                                        {item.uploadTime}
                                    </Paragraph>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </DetailsLayout>
    );
};

export default Blog;
