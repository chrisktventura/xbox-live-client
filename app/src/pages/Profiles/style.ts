import styled, { css } from "styled-components";


export const ProfileMain = styled.main`
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


export const ProfileSection = styled.section`
    ${({ theme }) => css`
        width: 78%;
        height: 50vh;
        border: border-box;
        opacity: ${theme.colors.opacityLogin};
        border-radius: 2rem;
        background: ${theme.colors.boxColorOpacity};
        border: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 999;
        flex-wrap: wrap;


    div { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        text-align: center;
        flex-wrap: wrap;
        

        img {
            width: 240px;
            height: 240px;
            border-radius: 50%;     
            transform : all 1s smooth; ;
        }
        img:hover{
            width: 16rem;
            height: 16rem;
            box-shadow: 0 0 15px rgba(0,0,0,0.5);
        }
    }
    
    p{
        color: ${theme.colors.textColor};
        font-size: 2rem;
    }
    button{
        background-color: ${theme.colors.textColor};
        size: 2rem;
        border-radius: 1.5rem;
        text-align: center;
    }
    button:hover{
        background-color: ${theme.colors.loginColor} ;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);

    }

    `}
`;
