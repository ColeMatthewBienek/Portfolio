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
import React, { useState, useEffect } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import {
  githubProfile,
  myEmail,
  linkedIn,
  serviceKey,
  templateId,
  emailPublicKey,
} from "../../../config.js";
import emailjs from "emailjs-com";
import Links from "./Links.jsx";

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard(myEmail);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const senderName = event.target.name;
    const fieldValue = event.target.value;
    setValues({
      ...values,
      [senderName]: fieldValue,
    });
  };
  const handleEmailSend = (e) => {
    e.preventDefault();
    emailjs
      .send(serviceKey, templateId, values, emailPublicKey)
      .then((response) => {
        console.log("Success ", response);
        setValues({
          name: "",
          email: "",
          message: "",
        });
        setStatus("Success");
      })
      .catch(console.log);
  };

  useEffect(() => {
    if (status === "Success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  });

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
      <Flex
        align="center"
        justify="center"
        css={{}}
        id="contact"
        maxH={{ base: "75vh", md: "100vh" }}
        minW={{ base: "100vw" }}
      >
        <Box
          borderRadius="lg"
          maxW={{ base: "100vw", md: "70vw" }}
          maxH={{ base: "75vh", md: "100vh" }}
          p={{ base: "4", md: "8" }}
        >
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <Link href={githubProfile}>
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>

                  <Link href={linkedIn}>
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>

                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={{ base: "2", md: "5" }}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                  minW={{ base: "90vw", md: "80%" }}
                >
                  <VStack spacing={5}>
                    <Heading>Contact</Heading>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          onChange={handleChange}
                          value={values.name}
                          name="name"
                          placeholder="Your Name"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          onChange={handleChange}
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={values.email}
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        onChange={handleChange}
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                        value={values.message}
                      />
                    </FormControl>

                    <Button
                      onClick={handleEmailSend}
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  );
}
