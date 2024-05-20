"use client";
import React from "react";
import { NextPage } from "next";
/* import { withTranslation } from "../server/i18n"; */
import LaravelLogo from "../../public/static/images/Larvel";
import {
    P,
    H2,
    Ul,
    Li,
    Logo,
    Table,
    Strong,
    Section,
    TableRow,
    TableBody,
    TableHead,
    SubHeader,
    Container,
    TableColumn,
    SubContainer,
    // LoaderBox
} from "../src/Styled/Technologies";
// import Loader from "@Components/Loader";
import {
    Vue,
    Git,
    Sql,
    Npm,
    Gulp,
    Sass,
    Babel,
    Slack,
    GitLab,
    Amazon,
    Sentry,
    Angular,
    PhpUnit,
    Jasmine,
    Jenkins,
    MongoDB,
    Postgres,
    BitBucket,
    ReactIcon,
    TypeScript,
    NodeJs,
} from "../../public/static/images/Technologies";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";

const Technologies = () => {
    const TechnoStack = [
        {
            class: "Frontend",
            Techno: [
                <Vue viewBox="0 0 50 50" width="60" className="cls-vueA" />,
                <Angular
                    viewBox="0 0 50 50"
                    width="60"
                    className="cls-angularA"
                />,
                <TypeScript
                    viewBox="0 0 105 65"
                    width="110"
                    className="cls-typeScriptA"
                />,
                <Babel
                    viewBox="0 0 80 50"
                    width="119"
                    className="cls-babelA"
                />,
                <ReactIcon viewBox="0 0 50 50" />,
            ],
            comments: [
                `We prefer to work with Vue.js. 
         We follow single file component pattern and write JavaScript code in Babel`,
                "For Angular, we write code in TypeScript",
            ],
        },
        {
            class: "Backend",
            Techno: [
                <LaravelLogo />,
                <NodeJs
                    viewBox="0 0 85 50"
                    width="92"
                    className="cls-nodeJsA"
                />,
            ],
            comments: [
                "We exclusively work with Laravel PHP framework.",
                "For APIs, we can also work with Node Js.",
            ],
        },
        {
            class: "Task Runners",
            Techno: [
                <Gulp viewBox="0 0 33 71" width="45" className="cls-gulpA" />,
            ],
            comments: ["Gulp is our preferred task runner."],
        },
        {
            class: "Version Control",
            Techno: [
                <Git viewBox="0 0 71 50" width="71" className="cls-gitA" />,
                <GitLab
                    viewBox="0 0 55 50"
                    width="71"
                    className="cls-gitLabA"
                />,
                <BitBucket
                    viewBox="0 0 43 50"
                    width="60"
                    className="cls-bitBucketA"
                />,
            ],
            comments: [
                "We exclusively work with Git",
                "We have a local Gitlab installation to manage all our Git repositories.",
            ],
        },
        {
            class: "Database",
            Techno: [
                <Sql viewBox="0 0 71 71" width="71" className="cls-sqlA" />,
                <MongoDB
                    viewBox="0 0 132 50"
                    width="163"
                    className="cls-mongoDBA"
                />,
                <Postgres
                    viewBox="0 0 42 46"
                    width="71"
                    className="cls-postgresA"
                />,
            ],
            comments: [
                "Our 90% work is in MySQL. We occasionally work with MongoDB, if client requires.",
            ],
        },
        {
            class: "Error Logging",
            Techno: [
                <Sentry
                    viewBox="-3 -3 57 50"
                    width="71"
                    className="cls-sentryA"
                />,
            ],
            comments: [
                `We have local Sentry installation to which all errors in all 
         installations of your application are logged.`,
            ],
        },
        {
            class: "Package Managers",
            Techno: [
                <Npm viewBox="0 0 81 35" width="119" className="cls-npmA" />,
            ],
            comments: ["We Prefer to use NPM"],
        },
        {
            class: "Communication",
            Techno: [
                <Slack
                    viewBox="0 0 136 35"
                    width="197"
                    className="cls-slackA"
                />,
            ],
            comments: ["We Love Slack"],
        },
        {
            class: "Testing",
            Techno: [
                <PhpUnit
                    viewBox="0 0 99 53"
                    width="130"
                    className="cls-phpUnitA"
                />,
                <Jasmine
                    viewBox="0 0 107 53"
                    width="130"
                    className="cls-jasmineA"
                />,
            ],
            comments: ["For integration tests, we use PHP Unit and Jasmine."],
        },
        {
            class: "Continuous Integration",
            Techno: [
                <GitLab
                    viewBox="0 0 55 71"
                    width="71"
                    className="cls-gitLabA"
                />,
                <Jenkins
                    viewBox="0 0 47 71"
                    width="71"
                    className="cls-jenkinsA"
                />,
            ],
            comments: ["We prefer to use Gitlab CI"],
        },
        {
            class: "Cloud",
            Techno: [
                <Amazon
                    viewBox="0 0 150 50"
                    width="150"
                    className="cls-amazonA"
                />,
            ],
            comments: ["Amazon AWS is our first choice."],
        },
        {
            class: "CSS Extensions",
            Techno: [
                <Sass viewBox="-3 -3 89 71" width="89" className="cls-sassA" />,
            ],
            comments: ["We prefer to work on SASS"],
        },
    ];

    return (
        <DetailsLayout title="Technologies We Use">
            <Container>
                <Section body>
                    <H2 className="details-heading">Our Technology Stack</H2>
                    <SubContainer>
                        <P>
                            Modern web development is characterised by
                            ever-changing technology space. With the evolution
                            of open source software, new technologies arrive
                            every other day. In order to keep up with the latest
                            trends so that our applications are not based on
                            outdated technologies, we quickly adopt new tools
                            into our process. The table below lists some of the
                            technologies we are using in our process currently.
                        </P>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableColumn>Class</TableColumn>
                                    <TableColumn>Technology</TableColumn>
                                    <TableColumn>Comments</TableColumn>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {TechnoStack.map((techno, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableColumn ContentTitle>
                                                <Strong>{techno.class}</Strong>
                                            </TableColumn>
                                            <TableColumn logo>
                                                {techno.Techno.map(
                                                    (logo, index) => {
                                                        return (
                                                            <Logo
                                                                className="technologyLogo"
                                                                key={index}
                                                            >
                                                                {logo}
                                                            </Logo>
                                                        );
                                                    }
                                                )}
                                            </TableColumn>
                                            <TableColumn>
                                                <Ul>
                                                    {techno.comments.map(
                                                        (cmnt, index) => {
                                                            return (
                                                                <Li key={index}>
                                                                    {cmnt}
                                                                </Li>
                                                            );
                                                        }
                                                    )}
                                                </Ul>
                                            </TableColumn>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </SubContainer>
                </Section>
            </Container>
        </DetailsLayout>
    );
};

export default Technologies;
