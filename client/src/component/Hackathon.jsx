// src/ProjectGallery.js

import React from "react";
import {
  Box,
  Text,
  useColorMode,
  Heading,
  Grid,
  GridItem,
  Image,
  VStack,
  Tag,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import projects from "./HackathonProject";

const Hackathon = () => {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const cardBgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
      p={8}
      bg={bgColor}
      color={textColor}
      borderRadius="md"
      minH="100vh"
      id="project"
    >
      <Heading as="h1" size="2xl" textAlign="center" mb={6}>
        Hackathon Project
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={10}>
        Explore some of the amazing projects I've worked on.
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {projects.map((project, index) => (
          <GridItem
            key={index}
            bg={cardBgColor}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <VStack spacing={4} align="start">
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="md"
                mb={4}
              />
              <Heading as="h3" size="md">
                {project.title}
              </Heading>
              <Text>{project.description}</Text>
              <Box>
                <Heading as="h4" size="sm" mt={4} mb={2}>
                  Technologies Used:
                </Heading>
                <HStack spacing={2}>
                  {project.technologies.map((tech, techIndex) => (
                    <Tag key={techIndex} colorScheme="teal" variant="solid">
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Hackathon;
