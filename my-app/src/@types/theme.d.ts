import 'styled-components';
import { DefaultTheme } from '../styles/theme';

type ThemeType = typeof DefaultTheme;

declare module 'styled-components' {
  export interface ThemeDefault extends ThemeType {}
}
