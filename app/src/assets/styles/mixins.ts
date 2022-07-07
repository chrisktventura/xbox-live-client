import { css } from 'styled-components';
import { colors } from 'assets/styles/colors';
import { constants } from 'assets/styles/constants';

// AQUI É ONDE MISTURA A PORRA TODA DO TEMA

const backgroundDefaut = () => css`
        width: 100%;
        height: 100vh;
        background: ${colors.bgDefault};
		    display: flex;
        position: relative;
        flex-direction: column;
        overflow: hidden;

`;

const backgroundLogin = () => css`
  background-color: ${colors.loginColor};
  
`;

export const mixins = {
  backgroundDefaut,
}