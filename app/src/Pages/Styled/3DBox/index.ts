import styled, { keyframes } from "styled-components";
import { ContentContainer } from "../../../Components/common";

export interface PropTypes {
  screen: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  // background-color: #000000;
  perspective: 45rem;
  perspective-origin: 50% -10rem;
  position: relative;
  transition: transforn 2s;
  &.hover-active {
    perspective: none;
  }
`;

const spin = keyframes`
  from{
    transform: rotateY(0);
  }
  to{
    transform: rotateY(-360deg);
  }
`;

export const Cube = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  animation: ${spin} 8s infinite linear;
  transform-style: preserve-3d;
  ${Container}.stable-hover & {
    animation: none;
  }
`;

export const Face = styled.div<PropTypes>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--cube-color);
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  transition: transform 1s, opacity 2s;

  ${ContentContainer}:hover &, ${ContentContainer}:active & {
    opacity: 0.6;
    border-radius: 8px;
    ${(props) =>
      props.screen == 1 &&
      `
      transform: translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 2 &&
      `
      transform: rotateY(30deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 3 &&
      `
      transform: rotateY(60deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 4 &&
      `
      transform: rotateY(90deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 5 &&
      `
      transform: rotateY(120deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 6 &&
      `
      transform: rotateY(150deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 7 &&
      `
      transform: rotateY(180deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 8 &&
      `
      transform: rotateY(210deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 9 &&
      `
      transform: rotateY(-120deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 10 &&
      `
      transform: rotateY(-90deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 11 &&
      `
      transform: rotateY(-60deg) translateZ(7.6rem);
    `}
    ${(props) =>
      props.screen == 12 &&
      `
      transform: rotateY(330deg) translateZ(7.6rem);
    `}
  }
  ${Container}.hover-active & {
    &.hovered {
      visibility: visible;
      transform: scale(4.5) rotateY(0deg) translateY(2px);
      opacity: 0.7;
    }
    &:not(.hovered) {
      transform: scale(0);
    }
  }

  opacity: ${(props) => ([1, 2, 3, 4, 5, 6].includes(props.screen) ? 0.5 : 0.7)}
    ${(props) =>
      props.screen == 1 &&
      `
    transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 2 &&
      `
    transform: scale3d(1.2, 1.2, 1.2) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 3 &&
      `
    transform: scale3d(1.2, 1.2, 1.2) rotateY(90deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 4 &&
      `
    transform: scale3d(1.2, 1.2, 1.2) rotateY(180deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 5 &&
      `
    transform: scale3d(1.2, 1.2, 1.2) rotateY(-90deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 6 &&
      `
    transform: scale3d(1.2, 1.2, 1.2) rotateX(-90deg) translateZ(2em) rotate(180deg);
  `}
    ${(props) =>
      props.screen == 7 &&
      `
    transform: scale3d(0.8, 0.8, 0.8) rotateX(90deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 8 &&
      `
    transform: scale3d(0.8, 0.8, 0.8) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 9 &&
      `
    transform: scale3d(0.8, 0.8, 0.8) rotateY(90deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 10 &&
      `
    transform: scale3d(0.8, 0.8, 0.8) rotateY(180deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 11 &&
      `
    transform: scale3d(0.8, 0.8, 0.8) rotateY(-90deg) translateZ(2em);
  `}
    ${(props) =>
      props.screen == 12 &&
      `
    transform: scale3d(0.8, 0.8, 0.8) rotateX(-90deg) translateZ(2em) rotate(180deg);
  `};
`;
