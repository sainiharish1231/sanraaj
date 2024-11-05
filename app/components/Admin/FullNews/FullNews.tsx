"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import EditNews from "../EditNews";
import { useRouter } from "next/navigation";
import Alert from "../../../components/Alert/Alert";

interface newsItem {
  id: string;
  slug_key: string;
  title: string;
  categoryId: string;
  image_url: string;
  description: string;
  article: string;
  keywords: string[];
  category: string;
  createdAt: string;
}

const FullNews = ({ newsSlug_key, categories, category }: any) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [newsItem, setNewsItem] = useState<newsItem | null>(null);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editModalNews, setEditModalNews] = useState({});
  const { data: user }: any = useSession();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/news/${id}`,
      {
        method: "DELETE",
        cache: "no-cache",
        headers: {
          authorization: `${user.token}`,
        },
      }
    );
    const result = await response.json();
    if (response.ok) {
      setAlertMessage(result.message);
      router.push("/admin/news");
    } else {
      setAlertMessage("somthing went wrong");
    }
  };

  useEffect(() => {
    if (newsSlug_key) {
      const fetchNews = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST_URL}/news/${newsSlug_key}`
        );
        const data = await response.json();
        setNewsItem(data.data);
      };

      fetchNews();
    }
  }, [newsSlug_key]);

  if (!newsItem) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
        <div className="flex items-center space-x-2 text-blue-600">
          <svg className="w-8 h-8 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-lg font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  return (
    <>
      {editModal ? (
        <EditNews editModalNews={editModalNews} categories={categories} />
      ) : (
        <div className="text-center">
          <h1 className="text-3xl mb-8 font-bold">Full News</h1>
          <div className="grid grid-cols-1 gap-6 justify-center">
            <div className=" mb-[300px] relative border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-102 pb-16 break-words w-full max-w-screen-lg mx-auto">
              <div className="relative w-full h-96">
                <Image
                  src={newsItem.image_url}
                  layout="fill"
                  objectFit="cover"
                  alt={newsItem.title}
                />
                <div className="absolute top-0 left-0 p-2">
                  <span className="bg-red-400 px-3 py-1 rounded-md text-sm">
                    Category : {category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Title : {newsItem.title}
                </h2>
                <h2 className="text-2xl font-bold mb-4">Article :</h2>
                <p
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: newsItem.article,
                  }}
                ></p>
                <h2 className="text-2xl font-bold mb-4">Description :</h2>
                <p className="mb-6">{newsItem.description}</p>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-between px-8">
                <button
                  onClick={() => handleDelete(newsItem.id)}
                  className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition-colors duration-300 text-base sm:text-sm"
                >
                  Delete News
                </button>
                <button
                  onClick={() => {
                    setEditModal(!editModal);
                    setEditModalNews(newsItem);
                  }}
                  className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300 text-base sm:text-sm pl-2"
                >
                  Update News
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {alertMessage && (
        <Alert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </>
  );
};

export default FullNews;