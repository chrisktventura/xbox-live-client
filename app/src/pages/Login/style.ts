import styled, { css } from 'styled-components';

export const Login = styled.main`
    ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: ${theme.colors.bgDefault};
    align-items: center;
    justify-content: center;  
    
    }
    `}
`;

export const LoginContent = styled.div`
    ${({ theme }) => css`
    width: 50%;
    height: 75vh;
    border: border-box;
    border: 1px solid ${theme.colors.textColor};
    opacity: ${theme.colors.opacityLogin};
    border-radius: 2rem;
    background: ${theme.colors.loginColor};
    border: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
        z-index: 999;
    `}
`

export const LoginForm = styled.form`
    ${({ theme }) => css`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    p {        
        margin: 10px ;
        color: ${theme.colors.textColor};
        font-size: 2em;
        font-weight: bolder;
        font-family: ${theme.constants.fontFamily};
        letter-spacing: 0.2em;
    `};
    `


export const LoginInput = styled.input`
    ${({ theme }) => css`
    width: 100%;
    height: 43px;
    color: ${theme.colors.inputColor};
    border-radius: 1rem;
    margin: 1rem;
    padding: .5em;
    `}
`;



export const LoginLogo = styled.img`
    ${({ theme }) => css``};
    
    `;