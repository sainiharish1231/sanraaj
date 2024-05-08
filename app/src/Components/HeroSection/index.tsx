"use client";
import React, { useState, SyntheticEvent } from "react";

interface Props {
  src: string;
  onCanPlay:
    | ((event: SyntheticEvent<HTMLVideoElement, Event>) => void)
    | undefined;
  mounted: boolean;
}

const HeroSection: React.FunctionComponent<Props> = ({
  src,
  onCanPlay,
  mounted,
}) => {
  const [shouldShow, setshouldShow] = useState(false);

  const handleVideoCanPlay = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
    if (typeof onCanPlay === "function" && !shouldShow) {
      onCanPlay(e);
    }
    setshouldShow(true);
  };

  return (
    <section className="hero-section">
      {src && (
        <video
          src={src}
          autoPlay
          loop
          muted
          onCanPlay={handleVideoCanPlay}
          onLoadedData={handleVideoCanPlay}
        />
      )}
      {<h2 className={mounted ? "visible" : ""}>San Raj</h2>}
      {<h4 className={mounted ? "visible" : ""}>Software Solutions</h4>}
    </section>
  );
};

export default HeroSection;
