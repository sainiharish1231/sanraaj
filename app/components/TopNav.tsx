"use client";
import { useTheme } from "next-themes";

import React, { useEffect } from "react";

import SearchComponent from "./Search";

import { IoMdSunny } from "react-icons/io";

import { RiMoonFoggyLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setTheme("system"), []);

  const isDark = resolvedTheme === "dark";

  return isDark ? (
    <button>
      <IoMdSunny
        className="h-8 w-8  cursor-pointer"
        onClick={() => setTheme("light")}
      />
    </button>
  ) : (
    <button>
      <RiMoonFoggyLine
        className="h-8  w-8 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    </button>
  );
};

const TopNav = () => {
  return (
    <>
      <div
        className={`fixed z-[100000] top-0  dark:bg-[#121212] bg-[#ffffff] w-full h-[63px]  flex items-center justify-between`}
      >
        <div className="flex flex-row justify-center pl-3 items-center">
          <div className="h-[40px] inline-block aspect-square relative bg-white rounded-full">
            <Image src="/img/logo.png" alt="Times news logo" fill />
          </div>

          <Link
            href={"/"}
            className="flex px-4 font-bold text-xl xs:text-3xl bg-red  whitespace-nowrap"
          >
            Times News
          </Link>
        </div>

        <div className="w-full justify-end sm:justify-center pr-6 sm:mr-0 items-center flex">
          <SearchComponent />
        </div>
        <div className="flex flex-row justify-center pr-3 items-center">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default TopNav;
