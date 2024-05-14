"use client";
import React, { useState, useEffect } from "react";

import DetailsLayout from "@/app/src/Components/Layout/DetailsLayout";
import { Container, Paragraph } from "@/app/src/Components/common";
import {
    H3,
    ContentContainer,
    List,
    UL,
    Button,
    Row,
    Column,
    SpanTitle,
    SpanLink,
} from "@/app/src/Styled/apply-now";
import Loader, { LoadingContainer } from "@/app/src/Components/Loader";
import { useRouter } from "next/navigation";

interface Job {
    ctc: string | number;
    title: string;
    status: "closed" | "open";
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
    1: {
        ctc: "Not disclosed",
        status: "open",
        title: "Video Making/ Editing Internship",
        role: "Not disclose",
        location: "Not disclosed",
        experience: "Not disclose",
        introduction: ``,
        responsibilities: [
            `Creating instructional videos of all the major features of the product`,
            `Creating video content for social media, e-mailers, and product demos`,
        ],
        skills: [
            `are available for full time (in-office) internship`,
            `can start the internship immediately`,
            `are available for a duration of 3 months`,
            `have relevant skills and interests like Adobe Premier Pro/Adobe After Effects`,
        ],
    },
    2: {
        ctc: "Not disclosed",
        status: "open",
        title: "Full Stack/Vue JS Developer",
        role: "Not disclose",
        location: "Not disclosed",
        experience: "Not disclose",
        introduction: `We are looking to hire an experienced Vue.js Developer to join our dynamic team. 
      This will be an amazing opportunity for individuals who are willing to take full ownership and 
      responsibility of end to end development and want to grow exponentially.`,
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
    3: {
        ctc: "Not disclosed",
        title: "React Developer",
        status: "open",
        role: "Not disclose",
        location: "Not disclosed",
        experience: "Not disclose",
        introduction: `We are looking for a great JavaScript developer who is proficient with React.js.
    Your primary focus will be on developing user interface components and implementing
    them following well-known React.js workflows (such as Flux or Redux). You will ensure
    that these components and the overall application are robust and easy to maintain.
    You will coordinate with the rest of the team working on different layers of the infrastructure.
    Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product
    are important.`,
        responsibilities: [
            `Developing new user-facing features using React.js`,
            `Building reusable components and front-end libraries for future use`,
            `Translating designs and wireframes into high-quality code`,
            `Optimizing components for maximum performance across a vast array of web-capable devices and browser`,
        ],
        skills: [
            "React JS",
            "MySQL database knowledge",
            "Understanding of MVC design patterns",
            "Proficient understanding of code versioning tools, such as Git",
        ],
    },
    4: {
        ctc: "Not disclosed",
        status: "open",
        title: "UI Designer",
        role: "Not disclose",
        location: "Not disclosed",
        experience: "Not disclose",
        introduction: `Ever designed a UI for a product? If yes, then you have already passed the first level of 
      our Hiring process.
      We are looking for a kickass UI designer with a little frontend experience who can take lead and build 
      world-class products.`,
        responsibilities: [
            `Developing new user-facing features using React.js`,
            `Building reusable components and front-end libraries for future use`,
            `Translating designs and wireframes into high-quality code`,
            `Optimizing components for maximum performance across a vast array of web-capable devices and browser`,
        ],
        skills: [
            `College degree or equivalent work experience.`,
            `1+ years of industry/agency experience in Product Designing`,
            `Strong design portfolio that reflects a deep understanding of digital/interaction design.`,
            `Experience turning complex problems into simple and engaging customer experiences.`,
            `Solid knowledge of applicable programs: Photoshop/Illustrator, Adobe XD/Figma/Sketch.`,
            `Knowledge of HTML, CSS, and jQuery (Optional).`,
        ],
    },
    5: {
        ctc: "Not disclosed",
        status: "open",
        title: "Senior Software Developer (Laravel)",
        role: "Not disclose",
        location: "Not disclosed",
        experience: "Not disclose",
        introduction: `Like to code? Can't live without solving that algorithm problem that you just stumbled upon? 
      Will you give up anything to squeeze in that last bit-level performance? If you are happily saying yes, 
      then we already like you.
      We are looking for a programmer who is ready to go on a programming war and fight until he/she wins it.
      If you are looking to team up with a young, energetic, and enthusiastic team, 
      work in a highly productive and swift environment, have a good hand on JavaScript framework/PHP 
      MVC Framework/VueJS/React. You are the one - Welcome Aboard!`,
        responsibilities: [
            `Explore design implications and works toward appropriate balance between functionality, performance, and maintainability`,
            `Working with a cross-discipline team of User Experience, Visual Design, Project Management, Development and testing`,
            `Maintain high standards of software quality within the team by establishing good practices and habits`,
            `Research and evaluate a variety of software products`,
            `Ability to manage and organise a team of technical staff`,
            `Develop a strategy that the team will use to reach its goal`,
        ],
        skills: [
            `Good knowledge of PHP/MySQL`,
            `Experience with other web technologies including JavaScript, HTML, CSS, jQuery, AJAX, Bootstrap, etc`,
            `Full understanding of OOP principles`,
            `Good Knowledge of Algorithms and their Design`,
            `Ability to create Database Designs`,
            `Excellent analytical and problem-solving ability`,
            `Excellent Communication Skills and fluency in English`,
            `More than 2 years of experience in Laravel framework`,
        ],
    },
    6: {
        ctc: "Not disclosed",
        status: "open",
        title: "PHP Developer",
        role: "Not disclose",
        location: "Not disclosed",
        experience: "Not disclose",
        introduction: `Like to code? Or Aspire to become a rockstar programmer? Then let’s team up with our young, 
      energetic and enthusiastic team and work in highly productive and swift environment.`,
        responsibilities: [
            `Work with tight deadlines with supervision`,
            `Maintain high standards of software quality within the team by establishing good practices and habits`,
            `Come up with new ideas, discuss them with your colleagues and seniors, and develop them`,
        ],
        skills: [
            `Good knowledge of PHP/MySQL`,
            `Experience with other web technologies including JavaScript, HTML, CSS, jQuery, AJAX, Bootstrap, etc`,
            `Full understanding of OOP principles`,
            `Basic Knowledge of Algorithms and their Design`,
            `Ability to create Database Designs`,
            `Excellent analytical and problem-solving ability`,
            `Excellent Communication Skills and fluency in English`,
            `Entry level experience in PHP MVC Framework like Laravel/Codeigniter (Optional)`,
        ],
    },
};

export const ApplyNow = ({}) => {
    const router = useRouter();
    const [job, setJob] = useState<Job>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setJob(jobs[1]);
        }, 3000);
    }, []);

    if (loading) {
        return (
            <DetailsLayout title="Careers">
                <LoadingContainer>
                    <Loader />
                </LoadingContainer>
            </DetailsLayout>
        );
    }

    if (!job) {
        return (
            <DetailsLayout title="Careers">
                <span>Not found</span>
            </DetailsLayout>
        );
    }

    if (job.status === "closed") {
        return (
            <DetailsLayout title="Careers">
                <span>Sorry this job is closed </span>
            </DetailsLayout>
        );
    }

    return (
        <DetailsLayout title={`Careers - ${job?.title}`}>
            <Row>
                <Column>
                    <SpanTitle>CTC</SpanTitle>
                    <SpanLink>{job?.ctc}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>Role</SpanTitle>
                    <SpanLink>{job?.role}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>Location</SpanTitle>
                    <SpanLink>{job?.location}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>Experience</SpanTitle>
                    <SpanLink>{job?.experience}</SpanLink>
                </Column>
                <Column>
                    <SpanTitle>
                        <Button>Apply</Button>
                    </SpanTitle>
                </Column>
            </Row>
            <Container>
                <ContentContainer>
                    <H3 className="details-heading">Introduction</H3>
                    <Paragraph>{job?.introduction}</Paragraph>
                </ContentContainer>

                <ContentContainer>
                    <H3 className="details-heading">Responsibilities</H3>
                    <Paragraph>
                        <UL>
                            {job?.responsibilities?.map((resp, i) => (
                                <List key={i}>{resp}</List>
                            ))}
                        </UL>
                    </Paragraph>
                </ContentContainer>

                <ContentContainer>
                    <H3 className="details-heading">Skill Set</H3>
                    <Paragraph>
                        <UL>
                            {job?.skills?.map((resp, i) => (
                                <List key={i}>{resp}</List>
                            ))}
                        </UL>
                    </Paragraph>
                    <Button>Apply Now</Button>
                </ContentContainer>
            </Container>
        </DetailsLayout>
    );
};

export default ApplyNow;
