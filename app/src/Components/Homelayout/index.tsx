"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "..";
import AppCover from "../AppCover";
import TransformingEmotions from "../TransforminEmotions";
import WhyClientChooseUse from "../WhyClientChooseUs";
import TechnologiesWeUse from "../TechonologiesWeUSe";
import ClientReviews from "../ClientReviews";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const DynamicHeroSection = dynamic(() => import("../HeroSection"));

const Homelayout = ({ src }: any) => {
  const [mounted, setMounted] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const [startTime, setStartTime] = useState(4127463038609);
  console.log("THis is the src ", src);

  useEffect(() => {
    setTimeout(() => {
      setLoadVideo(true);
      setStartTime(new Date().getTime());
    }, 40);
  }, []);

  //   if (router.isFallback) {
  //     return <AppCover mounted={false} />;
  //   }

  const onCanPlay = () => {
    const now = new Date().getTime();
    const diff = now - startTime;

    if (diff < 2000) {
      setTimeout(() => {
        setMounted(true);
      }, 2000 - diff);
    } else {
      setMounted(true);
    }
  };

  return (
    <div>
      <Layout>
        <AppCover mounted={mounted} />
        {loadVideo && (
          <DynamicHeroSection
            onCanPlay={onCanPlay}
            src={src}
            mounted={mounted}
          />
        )}
        <TransformingEmotions />
        <WhyClientChooseUse />
        <TechnologiesWeUse />
        <ClientReviews />
      </Layout>
    </div>
  );
};

export default Homelayout;
