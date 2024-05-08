import styled from "styled-components";

interface ContainerProps {
  bgColor?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 250px;
  background: ${(props) => props.bgColor || "var(--banner-background) "};
  display: flex;
  align-items: flex-end;
  padding: 25px 50px;
  @media screen and (max-width: 768px) {
    height: 200px;
    padding: 25px;
  }
`;

interface TitleProps {
  color?: string;
}

export const Title = styled.h1<TitleProps>`
  font-size: 1.5rem;
  color: ${(props) => props.color || "#fff"};
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }

  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;
