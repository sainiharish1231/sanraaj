"use client";

import { useEffect, useState } from "react";
import "../../../../public/static/css/_feedback.scss";
import Reveal from "react-awesome-reveal";
import CreatorItem from "../CreatorItem";
import {
  fadeInDownShorter,
  fadeInDownShorter2,
  fadeInRight,
} from "../keyframes";
import { list_top_creator } from "../fake_data";

import {
  Container,
  ContentContainer,
  H2,
  H3,
  HeadingName,
  Paragraph,
} from "../common";
;
  return (
    <Container>
      <HeadingName>
        <div className={"mb-44 max-w-[1320px] mx-auto px-5 md:px-10"}>
          <div className="text-center mb-8">
            <H2 className="font-bold text-3xl mb-2">Testimonials</H2>
            <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
              <H3 className="text-center mb-8">
                Some Lovely Feedback From Our Clients
              </H3>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {list_top_creator.map((item, i) => (
              <Reveal
                key={i}
                keyframes={fadeInRight}
                duration={500}
                delay={100 * (i + 1)}
              >
                <CreatorItem data={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </HeadingName>
    </Container>
  );
};

export default ClientReviews;
