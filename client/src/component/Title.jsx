import React, { useState, useEffect } from "react";
import { Box, Text, keyframes, useColorMode } from "@chakra-ui/react";

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const BlinkingCursor = ({ blink, color }) => (
  <Box as="span" animation={`${blink} 1s step-end infinite`} color={color}>
    |
  </Box>
);

const TextSpan = ({ children, color }) => (
  <Text as="span" color={color}>
    {children}
  </Text>
);

const Title = () => {
  const { colorMode } = useColorMode();
  const cursorColor = colorMode === "light" ? "black" : "white";
  const textColor = colorMode === "light" ? "blue.600" : "blue.300";

  const words = ["Hi, I am Weiho"];
  const [index, setIndex] = useState(0); // Current index for the words array
  const [subIndex, setSubIndex] = useState(0); // Current index for the substring of the word
  const [isDeleting, setIsDeleting] = useState(false); // State to track whether currently deleting

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      if (subIndex === 0) {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1200); // Wait time before the next word starts typing
      } else {
        timeoutId = setTimeout(() => {
          setSubIndex((prevSubIndex) => prevSubIndex - 1);
        }, 60); // Speed of deleting each character
      }
    } else {
      if (subIndex === words[index].length + 1) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before starting to delete
      } else {
        timeoutId = setTimeout(() => {
          setSubIndex((prevSubIndex) => prevSubIndex + 1);
        }, 120); // Speed of typing each character
      }
    }

    return () => clearTimeout(timeoutId);
  }, [subIndex, index, words, isDeleting]);

  const blinkCursor = subIndex === 0 || subIndex === words[index].length + 1;
  const cursorClass = blinkCursor ? (
    <BlinkingCursor blink={blink} color={cursorColor} />
  ) : (
    <Box as="span" color={cursorColor}>
      |
    </Box>
  );

  return (
    <>
      <TextSpan color={textColor}>
        {words[index].substring(0, subIndex)}
      </TextSpan>
      {cursorClass}
    </>
  );
};

export default Title;
