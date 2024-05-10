"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Container, H3, Paragraph } from "./common";
import dynamic from "next/dynamic";
import "react-owl-carousel3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CreatorItem = ({ data }: any) => {
  return (
    <Container>
      <div
        className=" hover:bg-[#2c282866] w-[240px]   h-[520px]
   
     overflow-hidden rounded-lg   "
      >
        <Paragraph
          className=" text-center  overflow-y-auto 
       h-[200px] m-3  mb-[100px]"
        >
          {data.coment}
        </Paragraph>
        <div className="pb-8 pl-8 pr-8   flex flex-col justify-center items-center mt-[-60px]">
          <div className="w-[100px] relative z-10 h-[100px] mb-3">
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
              {" "}
              {data.country}
            </h6>
          </div>
        </div>
      </div>
    </Container>

    /*  <div className="feedback-area ptb-100 bg-color client-feeback">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Testimonials</span>
          <h2>Some Lovely Feedback From Our Clients</h2>
        </div>
      </div>

      {display ? (
        <div
          // @ts-ignore
          className="feedback-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="single-feedback-item">
            <p className="feedback-para">
              “Great experience working with San Raj software solution.
              Experienced and skilled staff members. Quick turn around time on
              issue. Looking forward to working with your team again.”
            </p>
            <div className="client-info">
              <img src="/images/client-image/Praful.jpeg" alt="image" />
              <h3>Praful Kumar Enni</h3>
              <span>Option clearing corp.</span>
              <span>Chicago IL</span>
            </div>
          </div>

          <div className="single-feedback-item">
            <p className="feedback-para">
              “San Raj software solutions is the best company that I ever know.
              I would highly recommend this company as they have extreme
              knowledge on all the top technologies with deep understanding. San
              Raj software solutions has the best team which include almost all
              the front end and back end technologies.”
            </p>
            <div className="client-info">
              <img src="/images/client-image/Jagdeesh.jpeg" alt="image" />
              <h3>Jagdeesh Rapolu</h3>
              <span>Apple Inc.</span>
              <span>Chicago IL</span>
            </div>
          </div>

          <div className="single-feedback-item">
            <p className="feedback-para">
              “I would like to thank SANRAJ DEVELOPERS for the wonderful job in
              helping us develop our online platform for our company "Doubtlet".
              Everyone was professional, excellent, hard working with timely
              delivery of our project. Thanks to the whole team. we were able to
              achieve our goal on time, and we look forward to continue working
              with them in the future.”
            </p>
            <div className="client-info">
              <img src="/images/client-image/Neetesh.jpeg" alt="image" />
              <h3>Neetesh Kumar</h3>
              <span>Doubtlet</span>
              <span>India</span>
            </div>
          </div>

          <div className="single-feedback-item">
            <p className="feedback-para">
              “I had the pleasure of working with Raj for a year for one of the
              Complex UI Technology modernization Project. Raj is very detail
              oriented and has In depth knowledge on Various UI technologies.
              Raj's contributed to architectural discussions and always helped
              Sr. Developers with through Tech modernization concepts. He holds
              himself at a high standard and is very accountable and ensures
              delivery timelines meets as per customer expectation.”
            </p>
            <div className="client-info">
              <img src="/images/client-image/Tejendra.jpg" alt="image" />
              <h3>Tejendra Patil</h3>
              <span>BlueConch Technologies</span>
              <span>India</span>
            </div>
          </div>

          <div className="single-feedback-item">
            <p className="feedback-para">
              “I rarely come across real talents who stand out like Raj.I had
              the pleasure of working with him for 2 years for contributing in
              my projects.Raj’s ability to handle multiple projects was unlike
              any I have seen before and made dramatic increse in the
              productivity level in my projects.I always surprised with his
              excessive Java and FrontEnd particularly in React and
              NodeJS,GraphQL and more not jus one particular but everything were
              really great.No matter how big is the task is he can handle it
              very smoothly and get the job done.When ever I had a problem there
              has never been a time he has left me without a solution.He remains
              one of the smartest people I know and have worked with.So I will
              recommend him very strong for your projects.”
            </p>
            <div className="client-info">
              <img src="/images/client-image/Vikram.jpeg" alt="image" />
              <h3>Vikram</h3>
              <span>AVJ Solutions</span>
              <span>Irving,TX</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      </div> 
      
    */
  );
};

export default CreatorItem;
