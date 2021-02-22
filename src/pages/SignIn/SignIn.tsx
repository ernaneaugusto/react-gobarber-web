import React from "react";
import { Container, Content, Background } from "./styles";
import logoImg from "./../../assets/logo.svg";
import { FiLogIn, FiCheck } from "react-icons/fi";
import { appStyles } from "./../../styles/appStyles";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Logo GoBarber" title="Logo GoBarber" />

      <form>
        <h1>
          Acesse o{" "}
          <strong style={{ color: appStyles.orange, display: "block" }}>
            GoBarber
          </strong>
        </h1>

        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />

        <button type="submit">
          Entrar
          <FiCheck />
        </button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a>
        Criar conta
        <FiLogIn />
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
