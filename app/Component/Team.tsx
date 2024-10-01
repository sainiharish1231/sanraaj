import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTeam } from "../../hooks/useTeamData";

const Team = () => {
  const { teamData } = useTeam();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {teamData.map((member, index) => (
        <div
          key={index}
          className="flex m-2 flex-col bg-[#c8c4cc] rounded-lg shadow-md"
        >
          <div className="h-60 bg-purple-400">
            <Image
              height={140}
              width={140}
              className="h-full w-full object-cover\\\"
              src={member.image}
              alt={member.name}
            />
          </div>
          <div className="p-4 h-40 bg-[#c8c4cc] text-center">
            <h3 className="text-md">
              <Link
                href="#"
                className="text-gray-900 font-semibold transition duration-500 ease-in-out"
              >
                {member.name}
              </Link>
            </h3>

            <p className="text-[#4e4757] mb-1 uppercase text-sm">
              {member.position}
            </p>

            <div className="flex justify-between mt-4 items-center p-5 bg-purple-100">
              <div className="flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                <div className="flex items-center leading-5 text-gray-400 sm:mr-6 text-sm">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                  </svg>
                  {member.projects} projects
                </div>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    height={23}
                    width={23} // Fixed width to make it a square
                    src={"/in.svg"}
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
