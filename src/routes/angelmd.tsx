import { Box, Center, Image } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Button } from "../components/button";

const MotionBox = motion(Box);

export const AngelMd = () => (
  <AnimatedPageWrapper>
    <MotionBox w="100%">
      <ProjectOverview
        href="https://styleguide.andrewjamesdesign.com/"
        linkText="styleguide.angelmd.com"
        title="ANGELMD"
        skills={[
          "Lead Developer",
          "Component Library",
          "Design System",
          "Frontend Development",
          "Backend Development",
          "Atomic Design",
        ]}
        description="I led the development of AngelMD's React and React Native applications from scratch. I established a well-documented and scalable codebase with a strong focus on reusability through an atomic design-based component library. Working closely with the design team, I ensured alignment in design and development principles."
      />
      <Center
        bgImage="/images/angelmd-back.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
        // h={["50vh", null, "80vh"]}
      >
        <Image src="/images/angelmd-hero.png" />
      </Center>
      <Center py={12}>
        <Button
          onClick={() =>
            window.open("https://styleguide.andrewjamesdesign.com/")
          }
        >
          GO TO STYLEGUIDE
        </Button>
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
    </MotionBox>
  </AnimatedPageWrapper>
);
