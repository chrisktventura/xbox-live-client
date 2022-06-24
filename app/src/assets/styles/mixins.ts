import { css } from 'styled-components';
import { colors } from 'assets/styles/colors';
import { constants } from 'assets/styles/constants';

const logoStyle = () => css`
  font-family: ${constants.logoFontFamily};
  color: ${colors.primaryColor};
`;

export const mixins = {
    logoStyle,
}