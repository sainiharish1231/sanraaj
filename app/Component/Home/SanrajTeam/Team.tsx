import Image from "next/image";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useTeam } from "../../../../hooks/useTeamData";
const Team: React.FC = () => {
  const { teamData } = useTeam();
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-10 overflow-hidden" id="roadMap">
      <div className="p-8     ">
        <div className="flex flex-row   justify-between items-center mb-8">
          <p className="font-sans text-4xl font-bold text-gray-200 lg:text-7xl md:text-6xl ">
            Our Team
          </p>
          <div className="flex gap-5">
            <div
              className=" rounded-full   cursor-pointer"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24 "
                height={40}
                fill="#fff"
                width={40}
              >
                <path
                  d="M12 24A12 12 0 1 0 0 12a12 12 0 0 0 12 12ZM8.15 11.65l5.5-5.5a.5.5 0 0 1 .85.35V8a.5.5 0 0 1-.15.35L10.71 12l3.65 3.65a.5.5 0 0 1 .15.35v1.5a.5.5 0 0 1-.85.35l-5.5-5.5a.5.5 0 0 1-.01-.7Z"
                  data-name="Arrow 6 Right"
                />
              </svg>
            </div>
            <div
              className=" rounded-full   cursor-pointer"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 2"
                height={42}
                width={42}
                fill="#fff"
                viewBox="0 0 32 32"
              >
                <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm5.66 14.75-8 7a1 1 0 1 1-1.32-1.51L19.48 16l-7.14-6.25a1 1 0 1 1 1.32-1.51l8 7a1 1 0 0 1 0 1.51Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative">
          <Slider
            ref={sliderRef}
            {...settings}
            className="  roadMap-active2 roadmap-slider1"
          >
            {teamData.map((item, index) => (
              <div className="col-lg-4" key={index}>
                <div className="roadmap-item ">
                  <span className="roadmap-title "></span>
                  <div className="roadmap-content">
                    <div className="flex flex-col">
                      <div className="title text-gray-400">
                        <div className="h-[60px] flex justify-center items-center  w-[60px] bg-white rounded-full dot">
                          <Image
                            height={680}
                            width={680}
                            className=" h-full w-full object-cover  z-[500] rounded-full "
                            src={item.image}
                            alt={""}
                          />
                        </div>
                        <div className="flex justify-center items-center">
                          {item.name}{" "}
                        </div>

                        {/*   <Image
                          height={680}
                          width={680}
                          className=" h-[20px] object-cover w-[200px]  z-[500] rounded-full "
                          src={"/hacker.jpeg"}
                          alt={""}
                        /> */}
                      </div>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
