import Job from "@/app/Component/Job";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

interface Job {
  imgSrc: string;
  title: string;
  href: string;
}

const jobs: Job[] = [
  {
    imgSrc: "/videomaking.svg",
    title: "Video Making/Editing Internship",
    href: "/videomaking",
  },
  {
    imgSrc: "/fullstack.svg",
    title: "Full Stack/Vue JS Developer",
    href: "/fullstackdeveloper",
  },
  {
    imgSrc: "/next.svg",
    title: "React / Next js Developer",
    href: "/nextjsdeveloper",
  },
  {
    imgSrc: "/cshrp.svg",
    title: "Game Developer /C#",
    href: "/gamedesigner",
  },
  {
    imgSrc: "/ui.svg",
    title: "UI Designer",
    href: "/uidesigner",
  },
  {
    imgSrc: "/softwaredavlaper.svg",
    title: "Senior Software Developer",
    href: "/seniorsoftwaredeveloper",
  },
  {
    imgSrc: "/php.svg",
    title: "PHP Developer",
    href: "/phpdeveloper",
  },
  {
    imgSrc: "/datas.svg",
    title: "Data Scientist",
    href: "/datascientist",
  },
  {
    imgSrc: "/mobileapp.svg",
    title: "Mobile App Developer",
    href: "/mobileappdeveloper",
  },
  {
    imgSrc: "/programing.svg",
    title: "DevOps Engineer",
    href: "/engineer",
  },
  {
    imgSrc: "/Marketing.svg",
    title: "Digital Marketing Specialist",
    href: "/marketing",
  },
];

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const title = jobs.map((item) => item.title);

  return {
    title: ` San Raj  Software Development ${title}`,
    description: ` San Raj is a Software Development company providing   technical solutions to business/individuals to transform their full of emotion ventures into a digital reality.`,
    keywords: ` "San",
  "Raj",
  "San Raj",
  "Sanraaj",
  "San Raj Software",
  "San raj Software solutions",
  "Software Solution",  ${title} `,
  };
}
const job = () => {
  return (
    <div>
      <Job jobs={jobs} />
    </div>
  );
};
export default job;
