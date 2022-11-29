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
  ExternalLinkIcon,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

function ToggleMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle Mode {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}

export default function Home() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://res.cloudinary.com/dsqh5elvv/image/upload/e_improve,q_100/v1669678741/03CFE61A-7445-48C6-9718-E31C02BEF6D4_1_105_c_r01p2e.jpg)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <ToggleMode />
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            fontSize={useBreakpointValue({ base: "5xl", md: "6xl" })}
            lineHeight={1.2}
          >
            Cole Matthew Bienek
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Full Stack Software Engineering With a Heart of Creativity
          </Text>
          <Stack direction={"row"}>
            <Link as={ReactRouterLink} to="/about">
              About |
            </Link>
            <Link as={ReactRouterLink} to="/contact">
              Contact |
            </Link>
            <Link as={ReactRouterLink} to="/resume">
              Curriculum Vitae |
            </Link>
            <Link as={ReactRouterLink} to="/samples">
              Projects
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
