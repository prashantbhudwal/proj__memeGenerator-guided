import { css } from "@emotion/react";
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: "Inter";
  }
  image {
    display: block;
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
