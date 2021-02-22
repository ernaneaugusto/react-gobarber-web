import styled from "styled-components";
import signInBackground from "./../../assets/sign-in-background.png";
import { appStyles } from "./../../styles/appStyles";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  border: 3px solid #fff;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid green;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      font-size: 40px;
    }

    input {
      background-color: ${appStyles.grayExtremeDark};
      border-radius: ${appStyles.bdRadiusDefault};
      border: 2px solid ${appStyles.grayExtremeDark};
      padding: 16px;
      width: 100%;
      color: ${appStyles.grayLight};

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background-color: ${appStyles.orange};
      border-radius: ${appStyles.bdRadiusDefault};
      border: 0;
      padding: 16px;
      color: ${appStyles.grayDark};
      width: 100%;
      font-family: ${appStyles.fonts.robotoSlab};
      font-weight: ${appStyles.fonts.bold};
      margin-top: 16px;

      &:hover {
        background-color: ${shade(appStyles.opacityHover, appStyles.orange)};
      }
    }

    a {
      color: ${appStyles.grayLight};
      display: block;
      margin-top: 24px;

      &:hover {
        color: ${shade(appStyles.opacityHover, appStyles.grayLight)};
      }
    }
  }

  > a {
    color: ${appStyles.orange};
    display: block;
    margin-top: 24px;

    &:hover {
      color: ${shade(appStyles.opacityHover, appStyles.orange)}
    }
  }
`;
export const Background = styled.section`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;

  &:hover {
  }
`;
