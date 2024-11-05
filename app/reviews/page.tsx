import React from "react";
import Feedback from "../components/Feedback";

const ReviewsPage = async () => {
  return (
    <div className="sm:mt-[60px] mt-[30px] mb-20  flex  flex-col lg:flex-row h-full w-full lg:items-start  sm:items-center justify-center   ">
      <div className="order-1 lg:order-2 sm:w-full flex lg:w-[50%] container h-auto w-auto bg-[100%] flex-col">
        <Feedback />
      </div>
    </div>
  );
};

export default ReviewsPage;
