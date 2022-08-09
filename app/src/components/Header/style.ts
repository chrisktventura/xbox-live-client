import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    ${({ theme }) => css`
    display: flex;
    width: 20%;
    height: 98vh;
    left: 0;    
    background-color: ${theme.colors.boxColorOpacity};
    opacity: ${theme.colors.opacityLogin};
    position: fixed;
    z-index: 999;
    border-radius: 2rem;
    flex-direction: column;
    border: border-box;
    justify-items: center;

    `}
    h1{
        text-align: center;
    }

    
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

export const HeaderFooter = styled.div`
    ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    `}
`;

export const BtnLogout = styled.button`
    ${({ theme }) => css`
    width: 20%;
    height: 2rem;
    border-radius: 2rem;
    border: ${theme.colors.boxShadowHover};
    
    `}
`
