import styled from 'styled-components';

export const ImageContainer = styled.div`
  height: 300px;
  width: 300px;
  max-height: 400px;
  max-width: 400px;
  margin-top: 20px;
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

export const Image = styled.img`
  object-fit: contain;
`;