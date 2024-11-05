import Career from "../Component/Career";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const sanRajBackgroundContent = {
  heading: "A Little Background...",
  paragraphs: [
    {
      text: (
        <>
          San Raj is an outsourcing services provider for small and medium
          businesses, based in{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Nawalgarh,_Rajasthan"
            title="Wikipedia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7910f2]"
          >
            <strong>Birol Nawalgarh</strong>
          </Link>
          , Rajasthan. It is a young company, started somewhere in 2019 and
          incorporated in 2020.
        </>
      ),
    },
    {
      text: "We exclusively focus on providing services related to web applications and mobile-based applications. We do have plans for expanding to other emerging domains in the near future.",
    },
    {
      text: "We are not limited to providing outsourcing services. We have equal focus on developing our own products. While our products also are web applications and supporting mobile applications, we do not focus on any particular subject or industry. Our products tend to provide solutions to common problems faced by people. We do not develop products if similar ones are already in the market, unless the existing products can be greatly improved upon.",
    },
    {
      text: "While working with San Raj, one thing that you will experience the most is the difference from others in the way we work and see things.",
    },
    {
      text: "We believe every business/venture has some emotional values behind it, which are the main constructing blocks for that venture. We respect this emotional feeling the most and helping businesses to reflect these in the form of a digital reality by carefully crafting and transforming them in the form of Software or Digital Applications on all supported platforms.",
    },
  ],
};
const features = [
  {
    imgSrc: "/like.svg",
    title: "Love what you do",
    description:
      "Discover the joy in every step of the journey. When you love what you do, success becomes a natural byproduct, and every challenge is an opportunity to grow. Give your best, and let your passion shine through.",
  },
  {
    imgSrc: "/icon-chat-light.svg",
    title: "24/7 Customer Support",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate and provide you with unexpected responses at any time of the day. Always here, for better or worse.",
  },
  {
    imgSrc: "/ideas.svg",
    title: "Encouraging new ideas",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know. But that's the beauty of it—encouraging new ideas and exploring unexpected possibilities without limits.",
  },
  {
    imgSrc: "/family.svg",
    title: "Stay as a Family",
    description:
      "Family is unity and support. Stay together through all challenges, cherish moments, and communicate openly. Small gestures strengthen bonds, creating a loving and enduring connection that lasts forever.",
  },
  {
    imgSrc: "/emoji.svg",
    title: "Everyone is happy here ",
    description:
      "A place filled with joy, laughter, and positivity. Everyone is uplifted and cared for, creating an atmosphere where smiles are shared and happiness is a way of life for all.",
  },
  {
    imgSrc: "/partyBottal.svg",
    title: "The parties",
    description:
      "Lively gatherings filled with music, dance, and laughter. People come together to celebrate, enjoy each other's company, and create unforgettable memories in a vibrant, joyous atmosphere.",
  },
];
const title = features.map((feature) => feature.title); // Extract titles as strings
const description = features.map((feature) => feature.description); // Extract titles as strings

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: ` San Raj  Software Development ${JSON.stringify(title)}`,
    description: `San Raj is a Software Development company providing  ${JSON.stringify(
      description
    )} technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.`,
    keywords: ` "San",
  "Raj",
  "San Raj",
  "Sanraaj",
  "San Raj Software",
  "San raj Software solutions",
  "Software Solution",  ${JSON.stringify(description)} `,
  };
}
const career = () => {
  return (
    <div
      className="text-black dark:text-white bg-white dark:bg-black"
      title="Careers"
    >
      <Career
        sanRajBackgroundContent={sanRajBackgroundContent}
        features={features}
      />
    </div>
  );
};

export default career;
