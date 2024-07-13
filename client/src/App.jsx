import React from "react";
import {
  ChakraProvider,
  Box,
  extendTheme,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Homepage";
import About from "./component/About";
import Projects from "./component/Project";
import Contact from "./component/Contact";
import ProjectGallery from "./component/ProjectGallery.jsx";
import FileDropper from "./component/FileDropper.jsx";
// Custom theme configuration
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <CSSReset />
    <Box>
      <Navbar />
      <Box h={"4em"}></Box>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectGallery></ProjectGallery>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fileDropper" element={<FileDropper></FileDropper>} />
      </Routes>
    </Box>
  </ChakraProvider>
);

export default App;
