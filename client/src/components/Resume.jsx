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
import myFile from "../assets/files/ColeBienek_12-2-2022.pdf";
import Links from "./Links.jsx";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
      >
        <Links />
      </Box>
      <Document
        file={myFile}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        className="pdf-document"
      >
        <Page pageNumber={pageNumber} />
        {/* {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            className="pdf-page"
            pageNumber={index + 1}
            width="200"
          />
        ))} */}
      </Document>
    </React.Fragment>
  );
}

export default Resume;
