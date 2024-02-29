import { Box, Center, Image } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Button } from "../components/button";
import { projects } from "../App";

const MotionBox = motion(Box);

export const Farworld = () => {
  return (
    <AnimatedPageWrapper>
      <MotionBox
        // layoutId="gamer"
        w="100%"
      >
        <ProjectOverview
          href="https://farworld.gg"
          linkText="farworld.gg"
          title="Farworld"
          skills={projects.find((p) => p.to === "/farworld")?.skills ?? []}
          description='Farworld is a mysterious world full of mysterious monsters. I did the web design, contributed to the front-end development and created the rare holographic effect for each creature, know as "Farmons"'
        />
        <Center
          bgImage="/images/farworld/background-gradient.jpg"
          backgroundSize="cover"
          backgroundPosition="center"
          py={24}
        >
          <Image src="/images/farworld/hero.jpg" />
        </Center>

        <Center py={12}>
          <Button onClick={() => window.open("https://farworld.gg")}>
            Checkout Farworld
          </Button>
        </Center>
      </MotionBox>
    </AnimatedPageWrapper>
  );
};
