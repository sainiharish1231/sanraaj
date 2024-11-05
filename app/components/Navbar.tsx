import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="fixed z-[400000000000] s-center transition ease-in duration-200 hover:text-[#9333ea]
        inset-x-0
        bottom-0 
       "
      >
        <div
          className="sticky bottom-2  p-4 px-6 m-2 flex items-center justify-between dark:bg-[#ffffff] bg-[#232323] shadow-2xl
         text-[#ffffff] dark:text-[#232323] rounded-full cursor-pointer"
        >
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:text-[#9333ea] "
            href={"/"}
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
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              ></path>
            </svg>
          </Link>
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:fill-[#9333ea] "
            href={"/explorer"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:stroke-[#9333ea]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12L12 18L3 12M21 16L12 22L3 16M21 8L12 14L3 8L12 2L21 8Z"
              />
            </svg>
          </Link>
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:text-[#9333ea] "
            href={"/save"}
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
                strokeWidth={2.3}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </Link>
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:text-[#9333ea] "
            href={"/profile"}
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
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
