import { Box, Center, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Container } from "../components/container";
import { Button } from "../components/button";
import { projects } from "../App";

const MotionBox = motion(Box);

export const Gamer = () => (
  <AnimatedPageWrapper>
    <MotionBox
      // layoutId="gamer"
      w="100%"
    >
      <ProjectOverview
        href="https://gamer.xyz"
        linkText="gamer.xyz"
        title="GAMER.XYZ"
        skills={projects.find((p) => p.to === "/gamer")?.skills ?? []}
        description="I rebranded Arena to emphasize games and creators building engaged communities. This involved creating a new logo, updating the color palette, and redesigning the entire UI to reflect the new brand. Additionally, I implemented new features that strategically directed the product towards fostering community engagement."
      />
      <Center
        bgImage="/images/gamer/gamer-bg.webp"
        backgroundSize="cover"
        backgroundPosition="center"
        py={24}
      >
        {/* <Image src="/images/gamer/gamer-hero.webp" /> */}
        <video
          // poster="/images/gamer/gamer-hero.webp"
          src="/video/gamer-preview.mp4"
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
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[1, 2]}>
            <Image src="/images/gamer/gamer-logos.webp" />
            <Image src="/images/gamer/gamer-font-and-color.webp" />
          </SimpleGrid>
          <Image src="/images/gamer/gamer-dark.webp" w="full" />
          <Image src="/images/gamer/gamer-light.webp" w="full" />
          {/* <Image src="/images/gamer/gamer-pages.webp" w="full" /> */}
        </VStack>
      </Container>
      <Center py={12}>
        <Button onClick={() => window.open("https://gamer.xyz")}>
          Checkout Gamer.xyz
        </Button>
      </Center>
    </MotionBox>
  </AnimatedPageWrapper>
);
