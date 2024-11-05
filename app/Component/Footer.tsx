"use client";
import Logo from "@/public/Logo";
import Phone from "@/public/Phone";
import React, { useEffect, useState } from "react";
import Gmail from "@/public/Gmail";
import Screentop from "./Screentop";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Overview", href: "/overview" },
  { name: "Services", href: "/services" },
  { name: "Career", href: "/career" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];
const Footer: React.FC = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative     bg-[#ffff] dark:bg-[#101118] text-black  dark:text-[#ffff]  bg-deep-purple-accent-400  ">
      <svg
        className="absolute top-0  rotate-180 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="#7910f2"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="flex flex-col items-center text-center text-surface">
        <div className="container pt-9  flex  justify-center  flex-col sm:flex-row sm:justify-between">
          <div className="mb-6   flex justify-center  items-centerspace-x-2">
            <Logo className={"h-28 w-28"} />
            <div className={` flex  flex-col justify-center items-center `}>
              <h2
                style={{
                  textShadow: "0 20px 30px rgba(0, 0, 0, .3)",
                }}
                className="  text-black dark:text-[#ffff] "
              >
                San Raj
              </h2>
              <h4 className="  text-black dark:  dark:text-[#ffff] ">
                Software Solutions
              </h4>
            </div>
          </div>
          <div className="mb-6 flex justify-center items-center space-x-2">
            <a
              href="https://www.facebook.com/sanrajsoftware"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-[#7910f2] focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </a>

            <a
              href="https://twitter.com/sri_software"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-[#7910f2] focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.sanraaj.com/"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-[#7910f2] focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.instagram.com/sri_software/"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-[#7910f2] focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/raj-kumar-57712a118/"
              type="button"
              className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-[#7910f2] focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
              data-twe-ripple-init
            >
              <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full  text-black dark:text-[#ffff]  items-center text-center text-surface">
          <div className="container p-4  flex flex-col sm:flex-row gap-5 justify-between">
            <div>
              <h3>QUICK LINKS</h3>
              <div className="flex flex-row justify-center">
                <ul className="flex  pt-2 font-medium flex-col ">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`block py-2  hover:bg-transparent border-0 lg:border-0  hover:text-[--tg-primary-color]   dark:hover:bg-transparent dark:border-[--tg-primary-color]  ${
                          currentPath === item.href
                            ? "text-[--tg-primary-color]       border-b-2 border-[--tg-primary-color]  lg:border-b-2 lg:border-tg-primary-color"
                            : " text-black dark:text-[#ffff]"
                        }`}
                        aria-current={
                          currentPath === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" text-black dark:text-[#ffff]">
              <h3>CONTACT US</h3>
              <div className=" flex flex-row   text-black dark:text-[#ffff] items-center cursor-pointer mt-5 justify-center gap-5">
                <div className="h-7 w-7  flex bg-white rounded-full   text-black dark:text-[#ffff] justify-center items-center">
                  <Phone className="h-10 w-10  fill-[#7910f2] " />
                </div>
                <div className="flex justify-center items-center  text-black dark:text-[#ffff] hover:text-[#7910f2]">
                  <h6>+91 8769938925</h6>
                </div>
              </div>
              <div className=" flex flex-row items-center cursor-pointer mt-5 justify-center gap-5">
                <div className="h-7 w-7 flex justify-center items-center">
                  <Gmail className="h-8 w-8 bg  fill-white hover:fill-[#7910f2] " />
                </div>
                <div className="flex justify-center items-center hover:text-[#7910f2]">
                  <h6>raj@sanraaj.com</h6>
                </div>
              </div>
              <div className="mt-10 flex flex-row items-center justify-center cursor-pointer hover:underline">
                <a className="text-2xl hover:text-[#7910f2]" href="">
                  Terms of use Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black/5 p-4 text-center">
          © 2024 Copyright:{"  "}
          <a href=""> San Raj</a>
        </div>
      </div>
      <Screentop />{" "}
    </div>
  );
};

export default Footer;
