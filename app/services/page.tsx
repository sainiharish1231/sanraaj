"use client";
// #region Global Imports
import React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "next-i18next";
// #endregion Local Imports

// #region Interface Imports
import { ReduxNextPageContext, IServices } from "../src/Interfaces";
import {
    Container,
    Paragraph,
    ContentContainer,
    Description,
} from "../src/Components/common";
import { Image, ImageContainer } from "../src/Styled/Services";
import { H2 } from "../src/Styled/Process";
import DetailsLayout from "../src/Components/Layout/DetailsLayout";
// #endregion Interface Imports

const Services = () => {
    return (
        <DetailsLayout title="Our Services">
            <Container>
                <ContentContainer>
                    <Description>
                        <H2 className="details-heading">Web Applications</H2>
                        <Paragraph>
                            We offer services for the development of modern web
                            applications using latest technologies and
                            processes. We can help you develop entire
                            applications from scratch, add features to existing
                            products or migrate old applications to new
                            technologies. Our exclusive focus on web
                            applications helps us deliver better end products.
                            <br />
                            In past, we have worked with clients from across the
                            world and successfully delivered them applications
                            of vast variety, including, HR Management Systems,
                            Content Management Systems, Customer Relationship
                            Management Systems, Billing and Payment Systems, and
                            more.
                        </Paragraph>
                    </Description>
                    <ImageContainer>
                        <Image src="/static/images/webDevelopment.png" />
                    </ImageContainer>
                </ContentContainer>
                <ContentContainer>
                    <Description>
                        <H2 className="details-heading">UX/UI Designing</H2>
                        <Paragraph>
                            With help of our experienced and creative designing
                            team, we create beautiful and innovative UI/UX
                            designs that appeal to your customers. UX/UI
                            designing is an important part of our development
                            process and we take every interface of your
                            application very seriously. That is why our designs
                            are easy to use and beautiful to look at.
                        </Paragraph>
                    </Description>
                    <ImageContainer>
                        <Image src="/static/images/UX-design.png" />
                    </ImageContainer>
                </ContentContainer>
                <ContentContainer>
                    <Description>
                        <H2 className="details-heading">App Development</H2>
                        <Paragraph>
                            Using solid expertise in mobile apps development,
                            our team will help you create practical and seamless
                            experiences on any device and get the best of mobile
                            technology for your business.
                        </Paragraph>
                    </Description>
                    <ImageContainer>
                        <Image src="/static/images/appdevelopment.png" />
                    </ImageContainer>
                </ContentContainer>
            </Container>
        </DetailsLayout>
    );
};

export default Services;
