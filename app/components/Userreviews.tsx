"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Userreviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const list_top_creator = [
    {
      id: 1,
      username: "Neetesh Kumar",
      image: "/static/images/client-image/Neetesh.jpeg",
      comment: `I had the pleasure of working with Raj for a year for one of the
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
      comment: `Great experience working with San Raj software solution. Experienced and skilled staff members.
           Quick turn around time on issue. Looking forward to working with your team again.`,
      country: "Chicago IL",
      project: "Option clearing corp.",
    },
    {
      id: 3,
      username: "Jagdeesh Rapolu    ",
      image: "/static/images/client-image/Jagdeesh.jpeg",
      comment: `I had the pleasure of working with Raj for a year for one of the
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
      comment: `I rarely come across real talents who stand out like Raj.I had
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
  return (
    <Slider className="box-shadow " {...settings}>
      {list_top_creator.map((data, i) => (
        <div className="w-[80vw]    !p-0  ">
          <div
            className="w-[100vw] sm:m-10 h-[580px]   sm:h-[560px]
     !p-[20px] overflow-hidden "
          >
            <span
              className=" text-center p-3 overflow-y-auto 
     h-[250px]  mb-[70px] "
            >
              {data.comment}
            </span>

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
              <h3 className="font-bold h-[100px] w-[200px] text-center mb-4">
                {data.username}
              </h3>
              <div className="  items-center">
                <h6 className=" flex  justify-center text-[blue]">
                  {data.country}
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Userreviews;
