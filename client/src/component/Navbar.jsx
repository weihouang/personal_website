import React, { useState, useEffect } from "react";
import {
  Flex,
  Link as ChakraLink,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "typeface-pacifico";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const color = colorMode === "light" ? "black" : "white";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      as="nav"
      bg={bgColor}
      color={color}
      pt={isScrolled ? 0 : 6}
      pl={isScrolled ? 8 : "10em"}
      pr={isScrolled ? 8 : "10em"}
      pb={isScrolled ? 0 : 2}
      justify={isScrolled ? "space-between" : "space-between"}
      align="center"
      top={0}
      h={isScrolled ? "3.5em" : "4em"}
      left={isScrolled ? "25vw" : 0}
      width="100%"
      position="fixed"
      borderRadius={isScrolled ? "lg" : 0}
      boxShadow={isScrolled ? "lg" : "none"}
      transition="all 0.7s"
      w={isScrolled ? "50vw" : "100vw"}
      transform={isScrolled ? "translateY(1.8em)" : "translateY(0)"}
      zIndex="1000"
      fontFamily="'Pacifico', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
      fontSize={"1.2em"}
    >
      <ChakraLink
        href="/"
        fontFamily="'Pacifico', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        fontSize={"1.5em"}
      >
        Wei-Ho Uang
      </ChakraLink>
      <Flex align="center" justify="space-around">
        <HStack spacing={2}>
          <HStack spacing={0}>
            <ChakraLink as={RouterLink} to="/contact" pl={2} pr={2}>
              Contact
            </ChakraLink>
            <ChakraLink href="./Wei_ho_Uang.pdf" target="_blank" pl={2} pr={2}>
              Resume
            </ChakraLink>
            <ScrollLink
              to="project"
              smooth={true}
              duration={500}
              offset={-70} // Offset for fixed navbar
            >
              <ChakraLink pl={2} pr={2}>
                Projects
              </ChakraLink>
            </ScrollLink>
          </HStack>
          <ChakraLink
            href="https://www.linkedin.com/in/wei-ho-uang-460353250/"
            target="_blank"
          >
            <FaLinkedin />
          </ChakraLink>
          <ChakraLink href="mailto:willy200335@gmail.com" target="_blank">
            <FaEnvelope />
          </ChakraLink>
          <ChakraLink href="https://github.com/weihouang" target="_blank">
            <FaGithub />
          </ChakraLink>
        </HStack>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Navbar;
