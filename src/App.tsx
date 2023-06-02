import {
  ChakraProvider,
  Circle,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { theme } from "./theme";
import { Home } from "./routes/home";
import { useLocation, useRoutes } from "react-router-dom";
import { Gamer } from "./routes/gamer";
import { Link } from "./components/link";
import { AnimatePresence } from "framer-motion";
import { Fragment, cloneElement } from "react";
import ScrollToTop from "./components/scroll-to-top";
import { Genesis } from "./routes/genisis";
import { Arena } from "./routes/arena";
import { TBR } from "./routes/tbr";
import { AngelMd } from "./routes/angelmd";
import { CartDriver } from "./routes/cart-driver";
import { Container } from "./components/container";
import { LogoIcon } from "./components/logo";
import { RawRx } from "./routes/rawrx";

export const projects = [
  {
    to: "/gamer",
    src: "/images/gamer/Gamer.XYZ.webp",
    layoutId: "gamer",
    name: "Gamer.xyz",
    skills: [
      "Branding",
      "Web Design",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    to: "/genesis",
    src: "/images/genesis/Genesis.webp",
    layoutId: "genesis",
    name: "Genesis",
    skills: [
      "Branding",
      "Web Design",
      "Frontend Development",
      "Motion Graphics",
    ],
  },
  {
    to: "/arena",
    src: "/images/arena/Arena.webp",
    layoutId: "arena",
    name: "Arena",
    skills: [
      "Branding",
      "Web Design",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    to: "/the-born-readies",
    src: "/images/tbr/TBR.webp",
    layoutId: "tbr",
    name: "The Born Readies",
    skills: [
      "Branding",
      "Web Design",
      "Frontend Development",
      "Illustration",
      "Creative Direction",
      "Art Direction",
      "Motion Graphics",
      "Video Production",
      "Drumming",
      "Songwriting",
    ],
  },
  {
    to: "/angelmd",
    src: "/images/angelmd/AngelMD.webp",
    layoutId: "angelmd",
    name: "AngelMd",
    skills: [
      "Lead Developer",
      "Component Library",
      "Design System",
      "Frontend Development",
      "Backend Development",
      "Atomic Design",
    ],
  },
  {
    to: "/cart-driver",
    src: "/images/cart-driver/Cart-Driver.webp",
    layoutId: "cartdriver",
    name: "Cart-Driver",
    skills: ["Web Design", "Web Development", "Illustration"],
  },
  {
    to: "/rawrx",
    src: "/images/rawrx/rawrx.webp",
    layoutId: "rawrx",
    name: "Raw Rx",
    skills: [
      "Branding",
      "Logo Design",
      "Product Design",
      "Business Card Design",
    ],
  },
  {
    to: "/octa",
    src: "/images/octa/octa-hero.jpg",
    layoutId: "octa",
    name: "Octa",
    skills: [
      "Branding",
      "Packaging Design",
      "Trade Show Booth Design",
      "Web Design",
      "Marketing Materials",
    ],
  },
];

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
    { path: "/rawrx", element: <RawRx /> },
  ]);

  if (!element) return null;

  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop />
      <Container>
        <Flex
          h="60px"
          px={6}
          justify="space-between"
          align="center"
          w="full"
          pos="relative"
        >
          <Link to="/" fontWeight="900">
            Work
          </Link>
          <Link
            fontWeight="900"
            fontSize="3xl"
            to="/"
            _hover={{ textDecor: "none" }}
            pos="absolute"
            top={"50%"}
            left={"50%"}
            transform="translate(-50%, -50%)"
          >
            {/* ANDREW JAMES */}
            <LogoIcon boxSize="40px" />
          </Link>
          <Link fontWeight="900" to="/">
            Contact
          </Link>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        </Flex>
      </Container>
      <AnimatePresence exitBeforeEnter>
        {cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
      <Container pt={24} pb={6}>
        <VStack w="full">
          {location.pathname !== "/" && (
            <Flex
              mb={12}
              wrap="wrap"
              alignItems="center"
              justifyContent="center"
              w="full"
            >
              {projects.map((project, i) => {
                if (project.to === location.pathname) return null;
                return (
                  <Fragment key={project.to}>
                    <Link
                      fontSize="lg"
                      textTransform="uppercase"
                      fontWeight="900"
                      mr={2}
                      mb={2}
                      to={project.to}
                    >
                      {project.name}
                    </Link>
                    {i !== projects.length - 1 && (
                      <Circle
                        size="5px"
                        backgroundColor="black"
                        mr={2}
                        mb={2}
                      />
                    )}
                  </Fragment>
                );
              })}
            </Flex>
          )}
          {location.pathname === "/" && (
            <Flex
              h="60px"
              justify="space-between"
              align="center"
              w="full"
              px={6}
            >
              <HStack spacing={6} w="full">
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
              <Text
                fontWeight="900"
                whiteSpace="nowrap"
              >{`© ${new Date().getFullYear()} &RU DESIGN`}</Text>
            </Flex>
          )}
        </VStack>
      </Container>
    </ChakraProvider>
  );
};
