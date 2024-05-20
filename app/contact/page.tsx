"use client";
import React from "react";
import { NextPage } from "next";

import { ReduxNextPageContext, IContact } from "../src/Interfaces";
/* import SimpleMap from "@Components/Google Map"; */
import DetailsLayout from "../src/Components/Layout/DetailsLayout";
import { H3, H2, Paragraph, Container } from "../src/Components/common";
import { Locationdata } from "../src/Components/fake_data";
import Image from "next/image";

const Contact = () => {
    return (
        <>
            <DetailsLayout title="  Contact Us">
                <div className="flex justify-center m-[30px]">
                    <div className="mb-12 lg:mb-0">
                        <H2 className="flex justify-center">Contact Us</H2>
                        <H3 className="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                            GET IN TOUCH WITH US
                        </H3>

                        <Paragraph className="text-base flex     text-center leading-relaxed text-body-color dark:text-dark-6 mb-9">
                            Do you have any ground breaking Idea, which you want
                            to convert into a digital reality, let's shake hands
                            together and work towards converting your dream into
                            reality.
                        </Paragraph>

                        {Locationdata.map((item, i) => (
                            <>
                                <div className="  flex justify-center mr-6  h-[60px] w-full items-center  overflow-hidden rounded sm:h-[70px]   ">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={item.image}
                                        alt={""}
                                    />
                                </div>

                                <H2 className="flex justify-center text-xl font-bold ">
                                    {item.title}
                                </H2>

                                <Paragraph className="text-base flex justify-center    ">
                                    <H3 className=" text-sm">
                                        {item.Number}
                                        {item.Email?.map((item) => (
                                            <>
                                                <H3 className=" text-sm">
                                                    {item}
                                                </H3>
                                            </>
                                        ))}
                                        {item.Location?.map((item) => (
                                            <>
                                                <H3 className=" text-sm">
                                                    {item}
                                                </H3>
                                            </>
                                        ))}
                                    </H3>
                                </Paragraph>
                            </>
                        ))}
                    </div>
                </div>
                {/*  <Container>
                <Section body>
                    <IconsContainer>
                        {data.map((item, index) => (
                            <Icon key={index} num={data.length}>
                                <IconSection>
                                    <IconContainer>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </IconContainer>
                                </IconSection>
                                <IconSection>
                                    <Title>{item.title}</Title>
                                </IconSection>
                                <IconSection>
                                    <Adress>
                                        {item.desc.map((desc, index) => (
                                            <Span key={index}>{desc}</Span>
                                        ))}
                                    </Adress>
                                </IconSection>
                            </Icon>
                        ))}
                    </IconsContainer>
                </Section>
            </Container> */}
            </DetailsLayout>
        </>
    );
};

export default Contact;
