"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head"; // Import Head component for adding meta tags

interface PageProps {
  params: {
    id: string;
  };
}

interface Job {
  ctc: string | number;
  status: "closed" | "open";
  title: string;
  role: string;
  location: string;
  experience: string;
  introduction: string;
  responsibilities: string[];
  skills: string[];
}

interface Jobs {
  [id: string]: Job;
}

const jobs: Jobs = {
  videomaking: {
    ctc: "Not disclosed",
    status: "open",
    title: "Video Editing Internship",
    role: "Intern",
    location: "Remote",
    experience: "Fresher",
    introduction: `We are looking for a creative individual to join our team as a Video Making/Editing Intern. 
        This role will involve producing high-quality video content for various platforms.`,
    responsibilities: [
      `Creating instructional videos of all the major features of the product`,
      `Creating video content for social media, e-mailers, and product demos`,
      `Editing raw footage and adding effects, graphics, and sound`,
      `Collaborating with team members to brainstorm and develop video concepts`,
    ],
    skills: [
      `Proficiency in video editing software (e.g., Adobe Premiere Pro, After Effects)`,
      `Strong understanding of video production techniques`,
      `Creative mindset with a keen eye for detail`,
      `Ability to work independently and meet deadlines`,
    ],
  },
  fullstackdeveloper: {
    ctc: "Not disclosed",
    status: "open",
    title: "Full Stack/Vue JS Developer",
    role: "Full-time",
    location: "On-site",
    experience: "2+ years",
    introduction: `We are looking to hire an experienced Vue.js Developer to join our dynamic team. 
        This will be an amazing opportunity for individuals who are willing to take full ownership and 
        responsibility of end-to-end development and want to grow exponentially.`,
    responsibilities: [
      `Developing user interface using Vue.js`,
      `Building modular and reusable components and libraries`,
      `Optimizing your application for performance`,
      `Implementing automated testing integrated into development and maintenance workflows`,
      `Staying up-to-date with all recent developments in the JavaScript and Vue.js space`,
      `Keeping an eye on security updates and issues found with Vue.js and all project dependencies.`,
      `Highly proficient with Vue.js framework and its core principles such as components, reactivity, and the virtual DOM`,
    ],
    skills: [
      `Familiarity with the Vue.js ecosystem, including Vue CLI, Vuex, Vue Router`,
      `Understanding of server-side rendering and its benefits and use cases`,
      `Knowledge of functional programming and object-oriented programming paradigms`,
      `Ability to write efficient, secure, well-documented, and clean JavaScript code`,
      `Experience with both consuming and designing RESTful APIs`,
      `Proficient understanding of code versioning tools, such as Git`,
    ],
  },
  nextjsdeveloper: {
    ctc: "Not disclosed",
    status: "open",
    title: "React / Next.js Developer",
    role: "Full-time",
    location: "On-site",
    experience: "2+ years",
    introduction: `We are looking for a great JavaScript developer who is proficient with React.js.
        Your primary focus will be on developing user interface components and implementing
        them following well-known React.js workflows (such as Flux or Redux). You will ensure
        that these components and the overall application are robust and easy to maintain.
        You will coordinate with the rest of the team working on different layers of the infrastructure.
        Therefore, a commitment to collaborative problem-solving, sophisticated design, and quality product
        are important.`,
    responsibilities: [
      `Developing new user-facing features using React.js`,
      `Building reusable components and front-end libraries for future use`,
      `Translating designs and wireframes into high-quality code`,
      `Optimizing components for maximum performance across a vast array of web-capable devices and browsers`,
    ],
    skills: [
      "React JS",
      "MySQL database knowledge",
      "Understanding of MVC design patterns",
      "Proficient understanding of code versioning tools, such as Git",
    ],
  },
  gamedesigner: {
    ctc: "Not disclosed",
    status: "open",
    title: "Game Developer / C#",
    role: "Full-time",
    location: "On-site",
    experience: "2+ years",
    introduction: `We are looking for a skilled Game Developer with experience in C#. 
        Join our team to create engaging gaming experiences that captivate users.`,
    responsibilities: [
      `Designing and developing game applications`,
      `Collaborating with artists and designers to create immersive experiences`,
      `Writing clean, maintainable code`,
      `Testing and debugging to ensure optimal performance`,
    ],
    skills: [
      `Proficiency in C#`,
      `Familiarity with game engines like Unity or Unreal`,
      `Strong understanding of game development principles`,
      `Ability to work in a team and communicate effectively`,
    ],
  },
  uidesigner: {
    ctc: "Not disclosed",
    status: "open",
    title: "UI Designer",
    role: "Full-time",
    location: "On-site",
    experience: "2+ years",
    introduction: `Ever designed a UI for a product? If yes, then you have already passed the first level of 
        our Hiring process. We are looking for a kickass UI designer with a little frontend experience who can take lead and build 
        world-class products.`,
    responsibilities: [
      `Developing new user-facing features`,
      `Translating designs and wireframes into high-quality code`,
      `Optimizing components for maximum performance`,
      `Collaborating with developers to implement designs`,
    ],
    skills: [
      `Strong design portfolio that reflects a deep understanding of digital/interaction design.`,
      `Experience turning complex problems into simple and engaging customer experiences.`,
      `Solid knowledge of applicable design tools: Photoshop/Illustrator, Adobe XD/Figma/Sketch.`,
    ],
  },
  seniorsoftwaredeveloper: {
    ctc: "Not disclosed",
    status: "open",
    title: "Senior Software Developer (Laravel)",
    role: "Full-time",
    location: "On-site",
    experience: "4+ years",
    introduction: `If you are a seasoned developer who loves coding and solving complex problems, we want you! 
        Join our energetic team to work in a productive environment.`,
    responsibilities: [
      `Explore design implications and work toward an appropriate balance between functionality, performance, and maintainability`,
      `Work with a cross-discipline team of User Experience, Visual Design, Project Management, Development and Testing`,
      `Maintain high standards of software quality by establishing good practices`,
      `Research and evaluate a variety of software products`,
    ],
    skills: [
      `Good knowledge of PHP/MySQL`,
      `Experience with JavaScript, HTML, CSS, jQuery, AJAX, Bootstrap, etc.`,
      `Full understanding of OOP principles`,
      `Excellent analytical and problem-solving abilities`,
    ],
  },
  phpdeveloper: {
    ctc: "Not disclosed",
    status: "open",
    title: "PHP Developer",
    role: "Full-time",
    location: "On-site",
    experience: "2+ years",
    introduction: `Join our dynamic team as a PHP Developer, where you will work on innovative projects and develop your skills in a fast-paced environment.`,
    responsibilities: [
      `Writing clean, secure, and efficient code`,
      `Collaborating with other developers and stakeholders`,
      `Maintaining and optimizing existing applications`,
      `Participating in code reviews`,
    ],
    skills: [
      `Strong knowledge of PHP and MySQL`,
      `Experience with PHP frameworks (like Laravel or CodeIgniter)`,
      `Understanding of MVC architecture`,
      `Good problem-solving skills`,
    ],
  },
  mobileappdeveloper: {
    ctc: "Not disclosed",
    status: "open",
    title: "Mobile App Developer",
    role: "Full-time",
    location: "On-site",
    experience: "2+ years",
    introduction: `We are looking for a passionate Mobile App Developer to join our team and create exceptional mobile experiences.`,
    responsibilities: [
      `Designing and developing mobile applications for iOS and Android`,
      `Collaborating with UI/UX designers`,
      `Testing and debugging applications to ensure optimal performance`,
      `Staying updated with the latest industry trends`,
    ],
    skills: [
      `Experience in mobile app development (React Native, Flutter, or similar)`,
      `Knowledge of RESTful APIs`,
      `Understanding of app deployment processes`,
      `Strong problem-solving skills`,
    ],
  },
  engineer: {
    ctc: "Not disclosed",
    status: "open",
    title: "DevOps Engineer",
    role: "Full-time",
    location: "On-site",
    experience: "3+ years",
    introduction: `Join our team as a DevOps Engineer to help automate and streamline our operations and processes.`,
    responsibilities: [
      `Implementing CI/CD pipelines`,
      `Monitoring system performance and troubleshooting issues`,
      `Collaborating with developers to ensure seamless integration`,
      `Managing cloud infrastructure`,
    ],
    skills: [
      `Experience with cloud platforms (AWS, Azure, GCP)`,
      `Knowledge of containerization tools (Docker, Kubernetes)`,
      `Strong scripting skills (Bash, Python, etc.)`,
      `Familiarity with CI/CD tools (Jenkins, GitLab CI, etc.)`,
    ],
  },
  digitalmarketing: {
    ctc: "Not disclosed",
    status: "open",
    title: "Digital Marketing Specialist",
    role: "Full-time",
    location: "Remote",
    experience: "2+ years",
    introduction: `We are seeking a Digital Marketing Specialist to join our team and help us enhance our online presence.`,
    responsibilities: [
      `Developing and executing digital marketing strategies`,
      `Managing social media accounts and content`,
      `Analyzing marketing data to improve campaigns`,
      `Collaborating with cross-functional teams`,
    ],
    skills: [
      `Experience with SEO, PPC, and email marketing`,
      `Strong analytical skills`,
      `Excellent communication abilities`,
      `Familiarity with digital marketing tools`,
    ],
  },
};

const Page: React.FC<PageProps> = ({ params }) => {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const id = params.id;
    if (id) {
      const fetchedJob = jobs[id];
      setJob(fetchedJob || null);
    }
  }, [params.id]);

  return (
    <div className="p-8 mb-20 flex justify-center items-center flex-col">
      {job ? (
        <>
          <Head>
            {/* Dynamic meta tags for SEO */}
            <title>{job.title} | Job Opportunity</title>
            <meta
              name="description"
              content={`Apply for ${job.title} as a ${job.role} located at ${job.location}. ${job.introduction}`}
            />
            <meta
              name="keywords"
              content={`${job.title}, ${job.role}, ${job.skills.join(
                ", "
              )}, job opportunity, ${job.location}`}
            />
          </Head>
          <h2 className="font-heading dark:text-gray-100 mb-8 text-3xl font-bold lg:text-4xl">
            {job.title}
          </h2>
          <div className="flex flex-col max-w-[1024px] w-full gap-4">
            <p className="text-gray-300 dark:text-slate-400 mb-4 text-lg">
              {job.introduction}
            </p>
            <div className="border p-3  border-[#7910f2]">
              <h3 className="text-2xl font-bold flex justify-center">Role</h3>
              <p className="text-gray-800 dark:text-slate-300 flex justify-center mb-4">
                {job.role}
              </p>
            </div>
            <div className="border p-3  border-[#7910f2]">
              <h3 className=" flex justify-center text-2xl font-bold">
                Location
              </h3>
              <p className="flex justify-center text-gray-800 dark:text-slate-300 mb-4">
                {job.location}
              </p>
            </div>
            <div className="border p-3  border-[#7910f2]">
              <h3 className="text-2xl flex justify-center font-bold">
                Experience
              </h3>
              <p className="flex justify-center  text-gray-800 dark:text-slate-300 mb-4">
                {job.experience}
              </p>
            </div>
            <div className="border p-3  border-[#7910f2]">
              <h3 className="text-2xl flex justify-center font-bold">CTC</h3>
              <p className="text-gray-800 dark:text-slate-300 mb-4 flex justify-center">
                {job.ctc}
              </p>
            </div>
            <div className="border p-3  border-[#7910f2]">
              <h3 className="text-2xl  flex justify-center font-bold ">
                Responsibilities
              </h3>
              <ul className="list-disc flex justify-center items-center flex-col list-inside mb-4">
                {job.responsibilities.map((resp, index) => (
                  <li
                    key={index}
                    className="flex justify-center text-gray-800 dark:text-slate-300"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border p-3  border-[#7910f2]">
              <h3 className="text-2xl flex justify-center font-bold">Skills</h3>
              <ul className="list-disc list-inside mb-4">
                {job.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex justify-center text-gray-800 dark:text-slate-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Job not found.</p>
      )}
    </div>
  );
};

export default Page;
