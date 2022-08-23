import styled, { css } from 'styled-components';

export const GenreCard = styled.div`
    ${({ theme }) => css`
    display: flex;
    width: 2rem;
    height: 2rem;
    background-color: aqua;
    `}
`

export const GenreCardTitle = styled.h1`
    ${({ theme }) => css`
    width: 2rem;
    height: 1.2rem;
    color: ${theme.colors.bgDefault};
    font-size: 1.2rem;
    `}
`