"use client";
import NewsService from "@/services/NewsService";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [searchbox, setSearchbox] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Simulated API call to fetch search results
  const fetchSearchResults = async (query: string) => {
    const response = (await NewsService.search(query)).data;

    setSearchResults(response.news);
  };

  useEffect(() => {
    if (searchTerm.trim().length < 90) {
      fetchSearchResults(searchTerm);
    } else {
      setShowSuggestions(true);
    }
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    updateSearchHistory(suggestion);
    setShowSuggestions(true);
    setSearchResults([suggestion]); // Show only the selected suggestion as result
  };

  const updateSearchHistory = (term: string) => {
    setSearchHistory((prevHistory) => {
      const updatedHistory = [
        term,
        ...prevHistory.filter((item) => item !== term),
      ];
      return updatedHistory.slice(0, 15); // Limit to 5 recent searches
    });
  };

  const handleSearchBarClick = () => {
    if (searchInputRef.current) {
      const currentTerm = searchInputRef.current.value.trim();
      if (currentTerm !== "" && !searchHistory.includes(currentTerm)) {
        updateSearchHistory(currentTerm);
      }
    }
    setShowSuggestions(true);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      updateSearchHistory(searchTerm);
      fetchSearchResults(searchTerm);
      setSearchTerm("");
      setShowSuggestions(true);
    }
  };
  const containerRef = useRef<HTMLDivElement>(null);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {searchbox ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <div
              className="flex w-[97%]  top-0 sm:justify-between    absolute m-2 left-0 bg-white dark:bg-[#121212] 
             sm:top-0 text-black dark:text-[#ffffff]  border border-[#9333ea]  sm:py-2 sm-px-2 py-2 px-2 rounded-2xl"
            >
              <input
                ref={searchInputRef}
                placeholder="Search"
                value={searchTerm}
                onChange={handleInputChange}
                onClick={handleSearchBarClick}
                className="px-2 dark:bg-[#121211] w-full rounded-md flex-1 outline-none"
                required
              />
              <button type="submit" className="h-6 w-6">
                <div
                  onClick={() => (
                    <>
                      {updateSearchHistory(searchTerm)},{setSearchbox(false)},
                      {fetchSearchResults(searchTerm)},
                      {setShowSuggestions(true)}
                    </>
                  )}
                  className="flex flex-col  relative  h-full w-full mr-7  items-center transition ease-in duration-200 hover:text-[#9333ea] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>
          {showSuggestions && (
            <div className="fixed   h-full   mt-[50px]  items-center top-0 left-0  right-0 w-full">
              <div className="max-w-[750px]   dark:bg-[#121212] p-2 bg-[#ffffff] container h-full">
                {/*  {searchHistory.length > 0 && (
                  <div className="px-3 py-1 flex justify-between items-center text-sm text-gray-400">
                    Recent searches:
                    <button
                      className="text-xs text-gray-500 hover:text-gray-300"
                      onClick={handleClearHistory}
                    >
                      Clear
                    </button>
                  </div>
                )}
                <ul className="py-1">
                  {searchHistory.map((item, index) => (
                    <li
                      key={index}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-600 flex justify-between items-center"
                    >
                      <span
                        onClick={() => {
                          setSearchTerm(item);
                          setShowSuggestions(true);
                          updateSearchHistory(item); // Remove from history
                        }}
                        className="w-full h-full"
                      >
                        {item}
                      </span>
                      <button
                        className="text-xs text-gray-500 hover:text-gray-300 ml-2"
                        onClick={() => {
                          setSearchHistory((prevHistory) =>
                            prevHistory.filter((_, i) => i !== index)
                          );
                        }}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul> */}

                {searchResults.map((result: any, index) => (
                  <>
                    <Link
                      href={`/${result.slug_key}`}
                      onClick={() => {
                        setShowSuggestions(false),
                          setSearchbox(false),
                          setSearchTerm("");
                      }}
                    >
                      <div className=" flex p-4  gap-x-10 ">
                        <Image
                          className="h-20  object-cover w-20"
                          height={800}
                          width={800}
                          src={`${result.image_url}`}
                          alt={""}
                        />

                        <p
                          style={{ scrollbarWidth: "none" }}
                          className=" break-all  h-20  overflow-y-auto justify-start cursor-pointer"
                        >
                          {result.title}
                        </p>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div onClick={() => setSearchbox(true)} className="sm:hidden">
            <div
              onClick={() => (
                <>
                  {updateSearchHistory(searchTerm)},
                  {fetchSearchResults(searchTerm)},{setSearchTerm("")};
                  {setShowSuggestions(true)},{setSearchTerm("")}
                </>
              )}
              className="flex flex-col h-10 w-10  justify-center float-right relative  items-center transition ease-in duration-200 hover:text-[#9333ea] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </>
      )}

      <form onSubmit={handleFormSubmit}>
        <div
          className="sm:flex hidden sm:w-[93%] lg:w-full my-5 mr-40 top-0 sm:relative absolute left-0 bg-white dark:bg-[#121212] 
             sm:top-0 text-[black] dark:text-[#ffffff] border border-[#9333ea] sm:py-2 sm-px-2 py-4 px-4 rounded-2xl"
        >
          <input
            ref={searchInputRef}
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
            onClick={handleSearchBarClick}
            className="px-2 dark:bg-[#121211] w-full rounded-md flex-1 outline-none"
            required
          />
          <button type="submit" className="h-6 w-6">
            <div
              onClick={() => (
                <>
                  {updateSearchHistory(searchTerm)},
                  {fetchSearchResults(searchTerm)},{setSearchTerm("")};
                  {setShowSuggestions(false)},{},{setSearchTerm("")}
                </>
              )}
              className="flex flex-col  relative  h-full w-full  mr-7  items-center transition ease-in duration-200 hover:text-[#9333ea] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>

      {showSuggestions && (
        <div className="fixed hidden sm:flex h-full flex-col mt-[60px] items-center top-0 left-0 right-0 w-full">
          <div
            ref={containerRef}
            className="max-w-[750px] dark:bg-[#121212] p-4 text-[black] dark:text-[#ffffff] bg-[#ffffff] container border border-[#9333ea] sm:py-2 sm-px-2 py-4 px-4 rounded-2xl"
          >
            <div className="py-1">
              {searchResults.map((result: any, index) => (
                <Link
                  key={index}
                  href={`/${result.slug_key}`}
                  onClick={() => {
                    setShowSuggestions(false);
                    setSearchTerm("");
                  }}
                >
                  <div className="flex p-4 gap-x-10">
                    <Image
                      className="h-20 object-cover w-20"
                      height={800}
                      width={800}
                      src={`${result.image_url}`}
                      alt=""
                    />
                    <p
                      style={{ scrollbarWidth: "none" }}
                      className="break-all h-20 overflow-y-auto justify-start cursor-pointer"
                    >
                      {result.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Optional search history component */}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
