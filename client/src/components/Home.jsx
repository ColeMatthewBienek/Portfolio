import React, { useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
  Box,
  Spacer,
  ExternalLinkIcon,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Links from "./Links.jsx";

function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button
        size={{ base: "sm", md: "md", lg: "sm" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <Flex
        p={{ base: "4", md: "10" }}
        flexDirection={"column"}
        paddingBottom={{ base: "14" }}
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://res.cloudinary.com/dsqh5elvv/image/upload/e_improve,q_100/v1669678741/03CFE61A-7445-48C6-9718-E31C02BEF6D4_1_105_c_r01p2e.jpg)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        justify={{
          base: "center",
          md: "flex-start",
          xl: "space-between",
        }}
      >
        <ToggleMode />
        <br />
        <Text
          color={"white"}
          fontWeight={700}
          fontSize={{ base: "1rem", md: "1rem", lg: "2rem" }}
          lineHeight={1.2}
        >
          Cole Bienek
        </Text>

        <Text
          color={"white"}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={{ base: ".75rem", md: "1rem", lg: "1.5rem" }}
        >
          Full Stack Software Engineering With a Heart of Creativity
        </Text>
        <Spacer />
        <Stack spacing="8px" direction={{ base: "column", lg: "row" }}>
          <Link
            fontSize={{ base: "1rem" }}
            as={ReactRouterLink}
            to="/about"
            _hover={{ color: "#BB8FCE" }}
          >
            <Button variant="ghost" _light={{ color: "#ffffff" }}>
              About
            </Button>
          </Link>
          <Link
            fontSize={{ base: "1rem" }}
            as={ReactRouterLink}
            to="/contact"
            _hover={{ color: "#BB8FCE" }}
          >
            <Button variant="ghost" _light={{ color: "#ffffff" }}>
              Contact
            </Button>
          </Link>
          <Link
            fontSize={{ base: "1rem" }}
            as={ReactRouterLink}
            to="/resume"
            _hover={{ color: "#BB8FCE" }}
          >
            <Button variant="ghost" _light={{ color: "#ffffff" }}>
              Resume
            </Button>
          </Link>
          <Link
            fontSize={{ base: "1rem" }}
            as={ReactRouterLink}
            to="/samples"
            _hover={{ color: "#BB8FCE" }}
          >
            <Button variant="ghost" _light={{ color: "#ffffff" }}>
              Projects
            </Button>
          </Link>
        </Stack>
      </Flex>
    </React.Fragment>
  );
}
