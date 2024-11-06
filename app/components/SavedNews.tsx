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
      {news.map((item: any) => {
        return (
          <div
            key={item.id}
            className="flex lg:flex-col xl:flex-row items-start mb-6 border-b pb-4"
          >
            <div className="w-32 h-32 lg:w-[230px] xl:w-32 xl:h-32  mr-3 rounded-md shadow-sm">
              <Image
                className="w-full h-full"
                height={100}
                width={100}
                src={item.image_url}
                alt={""}
              />
            </div>

            <div className="w-2/3 lg:h-full lg:w-full xl:h-32 flex flex-col justify-between h-32">
              <Link
                href={`/${item.slug_key}`}
                className="text-lg font-semibold font-psemibold leading-snug hover:underline"
              >
                {item.title}
              </Link>
              <p className=" font-psemibold   text-sm mt-1">
                #{item.keywords[0]}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SavedNews;
