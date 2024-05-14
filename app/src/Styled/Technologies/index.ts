import styled from "styled-components";

export interface PropTypes {
    logo?: boolean;
    header?: boolean;
    body?: boolean;
    applyNow?: boolean;
    ContentTitle?: boolean;
}

export const Container = styled.div`
    color: var(--black);
    background: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100vw;
    min-height: 100vh;
`;

export const SubHeader = styled.div`
    position: relative;
    background-color: #7a0026;
    min-height: 25rem;
    width: 100%;
    background-image: url(/images/transparent-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Section = styled.div<PropTypes>`
    margin: ${(props) => (props.body ? `4rem 0` : `8rem 0 0 0`)};
    height: 100%;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SubContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const H2 = styled.h2`
    font-family: Montserrat, sans-serif;
    font-size: 1.8rem;
    padding-bottom: 0.6rem;
    font-weight: 400;
    color: #96536a;

    @media screen and (max-width: 600px) {
        justify-content: center;
        display: flex;
    }
`;

export const P = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    opacity: 0.7;
    margin-top: 0;
    margin-bottom: 3.5rem;
    text-align: justify;
`;

// table components

export const Table = styled.table<PropTypes>`
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    ${(props) =>
        props.applyNow &&
        `
        margin-bottom: 0;
        background: var(--white);
    `}
`;

export const TableHead = styled.thead`
    opacity: .8;

    @media (max-width: 600px) {
        display: none;
    }s  
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
    border-top: 1px solid var(--Light-grayish-blue);

    @media (max-width: 600px) {
        display: block;
    }
`;

export const TableColumn = styled.td<PropTypes>`
    padding: 0.75rem;
    vertical-align: top;

    ${(props) =>
        props.logo &&
        `
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `}

    @media (max-width: 600px) {
        justify-content: center;

        ${(props) =>
            props.ContentTitle &&
            `
            display: flex;
        `}
    }
`;

export const Logo = styled.div`
    margin-right: 0.5rem;
    display: flex;
`;
export const Ul = styled.ul``;

export const Li = styled.li`
    list-style-type: disc;
    font-size: 0.9rem;
    opacity: 0.8;
    text-align: justify;
`;

export const Strong = styled.strong`
    font-size: 0.9rem;
    opacity: 0.6;

    @media screen and (max-width: 425px) {
        font-size: 1.5rem;
    }
`;

export const LoaderBox = styled.div`
    max-height: 200px;
    max-width: 300px;
`;
