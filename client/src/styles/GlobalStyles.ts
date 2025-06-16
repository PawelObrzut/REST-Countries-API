import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --blue950: hsl(207, 26%, 17%);
    --blue900: hsl(209, 23%, 22%);
    --grey950: hsl(200, 15%, 8%);
    --grey400: hsl(0, 0%, 50%);
    --grey50: hsl(0, 0%, 99%);
    --white: hsl(0, 100%, 100%);
    --ff-nunito: "Nunito Sans", sans-serif;
    --fs-400: 1rem;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, p, figure, picture {
    margin: 0;
  }

  body {
    font-family: var(--ff-nunito);
    font-size: var(--fs-400);
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.text};

  }

  input, button, textarea, select {
    font: inherit;
  }
`;

export default GlobalStyles;
