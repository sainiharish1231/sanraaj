"use client";
import React from "react";
import { Container } from "../../Styled/Home";
import Header from "../Header";
import Sidebar from "../Sidebar";
import SocialMediaLinks from "../SocialMediaLinks";
import Footer from "../Footer";
import { ILayout } from "../../Interfaces/Components/Layout";
// import NavBar from "@Components/NavigationBar";
import { Main } from "../../Styled/Layout";

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
        {/* <NavBar/> */}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
