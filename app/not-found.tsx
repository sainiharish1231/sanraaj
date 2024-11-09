import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const Custom404 = () => {
  return (
    <>
      <div
        className=" mt-[200px]  sm:mt-[100px]  flex  justify-center
        flex-col items-center  "
      >
        <div className="  sm:max-w-[1000px] flex justify-center items-center">
          <Image
            className=" items-center "
            src={"/404.png"}
            height={1000}
            width={1000}
            alt={""}
          />
        </div>
        <h1
          className=" mt-[50px] sm:max-w-[1000px] 
        text-4xl sm:text-9xl   text[#ffffff]  "
        >
          Page Not Found
        </h1>
        <p>Sorry! The page you are looking for is either not available right now or has been removed.</p>
        <p><Link href="/">Go to Home</Link></p>
      </div>
    </>
  );
};

export default Custom404;
