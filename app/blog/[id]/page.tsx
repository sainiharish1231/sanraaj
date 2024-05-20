"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { Container, H3, H2, Paragraph } from "@/app/src/Components/common";

import Loader, { LoadingContainer } from "@/app/src/Components/Loader";
import { deta, Item } from "../deta";
import DetailsLayout from "@/app/src/Components/Layout/DetailsLayout";
import Link from "next/link";
import { ApodButton } from "@/app/src/Styled/Home";
import Comments from "@/app/src/Components/Comments";

const ApplyNow: React.FC = () => {
    const params = useParams();
    const [item, setJob] = useState<Item | null>(null);

    const [path, setPath] = React.useState<string>("");

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const newPath = window.location.href.split("/").pop();
            if (newPath) {
                setPath(newPath);
            }
        }
    }, []);
    useEffect(() => {
        const id = params.id as string;
        if (id) {
            setTimeout(() => {
                if (id in deta) {
                    setJob(deta[id]);
                } else {
                    setJob(null);
                }
            });
        }
    }, [params.id]);

    if (!item) {
        return (
            <DetailsLayout title="Page Not Found">
                <Container className="h-[350px]">
                    <div className="justify-center w-[500px] flex">
                        <h2 className="">{`${path}: `}</h2>
                        <H2>Page NotFound</H2>
                    </div>
                    <Link href="/">
                        <ApodButton>{`BackHome`}</ApodButton>
                    </Link>
                </Container>
            </DetailsLayout>
        );
    }

    return (
        <DetailsLayout title={item.title}>
            <div className=" sm:m-20  flex justify-center ">
                <div
                    className=" flex shadow-md rounded-lg
         overflow-hidden mx-auto"
                >
                    <div className="flex items-center w-full">
                        <div className="w-full ">
                            <div
                                className="relative
              pb-[60%] md:pb-[25%] lg:pb-[25%]
               overflow-hidden 
               xl:-translate-y-4 group-hover:translate-x-0 
               group-hover:translate-y-0 transition duration-700
                ease-out"
                            >
                                <Image
                                    className="absolute inset-0 w-full  !h-full
                                    object-cover transform 
                                     hover:scale-105 transition duration-700 
                                     ease-out"
                                    src={item.Image}
                                    width={400}
                                    height={50}
                                    alt={"Blog post"}
                                />
                            </div>
                            <Paragraph className="  font-semibold text-lg mt-5  mx-3 px-2">
                                {item.title}
                            </Paragraph>
                            <Paragraph className="mb-6 text-lg mx-3 px-2">
                                {item.article}
                            </Paragraph>

                            <div className="flex justify-start mb-4 border-t ">
                                <div className="flex    mt-1 pt-2 pl-5">
                                    <H3 className=" flex   pr-2  text-xl">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            width="30px"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0-4.418-4.03-8-9-8S3 7.582 3 12c0 3.867 3.134 7.043 7.2 7.75a.75.75 0 01.6.75v2.25a.75.75 0 001.2.6l2.9-2.32a.75.75 0 01.6-.18c4.07-.75 7.5-3.92 7.5-7.85z"
                                            />
                                        </svg>
                                    </H3>

                                    <img
                                        className="inline-block object-cover w-8 h-8  border-2 border-white rounded-full shadow-sm cursor-pointer"
                                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <img
                                        className="inline-block object-cover w-8 h-8 -ml-2  border-2 border-white rounded-full shadow-sm cursor-pointer"
                                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <img
                                        className="inline-block object-cover w-8 h-8 -ml-2  border-2 border-white rounded-full shadow-sm cursor-pointer"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                        alt=""
                                    />
                                    <img
                                        className="inline-block object-cover w-8 h-8 -ml-2  border-2 border-white rounded-full shadow-sm cursor-pointer"
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <H3 className="pt-1  text-xl pl-2 ">
                                        {item.Comments.length}+
                                    </H3>
                                </div>
                                <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                                    <span
                                        className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-8 px-2 py-2 text-center rounded-full
                   text-blue-400 cursor-pointer mr-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            width="14px"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                                            />
                                        </svg>
                                    </span>
                                    <span
                                        className="transition ease-out duration-300 hover:bg-blue-500 bg-blue-600 h-8 px-2 py-2
                   text-center rounded-full
                  
                  cursor-pointer"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            width="14px"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div className="flex w-full  border-b ">
                                <div className="mt-3 mx-5   flex-row  flex ">
                                    <H3 className="!w-[100px] text-sm">
                                        Views: {item.Views}
                                    </H3>
                                </div>
                                <div className="mt-3 mx-5  w-full flex justify-end">
                                    <H3 className="flex  ">
                                        <svg
                                            className="h-6 w-6 "
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            {" "}
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                        <div className="w-[40px]  text-xl ">
                                            {item.Likes}
                                        </div>
                                    </H3>
                                </div>
                            </div>

                            {/*    <Comments /> */}
                            <div
                                className="relative flex
              items-center self-center
               w-full p-4 
               overflow-hidden text-gray-600
                focus-within:text-gray-400"
                            >
                                <img
                                    className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                                    alt="User avatar"
                                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                    <button
                                        type="submit"
                                        className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
                                    >
                                        <svg
                                            className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                                <input
                                    type="search"
                                    className="w-full  py-2 pl-4 pr-10
                   text-sm border 
                    appearance-none
                   rounded-tg
 dark:bg-[#ffffff]
                    ocus:outline-none
                      
                  focus:shadow-outline-blue"
                                    style={{ borderRadius: 25 }}
                                    placeholder="Post a comment..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DetailsLayout>
    );
};

export default ApplyNow;
