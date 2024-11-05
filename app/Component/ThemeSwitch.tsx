"use client";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

import { IoMdSunny } from "react-icons/io";

import { RiMoonFoggyLine } from "react-icons/ri";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{setTheme("dark")}</>;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <div
        className={` z-[10000000]  clear-start  w-full h-full  flex items-center justify-between`}
      >
        <div className="w-full  flex justify-center items-center mr-6 ">
          {isDark ? (
            <IoMdSunny
              className="h-10  w-10 text-black dark:text-white   "
              onClick={() => setTheme("light")}
            />
          ) : (
            <RiMoonFoggyLine
              className="h-10  w-10 text-black dark:text-white  "
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;
