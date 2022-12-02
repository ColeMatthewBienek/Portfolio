import React from "react";
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
  useColorModeValue,
  VStack,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import Links from "./Links.jsx";

function SampleProjects() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default SampleProjects;
