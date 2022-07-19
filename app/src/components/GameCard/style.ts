import styled, { css } from 'styled-components';

export const GameCardContent = styled.div`
    ${({ theme }) => css`
        
        flex-direction: column;
        width: 18rem;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 0.5rem;
        background-color: white;

    `};
`

export const GameCardImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    object-position: center;
    
`

export const GameCardTitle = styled.h1`
    ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: bold;
    color: ${theme.colors.iconColor1};
    `}
`

export const GameCardYear = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.iconColor1};
`

export const GameCardImdb = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.iconColor1};
`