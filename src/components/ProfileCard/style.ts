import styled, { css } from 'styled-components'


export const ProfileCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 2rem;
text-align: center;
flex-wrap: no-wrap
`;

export const ProfileAvatar = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 50%;     
    transform : all 1s smooth;
    :hover{
        width: 16rem;
        height: 16rem;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);
    }
`;


export const ProfileName = styled.p`
${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-size: 2rem;
    `}
`;

export const ProfileBtnEdit = styled.button`
    ${({ theme }) => css`
    background-color: ${theme.colors.textColor};
    size: 2rem;
    border-radius: 1.5rem;
    text-align: center;
    :hover{
        background-color: ${theme.colors.loginColor} ;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);
    }
    `}
`;