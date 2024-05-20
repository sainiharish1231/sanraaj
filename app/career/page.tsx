"use client";
import React from "react";

import {
    Container,
    H2,
    Section,
    SubContainer,
    P,
    Circle,
    CircleBorder,
    Icon,
    IconSection,
    InnerContainer,
    Span,
    ContentContainer,
    AnchorTab,
} from "../src/Styled/Career";
import { ReduxNextPageContext } from "../src/Interfaces";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";
import { ICareer } from "../src/Interfaces/Pages/Career";
import {
    faThumbsUp,
    faEye,
    faSeedling,
    faUsers,
    faSmileBeam,
    faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Career = () => {
    const NawalgarhHREF = "https://en.wikipedia.org/wiki/Nawalgarh,_Rajasthan";
    const Icons = [
        {
            icon: faThumbsUp,
            title: "Love what you do",
        },
        {
            icon: faEye,
            title: "Encouraging new Ideas",
        },
        {
            icon: faSeedling,
            title: "Individual Growth",
        },
        {
            icon: faUsers,
            title: "Stay as a Family",
        },
        {
            icon: faSmileBeam,
            title: "Everyone is happy here",
        },
        {
            icon: faGlassCheers,
            title: "The Parties!",
        },
    ];

    const jobs = [
        {
            title: "Video Making/Editing Internship",
            href: "/career/1",
        },
        {
            title: "Full Stack/Vue JS Developer",
            href: "/career/2",
        },
        {
            title: "React Developer",
            href: "/career/3",
        },
        {
            title: "UI Designer",
            href: "/career/4",
        },
        {
            title: "Senior Software Developer",
            href: "/career/5",
        },
        {
            title: "PHP Developer",
            href: "/career/6",
        },
    ];

    return (
        <DetailsLayout title="Careers">
            <Container>
                <Section>
                    <SubContainer>
                        <H2 className="details-heading">
                            Are you passionate to Learn and Grow? Join us!
                        </H2>
                        <P>
                            Working at San Raj means Learning everyday. We do
                            what we love and love what we do. We are young, and
                            we are growing. Do you want to be a part of this
                            journey? Come and join us! 😊 😊 😊 ...
                        </P>
                    </SubContainer>
                </Section>
                <Section iconSection>
                    <SubContainer>
                        <H2 className="details-heading">
                            What you will like about San Raj
                        </H2>
                        <IconSection>
                            {Icons.map((item, index) => {
                                return (
                                    <InnerContainer key={index} icon>
                                        <Circle>
                                            <CircleBorder>
                                                <Icon>
                                                    <FontAwesomeIcon
                                                        icon={item.icon}
                                                        className="solid-to-line-icon"
                                                    />
                                                </Icon>
                                            </CircleBorder>
                                        </Circle>
                                        <P>{item.title}</P>
                                    </InnerContainer>
                                );
                            })}
                        </IconSection>
                    </SubContainer>
                </Section>
                <Section>
                    <SubContainer>
                        <H2 className="details-heading">
                            A Little Background...
                        </H2>
                        <ContentContainer>
                            <P backgroundPara>
                                San Raj is an outsourcing services provider for
                                small and medium businesses, based in
                                <AnchorTab
                                    href={NawalgarhHREF}
                                    title="wikipedia"
                                    target="_blank"
                                >
                                    <strong> Birol Nawalgarh</strong>
                                </AnchorTab>
                                , Rajasthan. It is a young company, started
                                somewhere in 2019 and incorporated in 2020.
                            </P>
                            <P backgroundPara>
                                We exclusively focus on providing services
                                related to web applications and mobile based
                                applications. We do have plans for expanding to
                                other emerging domains in near future.
                            </P>
                            <P backgroundPara>
                                We are not limited to providing outsourcing
                                services. We have equal focus on developing our
                                own products. While our products also are web
                                applications and supporting mobile applications,
                                we do not focus on any particular subject or
                                industry. Our products tend to provide solutions
                                to common problems faced by people. We do not
                                develop products if similar ones are already in
                                the market, unless the existing products can be
                                greatly improved upon.
                            </P>
                            <P backgroundPara>
                                While working with San Raj, one thing that you
                                will experience the most is the difference from
                                others in the way we work and see things.
                            </P>
                            <P backgroundPara>
                                We believe every business/venture has some
                                emotional values behind it, which are the main
                                constructing blocks for that venture. We respect
                                this emotional feeling the most and helping
                                businesses to reflect these in form of a digital
                                reality by carefully crafting and transforming
                                them in form of Softwares or Digital
                                Applications on all supported platforms.
                            </P>
                        </ContentContainer>
                    </SubContainer>
                </Section>
                <Section buttonSection>
                    <SubContainer buttonSection>
                        <Span>Life at San Raj</Span>
                        <AnchorTab href="#" lifeAt>
                            See Now
                        </AnchorTab>
                    </SubContainer>
                </Section>
                <Section>
                    <SubContainer>
                        <H2 className="details-heading">Excited? Apply Now!</H2>
                        <ContentContainer TabSection>
                            {jobs.map((item, index) => {
                                return (
                                    <InnerContainer key={index}>
                                        <AnchorTab href={item.href} tab>
                                            {item.title}
                                        </AnchorTab>
                                    </InnerContainer>
                                );
                            })}
                        </ContentContainer>
                    </SubContainer>
                </Section>
            </Container>
        </DetailsLayout>
    );
};

export default Career;
