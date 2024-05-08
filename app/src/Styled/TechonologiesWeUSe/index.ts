import styled from "styled-components";

export const ImageContainer = styled.div`
  width:70%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
  @media (max-width: 750px){
    width: 100%;
  }
`;

export const Button = styled.a`
  display: inline-block;
  position: relative;
  height: 40px;
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
    content: '';
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
  &:hover, &:focus, &:active {
    outline: none;
    color: #fff;
    &::before {
      transform: rotate(45deg);
      height: 400%;
      top: -143%;
      transition: transform 1s linear;
    }
  }
`;
