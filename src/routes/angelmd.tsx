import { Box, Center, Image } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Button } from "../components/button";
import { projects } from "../App";

const MotionBox = motion(Box);

export const AngelMd = () => (
  <AnimatedPageWrapper>
    <MotionBox w="100%">
      <ProjectOverview
        href="https://styleguide.andrewjamesdesign.com/"
        linkText="styleguide.angelmd.com"
        title="ANGELMD"
        skills={projects.find((p) => p.to === "/angelmd")?.skills ?? []}
        description="I led the development of AngelMD's React and React Native applications from scratch. I established a well-documented and scalable codebase with a strong focus on reusability through an atomic design-based component library. Working closely with the design team, I ensured alignment in design and development principles."
      />
      <Center
        bgImage="/images/angelmd/angelmd-back.webp"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Image src="/images/angelmd/angelmd-hero.webp" />
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
    </MotionBox>
  </AnimatedPageWrapper>
);
