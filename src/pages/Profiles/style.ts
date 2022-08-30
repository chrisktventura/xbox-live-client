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
    `}
`;

export const BackButton = styled.div`
	${() => css`
		cursor:pointer;
		padding: 1rem;
		img {
		width:2rem;
		}
	`}
`;

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    text-align: center;
    flex-wrap: wrap;
`;

export const NotProfile = styled.div`
    ${({ theme }) => css`
    width: 240px;
    height: 240px;
    display: flex;
    background-color: ${theme.colors.bgDefault};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h1{
        color: gray;
        font-size: 100px;
    }
    `}
`

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

export const ModalContent = styled.div`
    ${({ theme }) => css`
    width: 50%;
    height: 90vh;
    flex-direction: column;
    border: border-box;
    border: 1px solid ${theme.colors.textColor};
    opacity: ${theme.colors.opacityLogin};
    border-radius: 2rem;
    background-color: ${theme.colors.bgDefault};
    display: flex;
    `}
`

export const ModalForm = styled.form`
    ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        width: 50%;
        height: 40px;
        border-radius: 2px;
        border: 1px solid ${({ theme }) => theme.colors.textColor};
        padding: 0 10px;
        margin-bottom: 10px;
        font-size: 1em;

    }
    `}
`

export const ModalBtn = styled.button`
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
`

