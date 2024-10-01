import Image from "next/image";
import Link from "next/link";
import React from "react";

interface JobProps {
  imgSrc: string;
  title: string;
  href: string;
}

interface JobListProps {
  jobs: JobProps[];
}

const Job = ({ jobs }: JobListProps) => {
  return (
    <div>
      <div className="mb-10">
        <div className=" mx-auto  py-4 sm:px-6">
          <div className="flex p-6  justify-center flex-col items-center">
            <h2 className="">
              Ready to Innovate and Excel{" "}
              <div className="flex justify-center items-center gap-x-4">
                <span className="rotate-90 flex text-red-400">🚀</span> Join Our
                Team!
              </div>
            </h2>
            <p className="mx-2 my-8 text-xl max-w-[1224px]">
              At San Raj, we embrace technology and creativity every day. Our
              team thrives on collaboration and continuous learning. Are you
              eager to elevate your skills and be part of our innovative
              journey? Join us and shape the future together! 🌟
            </p>
          </div>
          <div className=" mx-auto  grid grid-cols-1  max-w-[1224px] gap-y-8 gap-x-8 lg:grid-cols-2">
            {jobs.map((job, index) => (
              <Link
                key={job.title}
                className="flex hover:bg-[#7910f2] service-card"
                href={`job/${job.href}`}
              >
                {" "}
                <div
                  key={index}
                  className=" gap-x-6 rounded-lg shadow-lg p-6   hover:bg-transparent w-full
       transition-transform duration-300 transform hover:scale-80 flex text-left  lg:text-center"
                >
                  <div className=" flex justify-center items-center">
                    <div className="bg-[#121212] rounded-full flex justify-center items-center">
                      <Image
                        height={70}
                        width={70}
                        className="  mx-auto"
                        src={`${job.imgSrc}`}
                        alt={job.title}
                      />
                    </div>
                  </div>
                  <div className="flex  justify-center items-center px-6">
                    <h2 className="text-xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                      {job.title}
                    </h2>
                    <p className="mt-2  text-gray-300"></p>
                  </div>
                </div>{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Job;
