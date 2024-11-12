"use client";
import React, { useState } from "react";
import { Table } from "flowbite-react";
import moment from "moment";
import Link from "next/link";
import { customToast } from "../CustomToast";

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
  isBreakingNews: boolean;
  isTopNews: boolean;
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

        customToast(result.message, "success");
      }
    } catch (error: any) {
      console.log("error.message", error.message);
    }
  };
  const handleBreakingNews = async (id: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/news/breaking-news/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      if (!response.ok) {
        customToast("Something went wrong!", "error");
        return;
      }
      if (result.success) {
        setNewsData((prevNews) =>
          prevNews.map((item) =>
            item.id === id
              ? { ...item, isBreakingNews: !item.isBreakingNews }
              : item
          )
        );

        customToast(result.message, "success");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleTopNews = async (id: any) => {
    try {
      const response = await fetch(
        `
        ${process.env.NEXT_PUBLIC_HOST_URL}/news/top-news/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      if (!response.ok) {
        customToast("Something went wrong!", "error");
        return;
      }
      if (result.success) {
        setNewsData((prevNews) =>
          prevNews.map((item) =>
            item.id === id ? { ...item, isTopNews: !item.isTopNews } : item
          )
        );

        customToast(result.message, "success");
      }
    } catch (error: any) {
      console.log(error.message);
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
          <Table.HeadCell className="text-center">Topnews</Table.HeadCell>
          <Table.HeadCell className="text-center">BreakingNews</Table.HeadCell>
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
                  onClick={() => handleTopNews(newsItem.id)}
                >
                  {newsItem.isTopNews ? "UnTopNews" : "TopNews"}
                </button>
              </Table.Cell>
              <Table.Cell className="text-center align-middle">
                <button
                  className="border border-teal-600 rounded-lg p-2 hover:bg-gray-300 font-bold"
                  onClick={() => handleBreakingNews(newsItem.id)}
                >
                  {newsItem.isBreakingNews ? "UnBreakinNews" : "BreakingNews"}
                </button>
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
