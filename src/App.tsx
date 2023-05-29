import { Box, ChakraProvider, Flex, HStack, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { theme } from "./theme";
import { Home } from "./routes/home";
import { useLocation, useRoutes } from "react-router-dom";
import { Gamer } from "./routes/gamer";
import { Link } from "./components/link";
import { AnimatePresence } from "framer-motion";
import { cloneElement, useEffect } from "react";
import ScrollToTop from "./components/scroll-to-top";
import { Genesis } from "./routes/genisis";
import { Arena } from "./routes/arena";
import { TBR } from "./routes/tbr";
import { AngelMd } from "./routes/angelmd";
import { CartDriver } from "./routes/cart-driver";

export const App = () => {
  const location = useLocation();
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/gamer", element: <Gamer /> },
    { path: "/genesis", element: <Genesis /> },
    { path: "/arena", element: <Arena /> },
    { path: "/the-born-readies", element: <TBR /> },
    { path: "/angelmd", element: <AngelMd /> },
    { path: "/cart-driver", element: <CartDriver /> },
  ]);

  if (!element) return null;

  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Flex
        h="60px"
        px={6}
        justify="space-between"
        align="center"
        w="full"
        justifyContent="center"
      >
        <Link
          fontWeight="900"
          fontSize="3xl"
          letterSpacing="-0.8px"
          to="/"
          _hover={{ textDecor: "none" }}
        >
          ANDREW JAMES
        </Link>
        {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
      </Flex>
      <AnimatePresence exitBeforeEnter>
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
      <Flex h="60px" px={6} justify="space-between" align="center" w="full">
        <HStack spacing={6}>
          <Link
            to="https://github.com/andrewpjames13"
            target="blank"
            fontWeight="900"
          >
            Github
          </Link>
          <Link
            to="https://linkedin.com/in/andrewpjames13"
            target="blank"
            fontWeight="900"
          >
            LinkedIn
          </Link>
        </HStack>
        <Text fontWeight="900">{`© ${new Date().getFullYear()} &RU DESIGN`}</Text>
      </Flex>
    </ChakraProvider>
  );
};
