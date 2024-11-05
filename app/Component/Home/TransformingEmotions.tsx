import React from "react";
import "./sliderStyles.css";

import Technologies from "./Technologies";
import Team from "./SanrajTeam/Team";
import Link from "next/link";

interface TransformingEmotionsSection {
  title: string;
  content: string;
  logo: React.ReactNode;
  additionalContent?: string;
  isRight?: boolean;
}

interface TransformingEmotionsContent {
  title: string;
  subtitle: string[];
  sections: TransformingEmotionsSection[];
}

interface TransformingEmotionsProps {
  content: TransformingEmotionsContent; // Define the prop type
}

const TransformingEmotions: React.FC<TransformingEmotionsProps> = ({
  content,
}) => {
  return (
    <>
      <div className="w-full  font-psemibold bg-[#ffff] dark:bg-[#101118] text-black dark:text-[#ffff]">
        <div className="z-[2]  mx-auto p-8 flex flex-col justify-between items-center overflow-hidden md:rounded-lg md:p-10 lg:p-12">
          <p className="font-sans text-3xl font-bold lg:text-lg lg:pr-24 md:text-xl justify-center items-center flex">
            {content.title}
          </p>

          <div className=" text-lg  font-psemibold max-w-[1500px] sm:text-lg pb-8 border-b border-gray-800 mt-10">
            {content.subtitle.map((line, index) => (
              <span key={index} className={index === 0 ? "" : "text-lg "}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        <p className="font-psemibold  text-4xl font-bold lg:text-7xl pr-4 md:text-6xl flex justify-center items-center">
          Why Clients Choose
        </p>
        <p className="font-sans text-4xl flex font-bold text-gray-400 md:text-8xl justify-center items-center">
          Us <span className="text-red-600 rotate-12 translate-x-90">?</span>
        </p>

        <div className="mx-auto px-24 flex justify-center items-center flex-col">
          {content.sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row max-w-[1500px] justify-center items-center ${
                index % 2 ? "lg:flex-row-reverse  lg:gap-48" : "lg:gap-48 "
              } border-b pb-8 border-gray-600`}
            >
              <div className="flex flex-col items-baseline justify-center">
                <h2 className="z mt-4 h-[30px] mb-2 w-full sm:h-[60px] text-xl  flex lg:justify-start justify-center  items-center xl:text-5xl text-pretty opacity-100">
                  {section.title}
                </h2>
                <div className=" break-all text-lg xl:text-lg ">
                  {section.content}
                </div>
                <Link
                  href={`process#${section.title
                    .split(" ")
                    .join("-")
                    .toLowerCase()}`}
                  className="text-purple-600 hover:underline mt-5"
                >
                  {`Know more >> `}
                </Link>
              </div>
              <div className="flex justify-center items-center">
                {section.logo}
              </div>
            </div>
          ))}
        </div>

        <div className="h-full w-full flex justify-center items-center">
          <Team />
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <Technologies />
        </div>
      </div>
    </>
  );
};
export default TransformingEmotions;
