import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    justify-content: center;
    background-color: var(--white);
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    overflow: hidden;
    padding-top: 5rem;
    &:before,
    &:after {
        content: "";
        position: absolute;
        background: url("/images/left-slider.svg") no-repeat;
        width: 30px;
        height: 30px;
        left: calc(10% + 25px);
        top: 0px;

        @media (max-width: 768px) {
            left: 10px;
        }
    }
    &:after {
        left: unset;
        top: calc(100% - 100px);
        right: calc(10% + 25px);
        bottom: 20px;
        transform: rotate(180deg);

        @media (max-width: 768px) {
            right: 10px;
        }
    }
`;

export const QuoteContainer = styled.div`
    width: calc(80% - 150px);
    background-color: var(--white);
    display: flex;
    justify-content: flex-start;
    flex-wrap: no-wrap;
    padding: 20px 0;
    overflow-x: hidden;
    margin: 0;

    // &:before {
    //   content: "";
    //   height: 100px;
    //   background: #639;
    //   background: rebeccaPurple;
    //   clip-path: ellipse(5% 50% at -1% 49%);
    // }

    @media (max-width: 768px) {
        width: calc(100% - 100px);
    }
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
    min-width: 100%;
    padding: 0 10px;
    display: inline-flex;
    flex-direction: column;
    transition: 0.6s ease-in-out;
    transform: translateX(calc(${props => props.cIndex} * -100%));
    margin-left: calc(${props => (props.cIndex ? 1 : 0)} * -100%);
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
        ${props =>
            props.active &&
            `
          transition: background-color 1s ease; 
          background-color: #717171;
        `}
    }
`;
