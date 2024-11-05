"use client";
import Preview from "./Preview";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Alert from "../../components/Alert/Alert";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";

function EditNews({ editModalNews, categories }: any) {
  const [news, setNews] = useState(editModalNews);
  const router = useRouter();
  const { data: user }: any = useSession();
  const [keywords, setKeywords] = useState("");
  const [error, setError] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const slugKeyPattern = /^[a-zA-Z0-9-]+$/;

  const CKEditorChangeHandler = (editor: any) => {
    const htmlData = editor.getData();
    setNews((prevData: any) => ({
      ...prevData,
      article: htmlData,
    }));
  };

  const handleKeyWords = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keywords.trim()) {
      setNews((prevData: any) => ({
        ...prevData,
        keywords: [...prevData.keywords, keywords.trim()],
      }));
      setKeywords("");
      e.preventDefault();
    }
  };

  const handleRemoveKeyword = (index: any) => {
    setNews((prevData: any) => ({
      ...prevData,
      keywords: prevData.keywords.filter((_: string, i: number) => i !== index),
    }));
  };

  const handleChangeHandler = (e: any) => {
    setNews({ ...news, [e.target.name]: e.target.value });
    if (e.target.name === "slug_key") {
      if (!slugKeyPattern.test(e.target.value)) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const onSubmit = async (id: any) => {
    if (error) {
      setAlertMessage("Invalid slug key");
      return;
    } else {
      const body = new FormData();

      Object.entries(news).forEach(([key, val]) => {
        if (val instanceof File) {
          body.append(key, val);
        } else if (Array.isArray(val)) {
          val.forEach((keyword) => body.append(`${key}[]`, keyword));
        } else {
          body.append(key, val as string);
        }
      });

      const response: any = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/news/${id}`,
        {
          method: "PUT",
          headers: {
            authorization: `${user.token}`,
          },
          cache: "no-cache",
          body,
        }
      );

      const result = await response.json();
      if (result.success) {
        setAlertMessage(result.message);
        router.push(`/admin/news`);
        setNews({
          slug_key: "",
          title: "",
          categoryId: "",
          image: undefined,
          description: "",
          article: "",
          keywords: [],
        });
      } else {
        setAlertMessage(result.message);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setNews({
      ...news,
      image: file,
    });
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  return (
    <>
      <div className="flex flex-row mb-[100px] lg:flex-row ">
        <div className="p-6  flex-1 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 ">Update News</h1>

          <form className="shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="urlKey">
                {error ? (
                  <h3 className="text-red-600 text-lg">No space allowed</h3>
                ) : (
                  "Slug Key"
                )}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2  leading-tight focus:outline-none focus:shadow-outline px-5 bg-white dark:bg-[#121212] border-[#9333ea] "
                id="urlKey"
                type="text"
                name="slug_key"
                placeholder="Enter URL key..."
                value={news.slug_key}
                onChange={handleChangeHandler}
              />
            </div>

            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-[#121212] border-[#9333ea] "
                id="title"
                type="text"
                placeholder="Enter title..."
                name="title"
                value={news.title}
                onChange={handleChangeHandler}
              />
            </div>

            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="category"
              >
                Select category
              </label>

              <select
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-[#121212] border-[#9333ea] "
                id="category"
                name="categoryId"
                onChange={handleChangeHandler}
                value={news.categoryId}
              >
                <option value="">Choose a category...</option>

                {categories.data?.map((item: any) => {
                  return (
                    <option
                      value={item.id}
                      selected={news.category === item.categoryName}
                    >
                      {item.categoryName}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col my-4">
              <label htmlFor="image">Image Upload</label>
              <input
                type="file"
                name="image_url"
                id="image"
                accept="image/*"
                onChange={handleFileChange}
                className="bg-white dark:bg-[#121212] mt-2 p-2 border border-[#9333ea] focus:outline-none focus:ring-0 rounded text-sm"
              />
            </div>

            <div className="mb-6">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="bg-white dark:bg-[#121212] shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline h-32 resize-none border-[#9333ea] "
                id="description"
                placeholder="Enter news Description..."
                name="description"
                value={news.description}
                onChange={handleChangeHandler}
              ></textarea>
            </div>

            <div className="mb-6">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="article"
              >
                Article
              </label>
              <div className="bg-white dark:bg-[#121212]  appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none  resize-none border-[#9333ea] ">
                <CKEditor
                  editor={ClassicEditor}
                  data={news.article}
                  onChange={(e, editor) => {
                    CKEditorChangeHandler(editor);
                  }}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block  text-sm font-bold mb-2"
                htmlFor="keywords"
              >
                Key Words
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-[#121212] border-[#9333ea] "
                id="keywords"
                type="text"
                placeholder="Enter Kew Words..."
                name="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                onKeyDown={handleKeyWords}
              />
              <div className="mt-2">
                {news.keywords?.map((keyword: any, index: any) => (
                  <div
                    key={index}
                    className="inline-block items-center bg-purple-300 rounded-full m-2 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    <span className="flex text-center items-center">
                      <span>{keyword}</span>
                      <MdClose
                        className="ml-2 cursor-pointer"
                        onClick={() => handleRemoveKeyword(index)}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={() => onSubmit(news.id)}
              >
                Update News
              </button>
            </div>
          </form>
        </div>
        {alertMessage && (
          <Alert message={alertMessage} onClose={handleCloseAlert} />
        )}
        {/* 
        <div className="flex-1 h-screen">
          <Preview news={news} />
        </div> */}
      </div>
    </>
  );
}

export default EditNews;
