"use client";
import React from "react";
import { IDetailsLayout } from "../../Interfaces/Components/Layout";

import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Banner from "../Header/Banner";
import { Main } from "../../Styled/Layout";
import SocialMediaLinks from "../SocialMediaLinks";
import NavBar from "../NavigationBar";
import { Container } from "../common";
import Layout from ".";
// import NavBar from "@Components/NavigationBar";

export const DetailsLayout: React.FunctionComponent<IDetailsLayout> = ({
    children,
    title,
}) => {
    return (
        <Layout>
            <Container className="!p-0">
                <Banner title={title} />
                <Main className="!p-[20px]">{children}</Main>
                <SocialMediaLinks />
            </Container>
        </Layout>
    );
};

export default DetailsLayout;
