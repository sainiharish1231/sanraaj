import AnimatedLogo from "@/public/AnimatedLogo";
import Driven from "@/public/Driven";
import Modular from "@/public/Modular";
import Scalable from "@/public/Scalable";
import React from "react";

// Interface for transforming emotions prop structure
interface TransformingEmotionsProps {
  content: {
    title: string;
    subtitle: string[];
    sections: {
      title: string;
      content: string;
      logo: React.ReactNode;
      additionalContent?: string;
    }[];
  };
}

// Corrected single object structure for transformingEmotions
const transformingEmotions: TransformingEmotionsProps = {
  content: {
    title: "Transforming Emotions",
    subtitle: [
      "We believe every business/venture has some emotional values behind it, which are the main constructing blocks for that venture.",
      "We respect this emotional feeling the most and help businesses to reflect these in the form of a digital reality by carefully crafting and transforming them into Software or Digital Applications on all supported platforms.",
    ],
    sections: [
      {
        title: "Support Multi Platforms",
        content:
          "Our expertise in the latest cloud technologies like AWS enables your applications to scale easily and support multiple platforms. You don't have to worry about increasing traffic on your site anymore.",
        logo: <AnimatedLogo />,
        additionalContent: "Increasing traffic on your site anymore.",
      },
      {
        title: "Scalable Apps",
        content:
          "Our expertise in the latest cloud technologies enables your applications to scale easily. You don't have to worry about increasing traffic on your site anymore.",
        logo: <Scalable className={"h-[320px] max-w-[320px] "} />,
      },
      {
        title: "Modular Approach",
        content:
          "We follow modern application architecture right from the beginning. That is why our applications are easier to maintain, easy to test, and less prone to bugs, saving you both time and cost.",
        logo: <Modular className={"h-[320px] max-w-[320px] "} />,
      },
      {
        title: "Test Driven Development",
        content:
          "Testing is an integral part of modern applications and so is our development process. Using the latest testing tools and continuous integration, we enable you to be sure that your applications function as expected - always.",
        logo: <Driven className={"h-[320px] max-w-[320px] "} />,
      },
    ],
  },
};

// Export hook to use transforming emotions data
export const useTransformingEmotions = () => {
  return { transformingEmotions };
};
