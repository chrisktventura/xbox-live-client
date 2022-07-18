import styled from 'styled-components';


export const ButtonBack = styled.button`
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
        background-color: ${({ theme }) => theme.colors.backColor};
        box-shadow: ${({ theme }) => theme.colors.boxShadowHover};
        color: ${({ theme }) => theme.colors.inputColor};
    }
    `;