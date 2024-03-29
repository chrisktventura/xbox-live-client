
import styled, { css } from "styled-components";

export const RegisterContent = styled.section`
    ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


    `}
`;

export const RegisterBox = styled.div`
${({ theme }) => css`
    width: 50%;
    height: 90vh;
    flex-direction: column;
    border: border-box;
    border: 1px solid ${theme.colors.textColor};
    opacity: ${theme.colors.opacityLogin};
    border-radius: 2rem;
    background-color: ${theme.colors.bgDefault};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    z-index: 999;
    `}

`;

export const RegisterTitle = styled.h1`
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 2em;
    font-weight: bolder;
    font-family: ${({ theme }) => theme.constants.fontFamily};
    
`;

export const RegisterForm = styled.form`
    ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        width: 50%;
        height: 40px;
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.textColor};
        padding: 0 10px;
        margin-bottom: 10px;
        font-size: 1em;

    }
    input:hover{
        border: 1px solid ${({ theme }) => theme.colors.textColor};
        box-shadow: 0 0 10px ${({ theme }) => theme.colors.textColor};
    }
    h2 {
        color: ${({ theme }) => theme.colors.textColor};

    }
`}

`;

export const divButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 50%;

`
;
export const ButtonSignin = styled.button`
    width: 30%;
    height: 40px;
    margin: 10px 0;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.entrarColor};
    font-size: 1em;
    transition: all 0.3s;
    font-weight: bold;
    :hover{
        background-color: ${({ theme }) => theme.colors.loginColor};
        box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
        color: ${({ theme }) => theme.colors.iconColor1};
    }
    `;

export const ButtonBack = styled.button`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border-radius: 2px;
    cursor: pointer;   
    border: 1px solid ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.textColor};
    color: ${({ theme }) => theme.colors.entrarColor};
    font-size: 1em;
    transition: all 0.3s;
    font-weight: bold;
    :hover{
        background-color: ${({ theme }) => theme.colors.backColor};
        box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
        color: ${({ theme }) => theme.colors.inputColor};
    }
    `;

export const LoginLogo = styled.img`
display: flex;
width: 0 auto;
height: 25%;
`;
