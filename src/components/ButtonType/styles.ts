import styled, { css } from 'styled-components';

interface ColorProps {
  typeButton: 'primary' | 'secondary';
}

const BUTTON_COLOR = {
  primary: '',
  secondary: '',
} as const;

export const Button = styled.button<ColorProps>`
  background-color: ${props => props.theme[BUTTON_COLOR[props.typeButton]]};
  border: transparent;
  padding: 20px;
`;
