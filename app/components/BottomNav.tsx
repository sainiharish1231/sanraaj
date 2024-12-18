"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BottomNav = () => {
  const { data: session, status } = useSession();
  const user: any = session?.user;

  const [Adminbtn, setAdminbtn] = useState(false);

  useEffect(() => {
    if (user?.isAdmin === "true") {
      setAdminbtn(true);
    } else {
      setAdminbtn(false);
    }
  }, [status, user]);

  return (
    <nav
      className="fixed z-[400000000000] s-center transition ease-in duration-200
      hover:text-[#9333ea] inset-x-0 bottom-0 max-w-[600px] mx-auto"
    >
      <div
        className="sticky bottom-2  p-4 px-6 m-2 flex items-center justify-between 
        dark:bg-[#ffffff] bg-[#232323] shadow-2xl
        text-[#ffffff] dark:text-[#232323] rounded-full cursor-pointer"
      >
        <Link
          className="flex flex-col items-center transition ease-in duration-200 hover:text-[#9333ea] "
          href={"/"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            ></path>
          </svg>
        </Link>
        <Link
          className="flex flex-col items-center transition ease-in duration-200 hover:fill-[#9333ea] "
          href={"/explorer"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:stroke-[#9333ea]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12L12 18L3 12M21 16L12 22L3 16M21 8L12 14L3 8L12 2L21 8Z"
            />
          </svg>
        </Link>
        <Link
          className="flex flex-col items-center transition ease-in duration-200 hover:text-[#9333ea] "
          href={"/save"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.3}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </Link>
        <Link
          className="flex flex-col items-center transition ease-in duration-200 hover:text-[#9333ea] "
          href={"/profile"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </Link>

        {Adminbtn ? (
          <Link
            className="flex flex-col items-center transition ease-in duration-200 hover:text-[#9333ea] "
            href={"/admin"}
          >
            <svg
              id="SvgjsSvg1001"
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              stroke="currentColor"
            >
              <defs id="SvgjsDefs1002"></defs>
              <g id="SvgjsG1008">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.933 16.933"
                  className="h-6 w-6"
                >
                  <g
                    fill="currentColor"
                    transform="translate(-551.92 -625.042) scale(.26458)"
                    className="color3b3c3d svgShape"
                  >
                    <path
                      d="m 2105.8984,1390.9844 c -0.3836,0.013 -0.7717,0.049 -1.164,0.1094 -1.1291,0.1505 -2.3001,0.4787 -3.4805,0.9941 -3.6571,1.597 -6.2461,5.0362 -6.2461,10.3848 v 4.5253 c 0,0.8786 0.3824,1.6262 0.8438,2.2676 0.3848,0.5349 0.8605,0.9427 1.3359,1.3047 1.0243,2.0211 2.2354,3.8058 3.6719,5.1328 0.047,0.043 0.096,0.081 0.1426,0.1231 v 2.5039 l -6.8692,2.7519 0.039,-0.014 c -1.0256,0.3617 -2.0507,0.9163 -2.8555,1.7324 -0.8048,0.8162 -1.3815,1.9556 -1.3105,3.2617 v 2.9414 5.9961 c 1e-4,0.5523 0.4478,1 1,1 h 29.9961 c 0.5522,0 0.9999,-0.4477 1,-1 v -5.9961 -2.9961 c 0,-1.278 -0.559,-2.387 -1.3458,-3.2012 -0.7867,-0.814 -1.7894,-1.3746 -2.8203,-1.7382 l 0.039,0.014 -6.873,-2.7539 v -2.4785 c 0.053,-0.047 0.1093,-0.092 0.1621,-0.1406 1.4365,-1.327 2.6436,-3.1117 3.6679,-5.1328 0.4754,-0.362 0.9512,-0.7698 1.336,-1.3047 0.4614,-0.6414 0.8457,-1.389 0.8457,-2.2676 v -0.039 -7.0058 c 0,-1.5359 -0.3316,-2.9947 -1.1543,-4.1367 -0.7307,-1.0143 -1.9039,-1.7173 -3.3125,-1.8614 -1.5316,-2.0165 -3.9593,-3.0677 -6.6446,-2.9765 z m 1.9707,11.2558 c 0.8164,0.7308 1.5543,1.2025 2.3184,1.4571 0.6061,0.2021 1.2129,0.1733 1.8164,0.1953 v 1.1094 c 10e-5,0.5523 0.4478,0.9999 1,1 h 1 c 0.5635,0 0.9989,0.4348 1,0.998 0,0.2261 -0.1579,0.6702 -0.4668,1.0996 -0.3089,0.4293 -0.7458,0.8404 -1.0879,1.0684 -0.1448,0.096 -0.2619,0.229 -0.3398,0.3847 -0.9618,1.9237 -2.0947,3.5585 -3.3125,4.6836 -1.211,1.1186 -2.4669,1.7244 -3.793,1.7617 -1.3261,-0.038 -2.5801,-0.6431 -3.791,-1.7617 -1.2181,-1.1251 -2.3527,-2.7599 -3.3145,-4.6836 -0.078,-0.1557 -0.195,-0.2882 -0.3398,-0.3847 -0.3421,-0.228 -0.779,-0.6391 -1.0879,-1.0684 -0.3089,-0.4294 -0.4668,-0.8735 -0.4668,-1.0996 0,-0.5632 0.4366,-0.998 1,-0.998 h 1 c 0.5523,-10e-5 0.9999,-0.4477 1,-1 v -1.0586 c 2.5171,-0.02 5.1872,-0.1686 7.8652,-1.7032 z m -4.8671,14.9707 c 0.9026,0.458 1.8681,0.7409 2.8886,0.7793 0.033,0 0.066,0.01 0.1,0.01 0.014,3e-4 0.027,3e-4 0.041,0 0.015,-4e-4 0.03,0 0.045,0 0,0 -7e-4,10e-5 0.01,0 h 0.012 c 1.0258,-0.033 1.9966,-0.3134 2.9043,-0.7715 v 1.7755 l -3,3.996 -3,-4 z m -4.8145,4.4004 2.9199,5.836 c 0.3053,0.6106 1.119,0.7426 1.6016,0.2597 l 0.293,-0.2929 1.7832,1.7832 -2.4024,4.8047 h -10.3789 v -4.9981 -2.9961 c 5e-4,-0.018 5e-4,-0.037 0,-0.055 -0.037,-0.6894 0.2213,-1.2259 0.7363,-1.748 0.515,-0.5222 1.295,-0.9687 2.0977,-1.252 0.012,0 0.025,-0.01 0.037,-0.014 z m 15.627,0 3.3144,1.3282 c 0.013,0 0.026,0.01 0.039,0.014 0.7973,0.2814 1.5428,0.7227 2.0488,1.2461 0.5059,0.5235 0.7832,1.0902 0.7832,1.8106 v 2.9961 4.998 h -10.3789 l -2.4023,-4.8047 1.7832,-1.7832 0.2929,0.291 c 0.482,0.4831 1.2955,0.3522 1.6016,-0.2578 z m -7.8125,2.8067 1.5839,1.584 -1.5839,1.5839 -1.584,-1.5839 z"
                      color="currentColor"
                      font-family="sans-serif"
                      font-weight="400"
                      overflow="visible"
                      paint-order="fill markers stroke"
                      transform="translate(0 988.362)"
                    ></path>
                    <path
                      d="m 2124,1376 c -5.8633,0 -11.1683,0.5588 -15.0801,1.4902 -1.9559,0.4657 -3.5614,1.0168 -4.7597,1.6914 -1.1984,0.6747 -2.1602,1.5626 -2.1602,2.8204 v 6 h 2 v -3.2872 c 0.056,0.033 0.1034,0.072 0.1602,0.1036 1.1983,0.6746 2.8039,1.2257 4.7597,1.6914 3.9118,0.9315 9.2168,1.4922 15.0801,1.4922 5.8633,0 11.1683,-0.5607 15.0801,-1.4922 1.9559,-0.4657 3.5614,-1.0168 4.7597,-1.6914 0.057,-0.032 0.1046,-0.071 0.1602,-0.1036 v 11.2872 c 0,0.1229 -0.2137,0.5524 -1.1406,1.0742 -0.927,0.5219 -2.3978,1.0491 -4.2422,1.4883 -3.6888,0.8783 -8.8825,1.4375 -14.6172,1.4375 h -2 v 2 h 2 c 5.8633,0 11.1683,-0.5607 15.0801,-1.4922 1.9558,-0.4657 3.5614,-1.0168 4.7597,-1.6914 0.057,-0.032 0.1046,-0.071 0.1602,-0.1036 v 11.2872 c 0,0.1229 -0.2137,0.5524 -1.1406,1.0742 -0.927,0.5219 -2.3978,1.0491 -4.2422,1.4883 -3.6888,0.8783 -8.8825,1.4375 -14.6172,1.4375 h -2 v 2 h 2 c 5.8633,0 11.1683,-0.5607 15.0801,-1.4922 1.9558,-0.4657 3.5614,-1.0168 4.7597,-1.6914 0.057,-0.032 0.1046,-0.071 0.1602,-0.1036 v 11.2872 c 0,0.1229 -0.2137,0.5524 -1.1406,1.0742 -0.927,0.5219 -2.3978,1.0491 -4.2422,1.4883 -3.6888,0.8783 -8.8826,1.4375 -14.6172,1.4375 v 2 c 5.8633,0 11.1683,-0.5607 15.0801,-1.4922 1.9558,-0.4657 3.5614,-1.0168 4.7597,-1.6914 1.1984,-0.6746 2.1602,-1.5586 2.1602,-2.8164 v -42 c 0,-1.2578 -0.9618,-2.1457 -2.1602,-2.8204 -1.1983,-0.6746 -2.8039,-1.2257 -4.7597,-1.6914 C 2135.1683,1376.5588 2129.8633,1376 2124,1376 Z"
                      color="currentColor"
                      font-family="sans-serif"
                      font-weight="400"
                      overflow="visible"
                      paint-order="fill markers stroke"
                      transform="translate(0 988.362)"
                    ></path>
                  </g>
                </svg>
              </g>
            </svg>
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default BottomNav;
