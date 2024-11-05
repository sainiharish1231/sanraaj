"use client";

import Alert from "@/app/components/Alert/Alert";
import { customToast } from "@/app/components/CustomToast";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

import { MdClose } from "react-icons/md";

interface addNewsDataTypes {
  slug_key: string;
  title: string;
  categoryId: string;
  image?: File;
  description: string;
  article: string;
  keywords: string[];
}

interface category {
  id: string;
  categoryName: string;
  parentId: string;
}

interface prope {
  category: category[];
}

const AddNews: React.FC<prope> = (props) => {
  const { data: session, status }: any = useSession();
  const user = session?.user;
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [keywordInput, setKeywordInput] = useState("");
  const { category } = props;

  const [addNewsData, setAddNewsData] = useState<addNewsDataTypes>({
    slug_key: "",
    title: "",
    categoryId: "",
    image: undefined,
    description: "",
    article: "",
    keywords: [],
  });

  const slugKeyPattern = /^[a-zA-Z0-9-]+$/;

  const CKEditorChangeHandler = (editor: any) => {
    const htmlData = editor.getData();
    setAddNewsData((prevData) => ({
      ...prevData,
      article: htmlData,
    }));
  };

  const handleKeyWords = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keywordInput.trim()) {
      setAddNewsData((prevData) => ({
        ...prevData,
        keywords: [...prevData.keywords, keywordInput.trim()],
      }));
      setKeywordInput("");
      e.preventDefault();
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setAddNewsData((prevData) => ({
      ...prevData,
      keywords: prevData.keywords.filter((_, i) => i !== index),
    }));
  };

  const handleChangeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setAddNewsData({ ...addNewsData, [e.target.name]: e.target.value });
    if (e.target.name === "slug_key") {
      if (!slugKeyPattern.test(e.target.value)) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  const onSubmit = async () => {
    if (error) {
      setAlertMessage("Invalid slug key");
      return;
    } else {
      const body = new FormData();
      Object.entries(addNewsData).forEach(([key, val]) => {
        if (val instanceof File) {
          body.append(key, val);
        } else if (Array.isArray(val)) {
          val.forEach((keyword) => body.append(`${key}[]`, keyword));
        } else {
          body.append(key, val as string);
        }
      });

      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/news`, {
        method: "POST",
        headers: {
          authorization: `${user.token}`,
        },
        cache: "no-cache",
        body,
      });

      const result = await response.json();

      if (result.success) {
        customToast(result.message,"success")
        setAddNewsData({
          slug_key: "",
          title: "",
          categoryId: "",
          image: undefined,
          description: "",
          article: "",
          keywords: [],
        });
      } else {customToast(result.message,"error")
      }
    }
  };

  const handleCloseAlert = () => {
    setAlertMessage(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    setAddNewsData({
      ...addNewsData,
      image: file,
    });
  };

  return (
    <>
      <div className="flex flex-row mb-[100px] lg:flex-row max-w-5xl mx-auto">
        <div className="p-6 flex-1">
          <h1 className="text-3xl font-bold mb-6">Add a news</h1>

          <form className="shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="urlKey">
                {error ? (
                  <h3 className="text-red-600 text-lg">Invalid sulg_key</h3>
                ) : (
                  "Slug Key"
                )}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 leading-tight focus:outline-none focus:shadow-outline px-5 bg-white dark:bg-[#121212] border-[#9333ea]"
                id="urlKey"
                type="text"
                name="slug_key"
                placeholder="Enter URL key..."
                value={addNewsData.slug_key}
                onChange={handleChangeHandler}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-[#121212] border-[#9333ea]"
                id="title"
                type="text"
                placeholder="Enter title..."
                name="title"
                value={addNewsData.title}
                onChange={handleChangeHandler}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="category"
              >
                Select category
              </label>

              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-[#121212] border-[#9333ea]"
                id="category"
                name="categoryId"
                onChange={handleChangeHandler}
                value={addNewsData.categoryId}
              >
                <option value="">Choose a category...</option>

                {category.map((item: any) => (
                  <option key={item.id} value={item.id}>
                    {item.categoryName}
                  </option>
                ))}
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
                className="block text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="bg-white dark:bg-[#121212] shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none border-[#9333ea]"
                id="description"
                placeholder="Enter news Description..."
                name="description"
                value={addNewsData.description}
                onChange={handleChangeHandler}
              ></textarea>
            </div>

            <div className="mb-6 ">
              <label className="block text-sm font-bold mb-2" htmlFor="article">
                Article
              </label>
              <div className="bg-white dark:bg-[#121212] appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none resize-none border-[#9333ea] break-all overflow-wrap word-break max-w-full  ">
                <CKEditor
                  editor={ClassicEditor}
                  data={addNewsData.article}
                  onChange={(e, editor) => CKEditorChangeHandler(editor)}
                />
              </div>
            </div>

            <div className="mb-4 ">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="keywords"
              >
                Keywords
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-white dark:bg-[#121212] border-[#9333ea]"
                id="keywords"
                type="text"
                placeholder="Enter Keywords..."
                name="keywords"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyDown={handleKeyWords}
              />

              <div className="mt-2">
                {addNewsData.keywords?.map((keyword, index) => (
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
                onClick={onSubmit}
              >
                Add News
              </button>
            </div>
          </form>
        </div>
        {alertMessage && (
          <Alert message={alertMessage} onClose={handleCloseAlert} />
        )}
        {/* <div className="flex-1 h-screen">
          <Preview news={addNewsData} />
        </div> */}
      </div>
    </>
  );
};

export default AddNews;
