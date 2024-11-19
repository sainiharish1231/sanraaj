"use client";
import React, { useState } from "react";
import { Table } from "flowbite-react";
import moment from "moment";
import Link from "next/link";
import { customToast } from "../CustomToast";
import { useSession } from "next-auth/react";
import InfiniteScroll from "react-infinite-scroll-component";

interface NewsItem {
  id: string;
  slug_key: string;
  title: string;
  categoryId: string;
  image_url: string;
  article: string;
  keywords: string[];
  category: string;
  isPublishNews: boolean;
  isBreakingNews: boolean;
  isTopNews: boolean;
  createdAt: string;
}

interface Props {
  news: NewsItem[];
}

const AllNews: React.FC<Props> = ({ news }) => {
  const [newsData, setNewsData] = useState<NewsItem[]>(news);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const { data: session }: any = useSession();
  console.log(newsData);
  const fetchNews = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/news/unpublish?pageNo=${page}`,
        {
          headers: {
            authorization: `${session?.user?.token}`,
          },
        }
      );
      const data = await res.json();

      if (!res.ok) {
        customToast("Failed to fetch news.", "error");
        return;
      }

      if (data.data.length === 0) {
        setHasMore(false);
      } else {
        setNewsData((prevNews) => {
          const uniqueNews = data.data.filter(
            (item: NewsItem) => !prevNews.some((news) => news.id === item.id)
          );
          return [...prevNews, ...uniqueNews];
        });
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      customToast("Error fetching news", "error");
    }
  };

  const handlePublishNews = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/news/publish-news/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `${session?.user?.token}`,
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        customToast("Failed to update publish status.", "error");
        return;
      }
      if (result.success) {
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
      console.error("Error updating publish status:", error.message);
    }
  };

  const handleBreakingNews = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/news/breaking-news/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `${session?.user?.token}`,
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        customToast("Failed to update breaking news status.", "error");
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
      console.error("Error updating breaking news status:", error.message);
    }
  };

  const handleTopNews = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/news/top-news/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `${session?.user?.token}`,
          },
        }
      );
      const result = await response.json();
      if (!response.ok) {
        customToast("Failed to update top news status.", "error");
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
      console.error("Error updating top news status:", error.message);
    }
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={newsData.length}
        next={fetchNews}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500" />
          </div>
        }
        endMessage={<p className="text-center my-5">No more news to show.</p>}
      >
        <Table hoverable className="">
          <Table.Head>
            <Table.HeadCell className="text-center">
              Date Created
            </Table.HeadCell>
            <Table.HeadCell className="text-center">Image</Table.HeadCell>
            <Table.HeadCell className="text-center">Title</Table.HeadCell>
            <Table.HeadCell className="text-center">Category</Table.HeadCell>
            <Table.HeadCell className="text-center">Topnews</Table.HeadCell>
            <Table.HeadCell className="text-center">
              BreakingNews
            </Table.HeadCell>
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
                <Table.Cell className="text-center align-middle">
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
                    {newsItem.isTopNews ? "true" : "false"}
                  </button>
                </Table.Cell>
                <Table.Cell className="text-center align-middle">
                  <button
                    className="border border-teal-600 rounded-lg p-2 hover:bg-gray-300 font-bold"
                    onClick={() => handleBreakingNews(newsItem.id)}
                  >
                    {newsItem.isBreakingNews ? "true" : "false"}
                  </button>
                </Table.Cell>
                <Table.Cell className="text-center align-middle">
                  <button
                    className="border border-teal-600 rounded-lg p-2 hover:bg-gray-300 font-bold"
                    onClick={() => handlePublishNews(newsItem.id)}
                  >
                    {newsItem.isPublishNews ? "true" : "false"}
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </InfiniteScroll>
    </div>
  );
};

export default AllNews;
