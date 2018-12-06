import { createGlobalStyle } from 'styled-components';
import videojs from './videojs';

// Set box-sizing globally to handle padding and border widths
const all = `
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  * {
    background-repeat: no-repeat;
  }
`;

// The base font-size is set at 62.5% for having the convenience
// of sizing rems in a way that is similar to using px: 1.6rem = 16px
const html = `
  html {
    box-sizing: border-box;
    background: #fff;
    font-size: 62.5%;
    cursor: default;
    overflow-x: hidden;
  }
`;

const body = `
  body {
    margin: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${all};
  ${html};
  ${body};
  ${videojs};
`;
