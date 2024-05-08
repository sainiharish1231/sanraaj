"use client";
import React, { useState } from "react";
import { HeadingName, H2 } from "../common";
import {
  ContentContainer,
  Testimonial,
  By,
  ByName,
  ByCompany,
  QuoteContainer,
  ButtonContainer,
  ButtonSpan,
  MainContainer,
} from "../../Styled/ClientReviews";

const ClientReviews = () => {
  const [i, setI] = useState(0);
  const Quotes = [
    {
      client: "laduram",
      company: "sanraj software solutions",
      quote: `Southern velly Rava ladoo is one of the traditional recipe made in India for a few special occasions
                Southern velly Rava ladoo is one of the traditional recipe made in India for a few special occasions.`,
    },
    {
      client: "raj",
      company: "sanraj software services",
      quote: `British Empire in India and Indian Empire redirect here. For other uses, see India (disambiguationFor other
                uses, see India (disambiguation).`,
    },
    {
      client: "motya",
      company: "white lab genomics",
      quote: `Motya was an ancient and powerful Motya was an ancient and powerful city on San Pantaleo
                Island off the west coast of Sicily`,
    },
    {
      client: "dadi",
      company: "BR Health care & medical",
      quote:
        "Dadi Amma... Dadi Amma Maan Jaao! is an Indian Hindi television series on StarPlus.",
    },
  ];

  const handleClick = (index: number) => {
    setI(index);
  };

  return (
    <MainContainer>
      <HeadingName>
        <H2>Testimonials</H2>
      </HeadingName>
      <QuoteContainer>
        {Quotes.map((quote, index) => (
          <ContentContainer key={index} cIndex={i - index} index={index}>
            <Testimonial>{quote.quote}</Testimonial>
            <By>
              <ByName>{quote.client}</ByName>
              <ByCompany>{quote.company}</ByCompany>
            </By>
          </ContentContainer>
        ))}
      </QuoteContainer>
      <ButtonContainer>
        {Quotes.map((quote, index) => (
          <ButtonSpan
            active={i === index ? true : false}
            onClick={() => handleClick(index)}
            data-quote={index}
            key={index}
          />
        ))}
      </ButtonContainer>
    </MainContainer>
  );
};

export default ClientReviews;
