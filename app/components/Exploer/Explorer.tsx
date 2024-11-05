"use client";

import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-slider.css"; // Import the custom CSS file
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Alert from "../../components/Alert/Alert";
import FeedbackService from "@/services/FeedbackService";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

interface Review {
  rating: number;
}

const Explorer = () => {
  const [reviews, setReviews] = useState([]);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const { data: session, status }: any = useSession();

  const user = session?.user;

  const [userReview, setUserReview] = useState<Review | null>(null);
  const [showform, setShowform] = useState(false);
  const [formData, setFormData] = useState({
    content: "",
    rating: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      const reviews = await FeedbackService.getData().catch(() => {});

      setReviews(reviews?.data || []);
    })();
  }, []);

  useEffect(() => {
    if (!session) return;

    const userReview =
      reviews.find((item: any) => item.userId === user.id) || null;

    setUserReview(userReview);
  }, [session, reviews, user]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!session) {
      setAlertMessage("You need to be logged in to comment.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${user.token}`,
          },
          body: JSON.stringify(formData), // Correctly send the new comment data
        }
      );

      setAlertMessage("Comment added successfully");
    } catch (error) {
      console.error(
        "Error updating comments:",
        setAlertMessage("noooooooooooooooo")
      );
    }
    setShowform(false);
  };

  const [readMoreId, setReadMoreId] = useState<string | null>(null);

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  return (
    <div className="sm:mt-[80px] mt-[60px]  px-6 lg:px-8">
      {/* <........................................................> */}
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-psemibold tracking-tight sm:text-4xl">
            Join Our Growing Community!
          </h2>
          <p className="text-lg font-psemibold leading-8">
            Discover the latest news on our platform and stay informed with us
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col bg-[rgb(229,237,255)] dark:bg-slate-800 p-8">
            <dt className="text-sm font-semibold leading-6">Views</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">
              12M
            </dd>
          </div>
          <div className="flex flex-col bg-[rgb(229,237,255)] dark:bg-slate-800 p-8">
            <dt className="text-sm font-semibold leading-6">Users</dt>
            <dd className="order-first  text-3xl font-psemiboldtext-3xl font-semibold tracking-tight">
              10k
            </dd>
          </div>
          <div className="flex flex-col bg-[rgb(229,237,255)] dark:bg-slate-800 p-8">
            <dt className="text-sm font-semibold leading-6">Rating</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">
              4.6
            </dd>
          </div>
          <div className="flex flex-col bg-[rgb(229,237,255)] dark:bg-slate-800 p-8">
            <dt className="text-sm font-semibold leading-6">Review</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">
              2.1k
            </dd>
          </div>
        </div>
      </div>
      {/* <........................................................> */}

      <div className="relative  mt-10">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="z-[-1] blur-[106px] h-56 bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-800"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6  xl:px-6">
          <div className="relative">
            <div className="flex items-center justify-center -space-x-2">
              {[
                "https://randomuser.me/api/portraits/women/12.jpg",
                "https://randomuser.me/api/portraits/women/45.jpg",
                "https://randomuser.me/api/portraits/women/60.jpg",
                "https://randomuser.me/api/portraits/women/4.jpg",
                "https://randomuser.me/api/portraits/women/34.jpg",
              ].map((src, index) => (
                <img
                  key={index}
                  loading="lazy"
                  width="200"
                  height="200"
                  src={src}
                  alt="member photo"
                  className={`h-${
                    index === 2 ? "16" : index % 2 === 0 ? "8" : "12"
                  } w-${
                    index === 2 ? "16" : index % 2 === 0 ? "8" : "12"
                  } rounded-full object-cover ${index === 2 ? "z-10" : ""}`}
                />
              ))}
            </div>
            <div className="mt-6 m-auto space-y-6 w-full">
              <h1 className="text-center  font-psemibold text-gray-800 dark:text-white  text-2xl sm:text-4xl">
                Share Your Rating & Review
              </h1>
            </div>

            {userReview ? (
              <>
                <div className=" justify-center flex  w-full h-full  mt-10 mb-10 items-center gap-3">
                  {[...Array(5)].map((_, index) => (
                    <Link href={"/reviews"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-9 h-9  ${
                          index >= userReview?.rating
                            ? "text-slate-700 dark:text-slate-300 "
                            : "text-[#9333ea]"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className=" justify-center flex  w-full h-full  mt-10 mb-10 items-center gap-3">
                  <label
                    htmlFor="oneStar"
                    className="cursor-pointer transition hover:scale-125"
                  >
                    <span className="sr-only">one star</span>
                    <input
                      type="radio"
                      className="sr-only"
                      id="oneStar"
                      name="rating"
                      value="1"
                      checked={formData.rating === 1}
                      onClick={() => setShowform(true)}
                      onChange={() =>
                        setFormData({ ...formData, ["rating"]: 1 })
                      }
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-9 h-9  ${
                        formData.rating > 0
                          ? "text-[#9333ea]"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>

                  <label
                    htmlFor="twoStars"
                    className="cursor-pointer transition hover:scale-125"
                  >
                    <span className="sr-only">two stars</span>
                    <input
                      type="radio"
                      className="sr-only"
                      id="twoStars"
                      name="rating"
                      value="2"
                      checked={formData.rating === 2}
                      onClick={() => setShowform(true)}
                      onChange={() =>
                        setFormData({ ...formData, ["rating"]: 2 })
                      }
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-9 h-9  ${
                        formData.rating > 1
                          ? "text-[#9333ea]"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>

                  <label
                    htmlFor="threeStars"
                    className="cursor-pointer transition hover:scale-125"
                  >
                    <span className="sr-only">three stars</span>
                    <input
                      type="radio"
                      className="sr-only"
                      id="threeStars"
                      name="rating"
                      value="3"
                      checked={formData.rating === 3}
                      onClick={() => setShowform(true)}
                      onChange={() =>
                        setFormData({ ...formData, ["rating"]: 3 })
                      }
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-9 h-9  ${
                        formData.rating > 2
                          ? "text-[#9333ea]"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>

                  <label
                    htmlFor="fourStars"
                    className="cursor-pointer transition hover:scale-125"
                  >
                    <span className="sr-only">four stars</span>
                    <input
                      type="radio"
                      className="sr-only"
                      id="fourStars"
                      name="rating"
                      value="4"
                      checked={formData.rating === 4}
                      onClick={() => setShowform(true)}
                      onChange={() =>
                        setFormData({ ...formData, ["rating"]: 4 })
                      }
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-9 h-9  ${
                        formData.rating > 3
                          ? "text-[#9333ea]"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>

                  <label
                    htmlFor="fiveStars"
                    className="cursor-pointer transition hover:scale-125"
                  >
                    <span className="sr-only">five stars</span>
                    <input
                      type="radio"
                      className="sr-only"
                      id="fiveStars"
                      name="rating"
                      value="5"
                      checked={formData.rating === 5}
                      onClick={() => setShowform(true)}
                      onChange={() =>
                        setFormData({ ...formData, ["rating"]: 5 })
                      }
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-9 h-9 ${
                        formData.rating > 4
                          ? "text-[#9333ea]"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* <........................................................> */}
      {showform ? (
        <>
          <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
              <textarea
                className="bg-white dark:bg-[#121212] border rounded w-full py-2 px-3 leading-tight focus:outline-none h-32 resize-none border-[#9333ea]"
                id="content"
                placeholder="Write a Reviews......"
                name="content"
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-center m-10">
              <button
                type="submit"
                className="flex items-center justify-center full-height btn relative overflow-hidden h-[50px] w-[300px] font-medium transition-all bg-indigo-100 dark:bg-[#ffffff] rounded-xl hover:bg-white group py-1.5 px-2.5"
              >
                <span className="flex justify-center w-[300px] h-48 rounded bg-[#9333ea] absolute bottom-0 left-0 translate-y-full ease-out duration-[1300ms] transition-all group-hover:mb-0 group-hover:translate-y-0"></span>
                <span>
                  <span className="relative justify-center text-left text-black duration-[1300ms] w-10 ease-out text-xl group-hover:text-white">
                    Post
                  </span>
                </span>
              </button>
            </div>
          </form>
        </>
      ) : null}
      {/* <........................................................> */}
      <div className="m-4">
        <div className="flex items-center mb-10">
          <p className="bg-[rgb(229,237,255)] dark:bg-slate-800  text-sm font-semibold inline-flex items-center p-1.5 rounded ">
            4.7
          </p>
          <p className="ms-2 font-medium text-gray-900 dark:text-white">
            Rating
          </p>
          <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {reviews.length}
          </p>
          <Link
            href={"/reviews"}
            className="ms-auto text-sm font-medium text-[#9333ea] hover:underline "
          >
            Read all reviews
          </Link>
        </div>
        <Slider className="mb-20 border-2xl" {...settings}>
          {reviews?.map((review: any) => {
            if (!review) return null;
            const { id, name, createdAt, rating, content } = review;
            return (
              <article key={id}>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] mr-5 bg-black dark:bg-[#ffff]">
                    <h1 className="text-[40px] dark:text-black text-[#ffff]">
                      {(review.image || name) && (
                        <>
                          {" "}
                          <div>
                            {review.image ? (
                              <Image
                                className="object-cover rounded-full"
                                src={review.image}
                                alt={name}
                                width={150}
                                height={150}
                              />
                            ) : (
                              name.slice(0, 1).toUpperCase()
                            )}
                          </div>
                        </>
                      )}
                    </h1>
                  </div>
                  <div className="font-medium">
                    <p>{name}</p>
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-4 h-4 ${
                        index < rating ? "text-[#9333ea]" : "text-gray-300"
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
                  {readMoreId === id ? (
                    <>{content}</>
                  ) : (
                    <>
                      <div className=" text-lg font-psemibold">
                        {content.slice(0, 400)}
                        {content.length > 400 && (
                          <button
                            onClick={() => setReadMoreId(id)}
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
            );
          })}
        </Slider>
      </div>
      {alertMessage && (
        <Alert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export default Explorer;
