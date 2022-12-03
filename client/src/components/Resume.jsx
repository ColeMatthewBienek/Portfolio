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
  Image,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import myFile from "../assets/files/ColeBienek_12-2-2022.pdf";
import Links from "./Links.jsx";
import { useState } from "react";

import { pdfjs } from "react-pdf";
import resumePic from "../assets/files/resumePic.jpg";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
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
        zIndex="1001"
      >
        <Links />
      </Box>

      <Flex
        maxH={{ base: "75vh", md: "100vh" }}
        minW={{ base: "100vw" }}
        align="center"
        justify="center"
        p={{ base: "4", md: "6" }}
        marginTop={{ base: "6" }}
      >
        <Stack
          p={{ base: "6", md: "10" }}
          direction={{ base: "column", md: "row" }}
        >
          <Box>
            <a
              href={myFile}
              without="false"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant="ghost" size={{ base: "sm", md: "md" }}>
                Open PDF
              </Button>
            </a>
          </Box>

          <Image
            boxSize={{ base: "sm", md: "md" }}
            objectFit="contain"
            src={resumePic}
          />
        </Stack>
      </Flex>
    </React.Fragment>
  );
}

export default Resume;
