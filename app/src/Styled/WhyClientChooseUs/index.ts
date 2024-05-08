import styled from "styled-components";

export const H4 = styled.h4`
  text-align: center;
  font-weight: bold;
  color: var(--black);
`;

export const KnowMore = styled.a`
  color:var(--red);
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: var(--red);
  }
`;

export const Image = styled.img`
  margin-top: 20px;
  width: 35%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;