"use client";
import React from "react";
import {
  Container,
  Description,
  Paragraph,
  ContentContainer,
  H2,
  H3,
  HeadingName,
} from "../Components/common";

const TransformingEmotions = () => {
  return (
    <Container>
      <HeadingName style={{ marginTop: 40 }}>
        <H2>Transforming</H2>
        <H3>Emotions</H3>
      </HeadingName>
      <ContentContainer>
        <Description style={{ width: "100%", textAlign: "justify" }}>
          <Paragraph>
            We believe every business/venture has some emotional values behind
            it, which are the main constructing blocks for that venture. We
            respect this emotional feeling the most and helping businesses to
            reflect these in form of a digital reality by carefully crafting and
            transforming them in form of Softwares or Digital Applications on
            all supported platforms.
          </Paragraph>
        </Description>
      </ContentContainer>
    </Container>
  );
};

export default TransformingEmotions;
