import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  VStack,
  Container,
  Card,
  Image,
  CardHeader,
  CardBody,
  CardFooter,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";
import Links from "./Links.jsx";
import projects from "../../../sampleData/projectData.js";
import Project from "./Project.jsx";
function SampleProjects() {
  const [isOdd, setIsOdd] = useState(false);

  return (
    <Flex
      minW={{ base: "100vw", md: "100vw" }}
      flexDirection="column"
      // _dark={{ bg: "#3e3e3e" }}
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        width="100vw"
        _dark={{ bg: "#3e3e3e" }}
        _light={{ bg: "#E5E7E9", color: "#111111" }}
        position="sticky"
        top="0px"
        p="2"
        textAlign="center"
      >
        <Links />
      </Box>

      <Box
        shadow="xl"
        // bg="white"
        // _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
        minW={{ base: "100vw", md: "100vw" }}
      >
        {projects.map((item, index) => {
          return (
            <Project
              key={index}
              title={item.title}
              shortDescription={item.shortDescription}
              mediaURL={item.mediaURL}
              longDescription={item.longDescription}
              gitHubLinks={item.gitHubLinks}
              count={index + 1}
            />
          );
        })}
      </Box>
    </Flex>
  );
}

export default SampleProjects;
