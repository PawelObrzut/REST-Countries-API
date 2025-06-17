import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    elementBg: string,
    bodyBg: string;
    text: string;
    placeholder: string;
  }
}