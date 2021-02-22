import { createGlobalStyle } from "styled-components";
import { appStyles } from "./appStyles";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: ${appStyles.grayDark};
    color: ${appStyles.white};
    -webkit-font-smooting: antialiased;
  }

  body, input, button, a {
    font-family: ${appStyles.fonts.robotoSlab}, sans-serif;
    font-size: ${appStyles.fonts.sizeDefault};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: ${appStyles.fonts.robotoSlab}, sans-serif;
    font-weight: ${appStyles.fonts.bold};
  }
  
  button, a {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: ${appStyles.transitionTime} ease-in-out all;

    &:hover svg {
      color: inherit;
    }

    svg {
      margin-left: 6px;
      margin-right: 6px;
      vertical-align: middle;
      color: inherit;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
