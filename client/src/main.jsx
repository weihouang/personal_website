// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "typeface-pacifico";
import {
  ChakraProvider,
  extendTheme,
  CSSReset,
  ColorModeScript,
} from "@chakra-ui/react";
import App from "./App";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

ReactDOM.render(
  <Router>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CSSReset />
      <App />
    </ChakraProvider>
  </Router>,
  document.getElementById("root")
);
