import styled from 'styled-components';

export const ContentContainer = styled.div`
  margin-left: 10px;
  background: var(--white);
`;

export const H2 = styled.h2`
  margin: 30px 0px;
`;

export const ImageContainer = styled.div`
  max-width: 250px;
  &>svg, &>img {
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