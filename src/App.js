
import './App.css';
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from './Components/Navbar';
import AnimatedRoutes from './Components/AnimatedRoutes';


function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#fa5b0f",
      color: "#fa5b0f",
      // #eb2872
      // #F6F8FA
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "#fa5b0f",
      border: "rgba(250, 91, 15, 1)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <div>
       <>
    <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <AnimatedRoutes/>
      {/* footer */}
    </Router>
    </ThemeProvider>
    </>
    </div>
  );
}

export default App;
