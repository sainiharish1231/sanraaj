"use client";
import React from "react";
import { IDetailsLayout } from "../../Interfaces/Components/Layout";
import { Container } from "../../Styled/Home";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Banner from "../Header/Banner";
import { Main } from "../../Styled/Layout";
import SocialMediaLinks from "../SocialMediaLinks";
import NavBar from "../NavigationBar";
// import NavBar from "@Components/NavigationBar";

export const DetailsLayout: React.FunctionComponent<IDetailsLayout> = ({
  children,
  title,
}) => {
  return (
    <Container>
      <Sidebar />
      <Header />
      <Banner title={title} />
      <Main>{children}</Main>
      <SocialMediaLinks />
      {/*   <NavBar /> */}
      <Footer />
    </Container>
  );
};

export default DetailsLayout;
