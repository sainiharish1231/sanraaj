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
  const [isopen, setIsOpen] = useState(true);
  const [userLike, setUserLike] = useState(false);
  const [shareOption, setShareOption] = useState(false);
  const bgColors = ["bg-purple-500", "bg-red-500", "bg-blue-500"];
  const path = usePathname();
  const currentUrl = ` ${process.env.NEXTAUTH_URL}/${path}`;

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
    setIsOpen((prev) => !prev);
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

  return (
    <>
      <div className="flex flex-col justify-between">
        <h1 className="mb-2 text-xl capitalize pt-4">{item.title}</h1>
        <h2 className="hidden">{item.description}</h2>
        <p className="hidden">{item.description}</p>
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
        <div className="w-full mb-4">
          <Image
            className="w-full h-[250px] sm:h-[300px] rounded-md"
            src={item.image_url}
            width={440}
            height={100}
            alt={"Blog post"}
          />
        </div>

        <div
          style={{ scrollbarWidth: "none" }}
          className="transition    sleading-[1.8]   duration-150 ease-in-out text-[rgba(var(--color-typo-default), var(--tw-text-opacity))]   max-h-[700px] overflow-x-scroll"
          dangerouslySetInnerHTML={{
            __html: item.article,
          }}
        ></div>

        <div className="flex justify-start mb-4 border-t">
          <div onClick={Isopen} className="flex mt-1 pt-2 pl-5length">
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

            <div className="pt-1 text-xl pl-2 ">{comments.length}+</div>
          </div>

          <div className=" relative flex justify-end w-full mt-1 pt-2 pr-5 ">
            <div
              onClick={() => {
                setShareOption((prev) => !prev);
              }}
              className="transition   h ease-out duration-300 
                      h-8 w-8  flex   justify-center items-center text-center   rounded-full
                    text-[#ffff] dark:text-[black] bg-black dark:bg-[#ffff]  "
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
              <div className="bg-white py-2 px-1 flex items-center rounded-lg gap-2  absolute   md:-mt-14  -mt-3 md:-mr-12  mr-10">
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
            )}
          </div>
        </div>

        <div className="flex justify-between items-center border-b  pr-2">
          <div className="mt-3 mx-5 flex-col flex">
            <span className="text-sm">Views:{item.Views}</span>
          </div>
          <div onClick={UpdateLike} className="mt-3 mr-6">
            <div className="flex flex-col justify-center items-center">
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
              <div className="text-xl">{likeCounter}</div>
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
    </>
  );
};

export default FullNews;
