import { Text, VStack, SimpleGrid, Center } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { PortfolioItem } from "../components/portfolio-item";
import { Container } from "../components/container";
import { projects } from "../App";

export const Home = () => (
  <AnimatedPageWrapper>
    <Container minH={["50vh", "50vh"]} p={3} px={[6, 0]} align="center">
      <Center w="full">
        <Text
          textAlign="center"
          fontSize={["4xl", "7xl"]}
          fontWeight="500"
          letterSpacing="-0.8px"
          lineHeight={["2.25rem", "5rem"]}
          maxW="1000px"
        >
          Andrew James is a designer, developer, and drummer based in Denver,
          Colorado.
        </Text>
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
    <Container py={6} px={[0, 6]}>
      <SimpleGrid columns={[1, 2]}>
        {projects.map((item, i) => (
          // <AnimateInView key={item.to} delay={i % 2 === 0 ? 0 : 0.05} y={0}>
          <PortfolioItem key={item.to} {...item} />
          // </AnimateInView>
        ))}
      </SimpleGrid>
    </Container>
  </AnimatedPageWrapper>
);
