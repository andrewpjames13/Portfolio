import { ChakraProvider, Text, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { theme } from "./theme";
import { Home } from "./routes/home";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import { Gamer } from "./routes/gamer";
import { AnimatedRoutes } from "./animated-routes";
import { Link } from "./components/link";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gamer",
    element: <Gamer />,
  },
]);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
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
          <Link
            fontWeight="900"
            fontSize="3xl"
            letterSpacing="-0.8px"
            to="/"
            _hover={{ textDecor: "none" }}
          >
            ANDREW JAMES
          </Link>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        {/* <RouterProvider router={router} /> */}

        {/* <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" element={} />
            <Route path="/gamer" element={<Gamer />} />
          </Switch>
        </AnimatePresence> */}
        <AnimatedRoutes />
      </Router>
    </ChakraProvider>
  );
};
