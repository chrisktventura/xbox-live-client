import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    ${({ theme }) => css`
    
    width: 20%;
    height: 20%;
    left: 0;
    top: 0;
    margin: 10px;
    background-color: ${theme.colors.boxColorOpacity};
    opacity: ${theme.colors.opacityLogin};
    position: fixed;
    z-index: 999;
    border-radius: 2rem;
    flex-direction: column;
    border: border-box;

    div HeaderLogo {
        display: flex;
        align-items: flex-start;
        justify-content: space-evenly;
        img { 
        width: 3rem;
        height: 3rem;
    }
    }

    `}
    
`;

export const HeaderLogo = styled.div`
    ${({ theme }) => css`
    display: flex;
    margin: 5px;    
    position: absolute;
    z-index: 2;
    `}
`;


export const HeaderAvatar = styled.div`
    ${({ theme }) => css`
    display: flex;
    justify-content: end;
    padding: 5px;
        img {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
        }
    `}
`;
