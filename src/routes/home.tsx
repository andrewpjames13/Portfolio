import { Text, VStack, SimpleGrid, Center, Flex } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { PortfolioItem } from "../components/portfolio-item";
import { Container } from "../components/container";
import { codeExamples, projects } from "../App";
import { AnimateInView } from "../components/animate-in-view";
import { motion } from "framer-motion";

const MotionText = motion(Text);

const textVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 0 },
  exit: { opacity: 0 },
};

export const Home = () => (
  <AnimatedPageWrapper>
    <Container minH={["50vh", "50vh"]} p={3} px={[6, 0]} align="center">
      <Center w="full" flexDir="column">
        <MotionText
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={textVariants}
          textAlign="center"
          fontSize={["4xl", "7xl"]}
          fontWeight="500"
          letterSpacing="-0.8px"
          lineHeight={["2.25rem", "5rem"]}
          maxW="1000px"
        >
          Andrew James is a designer,
        </MotionText>
        <MotionText
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={textVariants}
          textAlign="center"
          fontSize={["4xl", "7xl"]}
          fontWeight="500"
          letterSpacing="-0.8px"
          lineHeight={["2.25rem", "5rem"]}
          maxW="1000px"
        >
          developer, and drummer based in.
        </MotionText>
        <MotionText
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={textVariants}
          textAlign="center"
          fontSize={["4xl", "7xl"]}
          fontWeight="500"
          letterSpacing="-0.8px"
          lineHeight={["2.25rem", "5rem"]}
          maxW="1000px"
        >
          Denver, Colorado.
        </MotionText>
      </Center>
      {/* <VStack align="flex-start" spacing={0}>
        <Text
          fontSize={["5xl", "8xl"]}
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight={["3rem", "5.5rem"]}
        >
          FULL STACK
        </Text>
        <Text
          fontSize={["5xl", "8xl"]}
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight={["3rem", "5.5rem"]}
        >
          DEVELOPMENT
        </Text>
        <Text
          fontSize={["5xl", "8xl"]}
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight={["3rem", "5.5rem"]}
        >
          & DESIGN IN
        </Text>
        <Text
          fontSize={["5xl", "8xl"]}
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight={["3rem", "5.5rem"]}
        >
          DENVER, CO
        </Text>
      </VStack> */}
    </Container>
    <AnimateInView stayMounted>
      <Container py={6} px={[0, null, 6]} minH="100vh">
        <SimpleGrid columns={[1, null, 2]}>
          {projects.map((item, i) => (
            // <AnimateInView key={item.to} delay={i % 2 === 0 ? 0 : 0.05} y={0}>
            <PortfolioItem key={item.to} {...item} />
            // </AnimateInView>
          ))}
        </SimpleGrid>
      </Container>
    </AnimateInView>
    <Container pt={6} px={[2, null, 6]} pb={[3, null, 0]}>
      <Text
        fontSize={["4xl", "4xl"]}
        fontWeight="900"
        letterSpacing="-0.8px"
        lineHeight={["2.25rem", "5rem"]}
      >
        JUST FOR FUN
      </Text>
    </Container>
    <Container pb={6} px={[0, null, 6]}>
      <SimpleGrid columns={[1, null, 2]} w="full">
        {codeExamples.map((item, i) => (
          <PortfolioItem key={item.to} {...item} />
        ))}
        {/* <iframe
          src="https://codesandbox.io/embed/reverent-platform-s8lvh1?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "461px",
            border: "0",
            overflow: "hidden",
          }}
          title="JQuery SASS Knob"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          src="https://codesandbox.io/embed/glitch-image-react-framer-motion-forked-2lfpyl?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "461px",
            border: "0",
            overflow: "hidden",
          }}
          title="Glitch Image - React - Framer Motion"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          src="https://codesandbox.io/embed/prezi-style-nav-react-framer-motion-o4h79o?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "461px",
            border: "0",
            overflow: "hidden",
          }}
          title="Prezi Style Nav - React - Framer Motion"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
        <iframe
          src="https://codesandbox.io/embed/typewriter-component-react-framer-motion-fct3y6?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "461px",
            border: "0",
            overflow: "hidden",
          }}
          title="Typewriter component - React - Framer Motion"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
        <iframe
          src="https://codesandbox.io/embed/jquery-metronome-rcbwbe?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "461px",
            border: "0",
            overflow: "hidden",
          }}
          title="JQuery Metronome"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>

        <iframe
          src="https://codesandbox.io/embed/draggable-video-component-react-framer-motion-1kjlvy?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "461px",
            border: "0",
            overflow: "hidden",
          }}
          title="Draggable Video Component - React - Framer Motion"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        /> */}
      </SimpleGrid>
    </Container>
  </AnimatedPageWrapper>
);
