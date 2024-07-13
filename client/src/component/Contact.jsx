import React from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorMode,
} from "@chakra-ui/react";

const Contact = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "light" ? "gray.100" : "gray.800";
  const color = colorMode === "light" ? "black" : "white";

  return (
    <Box p={4} bg={bgColor} color={color} borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold">
        Contact Me
      </Text>
      <FormControl mt={4}>
        <FormLabel>Your Name</FormLabel>
        <Input placeholder="Name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Your Email</FormLabel>
        <Input type="email" placeholder="Email" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Your Message</FormLabel>
        <Textarea placeholder="Message" />
      </FormControl>
      <Button mt={4} colorScheme="teal">
        Send Message
      </Button>
    </Box>
  );
};

export default Contact;
