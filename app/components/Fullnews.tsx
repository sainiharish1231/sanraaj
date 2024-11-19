"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import Alert from "../components/Alert/Alert";
import Commentsdata from "./Commentdata";
import { customToast } from "./CustomToast";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";
import { usePathname } from "next/navigation";
import Link from "next/link";
const FullNews = ({ item, comments: commentsServer, userLikedeta }: any) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [comments, setComments] = useState(commentsServer);
  const [likebtnfill, setLikebtnFill] = useState("");
  const [likebtnclour, setLikebtnClour] = useState("currentColor");
  const [likeCounter, setLikeCounter] = useState(item.noOfLikes); // Correctly typed as number
  const [isLiked, setIsLiked] = useState(true);
  const [userLike, setUserLike] = useState(false);
  const [shareOption, setShareOption] = useState(false);
  const bgColors = ["bg-purple-500", "bg-red-500", "bg-blue-500"];
  const path = usePathname();
  const currentUrl = `https://www.times-news.in/${path}`;
  const [isopen, setIsopen] = useState(true);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    customToast("Link copied to clipboard!", "success");
  };
  const { data: session } = useSession();
  const { data: user }: any = useSession();
  const userId = user?.id;

  useEffect(() => {
    const userLikedIds = userLikedeta.map((item: any) => item.userId);

    const isLiked = userLikedIds.includes(userId);

    if (isLiked) {
      setLikebtnFill("red");
      setLikebtnClour("red");
    }

    setUserLike(isLiked);
  }, [userLikedeta, userId, session]);

  const UpdateLike = async () => {
    if (!session) {
      customToast("You need to be logged in to like a post.", "error");
      return;
    }

    try {
      const userLikeResponse = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/like/${item.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            authorization: `${user.token}`,
          },
        }
      );

      const data = await userLikeResponse.json();

      if (data.message === "Like added successfully") {
        const newCounter = likeCounter + 1;
        setLikeCounter(newCounter);
        setLikebtnFill("red");
        setLikebtnClour("red");
      } else if (data.message === "Like removed successfully") {
        const newCounter = likeCounter - 1;
        setLikeCounter(newCounter);
        setLikebtnFill("none");
        setLikebtnClour("currentColor");
      }

      setIsLiked(isLiked);

      /*    setuserLike(!userLike); */
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const Isopen = () => {
    setIsopen((prev) => !prev);
  };
  const handleSubmit = useCallback(
    async (itemId: string, newCommentData: any, userToken: string) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST_URL}/comment/${itemId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: userToken,
            },
            body: JSON.stringify(newCommentData),
          }
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.msg || "Something went wrong");
        }

        const res = await response.json();

        setComments([res.data, ...comments]);
      } catch (error) {
        console.error("Error updating comments:", error);
      }
    },
    [comments]
  );

  const handleDelete = async (commentId: string, token: string) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/comment/${commentId}`, {
        method: "DELETE",
        headers: {
          authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = comments.filter((comment: any) => comment.id !== commentId);
      setComments(data);
    } catch (error) {
      console.error("Failed to delete comment", error);
    }
  };

  const handleCommentEdit = async (comment: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/comment/${comment.id}`,
        {
          method: "PUT",
          headers: {
            authorization: `${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content: comment.content }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update the comment");
      }

      const updatedComments = comments.map((c: any) =>
        c.id === comment.id ? { ...c, content: comment.content } : c
      );

      setComments(updatedComments);

      if (response.ok) {
        customToast("Comment update successfully!", "success");
      }
    } catch (error) {
      console.error("Failed to edit comment", error);
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  const siteData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": item.id,
    },
    headline: item.title,
    image: item.image_url,
    author: {
      "@type": "Organization",
      name: "Times News",
      url: "https://www.times-news.in/",
    },
    publisher: {
      "@type": "Organization",
      name: "Times News",
      logo: {
        "@type": "ImageObject",
        url: "https://lh5.googleusercontent.com/p/AF1QipMP_m5WTcBaKo14c_5F4gCwFfb3Rojp-0W0wdcm=w159-h160-k-no",
      },
    },
    datePublished: item.createdAt,
    dateModified: item.updatedAt,
  };

  return (
    <>
      <div
        style={{ boxShadow: "0px 0px 4px 0px #9d8b8b45" }}
        className="flex flex-col justify-between mt-4 leading-relaxed tracking-wide text-justify 
    text-gray-800 dark:text-gray-300 
    p-5 rounded-md shadow-lg 
    border border-gray-200 dark:border-none 
    overflow-auto no-scrollbar 
    transition-all duration-100"
      >
        <div>
          <p className="mb-2 text-xl font-bold lg:text-2xl capitalize">
            {item.title}
          </p>
          <hr />
          <p className=" text-gray-800 font-semibold dark:text-gray-300  py-4">
            {new Date(item.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
          <h2 className="hidden">{item.description}</h2>

          <p className="text-lg mb-2 text-gray-800  dark:text-gray-300  break-words md:text-xl">
            {item.description}
          </p>
          <Link className="hidden" href={"https://www.sanraaj.com/"}></Link>
          <Link
            className="hidden"
            href={`https://www.facebook.com/sanrajsoftware`}
          ></Link>
          <Link
            className="hidden"
            href={"https://www.linkedin.com/in/raj-kumar-57712a118/"}
          ></Link>
          <Link className="hidden" href={`${process.env.NEXTAUTH_URL}`}></Link>
        </div>
        <div className="w-full mb-2 relative aspect-[1.67]">
          <Image
            className="rounded-md object-cover"
            src={item.image_url}
            fill
            alt={"Times news image for " + item.title}
          />
        </div>

        <article
          style={{ scrollbarWidth: "none" }}
          className="news-article transition sleading-[1.8] duration-150 ease-in-out mt-[20px] "
          dangerouslySetInnerHTML={{
            __html: item.article,
          }}
        ></article>

        <div className="flex justify-start mb-4 border-t">
          <div onClick={Isopen} className="flex mt-1 pt-2">
            <div className="flex pr-2 text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="30px"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M21 12c0-4.418-4.03-8-9-8S3 7.582 3 12c0 3.867 3.134 7.043 7.2 7.75a.75.75 0 01.6.75v2.25a.75.75 0 001.2.6l2.9-2.32a.75.75 0 01.6-.18c4.07-.75 7.5-3.92 7.5-7.85z"
                />
              </svg>
            </div>

            {comments.slice(0, 3).map((item: any, index: any) => (
              <div
                key={index}
                className={`mt-1 flex items-center justify-center rounded-full h-[25px] w-[25px] ${bgColors[index]} `}
              >
                <h1 className="text-xl    text-[#ffff]">
                  {item.name.slice(0, 1).toUpperCase()}
                </h1>
              </div>
            ))}

            <div className="pt-1 text-xl pl-2">
              {comments.length > 0 && `${comments.length}+`}
            </div>
          </div>

          <div className="relative flex justify-end w-full mt-1 pt-2 pr-1">
            <div
              onClick={() => {
                setShareOption((prev) => !prev);
              }}
              className="transition  ease-out duration-300 h-8 w-8  flex justify-center items-center text-center rounded-full text-[#ffff] dark:text-[black] bg-black dark:bg-[#ffff]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="20px"
                width="20px"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div>
            {shareOption && (
              <>
                <div className="fixed inset-0 p-4 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
                    <div className="flex items-center justify-between border-b pb-3 border-gray-300">
                      <h3 className="text-xl font-bold text-gray-800">
                        Share News
                      </h3>
                      <button
                        onClick={() => {
                          setShareOption((prev) => !prev);
                        }}
                        className="text-gray-400 hover:text-red-500"
                        aria-label="Close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="my-6">
                      <h6 className="text-base text-gray-800">
                        Share this News link via
                      </h6>
                      <div className="flex gap-4 mt-4">
                        <FacebookShareButton url={currentUrl}>
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton url={currentUrl}>
                          <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <WhatsappShareButton url={currentUrl}>
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <LinkedinShareButton url={currentUrl} title="hello">
                          <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                      </div>
                    </div>
                    <div>
                      <h6 className="text-base text-gray-800">Or copy link</h6>
                      <div className="flex items-center mt-4 border rounded-lg overflow-hidden">
                        <p className="flex text-[#317cde] p-3">{currentUrl}</p>
                        <button
                          onClick={handleCopyLink}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4  mr-3 py-2"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center border-b pr-[0.5rem]">
          <div className="mt-3 mx-5 flex-col flex">
            {/* <span className="text-sm">Views:{item.Views}</span> */}
          </div>
          <div onClick={UpdateLike} className="mt-3">
            <div
              className={`flex flex-col justify-center items-center ${
                !likeCounter && "mb-5"
              }`}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill={likebtnfill}
                stroke={likebtnclour}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <div className="text-xl">{likeCounter > 0 && likeCounter}</div>
            </div>
          </div>
        </div>
        <div>
          {isopen ? (
            <Commentsdata
              comments={comments}
              item={item}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              handleCommentEdit={handleCommentEdit}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {alertMessage && (
        <Alert message={alertMessage} onClose={handleCloseAlert} />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData) }}
      />
    </>
  );
};

export default FullNews;
