import styled from "styled-components";

export interface PropTypes {
    num: number;
}

export const IconsContainer = styled.div`
    display: flex;

    @media (max-width: 425px) {
        flex-direction: column;
    }
`;

export const MapContainer = styled.div`
    height: 23rem;
    position: relative;
    margin: 2rem 0;
`;

export const Icon = styled.div<PropTypes>`
    width: calc(100% / ${props => props.num});
    padding: 2rem 0 4rem;

    @media (max-width: 425px) {
        width: 100%;
        padding: 1rem 0 0 0;
    }
`;

export const IconSection = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const IconContainer = styled.div`
    background-color: var(--black);
    width: 3.625rem;
    height: 3.625rem;
    border-radius: 3.625rem;
    font-size: 1.3rem;
    color: var(--white);
    line-height: 3.625rem;
    text-align: center;
`;

export const Title = styled.span`
    color: var(--title);
    font-size: 1rem;
    line-height: 2;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0.4rem 0 0 0;
`;

export const Adress = styled.div`
    color: var(--text);
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.4;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const Hr = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
`;

export const Span = styled.span``;

export const MapSection = styled.div``;
