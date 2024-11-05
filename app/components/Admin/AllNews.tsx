"use client";
import React, { useState } from "react";
import { Table } from "flowbite-react";
import moment from "moment";
import Link from "next/link";

interface NewsItem {
  id: string;
  slug_key: string;
  title: string;
  categoryId: string;
  image_url: string;
  article: string;
  keywords: string[];
  category: string;
  isPublishNews: boolean; // boolean type use kiya hai
  createdAt: string;
}

interface Props {
  news: NewsItem[];
}

const AllNews: React.FC<Props> = ({ news }) => {
  // State to manage news items locally
  const [newsData, setNewsData] = useState<NewsItem[]>(news);

  const handlePublishNews = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/news/publish-news/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        alert("Something went wrong!");
        return;
      }
      if (result.success) {
        // Update the local state to reflect changes immediately
        setNewsData((prevNews) =>
          prevNews.map((item) =>
            item.id === id
              ? { ...item, isPublishNews: !item.isPublishNews }
              : item
          )
        );
        alert(result.message);
      }
    } catch (error: any) {
      console.log("error.message", error.message);
    }
  };

  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="text-center">Date Created</Table.HeadCell>
          <Table.HeadCell className="text-center">Image</Table.HeadCell>
          <Table.HeadCell className="text-center">Title</Table.HeadCell>
          <Table.HeadCell className="text-center">Category</Table.HeadCell>
          <Table.HeadCell className="text-center">Publish</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {newsData.map((newsItem) => (
            <Table.Row
              className="cursor-pointer text-center justify-center"
              key={newsItem.id}
            >
              <Table.Cell className="text-center align-middle">
                {moment(newsItem.createdAt).format("MMMM Do YYYY")}
              </Table.Cell>
              <Table.Cell className="text-center align-middle">
                <Link
                  href={{
                    pathname: "/admin/fullNews",
                    query: {
                      slug_key: newsItem.slug_key,
                      category: newsItem.category,
                    },
                  }}
                >
                  <div className="flex justify-center">
                    <img
                      src={newsItem.image_url}
                      className="h-24 w-24 object-cover rounded-md"
                    />
                  </div>
                </Link>
              </Table.Cell>
              <Table.Cell className="text-center align-middle ">
                <b>
                  {newsItem.title.length > 50
                    ? `${newsItem.title.substring(0, 50)}...`
                    : newsItem.title}
                </b>
              </Table.Cell>
              <Table.Cell className="text-center align-middle">
                {newsItem.category}
              </Table.Cell>
              <Table.Cell className="text-center align-middle">
                <button
                  className="border border-teal-600 rounded-lg p-2 hover:bg-gray-300 font-bold"
                  onClick={() => handlePublishNews(newsItem.id)}
                >
                  {newsItem.isPublishNews ? "Unpublish" : "Publish"}
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default AllNews;
