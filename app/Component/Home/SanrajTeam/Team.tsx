import Image from "next/image";
import React, { useRef } from "react";
import Slider, { Settings } from "react-slick";
import { useTeam } from "../../../../hooks/useTeamData";
const Team: React.FC = () => {
  const { teamData } = useTeam();
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
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
      <div className="p-8">
        <div className="flex flex-row   justify-between items-center mb-8">
          <p className="font-sans text-4xl font-bold  lg:text-7xl md:text-6xl ">
            Our Clients
          </p>
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
                  <span className="roadmap-title  "></span>
                  <div className="roadmap-content">
                    <div className="flex flex-col">
                      <div className="title ">
                        <div className="h-[60px]  flex justify-center items-center  w-[60px] rounded-full dot">
                          <Image
                            height={680}
                            width={680}
                            className=" h-full w-full object-cover  z-[500] rounded-full "
                            src={item.image}
                            alt={""}
                          />
                        </div>
                        <div className="flex flex-col  justify-center">
                          <h4>{item.name}</h4>
                          <p className="font-normal text-sm">
                            {item.projectsname} , {item.country}
                          </p>
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
                    <p
                      style={{ scrollbarWidth: "none" }}
                      className=" max-h-32 overflow-y-scroll"
                    >
                      {item.description}
                    </p>
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
