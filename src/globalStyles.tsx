import { css } from "@emotion/react";
const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Inter";
  }
  image {
    display: block;
    max-width: 100%;
  }
  button {
    border: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default globalStyles;
