import React from "react";
import "./App.css";
import GlobalStyles from "./styles/global";
import SignIn from "./pages/SignIn/SignIn";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <SignIn />
  </>
);

export default App;
