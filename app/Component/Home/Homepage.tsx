"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/public/Logo";
import TransformingEmotions from "./TransformingEmotions";

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

interface HomepageProps {
  transformingEmotions: TransformingEmotionsContent; // Define the prop type
}

const Homepage: React.FC<HomepageProps> = ({ transformingEmotions }) => {
  const [mounted, setMounted] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadVideo(true);
      setStartTime(Date.now());
    }, 20);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  const onCanPlay = () => {
    const now = Date.now();
    const diff = now - startTime;

    if (diff < 1000) {
      setTimeout(() => {
        setMounted(true);
      }, 1000 - diff);
    } else {
      setMounted(true);
    }
  };

  return (
    <>
      <div className="mt-[-100px] h-screen w-full">
        {loadVideo && (
          <video
            onCanPlay={onCanPlay}
            src="/videos/network_background.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={`fixed h-screen overflow-hidden z-[-10] top-0 left-0 w-full object-cover ${
              mounted ? "opacity-100" : "opacity-10"
            } transition-opacity duration-1000`}
          />
        )}
        <div
          className={`${
            mounted ? "hidden" : "opacity-100"
          } w-full flex justify-center items-center flex-col h-screen bg-[#101118] z-[-10] transition-opacity duration-[4000ms]`}
        >
          <Logo className={"w-[500px] h-[500px]"} />
        </div>
        <div
          className={`sans-serif w-full z-[10] h-screen flex justify-center items-center flex-col ${
            mounted ? "opacity-100" : "opacity-20"
          }`}
        >
          <h2
            style={{
              textShadow: "0 20px 30px rgba(0, 0, 0, .3)",
            }}
            className="text-[#ffff] text-[12vw]"
          >
            San Raj
          </h2>
          <h4 className="sm:text-6xl text-[#ffff] text-4xl">
            Software Solutions
          </h4>
        </div>
      </div>
      <TransformingEmotions content={transformingEmotions} />
    </>
  );
};

export default Homepage;
