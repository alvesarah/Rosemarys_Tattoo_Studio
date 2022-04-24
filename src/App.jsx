import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";
import { GlobalStyle } from "./styles/global.js";
import FHome from "./pages/Funcionario/FHome.jsx";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Usuario from "./pages/Usuario";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/funcionario/home" element={<FHome />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro />}/>
          <Route path="/usuario" element={<Usuario />}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
