import { Link } from "react-router-dom";
import styled, {css} from "styled-components";
import { colors } from "./theme.js";

const Contenedor = styled.div`
    margin: 0 auto;
    height: 100vh;
    width: 100%;
    max-width: 896px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FCFDFF;

    ${props => props.column && css`
        flex-direction: column;
    `}

    ${props => props.spaceAround && css`
        justify-content: space-around;
    `}
    ${props => props.between && css`
        justify-content: space-between;
    `}



    ${props => props.gap && css`
        gap: 1rem;
    `}
`;

const Figure = styled.figure`
    width: 90%;
    min-height: 24rem;
    max-height: max-content;
    max-width: 40rem;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;


const TextContainer = styled.div`
    padding: 0 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    max-width: 375px;

    ${props => props.w50 && css`
        width: 50%;
    `}
    ${props => props.noGap && css`
        gap: 0;
    `}

    

`;

const H2 = styled.h2`
    font-weight: 700;
    font-size: 2.4rem;
    color: ${colors.textPrimary}
`;

const H3 = styled.h2`
    font-weight: 800;
    font-size: 1.4rem;
    color: ${colors.textPrimary}
`;



const P = styled.p`
    font-weight: 400;
    font-size: 1.4rem;
    color: ${colors.textPrimary}

    ${props => props.pHome && css`
        font-weight: 800;
        margin: 1.6rem auto;
        width: 97%;
    `}

    ${props => props.pCard && css`
        font-size: 0.8rem;
        font-weight: 300;
        color: ${colors.textPrimary}
    `}


`;

const StyledLink =  styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: ${colors.bgGradient};
    max-width: 34.5rem;
    cursor: pointer;
    width: 90%;
    outline: none;
    height: 4.4rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.4rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: ${colors.textPrimary};
    &:hover {
        background: ${colors.bgGradientHover};
    }

    &:active {
        background: ${colors.bgGradient};
    }
`;

const StyledInput = styled.input`
    max-width: 34.5rem;
    padding: 0 1.6rem;
    background-color: transparent;
    width: 90%;
    outline: none;
    height: 4.4rem;
    border: 1px solid #A2C3FC;
    border-radius: 1.5rem;
    /* border-image: linear-gradient(to bottom, #BFC3FC 0.11%, #A2C3FC 100%) 1; */
    outline: none;
    font-weight: 400;
    font-size: 1.4rem;
    color: ${colors.textPrimary};
    caret-color: #A2C3FC;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:focus {
        border-color: rgba(160, 251, 138, 1);
    }
`;

const Form = styled.form`
    width: 100%;
    height: 70%;
    max-height: 40rem;
    max-width: 34.5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1.2rem;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.bgGradient};
    max-width: 34.5rem;
    cursor: pointer;
    width: 90%;
    outline: none;
    height: 4.4rem;
    border: none;
    border-radius: 1.5rem;
    font-size: 1.4rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: ${colors.textPrimary};
    &:hover {
        background: ${colors.bgGradientHover};
    }

    &:active {
        background: ${colors.bgGradient};
    }
`;

const DivCol = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.8rem;

`

const MainHome = styled.header`
    margin: 0 auto;
    width: 100%;
    max-width: 896px;
    height: 15rem;
    background: ${colors.bgGradient};
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Section = styled.section`
    width: max-content;
    margin: 0 auto;
    overflow: auto;
    height: 23.3rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1.2rem;

    ${props => props.courses && css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: max-content;
        margin-bottom: 6.4rem;
    `}
`

const StyledCard = styled.div`
    height: 100%;
    max-width: 20.1rem;
    display: flex;
    flex-direction: column;

    ${props => props.courses && css`
        max-width: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: max-content;
        border-radius: 1.5rem;
        background: rgba(162, 195, 252, 0.2);
    `}

    &:hover {
        cursor: pointer;
    }

`

export {
    Contenedor,
    Img,
    Figure,
    TextContainer,
    H2,
    H3,
    P,
    StyledLink,
    StyledInput,
    Form,
    Button,
    DivCol,
    MainHome,
    Section,
    StyledCard,
}