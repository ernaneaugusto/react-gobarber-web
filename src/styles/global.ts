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
    font-family: ${appStyles.fonts.robotoRegular};
    font-size: ${appStyles.fonts.sizeDefault};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${appStyles.fonts.robotoMedium};
  }
  
  button, a {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
