import styled, { css } from 'styled-components';

export const Home = styled.main`
    ${({ theme }) => css`
        width: 100%;
        height: 100vh;
        border: 2rem;
        background: ${theme.colors.bgDefault};
        display: flex;
        justify-content: center;
        align-items: center;
        
        `}
`;

export const HomeSection = styled.section`
    ${({ theme }) => css`
        width: 98%;
        height: 50vh;
        top: 0;
        margin: 10px;
        border: border-box;
        opacity: ${theme.colors.opacityLogin};
        border-radius: 2rem;
        background: ${theme.colors.boxColorOpacity};
        border: border-box;
        display: flex;
        align-items: center;
        position: fixed;
        right: 1rem;
        z-index: 999;       

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        flex-wrap: wrap;
    }

`}
    
`;
   


export const HomeGenres = styled.div`
    ${({ theme }) => css`
        width: 98%;
        height: 23vh;
        bottom: 23vh;
        margin: 10px;
        border: border-box;
        opacity: ${theme.colors.opacityLogin};
        border-radius: 2rem;
        background: ${theme.colors.boxColorOpacity};
        border: border-box;
        display: flex;
        align-items: center;
        position: fixed;
        right: 1rem;
        z-index: 999;
        
    `}    
`;

