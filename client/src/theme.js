import { extendTheme } from "@chakra-ui/react";
const appTheme = {
  config: {
    initialColorMode: "Light",
    useSystemColorMode: "false",
  },
  styles: {
    global: {
      "html, body": {},
    },
  },
};

export default extendTheme(appTheme);
