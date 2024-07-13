import React from "react";
import {
  Box,
  Text,
  useColorMode,
  Button,
  VStack,
  Stack,
  Heading,
  Flex,
  Center,
  Image,
} from "@chakra-ui/react";
import Title from "./Title";
import ProjectGallery from "./ProjectGallery";
import Hackathon from "./Hackathon";
import "typeface-poppins";
import homepageImage from "../../public/homepageImage.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "white" : "gray.800";
  const color = colorMode === "light" ? "black" : "white";
  const navigate = useNavigate();

  return (
    <Box
      p={8}
      bg={bgColor}
      color={color}
      borderRadius="md"
      textAlign="center"
      minH="100vh"
      pt={"10em"}
      fontFamily="'poppins', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
      pl={"10em"}
      pr={"10em"}
    >
      <Flex>
        <VStack spacing={6} alignItems="flex-start" w={"70%"} pl={"2em"}>
          <Heading as="h1" size="2xl">
            <Title />
          </Heading>
          <Text fontSize="xl" fontWeight="medium">
            A Software Engineer with a Passion for Developing Cutting-Edge
            Applications
          </Text>
          <Stack spacing={4} textAlign="left" maxW="600px">
            <Text fontSize="lg">
              An enthusiastic and creative software engineer with a strong focus
              on user-centric design and efficient, scalable code.
            </Text>
            <Text fontSize="lg">
              With a passion for both backend and frontend technologies, turning
              complex problems into elegant digital solutions.
            </Text>
          </Stack>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/fileDropper")}
          >
            Learn More
          </Button>
        </VStack>
        <Flex w={"30%"} justifyContent="center" alignItems="center">
          <Image
            src={homepageImage}
            alt="homepage image"
            userSelect="none"
            draggable="false"
            height={"15em"}
          />
        </Flex>
      </Flex>
      <ProjectGallery></ProjectGallery>

      <Hackathon></Hackathon>
    </Box>
  );
};

export default Home;
