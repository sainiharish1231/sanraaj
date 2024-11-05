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
  country:string
}

const teamData: TeamMember[] = [
  {
    joindate: "January 2020",
    name: "Jagdeesh Rapolu",
    position: "CEO/Co-founder",
    description: `I had the pleasure of working with Raj for a year for one of the
    Complex UI Technology modernization Project. Raj is very detail
    oriented and has In depth knowledge on Various UI technologies.
    Raj's contributed to architectural discussions and always helped
    Sr. Developers with through Tech modernization concepts. He holds
    himself at a high standard and is very accountable and ensures
    delivery timelines meets as per customer expectation.`,
    image: "/Jagdeesh.webp",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/raj-kumar-57712a118/",
    },
    projects: 20,
    projectsname: "Apple Inc.",
    liveprojectlink: "https://clientmanagement.com",
    country:"Chicago IL"
  },
  {
    joindate: "January 2020",
    name: "Vikram",
    position: "COO/Co-founder",
    description:
      `I rarely come across real talents who stand out like Raj.I had
    the pleasure of working with him for 2 years for contributing in
    my projects.Raj’s ability to handle multiple projects was unlike
    any I have seen before and made dramatic increse in the
    productivity level in my projects.I always surprised with his
    excessive Java and FrontEnd particularly in React and
    NodeJS,GraphQL and more not jus one particular but everything were
    really great.No matter how big is the task is he can handle it
    very smoothly and get the job done.When ever I had a problem there
    has never been a time he has left me without a solution.He remains
    one of the smartest people I know and have worked with.So I will
    recommend him very strong for your projects.`,
    image: "/Vikram.webp",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sandeep",
    },
    projects: 8,
    projectsname: "AVJ Solutions",
    liveprojectlink: "https://ecommerceplatform.com", country:"Irving,TX"
  },
  {
    joindate: "February 2021",
    name: "Neetesh Kumar",
    position: "Senior Software Engineer",
    description: `I had the pleasure of working with Raj for a year for one of the
    Complex UI Technology modernization Project. Raj is very detail
    oriented and has In depth knowledge on Various UI technologies.
    Raj's contributed to architectural discussions and always helped
    Sr. Developers with through Tech modernization concepts. He holds
    himself at a high standard and is very accountable and ensures
    delivery timelines meets as per customer expectation.`,
    image: "/Neetesh.webp",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ankit-kumawat-b44a52230/",
    },
    projects: 8,
    projectsname: "Doubtlet",
    liveprojectlink: "https://mobileappdevelopment.com", country:"India"
  },
  {
    joindate: "April 2021",
    name: "Praful Kumar Enni",
    position: "Frontend Developer & Game Developer ",
    description: `Great experience working with San Raj software solution. Experienced and skilled staff members.
     Quick turn around time on issue. Looking forward to working with your team again.`,
    image: "/Praful.webp",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/harish-saini-2945612a7/",
    },
    projects: 4,
    projectsname: "Option clearing corp.",
    liveprojectlink: "https://portfoliosites.com", country:"Chicago IL"
  }
];

export const useTeam = () => {
  return { teamData };
};
