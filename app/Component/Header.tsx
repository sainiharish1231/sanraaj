"use client";
import Logo from "@/public/Logo";
import Image from "next/image";
import Calllogo from "../../public/Calllogo";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import Manu from "../../public/Menu";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Overview", href: "/overview" },
  { name: "Services", href: "/services" },
  { name: "Career", href: "/career" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`  z-[100] sticky top-0  dark:bg-[#101118] bg-white  py-3 sm:pt-10 transition-colors duration-300  ${
        scrolled ? `  dark:bg-[#101118] bg-white  ` : "bg-transparent    d"
      }    `}
    >
      {scrolled
        ? ""
        : /*  <svg
          className="absolute  bottom-0 w-full h-6 sm:-mb-5 s sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="#7910f2"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg> */
          ""}
      <div className="flex flex-wrap items-center px-4 justify-between  lg:px-10 mx-auto">
        <div className="flex flex-row items-center -3 justify-between ">
          <div>
            <Logo className={"sm:h-[60px] sm:w-[60px]  h-[50px] w-[50px]"} />
          </div>
          <h1
            style={{
              textShadow: "0 20px 30px rgba(0, 0, 0, .3)",
            }}
            className="text-[25px] text-black dark:text-[#ffff] xs:text-[30px] sm:text-[40px]  "
          >
            SAN RAJ
          </h1>
        </div>

        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2  mr-4 sm:inline-block">
            <span></span>
          </div>

          <Link
            href={"/contact"}
            className={`text-black dark:text-[#ffff] hidden   focus:ring-4 rounded-2xl font-medium lg:rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  focus:outline-none  lg:flex flex-row justify-center items-center gap-2  cursor-pointer  `}
          >
            <Calllogo
              className={`dark:fill-white  fill-black hover:text-[#7910f2]   hover:fill-[#7910f2] h-9 w-9 lg:dark:border-[#7910f2]  ${
                currentPath === "/contact"
                  ? "lg:text-[#7910f2]  lg:border-b-2 lg:border-tg-primary-color"
                  : ""
              }`}
            />
          </Link>
          <div className="flex justify-center items-center bg-transparent">
            <ThemeSwitch />
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-2 text-sm  text-black  rounded-lg lg:hidden "
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <div className={`w-8 h-8 flex  justify-center items-center `}>
                <Image
                  onClick={toggleMenu}
                  className={`h-6 w-6 transform spin-once  transition-transform duration-200 ease-out`} // Fast animation on close
                  height={5}
                  width={5}
                  src={"/close.svg"}
                  alt={"Close Sidebar"}
                />
                \
              </div>
            ) : (
              <>
                <div
                  onClick={toggleMenu}
                  className="h-8 w-8    transition-transform duration-500 ease-in delay-200"
                >
                  <Manu className="dark:fill-white fill-[#050505] dark:text-white  text-black" />
                </div>
              </>
            )}
          </button>
        </div>
        <div
          className={`items-center flg:justify-between   lg:relative fixed   top-0 z-[-10] lg:z-0  lg:bg-transparent   lg:w-auto lg:order-1  left-0 bg-[#101118] text-white w-full h-full overflow-y-auto  ${
            isOpen
              ? "translate-x-0 lg:translate-x-full transition-transform ease-in-out duration-300 "
              : "translate-x-full lg:translate-x-0 transition-transform ease-in-out duration-300 "
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex  lg:bg-[#010314] lg:rounded-full  2xl:gap-20  lg:gap-10 flex-col mt-14 sm:mt-24 p-5 lg:items-center lg:justify-center font-medium lg:flex-row  lg:mt-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`lg:block py-2 pl-3 pr-4  border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:bg-[--tg-primary-color] lg:hover:text-[--tg-primary-color] lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 lg:dark:border-[--tg-primary-color] flex ${
                    currentPath === item.href
                      ? "lg:text-white   text-[--tg-primary-color] lg:border-b-2 lg:border-tg-primary-color"
                      : ""
                  }`}
                  aria-current={currentPath === item.href ? "page" : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href={"/contact"}
              className={`lg:block py-2 pl-3 pr-4  border-b border-gray-100 lg:hover:bg-transparent lg:border-0 hover:bg-[--tg-primary-color] lg:hover:text-[--tg-primary-color] lg:p-0  lg:dark:hover:bg-transparent dark:border-gray-700 lg:dark:border-[--tg-primary-color] flex ${
                currentPath === "/contact"
                  ? "lg:text-white   text-[--tg-primary-color] lg:border-b-2 lg:border-tg-primary-color"
                  : ""
              }`}
              aria-current={currentPath === "/contact" ? "page" : undefined}
            >
              <span className="lg:hidden">{"Contact"}</span>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
