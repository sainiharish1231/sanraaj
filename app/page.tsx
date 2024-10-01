import Image from "next/image";
import Homepage from "./Component/Home/Homepage"; // Ensure the path is correct
import Scalable from "@/public/Scalable";
import Driven from "@/public/Driven";
import Modular from "@/public/Modular";
import AnimatedLogo from "@/public/AnimatedLogo";
import { Metadata } from "next";
interface TransformingEmotionsSection {
  title: string;
  content: string;
  logo: React.ReactNode; // assuming logos are React components
  additionalContent?: string;
  isRight?: boolean;
}

interface TransformingEmotionsContent {
  title: string;
  subtitle: string[];
  sections: TransformingEmotionsSection[];
}

const content = {
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
      isRight: true,
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
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `San Raj Software Solutions`,
    description: `San Raj is a Software Development company providing technical solutions to business/individuals to transform their full of emotion ventures into a digital reality    ${content.subtitle.join(
      " "
    )}`,
    keywords: [
      "San",
      "Raj",
      "San Raj",
      "Sanraaj",
      "San Raj Software",
      "San Raj Software solutions",
      "Software Solution",
      ` ${content.title}`,
    ],
  };
}

export default function Home() {
  return <Homepage transformingEmotions={content} />;
}
