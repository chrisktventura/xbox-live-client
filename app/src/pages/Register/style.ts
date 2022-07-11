import styled, { css } from "styled-components";

export const RegisterContent = styled.section`
    ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bgDefault};
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
    `}`;