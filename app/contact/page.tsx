import Phone from "@/public/Phone";
import React, { useEffect, useState } from "react";
import Gmail from "@/public/Gmail";
import Image from "next/image";
import { Metadata } from "next";
const Locationdata = [
  {
    title: "Phone Number",
    Number: ["+91-8769938925"],
    image: "/phone.svg",
  },
  {
    title: "Email",
    Email: ["raj@sanraaj.com", "career@sanraaj.com", "contact@sanraaj.com"],
    image: "/email.svg",
  },
  {
    title: "Our Location",
    Location: [
      "Shop No. - 2",
      "In Front of Baba Narayan Das",
      " Aayurved Nursing College",
      "Jhajhar Road Nawalgarh Jhunjhunu",
      "Rajasthan- 333042",
    ],
    image: "/location.svg",
  },
];

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const title = Locationdata.map((item) => item.title);

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
const contact = () => {
  return (
    <div title="  Contact Us " className="mb-10 sm:mb-20">
      <div className="flex  justify-center m-[30px]">
        <div className="mb-12 lg:mb-0">
          <h2 className="flex justify-center items-center ">Contact Us</h2>
          <h3 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px] justify-center items-center flex">
            GET IN TOUCH WITH US
          </h3>

          <p className="text-base flex     text-center l text-body-color dark:text-dark-6 mb-9">
            {` Do you have any ground breaking Idea, which you want to convert into
            a digital reality, let's shake hands together and work towards
            converting your dream into reality.`}
          </p>

          <div className="flex lg:flex-row flex-col justify-center gap-10 lg:items-start">
            <div className=" flex flex-col  items-center cursor-pointer mt-5 justify-center gap-5">
              <div className="h-10 w-10  rounded-full flex bg-white  justify-center items-center">
                <Phone className="h-10 w-10  fill-[#7910f2] " />
              </div>
              <h3>Phone Number</h3>
              <div className="flex justify-center items-center hover:text-[#7910f2]">
                <h6>+91 8769938925</h6>
              </div>
            </div>
            <div className=" flex flex-col items-center cursor-pointer mt-5 justify-center gap-5">
              <div className="h-10 w-10 flex justify-center bg-white  rounded-full items-center">
                <Gmail className="h-8 w-8 bg  fill-white hover:fill-[#7910f2] " />
              </div>
              <h3>Gmail</h3>
              <div className="flex justify-center  flex-col  gap-4 items-center hover:text-[#7910f2]">
                <h6>raj@sanraaj.com</h6>
                <h6>career@sanraaj.com</h6>
                <h6>contact@sanraaj.com</h6>
              </div>
            </div>

            <div className=" flex flex-col items-center cursor-pointer mt-5 justify-center gap-5">
              <div className="h-10 w-10 flex justify-center  bg-white  rounded-full items-center">
                <div className="">
                  <Image
                    height={30}
                    width={30}
                    src={"./location.svg"}
                    alt={""}
                  />
                </div>
              </div>
              <h3>Our Location</h3>
              <div className="flex justify-center   flex-col  gap-4 items-center hover:text-[#7910f2]">
                <h6>Shop No. - 2</h6>

                <h6> In Front of Baba Narayan Das</h6>
                <h6> Aayurved Nursing College</h6>
                <h6> Jhajhar Road Nawalgarh Jhunjhunu</h6>
                <h6> Rajasthan- 333042 </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
