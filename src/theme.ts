import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "'Titillium Web', sans-serif",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.900")(props),
        lineHeight: "base",
      },
    }),
  },
});
