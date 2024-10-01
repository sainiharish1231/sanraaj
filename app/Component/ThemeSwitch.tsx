"use client";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

import { IoMdSunny } from "react-icons/io";

import { RiMoonFoggyLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  const currentPath = usePathname();
  useEffect(() => setMounted(true), []);

  if (!mounted) return <>{setTheme("dark")}</>;

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <div
        className={`fixed z-[10000] top-0 bg-[#${
          isDark ? "121212" : "ffffff"
        }] w-full h-[63px]  flex items-center justify-between`}
      >
        <div className="w-full  flex justify-center items-center mr-6 ">
          <div className="w-full justify-end sm:justify-center mr-6 sm:mr-0 items-center flex"></div>
          {isDark ? (
            <IoMdSunny
              className="h-10  w-10"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <RiMoonFoggyLine
              className="h-10  w-10"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;
