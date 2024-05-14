"use client";
import styled from "styled-components";
/*   background-color1: ${({ theme }) => theme.colors.primary};
 */
export const Container = styled.div`
  position: relative;
  display: flex;
  /*   background-color: red; */
  flex-direction: column;
  flex: 1 1 100%;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  &.overflow-hidden {
    height: 100vh;
    overflow: hidden;
  }
`;

export const Apod = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
/* color: ${({ theme }) => theme.colors.primary}; */
export const ApodButton = styled.div`
  background: #f9da2e;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: Arial;
  font-weight: 700;
  font-size: 25px;
color:"red"
  letter-spacing: 0;
  cursor: pointer;
`;

export const TopText = styled.div`
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  margin-bottom: 10px;
`;
