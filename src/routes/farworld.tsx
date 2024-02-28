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
          description="Outbox is a passion project I co-created with friends, addresses the challenge of accessing and leveraging the expertise of individuals with large followings. It's a platform where users can easily sign up, pay to ask questions, or subscribe to get unlimited questions answered. My contributions include branding, web design and frontend coding."
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
