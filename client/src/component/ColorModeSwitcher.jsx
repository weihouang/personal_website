import React from "react";
import { useColorMode, Button, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ColorModeSwitcher(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <FaMoon /> : <FaSun />;

  return (
    <IconButton
      size="lg"
      fontSize="1.2em"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={icon}
      {...props}
    />
  );
}
