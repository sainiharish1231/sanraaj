import Link from "next/link";
import React from "react";

interface NewsItem {
  id: string;
  slug_key: string;
  title: string;
  categoryId: string;
  image_url: string;
  description: string;
  article: string;
}

interface comment {
  content: string;
  userId: string;
}

interface user {
  name: String;
  email: string;
  password: string;
}

interface prope {
  news: NewsItem[];
  user: user[];
  comment: comment[];
}

const DashboardContant: React.FC<prope> = (prop) => {
  const { user, news, comment } = prop;

  const newsLength = news?.length;
  const userLength = user?.length;
  const commentLength = comment?.length;

  return (
    <div className=" min-h-screen">
      <div className="container  px-4 py-6 w-full text-center">
        <header className="flex justify-center items-center mb-4">
          <h1 className="text-3xl font-bold   ">News Dashboard</h1>
          <a href="#" className=" hover:underline">
            <i className="fas fa-columns mr-2"></i>
          </a>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mb-8 mx-auto max-w-6xl">
          <Link href="/admin/news">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 shadow-md flex flex-col items-center justify-center ">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Total News
              </h2>
              <span className="text-4xl font-bold text-white">
                <i className="fas fa-blog mr-2"></i>{" "}
                {!newsLength ? (
                  <span className="text-2xl">loading...</span>
                ) : (
                  `${newsLength}`
                )}
              </span>
            </div>
          </Link>
          <Link href="/admin/user">
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg p-4 shadow-md flex flex-col items-center justify-center ">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Total User
              </h2>
              <span className="text-4xl font-bold text-white">
                <i className="fas fa-comment mr-2"></i>{" "}
                {!userLength ? (
                  <span className="text-2xl">loading...</span>
                ) : (
                  `${userLength}`
                )}
              </span>
            </div>
          </Link>
          <Link href="/admin/comment">
            <div className="bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg p-4 shadow-md flex flex-col items-center justify-center ">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Total Comments
              </h2>
              <span className="text-4xl font-bold text-white">
                <i className="fas fa-edit mr-2"></i>{" "}
                {!commentLength ? (
                  <span className="text-2xl">loading...</span>
                ) : (
                  `${commentLength}`
                )}
              </span>
            </div>
          </Link>
        </section>
        <Link href="/admin/addNews">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 shadow-md  items-center justify-center inline-block ">
            <h2 className="text-lg font-semibold mb-2 text-white">
              If you want to add news then click here
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DashboardContant;
