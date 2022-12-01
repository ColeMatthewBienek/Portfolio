import React, { useState } from "react";

import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import data from "../../../sampleData/aboutData.js";
import AboutItems from "./AboutItems.jsx";

const About = () => {
  const [isOdd, setIsOdd] = useState(false);
  console.log(data);
  return (
    <Flex
      minW={{ base: "100vw", md: "100vw" }}
      // _dark={{ bg: "#3e3e3e" }}
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        shadow="xl"
        // bg="white"
        // _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
        minW={{ base: "100vw", md: "100vw" }}
      >
        {data.map((item, index) => {
          return (
            <AboutItems
              key={index}
              keyPoint={item.keyPoint}
              keyPointText={item.keyPointText}
              buttonText={item.buttonText}
              image={item.image}
              expandedText={item.expandedText}
              count={index + 1}
            />
          );
        })}
      </Box>
    </Flex>
  );
};
export default About;
