"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "@/public/static/images/Logo";

const AppCoverContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
  overflow: hidden;
  background-color: #25586b;
  opacity: 1;
  transition: opacity 4s;
  &.hidden {
    opacity: 0;
  }
  svg.cover-logo {
    height: 80%;
    width: auto;
    overflow: hidden;
  }

  @media screen and (max-width: 425px) {
    svg.cover-logo {
      height: auto;
      width: 100%;
    }
  }
`;
const H1 = styled.h1`
  color: #fff;
  text-align: center;
  text-shadow: 0 0 10px #1520ef;
`;

interface Props {
  mounted?: boolean;
}

const AppCover: React.FunctionComponent<Props> = ({ mounted = false }) => {
  const [shouldRemove, setshouldRemove] = useState(false);
  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setshouldRemove(true);
      }, 4000);
    }
  }, [mounted]);

  if (shouldRemove) {
    return null;
  }

  return (
    <AppCoverContainer className={mounted ? "hidden" : ""}>
      <Logo className="cover-logo" />
      <H1>San Raj Software Solutions</H1>
    </AppCoverContainer>
  );
};

export default AppCover;
