"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import FeedbackService from "@/services/FeedbackService";
import Head from "next/head";

// Define the interface for a review
interface Review {
  id: number;
  name: string;
  image?: string;
  createdAt: string;
  rating: number;
  content: string;
}

const Feedback = () => {
  // Use the Review type for feedback state
  const [feedback, setFeedback] = useState<Review[]>([]);
  const [readMoreId, setReadMoreId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    article: "",
  });

  // Fetch feedback data when the component mounts
  useEffect(() => {
    (async () => {
      const feedbackData = await FeedbackService.getData().catch(() => {});
      setFeedback(feedbackData?.data || []);
    })();
  }, []);

  // Sort feedback by creation date (latest first)
  const sortedFeedback = feedback.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Handle form input change
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    },
    [setFormData]
  );

  // Handle form submit (currently not in use)
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <Head>
        {/* Page Title for SEO */}
        <title>Customer Feedback and Reviews</title>
        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Read the latest feedback and reviews from our users. Learn what others think about our service and share your own experience."
        />
      </Head>
      <div className="mt-[100px] mb-20">
        {/* Page Title and Description for Users */}
        <div className="text-center my-8 px-4">
          <h1 className="text-3xl font-semibold text-[#9333ea] mb-4">
            Customer Feedback and Reviews
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Read the latest feedback and reviews from our users. Learn what
            others think about our service and share your own experience.
          </p>
        </div>

        {/* Feedback List */}
        <div className="mt-[40px] p-6 space-y-8">
          {sortedFeedback.map((review) => (
            <article
              className="bg-white dark:bg-[#1a1a1a] p-5 rounded-xl shadow-lg"
              key={review.id}
            >
              <div className="flex items-center mb-4 space-x-5">
                <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] bg-black dark:bg-white">
                  <h1 className="text-[24px] text-white dark:text-black">
                    {review.image ? (
                      <Image
                        className="object-cover rounded-full"
                        src={review.image}
                        alt={review.name}
                        width={50}
                        height={50}
                      />
                    ) : (
                      review.name.slice(0, 1).toUpperCase()
                    )}
                  </h1>
                </div>
                <div className="font-semibold text-lg">
                  <p className="text-black dark:text-white">{review.name}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2 space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < review.rating ? "text-[#9333ea]" : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <div className="text-lg text-justify text-black dark:text-white">
                {readMoreId === review.id ? (
                  <p>{review.content}</p>
                ) : (
                  <>
                    <p>{review.content.slice(0, 400)}</p>
                    {review.content.length > 400 && (
                      <button
                        onClick={() => setReadMoreId(review.id)}
                        className="block mt-2 text-sm text-[#9333ea] hover:underline"
                      >
                        Read more
                      </button>
                    )}
                  </>
                )}
              </div>
            </article>
          ))}
          {/* Form for submitting feedback */}
          {/* <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <textarea
              className="bg-white dark:bg-[#121212] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none h-32 resize-none border-[#9333ea]"
              id="article"
              placeholder="Write a feedback......"
              name="article"
              value={formData.article}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-center m-10">
            <button className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-indigo-100 dark:bg-[#ffffff] rounded-xl hover:bg-white group py-1.5 px-2.5">
              <span className="flex justify-center w-[300px] h-48 rounded bg-[#9333ea] absolute bottom-0 left-0 translate-y-full ease-out duration-[1300ms] transition-all group-hover:mb-0 group-hover:translate-y-0"></span>
              <span>
                <span className="relative justify-center text-left text-black duration-[1300ms] w-10 ease-out text-xl group-hover:text-white">
                  Post
                </span>
              </span>
            </button>
          </div>
        </form> */}
        </div>
      </div>
    </>
  );
};

export default Feedback;
