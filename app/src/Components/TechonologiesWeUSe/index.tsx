"use client";
import React from "react";
import Link from "next/link";
import { Container, HeadingName, H2, H3 } from "../common";
import { Button, ImageContainer } from "../../Styled/TechonologiesWeUSe";
import TechnologiesCloud from "../../../../public/static/images/TechnologiesCloud";

const TechnologiesWeUse = () => (
  <Container>
    <HeadingName>
      <H2>Technologies</H2>
      <H3>We Use</H3>
    </HeadingName>
    <ImageContainer>
      <TechnologiesCloud />
    </ImageContainer>
    <Link href="/technologies">
      <Button href="/technologies">Learn More {">>"}</Button>
    </Link>
  </Container>
);

export default TechnologiesWeUse;
