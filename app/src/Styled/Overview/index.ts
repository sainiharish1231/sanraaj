import styled from 'styled-components';

export const ContentContainer = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 40px;
  margin-bottom: 40px;
  width: 90%;
  @media (max-width: 768px) {
    padding-bottom: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;