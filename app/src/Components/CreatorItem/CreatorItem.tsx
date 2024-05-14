/* "use client";
import Image from "next/image";
import React from "react";

import { Container, H3, Paragraph } from "../common";
type UserReview = {
    id: number;
    comment: string;
    country: string;
    project: string;
    username: string;
    image: string;
};

const CreatorItem = ({ data }: { data: UserReview }) => {
    return (
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
    );
};

export default CreatorItem;
 */
