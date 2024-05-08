import styled from "styled-components";

export const H3 = styled.h3`
  width: fit-content;
  margin: 20px 0px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 90%;
  @media (max-width: 768px) {
    padding-bottom: 25px;
  }
`;

export const UL = styled.ul``;

export const List = styled.li`
  list-style-type: disc;
`;

export const Button = styled.a`
  display: inline-block;
  width: fit-content;
  position: relative;
  height: 35px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 7px;
  border: none;
  padding: 5px 25px;
  overflow: hidden;
  background: none;
  z-index: 1;
  &::before {
    content: "";
    height: 100%;
    top: 0%;
    width: 90%;
    border-radius: 7px;
    left: 5%;
    z-index: -1;
    position: absolute;
    transition: transform 1s linear, height 1s linear, top 1s linear;
    background: linear-gradient(15deg, #9c27b0, #17a5d6 80%);
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: #fff;
    &::before {
      transform: rotate(45deg);
      height: 385%;
      top: -143%;
      transition: transform 1s linear;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  border-right: 1px solid #ddd;
  background: var(--white);
  color: var(--black);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 20%;
  flex-grow: 1;
  &:last-of-type {
    border-right: none;
    align-items: center;
  }

  @media (max-width: 768px) {
    align-items: center;
    border-right: none;
    border-bottom: 1px solid #ddd;
    width: 50%;

    &:last-of-type {
      border-bottom: none;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const SpanTitle = styled.span``;

export const SpanLink = styled.span`
  color: #4cb2b2;
`;
