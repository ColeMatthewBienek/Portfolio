import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Stack, Link } from "@chakra-ui/react";

function Links() {
  return (
    <Stack direction="row">
      <Link
        fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
        as={ReactRouterLink}
        to="/"
        _hover={{ color: "#BB8FCE" }}
      >
        Home
      </Link>
      <Link
        fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
        as={ReactRouterLink}
        to="/about"
        _hover={{ color: "#BB8FCE" }}
      >
        About
      </Link>
      <Link
        fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
        as={ReactRouterLink}
        to="/resume"
        _hover={{ color: "#BB8FCE" }}
      >
        Resume
      </Link>
      <Link
        fontSize={{ base: ".5rem", md: ".75rem", lg: ".75rem" }}
        as={ReactRouterLink}
        to="/samples"
        _hover={{ color: "#BB8FCE" }}
      >
        Projects
      </Link>
    </Stack>
  );
}

export default Links;
