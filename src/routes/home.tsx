import { Text, VStack, Flex, SimpleGrid } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { PortfolioItem } from "../components/portfolio-item";
import { AnimateInView } from "../components/animate-in-view";
import { Container } from "../components/container";

const items = [
  { to: "/gamer", src: "/images/Gamer.XYZ.jpg", layoutId: "gamer" },
  { to: "/genesis", src: "/images/Genesis.jpg", layoutId: "genesis" },
  { to: "/arena", src: "/images/Arena.jpg", layoutId: "arena" },
  { to: "/the-born-readies", src: "/images/TBR.jpg", layoutId: "tbr" },
  { to: "/angelmd", src: "/images/AngelMD.jpg", layoutId: "angelmd" },
  {
    to: "/cart-driver",
    src: "/images/Cart-Driver.jpg",
    layoutId: "cartdriver",
  },
];

export const Home = () => (
  <AnimatedPageWrapper>
    {/* <Flex minH="70vh" p={3} align="center">
      <VStack align="flex-start" spacing={0}>
        <Text
          fontSize="6xl"
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight="3.5rem"
        >
          DESIGNER
        </Text>
        <Text
          fontSize="6xl"
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight="3.5rem"
        >
          DRUMMER
        </Text>
        <Text
          fontSize="6xl"
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight="3.5rem"
        >
          DEVELOPER
        </Text>
      </VStack>
    </Flex> */}
    <Container py={6} px={[0, 6]}>
      <SimpleGrid columns={[1, 2]}>
        {items.map((item, i) => (
          // <AnimateInView key={item.to} delay={i % 2 === 0 ? 0 : 0.05} y={0}>
          <PortfolioItem key={item.to} {...item} />
          // </AnimateInView>
        ))}
      </SimpleGrid>
    </Container>
  </AnimatedPageWrapper>
);
