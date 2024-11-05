// "use client"
import React from "react";
import Explorer from "../components/Exploer/Explorer";

import Ads from "../components/Ads/Ads";
import Breakingnews from "../components/Breakingnews";

const explorer = async () => {
  const getfeedback = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/feedback`,
        {
          cache: "no-store",
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const responseData = await response.json();
      return responseData.data || null; // Return the first item of the array
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  const feedback = await getfeedback();

  return (
    <div className="sm:mt-[60px] mt-[30px] mb-20  flex  flex-col lg:flex-row h-full w-full lg:items-start  sm:items-center justify-center   ">
      <div className="order-1 lg:order-2 sm:w-full flex lg:w-[50%] container h-auto w-auto bg-[100%] flex-col">
        <Explorer />
      </div>
      <div className="order-3 lg:order-1 flex lg:w-[25%] lg:sticky top-[100px] container h-auto w-auto lg:h-[80vh] bg-[100%]  flex-col overflow-y-auto no-scrollbar">
        {/*  <Topnews />
        <Ads /> */}
      </div>

      <div className="order-2 lg:order-3 flex lg:w-[25%] lg:sticky top-[100px] container h-auto w-auto lg:h-[80vh] bg-[100%]  flex-col overflow-y-auto no-scrollbar">
        {/*   <Ads />
        <Breakingnews /> */}
      </div>
    </div>
  );
};

export default explorer;
