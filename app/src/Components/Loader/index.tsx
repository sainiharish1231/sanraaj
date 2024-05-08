"use client";
import React from "react";
import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  min-height: 300px;
  overflow: hidden;
  bakcground; var(--white);
  flex-grow: 1;
`;

const Loader = () => (
  <div className="bodyLoader">
    <div className="wrapper">
      {new Array(11).fill("").map((_, i) => (
        <div key={i} className={`line line${i + 1}`}>
          <span className="circle circle-top"></span>
          <div className="dotted">
            <span className="dot dot-top"></span>
            <span className="dot dot-middle-top"></span>
            <span className="dot dot-middle-bottom"></span>
            <span className="dot dot-bottom"></span>
          </div>
          <span className="circle circle-bottom"></span>
        </div>
      ))}
    </div>
  </div>
);

export default Loader;
