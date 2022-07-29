import styled, { css } from "styled-components";

export const EditMain = styled.main`
    ${({ theme }) => css`
    display: flex;
    width: 50vw;
    height: 50vh;
    justify-content: center;
    border: border-box;
    opacity: ${theme.colors.opacityLogin};
    background-color: ${theme.colors.bgDefault};
    border: 1px solid ${theme.colors.textColor};
    position: absolute;
    z-index: 999;
    `}
    
`
export const EditContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    height: 50vh;
    justify-content: space-around;
    align-items: center;
    border: border-box;

    
`;

export const EditRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const EditLeft = styled.div`
    display: flex;
    flex-direction: column;
`;


export const FormEditTitle = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    
`;

export const FormEdit = styled.form`
    ${({ theme }) => css`
    display: flex ;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.bgDefault};
    padding: 2rem;
    margin: 1.5rem;
    `}
`;

export const InputEdit = styled.input`
    ${({ theme }) => css`
    width: 100%;
    height: 24px;
    border: 1px solid ${theme.colors.inputColor};
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
    `}
`;


