"use client";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

import SearchComponent from "./Search";

import { IoMdSunny } from "react-icons/io";

import { RiMoonFoggyLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setTheme("system"), []);

  const isDark = resolvedTheme === "dark";

  return isDark ? (
    <IoMdSunny className="h-10  w-10" onClick={() => setTheme("light")} />
  ) : (
    <RiMoonFoggyLine className="h-10  w-10" onClick={() => setTheme("dark")} />
  );
};

const TopNav = () => {
  const currentPath = usePathname();

  return (
    <>
      <div
        className={`fixed z-[10000] top-0 dark:bg-[#121212] bg-[#ffffff] w-full h-[63px]  flex items-center justify-between`}
      >
        <Link
          href={"/"}
          className="font-bold text-3xl bg-red p-3 sm:p-5 whitespace-nowrap"
        >
          Times News
        </Link>
        <div className="w-full  flex justify-center items-center mr-6 ">
          <div className="w-full justify-end sm:justify-center mr-6 sm:mr-0 items-center flex">
            {currentPath === "/" ? <SearchComponent /> : <SearchComponent />}
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default TopNav;
