import styled from "styled-components";

export interface PropTypes {
    iconSection?: boolean
    buttonSection?: boolean
    backgroundPara?: boolean
    icon?: boolean
    TabSection?: boolean
    tab?: boolean
    lifeAt?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
`;

export const Section = styled.div<PropTypes>`
    background: var(--white);
    color: var(--black);
    margin-top: 3rem;
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;

    ${props => props.iconSection &&`
        background-color: var(--white);
        padding: 4rem 0;
        margin-top: 0;
        margin-bottom: 0;

        @media (max-width: 768px){
            padding: 2rem 0;
        }
    `}

    ${props => props.buttonSection &&`
        background-color: #069;
        padding: 4rem 0;
        margin-bottom: 0;
        margin-top: 0;
    `}

    @media (max-width: 1024px){
        margin-top: 0;
    }
`;

export const SubContainer = styled.div<PropTypes>`
    width: 85%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 1024px) and (min-width: 430px){
        width: 100%;
        padding: 3rem 1rem 1rem 1rem;
    }
    @media only screen and (max-width: 425px){
        width: 100%;
        padding: 1rem;
    }

    ${props => props.buttonSection &&`
        @media only screen and (max-width: 375px) {
            display:flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    `}
`;

export const H2 = styled.h2`
    color: var(--black);
    font-size: 1.8rem;
    font-weight: 400;

    @media (max-width: 425px){
        text-align: center!important;
        letter-spacing: 2px;
    }
`;

export const P = styled.p<PropTypes>`
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    font-size: 1.2rem;
    text-align: center;

    ${props => props.backgroundPara && `
        padding: 0;
        text-align: justify; 
        font-size: 1.2rem;

        @media (max-width: 768px){
            width: 90%!important;
        }

        @media (max-width: 425px){
            margin-bottom: 1rem!important;
        }
    `}

    @media (max-width: 425px){
        margin-bottom: 0;
    }
`;

export const IconSection = styled.div`
    flex-wrap: wrap;
    display: flex;

    @media (max-width: 425px){
        flex-direction: column;
    }
`;

export const InnerContainer = styled.div<PropTypes>`
    width: 33.33333%;
    ${props => props.icon && `
        margin-top: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `}


    @media (max-width: 425px){
        width: 100%;
    }
`;

export const Circle = styled.div`
    width: 7rem;
    height: 7rem;
    background-color: #6da4c0;
    border-radius: 50%;
    padding: .5rem;
`;

export const CircleBorder = styled.div`
    border: 2px solid #fff;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.div`
    width: 50px;
`;

export const Span = styled.span`
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
`;

export const Anchor = styled.a`
    display: inline-block;
    width: fit-content;
    position: relative;
    height: 35px;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 7px;
    border: none;
    padding: 5px 25px;
    overflow: hidden;
    background: none;
    z-index: 1;
    &::before {
        content: '';
        height: 100%;
        top: 0%;
        width: 90%;
        border-radius: 7px;
        left: 5%;
        z-index: -1;
        position: absolute;
        transition: transform 1s linear, height 1s linear, top 1s linear;
        background: linear-gradient(15deg, #9c27b0, #17a5d6 80%);
    }
    &:hover, &:focus, &:active {
        outline: none;
    &::before {
        transform: rotate(45deg);
        height: 385%;
        top: -143%;
        transition: transform 1s linear;
    }
}
`;

export const ContentContainer = styled.div<PropTypes>`
    padding-top: 1rem;
    ${props => props.TabSection ? `
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;`
    :`padding-top: 1rem!important;`}
`;

export const AnchorTab = styled.a<PropTypes>`
    text-decoration: none!important;
    color: var(--black);
    cursor: pointer;
    border-radius: 4px;

    ${props => props.tab && `
        width: 75%;
        border: 1px solid #959595;
        margin: 1.3rem auto 0;
        text-align: center;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 3rem;
        padding: 0.8rem;
        &:hover {
            background-color: #dbdbdb;
        }
    `}

    ${props => props.lifeAt && `
        background: #cbe0ea;
        font-size: 1.3rem;
        padding: .275rem 1rem;
        color: #069!important;
        margin-left: 2rem;

        @media only screen and (max-width: 375px){
            margin-left: 0;
            width: 8rem;
        }
    `}
`;