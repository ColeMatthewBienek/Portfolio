import React, { useState } from "react";

import {
  Box,
  Button,
  Stack,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Image,
  Accordion,
  AccordionItem,
  useColorModeValue,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export default function Project({
  count,
  title,
  shortDescription,
  mediaURL,
  longDescription,
  gitHubLinks,
}) {
  const isOdd = count % 2 === 0;

  return (
    <SimpleGrid
      alignItems="center"
      columns={{ base: 1, md: 2 }}
      mb={24}
      spacingY={{ base: 10, md: 32 }}
      spacingX={{ base: 10, md: 24 }}
      // flexDirection="column-reverse"
      flexDirection={isOdd ? "column" : "column-reverse"}
    >
      <Box order={isOdd ? { base: "initial", md: 2 } : {}}>
        <chakra.h2
          mb={4}
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          textAlign={{ base: "center", md: "left" }}
          color="gray.900"
          _dark={{ color: "gray.400" }}
          lineHeight={{ md: "shorter" }}
          textShadow="2px 0 currentcolor"
        >
          {title}
        </chakra.h2>
        <chakra.p
          mb={5}
          textAlign={{ base: "center", sm: "left" }}
          color="gray.600"
          _dark={{ color: "gray.400" }}
          fontSize={{ md: "lg" }}
        >
          {shortDescription}
        </chakra.p>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box textAlign="left">Learn More</Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {longDescription.map((blurb, index) => {
                return (
                  <div key={index}>
                    <p>{blurb}</p>
                    <br />
                  </div>
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {gitHubLinks.map((item, index) => {
          return (
            <Stack
              fontSize={{ base: "sm", md: "md" }}
              spacing={{ base: 8, md: 10 }}
              direction={{ base: "column", md: "row" }}
            >
              <Button
                variant="ghost"
                _hover={{
                  bg: "blue.500",
                  color: useColorModeValue("white", "gray.700"),
                }}
              >
                <Link alignSelf="center " key={index} href={item.url}>
                  {item.name}
                </Link>
              </Button>
            </Stack>
          );
        })}
      </Box>
      <Box>
        <Image src={mediaURL} objectFit="cover" />
      </Box>
    </SimpleGrid>
  );
}
