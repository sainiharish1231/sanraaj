"use client";
import React from "react";
import Slider from "react-slick";
import "./sliderStyles.css";

// Import your icons
import ReactIcon from "../../../public/Technologies/React";
import Nextlogo from "@/public/Nextlogo";
import Tailwind from "../../../public/Technologies/Tailwind";
import Android from "../../../public/Technologies/Android";
import Google from "../../../public/Technologies/Google";
import OpenAI from "../../../public/Technologies/OpenAI";
import Reactnative from "../../../public/Technologies/Reactnative";
import Iconscout from "../../../public/Technologies/Iconscout";
import TypeScript from "../../../public/Technologies/TypeScript";
import Postgres from "../../../public/Technologies/Postgres";
import GitLab from "../../../public/Technologies/GitLab";
import NodeJs from "../../../public/Technologies/NodeJs";
import Php from "../../../public/Technologies/Php";
import Python from "../../../public/Technologies/Python";

export default function Technologies() {
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  const rtlSettings = {
    infinite: true,

    rtl: true,
    arrows: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          rtl: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          rtl: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          rtl: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rtl: true,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div className="w-[100%] mb-10">
      <div className="p-4  sm:p-8">
        <Slider
          className="relative  border-t border-b border-gray-600 pb-4"
          {...settings}
        >
          <div className="h-[120px]  ">
            <h3>
              <Nextlogo
                className={
                  "h-[130px] w-[130px p-4   hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Tailwind
                className={
                  "   h-[140px] w-[120px]  fill-[#0ED7B5] hover:fill-[#870ed7] cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Google
                className={
                  "h-[130px] w-[110px] pt-6 dark:fill-white fill-black hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Android
                className={
                  "h-[230px] w-[140px] pb-[100px]   dark:fill-white fill-black hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <TypeScript
                className={
                  "h-[130px] w-[130px] p-4 fill-[#dd6a3d] hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <OpenAI
                className={
                  "h-[130px] w-[130px]  dark:fill-white fill-black hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px]  p-4">
            <h3>
              <ReactIcon
                className={
                  " h-[100px] w-[100px] p-4 fill-[#8c61fb] hover:fill-blue-500 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Iconscout
                className={
                  "h-[130px] w-[130px]  dark:fill-white fill-black hover:fill-[#404f77] cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px] ">
            <h3>
              <Reactnative
                className={
                  "h-[130px] w-[130px] p-8  fill-[#61dafb] hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Postgres
                className={
                  "h-[130px] w-[130px] p-7 fill-[#3a7a92] hover:fill-[#dd6262] cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <GitLab
                className={
                  "h-[130px] w-[130px]  fill-[#8c929d] hover:fill-black dark:hover:fill-white cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px] ">
            <h3>
              <NodeJs
                className={
                  "h-[130px] w-[130px]  fill-[#404137] hover:fill-black dark:hover:fill-white cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px]  p-5">
            <h3>
              <Php
                className={
                  " h-[100px] w-[100px] fill-[#8c61fb] hover:fill-blue-500 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Python
                className={
                  "h-[130px] w-[130px]  dark:fill-white fill-black hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px]  p-5">
            <h3>
              <ReactIcon
                className={
                  " h-[100px] w-[100px] fill-[#8c61fb] hover:fill-blue-500 cursor-pointer"
                }
              />
            </h3>
          </div>
        </Slider>
        {/*   <Slider
          className="relative  border-b border-gray-600 pb-4"
          {...rtlSettings}
        >
          <div className="h-[120px]  ">
            <h3>
              <Nextlogo
                className={
                  "h-[130px] w-[130px p-4  fill-white hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Tailwind
                className={
                  "   h-[140px] w-[120px]  fill-[#0ED7B5] hover:fill-[#870ed7] cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Google
                className={
                  "h-[130px] w-[110px] pt-6 fill-white hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Android
                className={
                  "h-[230px] w-[140px] pb-[100px]   fill-[#ffffff] hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <TypeScript
                className={
                  "h-[130px] w-[130px] p-4 fill-[#dd6a3d] hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <OpenAI
                className={
                  "h-[130px] w-[130px]  fill-white hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px]  p-4">
            <h3>
              <ReactIcon
                className={
                  " h-[100px] w-[100px] p-4 fill-[#8c61fb] hover:fill-blue-500 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Iconscout
                className={
                  "h-[130px] w-[130px]  fill-white hover:fill-[#404f77] cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px] ">
            <h3>
              <Reactnative
                className={
                  "h-[130px] w-[130px] p-8  fill-[#61dafb] hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Postgres
                className={
                  "h-[130px] w-[130px] p-7 fill-[#3a7a92] hover:fill-[#dd6262] cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <GitLab
                className={
                  "h-[130px] w-[130px]  fill-[#8c929d] hover:fill-white cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px] ">
            <h3>
              <NodeJs
                className={
                  "h-[130px] w-[130px]  fill-[#404137] hover:fill-white cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px]  p-5">
            <h3>
              <Php
                className={
                  " h-[100px] w-[100px] fill-[#8c61fb] hover:fill-blue-500 cursor-pointer"
                }
              />
            </h3>
          </div>{" "}
          <div className="h-[120px] ">
            <h3>
              <Python
                className={
                  "h-[130px] w-[130px]  fill-white hover:fill-blue-600 cursor-pointer"
                }
              />
            </h3>
          </div>
          <div className="h-[120px]  p-5">
            <h3>
              <ReactIcon
                className={
                  " h-[100px] w-[100px] fill-[#8c61fb] hover:fill-blue-500 cursor-pointer"
                }
              />
            </h3>
          </div>
        </Slider> */}
      </div>
    </div>
  );
}
