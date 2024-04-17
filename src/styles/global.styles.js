import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    ${({ theme }) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: ${theme.typhografy.primary};
        overflow: hidden;
      }

      button {
        font-family: ${theme.typhografy.primary};
      }
    `}
`;
