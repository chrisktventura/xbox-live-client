import styled, { css } from "styled-components";


export const BgDefaultContent = styled.section`
    ${({ theme }) => css`
        width: 100%;
        height: 100vh;
        background: ${theme.colors.bgDefault};
		display: flex;
        position: relative;
        flex-direction: column;
        overflow: hidden;       
    `
    }`;

export const BgDefaultRow = styled.div`
    position: relative;
    width: 100%;
    display: flex;    
    padding: 10px 0;
    white-space: nowrap;
    font-size: 4em;
    `;

export const IconBg = styled.i`
    color: ${({ theme }) => theme.colors.iconColor1};
    transition: 1s;
    padding: 10px 5px;
    user-select: none;
    cursor: default;
    :hover{
        transition: 0s;
        color: ${({ theme }) => theme.colors.iconColorHover};
        text-shadow: 0 0 120px #0f0;
    }
    
`;



