"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useCallback } from "react";
import Alert from "..//components/Alert/Alert";
import { customToast } from "./CustomToast";
import moment from "moment";

const Commentsdata = ({
  comments,
  item,
  handleSubmit,
  handleDelete,
  handleCommentEdit,
}: any) => {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [newComment, setNewComment] = useState("");
  const { data: session, status } = useSession();
  const { data: user }: any = useSession();
  const [editComment, setEditComment] = useState<any>({
    id: "",
    content: "",
  });
  const userName = user?.name;
  const userImage = user?.image;
  const userId = user?.id;

  const [editCommentId, setEditCommentId] = useState<number | null>(null);

  const toggleEdit = (id: number) => {
    setEditCommentId((prev) => (prev === id ? null : id));
  };

  const handleInputChange = (e: any) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (!session) {
        customToast("You need to be logged in to comment.", "error");
        return;
      }

      const newCommentData = {
        content: newComment,
        name: userName,
        createdAt: Date(),
      };
      await handleSubmit(item.id, newCommentData, user.token);
      setNewComment("");
    },
    [newComment, userName, session, item.id, handleSubmit]
  );

  const handleDeleteComment = useCallback(
    async (commentId: number) => {
      if (!session) {
        setAlertMessage("You need to be logged in to delete a comment.");
        return;
      }

      try {
        await handleDelete(commentId, user.token);
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    },
    [session, handleDelete]
  );

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  const handleEditComment = (comment: any) => {
    setEditComment({
      id: comment.id,
      content: comment.content,
    });
    setEditCommentId(null);
  };
  return (
    <div>
      <form
        className="relative  flex s-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
        onSubmit={handleSubmitComment}
      >
        <div className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer">
          <div className="mr-5 flex items-center justify-center rounded-full h-[40px] w-[40px] bg-black dark:bg-[#ffff]">
            <div className="text-3xl dark:text-black text-[#ffff]">
              {(userImage || userName) && (
                <div>
                  {userImage ? (
                    <Image
                      className="object-cover rounded-full"
                      src={userImage}
                      alt={userName}
                      width={150}
                      height={150}
                    />
                  ) : (
                    userName.slice(0, 1).toUpperCase()
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <span className="absolute inset-y-0 right-0 flex s-center pr-6">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
          >
            <svg
              fill="#000000"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              version="1.2"
              baseProfile="tiny"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.034-1.434-.967-.967l-11.376 5.308c-1.001.467-.963 1.129.085 1.479l4.103 1.367 1.368 4.102z" />
            </svg>
          </button>
        </span>
        <input
          type="search"
          className="w-full py-2 pl-4 pr-10 text-sm border appearance-none rounded-tg dark:bg-[#ffffff] focus:outline-none focus:shadow-outline-blue"
          style={{ borderRadius: 25 }}
          placeholder="Post a comment..."
          value={newComment}
          required
          onChange={handleInputChange}
        />
      </form>
      <h2 className="flex justify-center text-3xl items-center mb-4">
        Comments
      </h2>
      <div
        style={{ scrollbarWidth: "none" }}
        className="border-b overflow-x-scroll border-t max-h-[500px]"
      >
        <div className="px-6 py-4 border-b">
          {comments.map((item: any, index: number) => (
            <div key={index} className="border-b-[1px] mb-3">
              <div className="flex justify-between ">
                <div className="flex mb-3">
                  <div className="flex items-center justify-center rounded-full h-[50px] w-[50px] mr-3 bg-black dark:bg-[#ffff]">
                    <h1 className="text-3xl dark:text-black text-[#ffff]">
                      {(item.userImage || item.name) && (
                        <div>
                          {item.userImage ? (
                            <Image
                              className="object-cover rounded-full"
                              src={item.userImage}
                              alt={item.name}
                              width={150}
                              height={150}
                            />
                          ) : (
                            item.name.slice(0, 1).toUpperCase()
                          )}
                        </div>
                      )}
                    </h1>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium">
                      {item.name.slice(0, 1).toUpperCase()}
                      {item.name.slice(1, item?.name?.length)}{" "}
                      <span className="text-gray-600 text-sm">
                        {moment(item.createdAt).fromNow()}
                      </span>
                    </h2>
                    <p className="text-sm font-psemibold text-justify">
                      {item?.content}
                    </p>
                  </div>
                </div>

                {item.userId === userId ? (
                  <>
                    <div key={item.id} className="flex flex-row-reverse  ">
                      <div
                        onClick={() => toggleEdit(item.id)}
                        className="flex "
                      >
                        <svg
                          className="mt-2 rotate-90"
                          fill="currentColor"
                          height="20px"
                          width="20px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 32.055 32.055"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path
                              d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
            C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
            s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
            c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
                            />
                          </g>
                        </svg>
                      </div>
                      <div></div>

                      {editCommentId === item.id && (
                        <div className=" items-center ">
                          <button
                            onClick={() => handleEditComment(item)}
                            className="flex justify-center items-center dark:text-[#121212] text-[#ffffff] h-8 w-[80px] bg-[#121212] dark:bg-white border-b "
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteComment(item.id)}
                            className="flex justify-center items-center dark:text-[#121212] text-[#ffffff] h-8  w-[80px] bg-[#121212] dark:bg-white"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div key={item.id} className="flex flex-col mb-2">
                      <div
                        onClick={() => toggleEdit(item.id)}
                        className="flex justify-end"
                      >
                        <svg
                          className="mt-2 rotate-90"
                          fill="currentColor"
                          height="20px"
                          width="20px"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 32.055 32.055"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path
                              d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
            C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
            s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
            c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
                            />
                          </g>
                        </svg>
                      </div>

                      {editCommentId === item.id && (
                        <div className=" items-center">
                          <button className="flex justify-center items-center dark:text-[#121212] text-[#ffffff] h-8 w-[80px] bg-[#121212] dark:bg-white border-b">
                            Report
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
              {editComment?.id === item.id && (
                <div className="flex items-center gap-3 mb-5">
                  <input
                    type="text"
                    placeholder="Enter text"
                    className="p-2 text-gray-800 rounded w-full"
                    value={editComment.content}
                    onChange={(e: any) =>
                      setEditComment((prev: any) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                  />

                  <button
                    onClick={() => {
                      handleCommentEdit(editComment);
                      setEditComment({ id: "", content: "" });
                    }}
                    className="p-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      setEditComment({ id: "", content: "" });
                    }}
                    className="p-2 px-4 bg-purple-500 text-white rounded hover:bg-purple-600"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {alertMessage && (
        <Alert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
};

export default Commentsdata;
