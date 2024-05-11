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
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};
const responsiveSettings = [
  {
    breakpoint: 500,
    settings: {
      ...settings,
      slidesToShow: 1, // Show 1 slide when screen width is <= 500px
    },
  },
  {
    breakpoint: 900,
    settings: {
      ...settings,
      slidesToShow: 2, // Show 2 slides when screen width is <= 900px
    },
  },
  {
    breakpoint: 1004,
    settings: {
      ...settings,
      slidesToShow: 3, // Show 3 slides when screen width is <= 1004px
    },
  },
];
import Slider from "react-slick";
const ClientReviews = () => {
  return (
    <Container className="">
      <div className={"   mb-44 w-full px-5 md:px-10"}>
        <div className="text-center mb-8">
          <H2 className="font-bold text-3xl mb-2">Testimonials</H2>
          <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
            <H3 className="text-center mb-8">
              Some Lovely Feedback From Our Clients
            </H3>
          </Reveal>
        </div>

        <Slider {...settings} responsive={responsiveSettings}>
          {list_top_creator.map((item, i) => (
            <CreatorItem data={item} />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ClientReviews;
