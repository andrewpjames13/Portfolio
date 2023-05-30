import { Box, Center, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Button } from "../components/button";
import { projects } from "../App";

const MotionBox = motion(Box);

export const Genesis = () => (
  <AnimatedPageWrapper>
    <MotionBox w="100%">
      <ProjectOverview
        href="https://mint.arena.gl"
        linkText="mint.arena.gl"
        title="GENESIS"
        skills={projects.find((p) => p.to === "/genesis")?.skills ?? []}
        description="This project was to create an immersive web experience fot the Genesis NFT project that would captivate users the same way that playing a video game would."
      />
      <Center
        bgImage="/images/genesis/genesis-bg.webp"
        backgroundSize="cover"
        backgroundPosition="center"
        py={24}
      >
        {/* <Image src="/images/genesis-hero.png" /> */}
        <video
          src="/video/genisis-preview.webm"
          autoPlay
          loop
          style={{
            width: "80vw",
            maxWidth: "1500px",
            filter: "drop-shadow(5px 5px 10px #000)",
            borderRadius: "10px",
          }}
        />
      </Center>
      {/* <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[1, 2]}>
            <Image src="/images/gamer-logos.png" />
            <Image src="/images/gamer-font-and-color.png" />
          </SimpleGrid>
          <Image src="/images/gamer-dark.png" w="full" />
          <Image src="/images/gamer-light.png" w="full" />
          <Image src="/images/gamer-pages.png" w="full" />
        </VStack>
      </Container> */}
      <Center py={12}>
        <Button onClick={() => window.open("https://mint.arena.gl")}>
          Checkout GENESIS
        </Button>
      </Center>
    </MotionBox>
  </AnimatedPageWrapper>
);
