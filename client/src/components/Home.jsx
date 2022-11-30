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
  Spacer,
  ExternalLinkIcon,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        fontSize={{ md: "2em", lg: "1em" }}
        size={{ md: "lg", lg: "sm" }}
        onClick={toggleColorMode}
        p={{ md: "6", lg: "4" }}
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}

export default function Home() {
  return (
    <Flex
      flexDirection={"column"}
      p={{ md: "10", lg: "14" }}
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
        fontSize={{ md: "8em", lg: "4em" }}
        lineHeight={1.2}
      >
        Cole Bienek
      </Text>
      <Text
        color={"white"}
        fontWeight={700}
        lineHeight={1.2}
        fontSize={{ base: "8em", md: "3em" }}
      >
        Full Stack Software Engineering With a Heart of Creativity
      </Text>
      <Spacer />
      <Stack direction={{ xl: "row", md: "column" }}>
        <Link
          fontSize={{ md: "4em", lg: "2em" }}
          as={ReactRouterLink}
          to="/about"
        >
          About -
        </Link>
        <Link
          fontSize={{ md: "4em", lg: "2em" }}
          as={ReactRouterLink}
          to="/contact"
        >
          Contact -
        </Link>
        <Link
          fontSize={{ md: "4em", lg: "2em" }}
          as={ReactRouterLink}
          to="/resume"
        >
          Curriculum Vitae -
        </Link>
        <Link
          fontSize={{ md: "4em", lg: "2em" }}
          as={ReactRouterLink}
          to="/samples"
        >
          Projects -
        </Link>
      </Stack>
      <Spacer />
    </Flex>
  );
}
