import React from "react";

import Services from "../Component/Services";
import { Metadata } from "next";

const service = [
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Creating responsive and interactive websites. We build high-performance, responsive websites with modern frameworks like Next.js and React.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Our team creates scalable mobile apps for both iOS and Android platforms, ensuring seamless user experiences.",
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    description: "Improving your website’s visibility on search engines.",
  },
  {
    icon: "♻️",
    title: "API Development & Integration",
    description:
      "We specialize in building and integrating powerful APIs to streamline your business processes.",
  },
  {
    icon: "🎨",
    title: "Graphic Design",
    description: "Designing eye-catching graphics and visual content.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description: "Strategies to enhance your online presence and reach.",
  },
  {
    icon: "🛅",
    title: "Cloud Solutions",
    description:
      "We offer cloud infrastructure setup and maintenance to enhance scalability and security for your business.",
  },
  {
    icon: "🛒",
    title: "E-commerce Development",
    description:
      "Creating robust online stores with secure payment gateways and user-friendly interfaces.",
  },
  {
    icon: "📑",
    title: "Content Management Systems (CMS)",
    description:
      "Building and customizing CMS platforms like WordPress or Drupal to manage website content easily.",
  },
  {
    icon: "📱",
    title: "Social Media Management",
    description:
      "Strategies and content creation for effective brand engagement across social platforms.",
  },
  {
    icon: "🎥",
    title: "Video Production & Editing",
    description:
      "Creating promotional videos and editing content for various media formats.",
  },
  {
    icon: "💻",
    title: "Data Analytics",
    description:
      "Offering insights through data analysis to help businesses make informed decisions.",
  },
  {
    icon: "🤖",
    title: "Chatbot Development",
    description:
      "Creating AI-driven chatbots for enhanced customer interaction and support.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity Solutions",
    description:
      "Providing security assessments and implementing measures to protect business data.",
  },
  {
    icon: "🌟",
    title: "Branding & Identity Design",
    description:
      "Developing comprehensive branding strategies including logo design and brand guidelines.",
  },
];

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const title = service.map((item) => item.title);
  const description = service.map((item) => item.description);

  return {
    title: ` San Raj  Software Development ${title}`,
    description: `${description}     San Raj is a Software Development company providing   technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.`,
    keywords: ` "San",
  "Raj",
  "San Raj",
  "Sanraaj",
  "San Raj Software",
  "San raj Software solutions",
  "Software Solution",  ${title} `,
  };
}
const services = () => {
  return (
    <>
      <div className="mb-10 bg-white dark:bg-black  p-8 flex flex-col justify-center items-center">
        <div className=" justify-center  flex flex-col items-center mx-auto p-6">
          <Services service={service} />
        </div>
        <div className="mt-16 py-12 text-black dark:text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            {`     Let's Build Something Great Together`}
          </h2>
          <p className="text-lg mb-8 text-black dark:text-white">
            Get in touch with us to start your next project and see how our
            expertise can benefit your business.
          </p>
        </div>
      </div>
    </>
  );
};
export default services;
