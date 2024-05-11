"use client";
import Image from "next/image";
import React from "react";
import { Container, H3, Paragraph } from "./common";
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
    <Container className="w-[80vw] boxshadow  sm:gap-10 boder-xl !p-0 rounded-md ">
      <div className="xs-w-[100vw] shadow  h-[480px]   !p-[10px] overflow-hidden rounded-lg">
        {" "}
        <Paragraph
          className=" text-center  overflow-y-auto 
       h-[250px]  mb-[70px] "
        >
          {data.comment}
        </Paragraph>
        <div className="pb-8 pl-8 pr-8   flex flex-col justify-center items-center mt-[-60px]">
          <div className="w-[100px]  relative z-10 h-[100px] mb-3">
            <Image
              width={100}
              height={100}
              src={data.image}
              className="object-cover object-center rounded-[60%]  w-full h-full"
              alt={data.username}
            />
          </div>
          <H3 className="font-bold text-xl text-center mb-4">
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
