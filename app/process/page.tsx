"use client";
// #region Global Imports
import React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "next-i18next";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IProcess } from "../src/Interfaces";
import {
    Description,
    Paragraph,
    ImageContainer,
    Container,
} from "../src/Components/common";
import { H2, Image, ContentContainer } from "../src/Styled/Process";
import ModularApproach from "@/public/static/images/Modular-Approach";
import Transform from "@/public/static/images/Transfrom";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";

// #endregion Interface Imports

const Process = () => (
    <DetailsLayout title="Process">
        <Container>
            <ContentContainer id="agile-development">
                <Description>
                    <H2 className=" details-heading">Agile Development</H2>
                    <Paragraph>
                        We follow Agile Software Development methodology. We
                        have tried many methodologies in last few years and
                        Agile is the one that works for us. The agile
                        methodology provides many advantages over traditional
                        methods. It requires lesser planning and we can start
                        working much faster. It enables us to provide regular
                        updates to clients. It also enables us to be more
                        responsive to bugs and client feedback. We work with
                        many products assisting in agile project management,
                        like JIRA, Trello and Gitlab Issue Management. Which
                        product should we work on is mostly decided by the
                        client. Given a choice, however, we prefer Gitlab Issue
                        Management.
                    </Paragraph>
                </Description>
                <ImageContainer>
                    <Image src="/static/images/agile-development.svg" />
                </ImageContainer>
            </ContentContainer>
            <ContentContainer id="api-driven-development">
                <Description>
                    <H2 className="details-heading  details-heading1  ">
                        API Driven Applications{" "}
                    </H2>

                    <Paragraph>
                        Our applications are mostly REST API driven. We create a
                        REST API in Laravel, and all the data handling is done
                        by the API. The UI of the applications is created using
                        one of the popular frontend frameworks - Vue.js or
                        Angular. The UI communicates with API through a common
                        service. One of the biggest advantages of this approach
                        is that same API can be used for both desktop web
                        application and mobile application, essentially saving
                        you half of mobile application development cost. Apart
                        from this, it makes application easier to manage, test
                        and less error prone.
                    </Paragraph>
                </Description>
                <ImageContainer>
                    <Image src="/static/images/api.svg" />
                </ImageContainer>
            </ContentContainer>
            <ContentContainer id="modular-approach">
                <Description>
                    <H2 className="details-heading">Modular Approach</H2>
                    <Paragraph>
                        We develop applications in form of multiple independent
                        modules that share data through interfaces. As an
                        example, in a typical SaaS product, User Management,
                        Billing, Reporting, etc. can be modules. Modularizing
                        application greatly helps in managing code in large
                        applications. It also makes components independent,
                        which can be enabled/disabled on the fly.
                    </Paragraph>
                </Description>
                <ImageContainer>
                    <ModularApproach />
                </ImageContainer>
            </ContentContainer>
            <ContentContainer>
                <Description id="scallable-app">
                    <H2 className="details-heading">Scalability</H2>
                    <Paragraph>
                        Thanks to the advances in cloud technologies in recent
                        times, it has become much easier to scale your web
                        application. We leverage the power of various cloud
                        platforms, like Amazon AWS to enable your applications
                        to scale easily. Using products like AWS S3 for data
                        storage, CDN for static content delivery, load balancers
                        for handling heavy traffic, Amazon EC2 for hosting code
                        and Amazon SMS for email delivery, we enable your
                        applications to be ready to handle millions of users
                        right from start!
                    </Paragraph>
                </Description>
                <ImageContainer>
                    <Transform />
                </ImageContainer>
            </ContentContainer>
        </Container>
    </DetailsLayout>
);

export default Process;
