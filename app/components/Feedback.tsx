"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import FeedbackService from "@/services/FeedbackService";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const [readMoreId, setReadMoreId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    article: "",
  });

  useEffect(() => {
    (async () => {
      const feedback = await FeedbackService.getData().catch(() => {});

      setFeedback(feedback?.data || []);
    })();
  }, []);

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

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <div className="mt-[80px] p-6">
        {feedback.map((review: any) => (
          <>
            <article className=" p-3" key={review.id}>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center rounded-full h-[50px]  w-[50px] mr-5 bg-black dark:bg-[#ffff]">
                  <h1 className="text-[40px]  dark:text-black  text-[#ffff]">
                    {(review.image || review.name) && (
                      <>
                        <div>
                          {review.image ? (
                            <Image
                              className="object-cover rounded-full"
                              src={review.image}
                              alt={review.name}
                              width={150}
                              height={150}
                            />
                          ) : (
                            review.name.slice(0, 1).toUpperCase()
                          )}
                        </div>
                      </>
                    )}
                  </h1>
                </div>
                <div className="font-psemibold">
                  <p>{review.name}</p>
                  <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
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
              <div className="mb-2">
                {readMoreId === review.id ? (
                  <>
                    <div className="text-lg text-justify font-psemibold ">
                      {review.content}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-lg text-justify font-psemibold ">
                      {review.content.slice(0, 400)}
                      {review.content.length > 400 && (
                        <button
                          onClick={() => setReadMoreId(review.id)}
                          className="block mb-5 text-sm font-medium text-[#9333ea] hover:underline"
                        >
                          Read more
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </article>
          </>
        ))}
        {/*  <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4">
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
    </>
  );
};

export default Feedback;
