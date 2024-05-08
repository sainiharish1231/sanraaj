import styled from "styled-components";

export interface PropTypes {
    copyright?: boolean;
    socialIcon?: boolean;
    icon?: boolean;
}

export const Section = styled.div<PropTypes>`
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: ${props => props.copyright ? "1rem" : "2rem"};
    ${props => props.copyright && `padding-bottom: 1rem`};
    ${props => props.copyright 
        ? `background-color: #323336` 
        : `background-image: linear-gradient(to right,#4e4b4b,#151617,#4e4b4b);`
    };
`;

export const Container = styled.div<PropTypes>`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    display:flex; 
    flex-direction:row;
    justify-content: space-around;
    
    ${props => props.copyright && `color: #a4a1a1; padding: 0 5%`};

    @media (max-width: 768px) {
        flex-wrap: wrap;
        ${props => props.copyright && `
            flex-direction: column;
            align-items: center;
        `};
    };

    @media (max-width: 992px) {
        ${props => props.copyright && `width: 100%;`};
          
    }

    @media (max-width: 1200px) and (min-width: 768px) {
        flex-wrap: wrap;
    };
`;

export const Items = styled.div`
    margin-top: 1.5rem;
    padding-left: 10px;
    padding-right: 10px;
    max-width: 36%;
    min-width: 14%;

    @media (max-width: 768px) {
        min-width: 100%;
    };
    
    @media (min-width: 1350px) {
        min-width: 8%;
    };
`;

export const Ul = styled.ul<PropTypes>`
    color: white;
    padding: 0;
    list-style: none;
    ${props => props.copyright && `
        color: #a4a1a1;
        flex-direction: row;
        display: flex;
        margin-bottom: 0;
    `};

    @media (max-width: 768px) {
        ${props => !props.copyright && `
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 0;
        `}
    };
`;

export const List = styled.li<PropTypes>`
    margin-bottom: .8125rem;
    align-items: center;
    font-size: .8125rem;
    color: white;

    @media (max-width: 768px) {
        display: block;
        width: ${props => props.socialIcon ? "auto" : "100%"};
    };
`;

export const LiHeading = styled.li`
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    };
`;

export const Anchor = styled.a<PropTypes>`
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.copyright ? "#a4a1a1" : "white"};
    ${props => props.copyright && `margin-left: 2rem;`};
    &:first-child {
        margin-left: 0;
    }

    &:hover {
        text-decoration: none;
        color: ${props => props.copyright ? "#a4a1a1" : "white"};
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: ${props => props.icon ? "row" : "column"};
    };
`;

export const Span = styled.span`
    font-weight: 600;
    font-size: .875rem;
`;

export const DateContainer = styled.div`
    width: 2.563rem;
    height: 2.563rem;
    border: 1px solid #fff;
    display: grid;
    padding-top: 6px;
    float: left;
    margin-right: 1rem;
`;

export const Date = styled.h6`
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    line-height: 0.6;
`;

export const PostHeading = styled.span`
    display: block;
    line-height: 1.4;
    padding-left: 3.5rem;
    font-size: .9rem;

    @media (max-width: 768px) {
        padding-left: 0;
    };
`;

export const PostText = styled.p`
    font-size: .75rem;
    display: block;
    line-height: 1.2;
    padding-top: .375rem;
    padding-left: 3.5rem;
    color: #e2e2e2;

    @media (max-width: 768px) {
        padding-left: 0;
    };
`;

export const DescContainer = styled.p`
    font-size: .75rem;
    color: #e2e2e2;
`;

export const ContactLinks = styled.div`
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    };
`