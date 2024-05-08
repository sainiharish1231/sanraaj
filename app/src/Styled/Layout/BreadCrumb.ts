import styled from "styled-components";

export const BreadCrumbContainer = styled.div`
  display: flex; 
  flex-direction: row;
  padding-left: 10px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Crumb = styled.a`
  color: white;
  text-transform: capitalize;
  display: flex;
  align-items: center;

  @media screen and (max-width: 375px) {
    font-size: 13px;
  }
`;