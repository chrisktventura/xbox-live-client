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
    /* transform: rotate(-30deg); */
    animation: animate1 80s linear infinite;
    animation-delay: -40s;
    
    /* @keyframes animate1 {
        0%
        {
            transform: translateX(100%);
        }
        100%
        {
            transform: translateX(-100%);
        }
    }

    BgDefaultRow:nth-child(2) {
        animation: animate2 80s linear infinite;
        animation-delay: -80s;
    @keyframes animate2 {
        0%
        {
            transform: translateX(-200%);
        }
        100%
        {
            transform: translateX(0%);
        }
    }
} */
    `;

export const IconBg = styled.i`
    color: ${({ theme }) => theme.colors.iconColor1};
    transition: 1s;
    padding: 10px 5px;
    user-select: none;
    cursor: default;
    
`;

export const iconBgHover = styled.i`
    ${IconBg}:hover {
        transition: 0s;
        color: ${({ theme }) => theme.colors.iconColorHover};
        text-shadow: 0 0 120px #0f0;
    }
`



