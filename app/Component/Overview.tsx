import Image from "next/image";
import React from "react";
// Define interfaces for the section data
interface Section2 {
  title: string;
  description: string;
  imageUrl: string;
  icon: JSX.Element;
}
interface Section1 {
  title: string;
  description: string;
}

interface OverviewProps {
  section1: Section1[];
  section2: Section2[];
}

const Overview: React.FC<OverviewProps> = ({ section1, section2 }) => {
  return (
    <div className="cursor-pointer gap-6  mb-10  flex flex-col bg-[#101118] justify-center items-center leading-normal">
      <section className="overflow-hidden py-8 sm:py-16">
        <div className="mx-auto max-w-screen-2xl px-6  lg:px-8">
          <div className="mx-auto grid max-w-3xl order-1 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-0">
            <div className="order-1 pl-9  lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]  md:-ml-6 lg:-ml-0"
                width={2032}
                height={1042}
              />
            </div>
            <div className="lg:pr-8 lg:pt-4 order-2 lg:order-1">
              <div className="lg:max-w-lg">
                <h2 className="lg:text-lg mb-4 lg:mb-0 font-semibold  text-indigo-600 justify-center flex lg:block text-3xl ">
                  Overview
                </h2>
                <p className="mt-2 flex justify-center lg:block text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
                  San Raj Software Solutions
                </p>
                <dl className="mt-3 space-y-10 text-lg text-gray-600 ">
                  {section1.map((item, index) => (
                    <div key={index} className="relative ">
                      <dt className="inline font-semibold text-gray-400">
                        {item.title}
                      </dt>
                      <p className="inline text-xl text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden lg:max-w-screen-2xl lg:p-6  pb-32 space-y-24">
        {section2.map((feature, index) => (
          <div key={index} className="relative">
            <div
              className={`mx-auto grid    lg:grid-cols-2 lg:gap-24  ${
                index % 2 === 0 ? "" : "lg:grid-flow-row-dense"
              }`}
            >
              {/* Image - for mobile stack first, alternate for lg */}
              <div
                className={`${
                  index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
                }  sm:mt-16 `}
              >
                <div
                  className={`relative ${
                    index % 2 === 0
                      ? "-mr-48 pl-8  lg:pl-0"
                      : "-ml-48  lg:pr-0  pr-8"
                  } pl-8 lg:relative  lg:h-full  `}
                >
                  <Image
                    width={647}
                    height={486}
                    className={` ${
                      index % 2 === 0
                        ? "lg:-ml-36 "
                        : "lg:right-0 lg:mr-[-250px]"
                    } w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute  lg:h-full lg:w-auto lg:max-w-none`}
                    src={feature.imageUrl}
                    alt={feature.title}
                  />
                </div>
              </div>

              {/* Text - for mobile stack second, alternate for lg */}
              <div
                className={`mx-auto max-w-xl lg:h-[400px] justify-center items-center flex  px-6 mt-8 lg:mt-0  lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${
                  index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
                }`}
              >
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7910f2]">
                      {feature.icon}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      {feature.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Overview;
