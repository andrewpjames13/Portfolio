import { Box, Center, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Container } from "../components/container";
import { Button } from "../components/button";
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
      <Center bgColor="#a29160" h={["50vh", null, "80vh"]}>
        <Image src="/images/tbr/tbr-hero.webp" />
      </Center>
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[2]} spacing={12}>
            <Image src="/images/tbr/first-drum-head.webp" />
            <Image src="/images/tbr/second-drum-head.webp" />
          </SimpleGrid>
          <SimpleGrid columns={[4]} spacing={12}>
            <Image src="/images/tbr/WCS-Patch-color.webp" />
            <Image src="/images/tbr/outtasightsquare.webp" />
            <Image src="/images/tbr/motorcyclemaniasquarepatch.webp" />
            <Image src="/images/tbr/Boogie-Patch.webp" />
          </SimpleGrid>
        </VStack>
      </Container>
      <Center bgColor="#a29160" py={24}>
        <iframe
          title="Motorcycle Mania"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/LCJNw-oDY9c"
          allow="autoplay;"
          style={{
            height: "75vh",
            paddingLeft: "25px",
            paddingRight: "25px",
            maxWidth: "1500px",
          }}
        />
      </Center>
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[2]} spacing={12}>
            <Image src="/images/tbr/WCS-T-Shirt.webp" />
            <Image src="/images/tbr/Outta-Sight-T-Shirt-Black.webp" />
            <Image src="/images/tbr/MM-T-Shirt.webp" />
            <Image src="/images/tbr/Boogie-Man-T-Shirt.webp" />
          </SimpleGrid>
        </VStack>
      </Container>
    </MotionBox>
  </AnimatedPageWrapper>
);
