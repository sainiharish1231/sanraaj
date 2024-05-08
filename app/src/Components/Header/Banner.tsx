"use client";
import { Container, Title } from "../../Styled/Layout/Banner";
import React from "react";
import Breadcrumbs from "../BreadCrumbs";

interface Props {
  title: string;
}

export const Banner: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Breadcrumbs />
      </div>
    </Container>
  );
};

export default Banner;
