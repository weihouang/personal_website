import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";

const About = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.800";
  const color = colorMode === "light" ? "black" : "white";

  return (
    <Box p={4} bg={bgColor} color={color} borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold">
        About Me
      </Text>
      <Text mt={2}>
        I have a background in software engineering and specialize in full-stack
        web development.
      </Text>
      <Text mt={2}>
        I love solving complex problems and working with modern technologies to
        create impactful solutions.
      </Text>
    </Box>
  );
};

export default About;
