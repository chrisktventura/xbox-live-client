import styled, { css } from "styled-components";


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
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.bgDefault};
    `}
`;

export const InputEdit = styled.input`
    ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border: 1px solid ${theme.colors.inputColor};
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
    `}
`;

