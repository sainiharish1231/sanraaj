"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const sizes = ["mobile", "desktop", "laptop", "mobile2", "full2", "full"];

const AnimatedLogo = () => {
  const [activeSize, setActiveSize] = useState("mobile");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSize((prevSize) => {
        const activeIndex = sizes.indexOf(prevSize);
        const nextSize = sizes[(activeIndex + 1) % sizes.length];
        return nextSize;
      });
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <svg
      className={`LogoAnimation ${activeSize}`}
      width="350"
      height="350"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-200 -200 400 400"
    >
      <title>San Raj (Transforming Emotions)</title>
      <clipPath id="screen">
        <rect
          className="screen"
          rx="3%"
          width="180"
          height="300"
          x="-90"
          y="-150"
          fill="none"
          stroke="gray"
        ></rect>
      </clipPath>
      <rect
        x="-25"
        y="120"
        width="50"
        height="25"
        rx="2"
        stroke="none"
        className="stand"
      ></rect>
      <polygon
        points="-125,90 125,90 160,145 -160,145"
        strokeWidth="5"
        strokeLinejoin="round"
        className="base"
      ></polygon>
      <rect
        className="screen background"
        rx="3%"
        width="180"
        height="300"
        x="-90"
        y="-150"
        stroke="none"
      ></rect>
      <g clipPath="url(#screen)" className="logo">
        <g width="100" height="100" className="logoInner">
          <Logo />
        </g>
        <line
          x1="-30"
          x2="30"
          y1="130"
          y2="130"
          stroke="!red"
          strokeWidth="8"
          strokeLinecap="round"
          className="speaker"
        ></line>
      </g>
      <rect
        className="screen"
        rx="3%"
        width="180"
        height="300"
        x="-90"
        y="-150"
        fill="none"
        stroke="white"
      ></rect>
    </svg>
  );
};

export default AnimatedLogo;
