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
import { Outbox } from "./routes/outbox";
import { Farworld } from "./routes/farworld";
import { Octa } from "./routes/octa";
import { Drums } from "./routes/drums";
import { Practice } from "./routes/practice";

export const projects = [
  {
    to: "/farworld",
    src: "/images/farworld/farworld.jpg",
    layoutId: "farworld",
    name: "Farworld",
    skills: [
      "Frontend Development",
      "NextJS",
      "TypeScript",
      "Web Design",
      "UI/UX",
    ],
  },
  {
    to: "/outbox",
    src: "/images/outbox/outbox.jpg",
    layoutId: "outbox",
    name: "Outbox",
    skills: [
      "Frontend Development",
      "Backend Development",
      "React",
      "NextJS",
      "Node",
      "TypeScript",
      "Branding",
      "Web Design",
      "UI/UX",
    ],
  },
  {
    to: "/gamer",
    src: "/images/gamer/Gamer.XYZ.webp",
    layoutId: "gamer",
    name: "Gamer.xyz",
    skills: [
      "Frontend Development",
      "Backend Development",
      "React",
      "Remix",
      "Node",
      "TypeScript",
      "Branding",
      "Web Design",
    ],
  },
  {
    to: "/genesis",
    src: "/images/genesis/Genesis.webp",
    layoutId: "genesis",
    name: "Genesis",
    skills: [
      "Frontend Development",
      "React",
      "TypeScript",
      "Web Design",
      "Branding",
      "Motion Graphics",
    ],
  },
  {
    to: "/arena",
    src: "/images/arena/Arena.webp",
    layoutId: "arena",
    name: "Arena",
    skills: [
      "Frontend Development",
      "Backend Development",
      "NextJS",
      "TypeScript",
      "Node",
      "GraphQL",
      "Branding",
      "Web Design",
    ],
  },
  {
    to: "/the-born-readies",
    src: "/images/tbr/TBR.webp",
    layoutId: "tbr",
    name: "The Born Readies",
    skills: [
      "Frontend Development",
      "React",
      "Branding",
      "Web Design",
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
      "Frontend Development",
      "Backend Development",
      "React",
      "Rails",
      "Component Library",
      "Design System",
      "Atomic Design",
    ],
  },
  {
    to: "/cart-driver",
    src: "/images/cart-driver/Cart-Driver.webp",
    layoutId: "cartdriver",
    name: "Cart-Driver",
    skills: ["Web Development", "React", "Web Design", "Illustration"],
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
    src: "/images/octa/octa-hero.webp",
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

export const codeExamples = [
  {
    to: "https://codesandbox.io/s/jquery-sass-knob-s8lvh1",
    src: "/images/code-examples/knob.webp",
    layoutId: "knob",
    name: "Knob",
    skills: ["SASS", "jQuery", "UI Design"],
  },
  {
    to: "https://codesandbox.io/s/glitch-image-react-framer-motion-2lfpyl",
    src: "/images/code-examples/glitch.webp",
    layoutId: "glitch",
    name: "Glitch Image",
    skills: ["Javascript", "Framer-Motion", "React", "UI Design"],
  },
  {
    to: "https://codesandbox.io/s/prezi-style-nav-react-framer-motion-o4h79o",
    src: "/images/code-examples/nav.webp",
    layoutId: "nav",
    name: "Scroll Nav",
    skills: ["Javascript", "Framer-Motion", "React", "UI Design"],
  },
  {
    to: "https://codesandbox.io/s/typewriter-component-react-framer-motion-fct3y6",
    src: "/images/code-examples/typewriter.webp",
    layoutId: "typewriter",
    name: "Typewriter",
    skills: ["Javascript", "Framer-Motion", "React", "UI Design"],
  },
  {
    to: "https://codesandbox.io/s/jquery-metronome-rcbwbe",
    src: "/images/code-examples/detrignome.webp",
    layoutId: "Metronome",
    name: "Metronome",
    skills: ["SASS", "jQuery", "UI Design"],
  },
  {
    to: "https://codesandbox.io/s/draggable-video-component-react-framer-motion-1kjlvy",
    src: "/images/code-examples/drag-video.webp",
    layoutId: "drag-video",
    name: "Draggable Video",
    skills: ["Javascript", "Framer-Motion", "React", "UI Design"],
  },
];

export const App = () => {
  const location = useLocation();
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/farworld", element: <Farworld /> },
    { path: "/outbox", element: <Outbox /> },
    { path: "/gamer", element: <Gamer /> },
    { path: "/genesis", element: <Genesis /> },
    { path: "/arena", element: <Arena /> },
    { path: "/the-born-readies", element: <TBR /> },
    { path: "/angelmd", element: <AngelMd /> },
    { path: "/cart-driver", element: <CartDriver /> },
    { path: "/rawrx", element: <RawRx /> },
    { path: "/octa", element: <Octa /> },
    { path: "/drums", element: <Drums /> },
    { path: "/drums/practice", element: <Practice /> },
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
          {/* <Link to="/" fontWeight="900">
            Work
          </Link> */}
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
          {/* <Link fontWeight="900" to="/">
            Contact
          </Link> */}
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
                {/* <Link
                  fontWeight="900"
                  fontSize="3xl"
                  to="/"
                  _hover={{ textDecor: "none" }}
                >
                  <LogoIcon boxSize="30px" />
                </Link> */}
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
                <Link
                  to="mailto:andrewpjames87@gmail.com?subject=Hey%20Andrew%20I'm%20Interested%20In%20Doing%20Something%20Cool!"
                  fontWeight="900"
                >
                  Email
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
