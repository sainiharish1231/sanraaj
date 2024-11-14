"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SavedNews = () => {
  const [news, setNews] = useState([]);
  const { data: session } = useSession();
  const { data: user }: any = useSession();

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
        setNews(result.data);
        console.log(result, "Fetched data");
      };
      fetchSavedNews();
    }
  }, [user]);

  return (
    <>
      {/* Check if there are no news items */}
      {news.length === 0 ? (
        <div className="text-center p-6 mt-32 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold ">No News Found</h2>
          <p className=" mt-2">
            Sorry, there are no saved news available at the moment. Please check
            back later.
          </p>
        </div>
      ) : (
        // If news exists, render news list
        news.map((item: any) => {
          return (
            <div
              key={item.id}
              className="flex max-w-xl gap-2 xl:gap-4 xl:flex-row items-start mb-6 border-b pb-4"
            >
              <div className="w-[30%] h-32 overflow-hidden xl:w-[35%]  rounded-md shadow-sm">
                <Image
                  className="w-full h-full"
                  height={100}
                  width={100}
                  src={item.image_url}
                  alt={item.title}
                />
              </div>

              <div className="w-[70%]  xl:w-[65%] lg:w-full xl:h-32 flex flex-col justify-between h-32">
                <Link
                  href={`/${item.slug_key}`}
                  className="text-lg font-semibold font-psemibold leading-snug hover:underline overflow-hidden"
                >
                  <h1 className="hover:underline mb-2 text-xl">{item.title}</h1>
                </Link>
                {/* <Link
                  style={{ scrollbarWidth: "none" }}
                  href={`/${item.slug_key}`}
                  className="overflow-y-scroll text-sm hidden lg:flex font-semibold font-psemibold leading-snug hover:underline"
                >
                  <h3 className="font-psemibold text-sm text-[rgba(var(--color-typo-default), transition var(--tw-text-opacity))]">
                    {item.description}
                  </h3>
                </Link> */}
                <p className="font-psemibold text-sm mt-1">
                  #{item.keywords[0]}
                </p>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default SavedNews;
