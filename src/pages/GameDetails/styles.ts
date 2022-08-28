import styled, { css } from 'styled-components'

export const GameDetailsContainer = styled.main`
    ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;

    `}
`;

export const GameDetails = styled.div`
    ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    `}
`;

export const GameDetailsTitle = styled.h1`
    
`