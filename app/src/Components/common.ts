import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  background: var(--white);
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  user-select: none;
`;

export const Paragraph = styled.p`
  color: var(--black);
  // margin-left:18px;
  text-align: justify;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 40px;
  margin-bottom: 40px;
  width: 90%;
  & :nth-child(odd) {
    flex-direction: row-reverse;
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 25px;
    margin-bottom: 25px;
    & :nth-child(odd) {
      flex-direction: column;
      padding-bottom: 25px;
      margin-bottom: 25px;
    }
  }
  @media (min-width: 900px) {
    width: 80%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  width: 55%;
  min-width: 55%;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  max-height: 250px;
  max-width: 250px;
  & > svg,
  & > img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: unset;
    width: 60%;
  }

  @media screen and (max-width: 425px) {
    height: unset;
    width: 80%;
  }
`;

export const HeadingName = styled.div`
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  color: var(--red);
`;

export const H3 = styled.h3`
  text-align: center;
  font-weight: bold;
  color: var(--black);
`;
