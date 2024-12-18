"use client";
import NewsService from "@/services/NewsService";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
interface SearchResult {
  slug_key: string;
  image_url: string;
  title: string;
}

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [searchbox, setSearchbox] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
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

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      updateSearchHistory(searchTerm);
      fetchSearchResults(searchTerm);
      setSearchTerm("");
      setShowSuggestions(true);
    }
  };

  return (
    <>
      {searchbox ? (
        <>
          <form onSubmit={handleFormSubmit}>
            <div className="flex w-[97%]  top-0 sm:justify-between    absolute m-2 left-0 bg-white dark:bg-[#121212]  sm:top-0 text-black dark:text-[#ffffff]  border border-[#9333ea]  sm:py-2 sm-px-2 py-2 px-2 rounded-2xl">
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
                  className="flex flex-col  relative  h-full w-full mr-7  items-center transition ease-in duration-200 hover:text-[#9333ea]"
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
            <div
              onClick={() => setShowSuggestions(false)}
              className="fixed h-full mt-[50px]  items-center top-0 left-0  right-0 w-full"
            >
              <div className="max-w-[750px] dark:bg-[#121212] p-2 bg-[#ffff] container h-screen">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <>
                      <Link
                        key={index}
                        href={`/${result.slug_key}`}
                        onClick={() => {
                          setShowSuggestions(false);
                          setSearchTerm("");
                          setSearchbox(false);
                        }}
                      >
                        <div className="flex flex-row gap-3">
                          <div className="w-[30%]  h-auto mb-2 relative aspect-[1.67]">
                            <Image
                              className="rounded-md object-cover"
                              fill
                              src={result.image_url}
                              alt={"Times news image for " + result.title}
                            />
                          </div>
                          <div className="w-[70%] justify-between flex flex-col ">
                            <div>
                              <h2
                                className="hover:underlin font-psemibold mb-2 text-[15px]"
                                style={{ scrollbarWidth: "none" }}
                              >
                                {result.title}
                              </h2>
                            </div>
                            <div>
                              <h2
                                className="hover:underlin  font-psemibold mb-2 text-[15px]"
                                style={{ scrollbarWidth: "none" }}
                              ></h2>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </>
                  ))
                ) : (
                  <div className="text-center h-full flex text-lg justify-center items-center text-gray-300">
                    No news found
                  </div>
                )}
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
              className="flex flex-col h-10 w-10  justify-center float-right relative  items-center transition ease-in duration-200 hover:text-[#9333ea]"
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
        <div className="sm:flex hidden sm:w-[93%] lg:w-full my-5 mr-40 top-0 sm:relative absolute left-0 bg-white dark:bg-[#121212] sm:top-0 text-[black] dark:text-[#ffffff] border border-[#9333ea] sm:py-2 sm-px-2 py-4 px-4 rounded-2xl">
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
              className="flex flex-col  relative  h-full w-full  mr-7  items-center transition ease-in duration-200 hover:text-[#9333ea]"
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
        <div
          className="fixed hidden sm:flex h-full flex-col mt-[60px] items-center top-0 left-0 right-0 w-full"
          onClick={() => setShowSuggestions(false)} // Close on clicking outside
        >
          <div
            style={{ scrollbarWidth: "none" }}
            className="max-w-[750px] max-h-screen mb-40 overflow-y-scroll dark:bg-[#121212] p-4 text-[black] dark:text-[#ffffff] bg-[#ffffff] container border border-[#9333ea] sm:py-2 sm:px-2 py-4 px-4 rounded-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside
          >
            <div className="py-1 ">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <>
                    <Link
                      key={index}
                      href={`/${result.slug_key}`}
                      onClick={() => {
                        setShowSuggestions(false);
                        setSearchTerm("");
                      }}
                    >
                      <div className="flex flex-row gap-3">
                        <div className="w-[30%]  h-auto mb-2 relative aspect-[1.67]">
                          <Image
                            className="rounded-md object-cover"
                            fill
                            src={result.image_url}
                            alt={"Times news image for " + result.title}
                          />
                        </div>
                        <div className="w-[70%] justify-between flex flex-col ">
                          <div>
                            <h2
                              className="hover:underlin font-psemibold mb-2 text-[15px]"
                              style={{ scrollbarWidth: "none" }}
                            >
                              {result.title}
                            </h2>
                          </div>
                          <div>
                            <h2
                              className="hover:underlin  font-psemibold mb-2 text-[15px]"
                              style={{ scrollbarWidth: "none" }}
                            ></h2>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                ))
              ) : (
                <div className="text-center text-gray-500">No news found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
