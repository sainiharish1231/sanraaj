import Image from "next/image";
import React from "react";

interface NewsProps {
  slug_key: string;
  title: string;
  categoryId: string;
  image?: File;
  description: string;
  article: string;
}

interface PreviewProps {
  news: NewsProps;
}

const Preview: React.FC<PreviewProps> = ({ news }) => {
  return (
    <div className="flex flex-col md:flex-row p-8 bg-white shadow-md rounded-lg mt-20 mr-5">
      <div className="md:w-2/3 md:pr-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">
          Preview Page
        </h1>

        <div className="mb-4">
          <span className="font-bold text-gray-700">Slug Key:</span>{" "}
          <p className="break-all overflow-wrap word-break max-w-full text-black">
            {news.slug_key}
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-orange-500">
          Title :
          <span className="break-all overflow-wrap word-break max-w-full">
            {news.title}
          </span>
        </h2>

        <div className="mb-4">
          <span className="font-bold text-black">Category:</span>{" "}
          <span className="break-all overflow-wrap word-break max-w-full text-black">
            {news.categoryId}
          </span>
        </div>

        <div className="text-gray-700 mb-4 md:mb-8">
          <span className="break-all overflow-wrap word-break max-w-full">
            Description : {news.description}
          </span>
        </div>

        <div className="text-xl text-gray-500 break-all overflow-wrap word-break max-w-full">
          Article :
          <div
            dangerouslySetInnerHTML={{
              __html: news.article,
            }}
            className="break-all overflow-wrap word-break max-w-full"
          ></div>
        </div>
      </div>

      <div className="md:w-1/3 md:pl-8">
        {news.image && (
          <Image
            src={URL.createObjectURL(news.image)}
            width={500}
            height={450}
            alt={"News Post"}
            className="rounded-lg shadow-md"
          />
        )}
      </div>
    </div>
  );
};

export default Preview;
