"use client";
import React, { useState } from "react";
import { HeadingName, H2, Paragraph, H3 } from "../common";
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

const ClientReviewsas1 = () => {
  const [i, setI] = useState(0);
  const list_top_creator = [
    {
      id: 1,
      username: "Neetesh Kumar",
      image: "/static/images/client-image/Neetesh.jpeg",
      coment: `I had the pleasure of working with Raj for a year for one of the
    Complex UI Technology modernization Project. Raj is very detail
    oriented and has In depth knowledge on Various UI technologies.
    Raj's contributed to architectural discussions and always helped
    Sr. Developers with through Tech modernization concepts. He holds
    himself at a high standard and is very accountable and ensures
    delivery timelines meets as per customer expectation.`,
      country: "india",
      project: "Doubtlet",
    },

    {
      id: 2,
      username: "Praful Kumar Enni",
      image: "/static/images/client-image/Praful.jpeg",
      coment: `Great experience working with San Raj software solution. Experienced and skilled staff members.
     Quick turn around time on issue. Looking forward to working with your team again.`,
      country: "Chicago IL",
      project: "Option clearing corp.",
    },
    {
      id: 3,
      username: "Jagdeesh Rapolu    ",
      image: "/static/images/client-image/Jagdeesh.jpeg",
      coment: `I had the pleasure of working with Raj for a year for one of the
    Complex UI Technology modernization Project. Raj is very detail
    oriented and has In depth knowledge on Various UI technologies.
    Raj's contributed to architectural discussions and always helped
    Sr. Developers with through Tech modernization concepts. He holds
    himself at a high standard and is very accountable and ensures
    delivery timelines meets as per customer expectation.`,
      country: "Chicago IL",
      project: "Apple Inc.",
    },
    {
      id: 4,
      username: "Jagdeesh Rapolu    ",
      image: "/static/images/client-image/Jagdeesh.jpeg",
      coment: `I had the pleasure of working with Raj for a year for one of the
    Complex UI Technology modernization Project. Raj is very detail
    oriented and has In depth knowledge on Various UI technologies.
    Raj's contributed to architectural discussions and always helped
    Sr. Developers with through Tech modernization concepts. He holds
    himself at a high standard and is very accountable and ensures
    delivery timelines meets as per customer expectation.`,
      country: "Chicago IL",
      project: "Apple Inc.",
    },
    {
      id: 5,
      username: "Vikram    ",
      image: "/static/images/client-image/Vikram.jpeg",
      coment: `I rarely come across real talents who stand out like Raj.I had
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
    recommend him very strong for your projects.`,
      country: "Irving,TX",
      project: "AVJ Solutions",
    },
  ];

  const handleClick = (index: number) => {
    setI(index);
  };

  return (
    <div className="overflow-hidden">
      <div>
        {list_top_creator.map((quote, index) => (
          <ContentContainer key={index} cIndex={i - index} index={index}>
            <Paragraph>{quote.coment}</Paragraph>
            <By>
              <H3>{quote.username}</H3>
              <div className="top-[30px] flex text-[red]  justify-center space-x-4">
                <span>{quote.project}</span>
                <span>{quote.country}</span>
              </div>
            </By>
          </ContentContainer>
        ))}
      </div>
      <div className="flex overflow-hidden">
        {list_top_creator.map((quote, index) => (
          <ButtonSpan
            active={i === index ? true : false}
            onClick={() => handleClick(index)}
            data-quote={index}
            key={index}
          />
        ))}
      </div>
    </div>

    /*   <div
      className="hover:bg-[#ffffff66] transition 
      duration-300 h-[520px]
     ease-in-out bg-[#ffffff1a] 
     overflow-hidden rounded-lg shadow-xl  "
    >
      <Paragraph
        className=" text-center  overflow-y-auto 
       h-[200px] m-8  mb-[100px]"
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
        <H3 className="font-bold text-xl text-center mb-4">{data.username}</H3>
        <div className="  items-center">
          <h6 className="text-[blue]">{data.project}</h6>
          <h6 className="text-[blue]"> {data.country}</h6>
        </div>
      </div>
    </div>
 */
  );
};

export default ClientReviewsas1;
