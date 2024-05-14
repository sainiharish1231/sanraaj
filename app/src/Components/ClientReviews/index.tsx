"use client";

import { useEffect, useState } from "react";
import "../../../../public/static/css/_feedback.scss";
import Reveal from "react-awesome-reveal";
import "./index.css";
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
import Image from "next/image";
const ClientReviews = () => {
    return (
        <Container className="">
            <div className={"   mb-44 w-full  px-5 md:px-10"}>
                <div className="text-center mb-8">
                    <H2 className="font-bold text-3xl mb-2">Testimonials</H2>
                    <Reveal
                        keyframes={fadeInDownShorter2}
                        duration={800}
                        delay={100}
                    >
                        <H3 className="text-center mb-8">
                            Some Lovely Feedback From Our Clients
                        </H3>
                    </Reveal>
                </div>

                <Slider
                    className="box-shadow "
                    {...settings}
                    responsive={responsiveSettings}
                >
                    {list_top_creator.map((data, i) => (
                        <Container className="w-[80vw]    !p-0  ">
                            <div
                                className="xs-w-[100vw] sm:m-10 h-[580px]   sm:h-[560px]
                   !p-[20px] overflow-hidden "
                            >
                                <Paragraph
                                    className=" text-center p-3 overflow-y-auto 
                   h-[250px]  mb-[70px] "
                                >
                                    {data.comment}
                                </Paragraph>

                                <div
                                    className="pb-8 pl-8 pr-8   flex flex-col
                     justify-center items-center mt-[-60px]"
                                >
                                    <div className="w-[100px]  relative z-10 h-[100px] mb-3">
                                        <Image
                                            width={100}
                                            height={100}
                                            src={data.image}
                                            className="object-cover object-center rounded-[60%]  w-full h-full"
                                            alt={data.username}
                                        />
                                    </div>
                                    <H3 className="font-bold h-[100px] w-[200px] text-center mb-4">
                                        {data.username}
                                    </H3>
                                    <div className="  items-center">
                                        <h6 className="text-[blue] flex  justify-center ">
                                            {data.project}
                                        </h6>
                                        <h6 className=" flex  justify-center text-[blue]">
                                            {data.country}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    ))}
                </Slider>
            </div>
        </Container>
    );
};

export default ClientReviews;
