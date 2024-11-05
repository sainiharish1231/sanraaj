import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Paragraph {
  text: JSX.Element | string;
}

interface BackgroundContent {
  heading: string;
  paragraphs: Paragraph[];
}

interface Feature {
  imgSrc: string;
  title: string;
  description: string;
}

interface CareerProps {
  features: Feature[];
  sanRajBackgroundContent: BackgroundContent;
}

export default function Career({
  features,
  sanRajBackgroundContent,
}: CareerProps) {
  return (
    <div className="mb-20 bg-white dark:bg-black p-6  text-center">
      <div className="flex   justify-center flex-col items-center">
        <h2 className="text-black dark:text-white">
          Are you passionate to Learn and Grow{" "}
          <span className=" rotate-90 text-red-400">❓</span> Join us !
        </h2>
        <p className="mx-2  my-8 text-black dark:text-white text-xl ">
          Working at San Raj means Learning everyday. We do what we love and
          love what we do. We are young, and we are growing. Do you want to be a
          part of this journey? Come and join us! 😊 😊 😊 ...
        </p>
      </div>
      <div className="relative overflow-hidden bg-[#7910f2] mb-4  rounded-2xl sm:m-6">
        <div
          style={{ backgroundImage: "url('/bg.svg')" }}
          className="p-4 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row gap-5  justify-between items-center ">
            <div className="text-xl sm:text-3xl">
              Discover Your Career Path with Sanraj
            </div>

            <Link
              title={"Job"}
              className="inline-flex items-center justify-center p-4    font-bold text-gray-900  z-[11] cursor-pointer bg-white rounded-xl"
              href={"/job"}
            >
              Find Job
            </Link>
          </div>
        </div>
        <span className="absolute bottom-0 sm:top-0 right-0 z-10">
          <svg
            width="388"
            height="250"
            viewBox="0 0 388 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L0 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6910)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6910"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute    bottom-0  sm:top-0  right-0 z-10">
          <svg
            width="324"
            height="250"
            viewBox="0 0 324 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.05"
              d="M203 -28.5L0 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z"
              fill="url(#paint0_linear_971_6911)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_971_6911"
                x1="60.5"
                y1="111"
                x2="287"
                y2="111"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.520507" stopColor="white"></stop>
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div className="mb-4">
        <div className=" mx-auto  py-4 sm:px-4">
          <div className=" mx-auto  grid grid-cols-1 gap-y-8 gap-x-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" gap-x-6 rounded-lg shadow-lg p-6  service-card
                  hover:bg-[#7910f2] transition-transform duration-300 transform hover:scale-80 flex text-left lg:block lg:text-center"
              >
                <div className="sm:flex-shrink-0 flex justify-center items-center">
                  <div className="bg-[#121212] rounded-full h-20 w-20 flex justify-center items-center">
                    <Image
                      height={400}
                      width={400}
                      className=" mx-auto"
                      src={feature.imgSrc}
                      alt={feature.title}
                    />
                  </div>
                </div>
                <div className="flex  justify-center items-center lg:py-2">
                  <h2 className="text-xl font-semibold mb-2 transition-colors duration-300 text-black dark:text-white hover:text-blue-500">
                    {feature.title}
                  </h2>
                  <p className="mt-2  text-gray-300">
                    {/* {feature.description} */}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6  rounded-xl">
        <h2 className="details-heading mb-2 text-black dark:text-white">
          {sanRajBackgroundContent.heading}
        </h2>
        <div className="details-content">
          {sanRajBackgroundContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg  text-black dark:text-white font-semibold mb-2 transition-colors duration-300"
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
