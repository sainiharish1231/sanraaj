"use client";
import React, { useState, useEffect } from "react";

export default function Screentop() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page smoothly
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show the button after scrolling past half of the screen height
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-2 right-5 animate-bounce h-9 w-9 cursor-pointer shadow-lg shadow-[#671AE4]/40 rounded-lg bg-gradient-to-b mx-auto flex justify-center items-center"
          style={{
            background:
              "linear-gradient(to top, var(--tg-primary-color), #671AE4)",
            color: "",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="12"
            viewBox="0 0 20 12"
            id="up"
          >
            <g fill="none" fillRule="evenodd">
              <g fill="#ffff" fillRule="nonzero" transform="translate(-10 -12)">
                <g transform="translate(10 12)">
                  <path d="M9.319 5.909c.223-.14.472-.235.732-.278.253.004.496.103.679.278l5.732 5.517c.81.761 2.072.766 2.887.01l.03-.028a1.959 1.959 0 0 0 .008-2.854L10.774.287A1.08 1.08 0 0 0 10.051 0a2.124 2.124 0 0 0-.775.287L.611 8.554a1.959 1.959 0 0 0 .012 2.854l.036.028c.821.756 2.086.751 2.9-.01l5.76-5.517z"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </>
  );
}
