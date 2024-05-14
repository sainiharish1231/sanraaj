"use client";
import React from "react";
import { Container } from "../../Styled/Home";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SocialMediaLinks from "../SocialMediaLinks";

import { ILayout } from "../../Interfaces/Components/Layout";
// import NavBar from "@Components/NavigationBar";
import { Main } from "../../Styled/Layout";
import Footer from "../Footer";

export const Layout: React.FunctionComponent<ILayout> = ({
    children,
    className,
}) => {
    return (
        <>
            <Container className={className}>
                <Sidebar />
                <Header />
                <Main>{children}</Main>
                <SocialMediaLinks />

                <Footer />
            </Container>
        </>
    );
};

export default Layout;
