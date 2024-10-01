import React from "react";
import "./sliderStyles.css";

import Technologies from "./Technologies";
import Team from "./SanrajTeam/Team";

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
      <div className="w-full bg-[#101118]">
        <div className="z-[2]  mx-auto p-8 flex flex-col justify-between items-center overflow-hidden md:rounded-lg md:p-10 lg:p-12">
          <p className="font-sans text-4xl font-bold text-gray-200 lg:text-7xl lg:pr-24 md:text-6xl justify-center items-center flex">
            {content.title}
          </p>

          <div className="font-serif text-2xl max-w-[1500px] sm:text-4xl pb-8 border-b border-gray-800 mt-10">
            {content.subtitle.map((line, index) => (
              <span
                key={index}
                className={
                  index === 0 ? "text-gray-200" : "text-lg text-gray-400"
                }
              >
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        <p className="font-sans text-4xl font-bold text-gray-200 lg:text-7xl pr-4 md:text-6xl flex justify-center items-center">
          Why Clients Choose
        </p>
        <p className="font-sans text-4xl flex font-bold text-gray-400 md:text-8xl justify-center items-center">
          Us <span className="text-red-600 rotate-12 translate-x-90">?</span>
        </p>

        <div className="mx-auto p-8 flex justify-center items-center flex-col">
          {content.sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse lg:flex-row max-w-[1500px] justify-center items-center ${
                index % 2 ? "lg:flex-row-reverse  lg:gap-32" : "lg:gap-32 "
              } border-b pb-8 border-gray-600`}
            >
              <div className="flex flex-col items-baseline justify-center">
                <h2 className="text-gray-200 mt-4 h-[30px] mb-2 w-full sm:h-[60px] text-2xl  flex lg:justify-start justify-center items-center xl:text-6xl text-pretty opacity-100">
                  {section.title}
                </h2>
                <div className="font-serif break-all text-lg xl:text-4xl text-gray-400">
                  {section.content}
                </div>
                {section.additionalContent && (
                  <p className="w-full font-serif text-lg xl:text-4xl text-gray-400">
                    {section.additionalContent}
                  </p>
                )}
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
