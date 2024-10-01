import React from "react";
import Overview from "../Component/Overview";
import { Metadata } from "next";
const section1 = [
  {
    title: "📍",
    description:
      " San Raj is an outsourcing services provider for small and medium businesses, based in Jaipur, Rajasthan. It is a young company incorporated in the year 2020. We exclusively focus on providing services related to web applications",
  },
  {
    title: "📍",
    description:
      "We do have plans for expanding to other emerging domains in near future. We are not limited to providing outsourcing services.",
  },
  {
    title: "📍",
    description:
      " We have equal focus on developing our own products. While our products also are web applications and supporting mobile applications, we do not focus on any particular subject or industry. Our products tend to provide solutions to common problems faced by people. We do not develop products if similar ones are already in the market, unless the existing products can be greatly improved upon.",
  },
];

const section2 = [
  {
    title: "Transforming Emotions",
    description:
      "We believe every business/venture has some emotional values behind it, which are the main constructing blocks for that venture. We respect this emotional feeling the most and help businesses reflect these in the form of digital reality by carefully crafting and transforming them in the form of Softwares or Digital Applications on all supported platforms. One thing that you will experience the most is the difference from others in the way we work and see things. Even the smallest of things done differently can result in exceptional outcomes. This leads to innovations you find at San Raj.",
    imageUrl: "/1587048000468.jpeg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "The Road Ahead",
    description:
      "At the time this site was published, San Raj had completed its one year journey with flying colors. It had lived the hardest period of a startup. Our journey of one year has made us stronger and braver. Our team has grown to 6 members and together have achieved many milestones in terms of revenue. Our goal for the next few years is to take our products to new heights. To support that, we will keep growing our services business. We believe in small team - big impact, so we will expand our team to a limit. Lastly, and obviously, we will keep working on new technologies and ideas, build new products, focus on innovation and build San Raj as a brand.",
    imageUrl: "/1_g5DUnfLacE0QN7mMVKTqmg.webp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "What Our Clients Say",
    description:
      "Hear directly from those we've helped. Our clients share their experiences and the impact our solutions have had on their businesses.",
    imageUrl: "/what-our-clients-say-25255.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h18v18H3V3zm3 3v6h6V6H6zm9 0v6h6V6h-6zm0 9v6h-6v-6h6z"
        />
      </svg>
    ),
  },
  {
    title: "Milestones Achieved",
    description:
      "In just one year, we've achieved remarkable milestones including key partnerships, awards, and significant projects that showcase our capabilities.",
    imageUrl: "/1_TSpPMOX3HWwSnprvo0UfkA@2x.webp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Our Core Values",
    description:
      "At San Raj, we are guided by our core values of innovation, integrity, and collaboration. These principles drive our actions and decision-making.",
    imageUrl: "/960x0.webp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6l9 6-9 6-9-6 9-6z"
        />
      </svg>
    ),
  },
];

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const title = section2.map((item) => item.title);
  const description1 = section2.map((item) => item.description);
  const description2 = section1.map((item) => item.description);
  return {
    title: ` San Raj  Software Development ${title}`,
    description: `${description1}   ${description2}  San Raj is a Software Development company providing   technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.`,
    keywords: ` "San",
  "Raj",
  "San Raj",
  "Sanraaj",
  "San Raj Software",
  "San raj Software solutions",
  "Software Solution",  ${title} `,
  };
}
const overview = () => {
  return <Overview section2={section2} section1={section1} />;
};

export default overview;
