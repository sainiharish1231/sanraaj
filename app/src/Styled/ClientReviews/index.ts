import styled from "styled-components";

export const MainContainer = styled.div``;

export const QuoteContainer = styled.div`
  overflow-x: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export interface ContentContainerPropTypes {
  cIndex: number;
  index: number;
}

export const ContentContainer = styled.div<ContentContainerPropTypes>`
  transform: translateX(calc(${(props) => props.cIndex} * -100%));
  margin-left: calc(${(props) => (props.cIndex ? 1 : 0)} * -100%);
`;

export const Testimonial = styled.h5`
  color: var(--black);
`;

export const By = styled.div`
  margin-top: 22px;
`;

export const ByName = styled.span`
  display: block;
  text-transform: titlecase;
  color: var(--black);
  font-weight: 700;
`;

export const ByCompany = styled.span`
  display: block;
  text-transform: titlecase;
  color: var(--red);
  font-size: 0.9rem;
  font-weight: 400;
`;

export interface ButtonSpanPropTypes {
  active: boolean;
}

export const ButtonSpan = styled.span<ButtonSpanPropTypes>`
  height: 20px;
  width: 20px;
  overflow: hidden;
  margin: 0 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:before {
    content: "";
    height: 20px;
    width: 20px;
    background-color: #d4d4d4;
    border-radius: 50%;

    ${(props) =>
      props.active &&
      `
          transition: background-color 1s ease; 
          background-color: #717171;
        `}
  }
`;
