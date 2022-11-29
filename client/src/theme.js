import { extendTheme } from "@chakra-ui/react";
const appTheme = {
  config: {
    initialColorMode: "Light",
    useSystemColorMode: "false",
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.300",
        lineHeight: "tall",
      },
    },
  },
};

export default extendTheme(appTheme);
