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
import homepageImage1 from "../../public/homepageImage1.png";
import homepageImage2 from "../../public/homepageImage2.png";
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
      pl={"13em"}
      pr={"13em"}
    >
      <Flex>
        <VStack spacing={3} alignItems="flex-start" w={"60%"} pl={"2em"}>
          <Heading as="h1" size="2xl">
            <Title />
          </Heading>
          <Text fontSize="xl" fontWeight="medium" textAlign="left">
            a Software Engineer with a Passion for Innovation.
          </Text>
          <Stack spacing={3} textAlign="left" maxW="600px">
            <Text fontSize="lg">
              I am an enthusiastic and creative software engineer dedicated to
              crafting cutting-edge applications. Focusing on user-centric
              design and scalable code, I transform complex problems into
              elegant digital solutions. Proficient in both backend and frontend
              technologies, I deliver seamless and robust applications with high
              quality and performance.
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
        <Flex w={"40%"} justifyContent="center" alignItems="center">
          <Image
            src={homepageImage2}
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
