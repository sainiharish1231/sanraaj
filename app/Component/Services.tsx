"use client";
import React from "react";
import Reveal from "react-awesome-reveal";
import { fadeInDownShorter } from "../../public/keyframes";
import { fadeInUp } from "../../public/keyframes";
interface serviceprop {
  icon: string;
  title: string;
  description: string;
}
interface Serviceprop {
  service: serviceprop[];
}
export default function Services({ service }: Serviceprop) {
  return (
    <div className="">
      <div className="mx-auto  text-center ">
        <h1 className="mb-5 text-3xl font-bold   text-black dark:text-white sm:text-4xl md:text-5xl">
          Our Software Development 💫Services
        </h1>
        <Reveal keyframes={fadeInUp} duration={300} delay={500}>
          <p className="mb-12   text-xl font-medium  text-body-color text-black dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
            {`  We offer a range of cutting-edge software solutions designed to help
            your business thrive in a digital world. From web development to
            cloud solutions, we've got you covered.`}
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        <Reveal keyframes={fadeInDownShorter} duration={300} delay={100}>
          {service.map((service, index) => (
            <div
              key={index}
              className="service-card   rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-5xl text-black dark:text-white  mb-4 transition-transform duration-300 transform hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl text-black dark:text-white font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                {service.title}
              </h3>
              <p className="text-lg text-black dark:text-white">
                {service.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
