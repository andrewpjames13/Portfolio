import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { theme } from "./theme";
console.log(theme);

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex
      pos="fixed"
      top={0}
      left={0}
      right={0}
      h="60px"
      px={3}
      justify="space-between"
      align="center"
    >
      <Text fontWeight="900" fontSize="3xl" letterSpacing="-0.8px">
        ANDREW JAMES
      </Text>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Box />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
