import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 80px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 40px;
  margin-bottom: 40px;
  width: 90%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 25px;
    margin-bottom: 25px;
    margin-right: 40px;
  }
  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 20px;
  // padding-left: 18px;
  @media (max-width: 360px) {
    font-size: 1.7rem;
  }
`;

export const Image = styled.img`
  margin-right: 60px;
`;
