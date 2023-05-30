import { Box, Center, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Container } from "../components/container";
import { Button } from "../components/button";

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
        skills={[
          "Branding",
          "Web Design",
          "Frontend Development",
          "Backend Development",
        ]}
        description="I rebranded Arena to emphasize games and creators building engaged communities. This involved creating a new logo, updating the color palette, and redesigning the entire UI to reflect the new brand. Additionally, I implemented new features that strategically directed the product towards fostering community engagement."
      />
      <Center
        bgImage="/images/game-bg.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
        py={24}
      >
        {/* <Image src="/images/gamer-hero.png" /> */}
        <video
          src="/video/gamer-preview.webm"
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
            <Image src="/images/gamer-logos.png" />
            <Image src="/images/gamer-font-and-color.png" />
          </SimpleGrid>
          <Image src="/images/gamer/gamer-dark.webp" w="full" />
          <Image src="/images/gamer-light.png" w="full" />
          <Image src="/images/gamer/gamer-pages.webp" w="full" />
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
