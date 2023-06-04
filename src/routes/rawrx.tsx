import { Box, Center, Image, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Container } from "../components/container";
import { projects } from "../App";

const MotionBox = motion(Box);

export const RawRx = () => (
  <AnimatedPageWrapper>
    <MotionBox
      // layoutId="gamer"
      w="100%"
    >
      <ProjectOverview
        title="RAW RX"
        skills={projects.find((p) => p.to === "/rawrx")?.skills ?? []}
        description="I collaborated with RawRx, a growing THC and CBD pharmaceutical company, to develop a brand that embodies their commitment to producing the cleanest and purest products in their industry. Below are key highlights of the brand creation process we underwent together."
      />
      <Center
        bgImage="/images/rawrx/raw-background.webp"
        backgroundSize="cover"
        backgroundPosition="center"
        h={["50vh", null, "80vh"]}
      >
        <Image src="/images/rawrx/raw-logo.webp" />
      </Center>
      <Container pt={6} px={[2, null, 6]} pb={[3, null, 0]}>
        <Text
          fontSize={["4xl", "4xl"]}
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight={["2.25rem", "5rem"]}
        >
          LOGO PROPOSAL
        </Text>
      </Container>
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[1, null, 2]} spacing={12}>
            <Image src="/images/rawrx/RawRx-logo-proposal_Page_2.webp" />
            <Image src="/images/rawrx/RawRx-logo-proposal_Page_3.webp" />
            <Image src="/images/rawrx/RawRx-logo-proposal_Page_4.webp" />
            <Image src="/images/rawrx/RawRx-logo-proposal_Page_5.webp" />
          </SimpleGrid>
        </VStack>
      </Container>
      <Container pt={6} px={[2, null, 6]} pb={[3, null, 0]}>
        <Text
          fontSize={["4xl", "4xl"]}
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight={["2.25rem", "5rem"]}
        >
          LOGO ITERATION
        </Text>
      </Container>
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[1, null, 2]} spacing={12}>
            <Image src="/images/rawrx/RawRx-logo-r2_Page_2.webp" />
            <Image src="/images/rawrx/RawRx-logo-r2_Page_3.webp" />
          </SimpleGrid>
        </VStack>
      </Container>
      <Container pt={6} px={[2, null, 6]} pb={[3, null, 0]}>
        <Text
          fontSize={["4xl", "4xl"]}
          fontWeight="900"
          letterSpacing="-0.8px"
          lineHeight={["2.25rem", "5rem"]}
        >
          BUSINESS CARDS
        </Text>
      </Container>
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[1, null, 2]} spacing={12}>
            <Image src="/images/rawrx/rawFlattenedProposal_Page_2.webp" />
            <Image src="/images/rawrx/rawFlattenedProposal_Page_3.webp" />
            <Image src="/images/rawrx/rawFlattenedProposal_Page_4.webp" />
            <Image src="/images/rawrx/rawFlattenedProposal_Page_1.webp" />
          </SimpleGrid>
        </VStack>
      </Container>
    </MotionBox>
  </AnimatedPageWrapper>
);
