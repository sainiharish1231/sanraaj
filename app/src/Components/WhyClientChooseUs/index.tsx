"use client";
import React from "react";
import Link from "next/link";

import { H4, KnowMore } from "../../Styled/WhyClientChooseUs";
import {
  Container,
  Description,
  Paragraph,
  ContentContainer,
  ImageContainer,
  HeadingName,
  H2,
  H3,
} from "../common";
import ModularApproach from "../../../../public/static/images/Modular-Approach";
import Transform from "../../../../public/static/images/Transfrom";
import TestDrivenDevelopment from "../../../../public/static/images/testDrivenDevelopment";
import AnimatedLogo from "../../../../public/static/images/AnimatedLogo";
import Box from "../3DBox";

const WhyClientChooseUse = () => (
  <Container>
    <HeadingName>
      <H2>Why Clients</H2>
      <H3>Choose Us?</H3>
    </HeadingName>
    <ContentContainer>
      <Description>
        <H4>Support Multi Platforms</H4>
        <Paragraph>
          Our expertise in latest cloud technologies like AWS enables your
          applications to scale easily and support multiple platforms. You don't
          have to worry about increasing traffic on your site anymore.
        </Paragraph>
        <Link href="/process/#support-multi-platform">
          <KnowMore href="/process/#support-multi-platform">
            Know More {">>"}
          </KnowMore>
        </Link>
      </Description>
      <ImageContainer>
        <AnimatedLogo />
      </ImageContainer>
    </ContentContainer>
    <ContentContainer>
      <Description>
        <H4>Scalable Apps</H4>
        <Paragraph>
          Our expertise in latest cloud technologies enables your applications
          to scale easily. You don't have to worry about increasing traffic on
          your site anymore.
        </Paragraph>
        <Link href="/process/#scallable-app">
          <KnowMore href="/process/#scallable-app">Know More {">>"}</KnowMore>
        </Link>
      </Description>
      <ImageContainer>
        <Transform />
      </ImageContainer>
    </ContentContainer>
    <ContentContainer>
      <Description>
        <H4>Modular Approach</H4>
        <Paragraph>
          We follow modern application architecture right from the beginning.
          That is why our applications are easier to maintain, easy to test and
          less prone to bugs, saving you both time and cost.
        </Paragraph>
        <Link href="/process/#modular-approach">
          <KnowMore href="/process/#modular-approach">
            Know More {">>"}
          </KnowMore>
        </Link>
      </Description>
      <ImageContainer>
        <ModularApproach />
      </ImageContainer>
    </ContentContainer>
    <ContentContainer>
      <Description>
        <H4>Test Driven Development</H4>
        <Paragraph>
          Testing is an integral part of modern applications and so is of our
          development process. Using latest testing tools and continuous
          integration, we enable you to be sure that your applications function
          as expected - always.
        </Paragraph>
        <Link href="/process/#test-driven-development">
          <KnowMore href="/process/#test-driven-development">
            Know More {">>"}
          </KnowMore>
        </Link>
      </Description>
      <ImageContainer>
        <TestDrivenDevelopment />
      </ImageContainer>
    </ContentContainer>
    {/*  <ContentContainer>
      <div style={{ height: "14rem", width: "17rem" }}>
        <Box />
      </div>
    </ContentContainer> */}
  </Container>
);

export default WhyClientChooseUse;
