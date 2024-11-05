import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTeam } from "../../hooks/useTeamData";
interface SocialLinks {
  linkedin: string;
}

interface TeamMember {
  joindate: string;
  name: string;
  position: string;
  description: string;
  image: string;
  socialLinks: SocialLinks;
  projects: number;
  projectsname: string;
  liveprojectlink: string;
}

const teamData: TeamMember[] = [
  {
    joindate: "January 2020",
    name: "Raj Kumar",
    position: "CEO/Co-founder",
    description: ` Raj is the visionary behind our software solutions consistently demonstrated the ability to quickly learn and adapt to new challenges with ease. I approach problems with a blend of critical and creative thinking, enabling me to devise effective and innovative solutions.`,
    image: "/raj.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/raj-kumar-57712a118/",
    },
    projects: 20,
    projectsname: "Client Management System, Inventory Tracker",
    liveprojectlink: "https://clientmanagement.com",
  },
  {
    joindate: "January 2020",
    name: "Sandeep",
    position: "COO/Co-founder",
    description:
      "Sandeep complements Raj with his deep technical expertise in software development. His innovative solutions and leadership skills have been instrumental in driving our projects forward.",
    image: "/sandeep.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sandeep",
    },
    projects: 8,
    projectsname: "E-commerce Platform, CRM Solution",
    liveprojectlink: "https://ecommerceplatform.com",
  },
  {
    joindate: "February 2021",
    name: "Ankit Kumawat",
    position: "Senior Software Engineer",
    description: `Ankit is our problem-solver, always ready to tackle the toughest challenges Experienced in full-stack development, proficient in various programming languages and technologies. Dedicated to delivering high-quality software products that meet client needs and exceed expectations`,
    image: "/ankit.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ankit-kumawat-b44a52230/",
    },
    projects: 8,
    projectsname: "Mobile App Development, API Integration",
    liveprojectlink: "https://mobileappdevelopment.com",
  },
  {
    joindate: "April 2021",
    name: "Harish Saini",
    position: "Frontend Developer & Game Developer ",
    description: `Harish is a creative web developer who excels at crafting engaging websites. His keen attention to detail and deep understanding of user needs allow us to create intuitive web experiences. In addition to his web development expertise, Harish also has knowledge and experience in game development, making him a versatile asset to any project.`,
    image: "/harish.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/harish-saini-2945612a7/",
    },
    projects: 4,
    projectsname: "Portfolio Sites, Business Websites",
    liveprojectlink: "https://portfoliosites.com",
  },
  {
    joindate: "March 2021",
    name: "Krishan Kumawat",
    position: "Full Stack Developer",
    description: `Krishan brings a wealth of knowledge in both front-end and back-end development.
`,
    image: "/krishan.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/krishan-kumawat-082b98259/",
    },
    projects: 5,
    projectsname: "Website Redesign, Custom Dashboard",
    liveprojectlink: "https://doubtlet.com/",
  },

  {
    joindate: "May 2021",
    name: "Abhimanyu",
    position: "Front-end Developer",
    description:
      "Abhi is dedicated to ensuring our websites run smoothly and efficiently. His skills in web optimization and performance monitoring play a crucial role in our project's success.",
    image: "/abhi.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/abhimanyu-kumawat-874b60292/",
    },
    projects: 1,
    projectsname: "Performance Optimization, SEO Enhancements",
    liveprojectlink: "https://performanceoptimization.com",
  },
  {
    joindate: "June 2021",
    name: "Mahesh",
    position: "Backend Developer",
    description:
      "Mahesh specializes in the MERN stack, bringing dynamic web applications to life. His passion for coding and continuous learning keeps our technology stack up to date.",
    image: "/mahesh.jpeg",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mahesh-kumar-b999aa265/",
    },
    projects: 1,
    projectsname: "Social Media Application, Real-Time Chat App",
    liveprojectlink: "https://socialmediaapp.com",
  },
];
const Team = () => {
  return (
    <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {teamData.map((member, index) => (
        <div key={index} className="flex m-2 flex-col  rounded-lg shadow-md">
          <div className="  flex justify-center items-center ">
            <Image
              height={1840}
              width={1840}
              className=" h-60 bg-purple-400 dark:text-white text-black w-60 mb-5 object-cover rounded-full"
              src={member.image}
              alt={member.name}
            />
          </div>
          <div className="p-4 h-40 white text-center">
            <h3 className="text-md">
              <Link
                href="#"
                className="dark:text-white text-black font-semibold transition duration-500 ease-in-out"
              >
                {member.name}
              </Link>
            </h3>

            <p className="text-purple-300 mb-1 uppercase text-sm">
              {member.position}
            </p>

            <div className="flex justify-between mt-4 items-center p-5 text-gray-900 bg-purple-100">
              <div className="flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                <div className="flex items-center leading-5 sm:mr-6 text-sm">
                  <svg
                    className="flex-shrink-0 mr-1.5 h-4 w-4 "
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
