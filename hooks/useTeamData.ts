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
    joindate: "▪️",
    name: "Raj",
    position: "fger dffg",
    description: "eaweg dfvbdfb",
    image: "/raj.jpeg",
    socialLinks: {
      linkedin: "#",
    },
    projects: 4,
    projectsname: "rw",
    liveprojectlink: "wew",
  },
  {
    joindate: "▪️",
    name: "Raj",
    position: "fger dffg",
    description: "eaweg dfvbdfb",
    image: "/raj.jpeg",
    socialLinks: {
      linkedin: "#",
    },
    projects: 4,
    projectsname: "rw",
    liveprojectlink: "wew",
  },
  {
    joindate: "▪️",
    name: "Raj",
    position: "fger dffg",
    description: "eaweg dfvbdfb",
    image: "/raj.jpeg",
    socialLinks: {
      linkedin: "#",
    },
    projects: 4,
    projectsname: "rw",
    liveprojectlink: "wew",
  },
];

export const useTeam = () => {
  return { teamData };
};
