import { Box, Center, Image } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { projects } from "../App";

const MotionBox = motion(Box);

export const Arena = () => (
  <AnimatedPageWrapper>
    <MotionBox w="100%">
      <ProjectOverview
        href="https://arena.gl"
        linkText="arena.gl"
        title="Arena"
        skills={projects.find((p) => p.to === "/arena")?.skills ?? []}
        description="I joined the Arena team to enhance and standardize the brand throughout the app, while also designing and implementing full-stack features. Additionally, I built a comprehensive component library to ensure consistency and efficiency in development."
      />
      <Center
        bgImage="/images/arena/arena-bg.webp"
        backgroundSize="cover"
        backgroundPosition="center"
        // h={["50vh", null, "80vh"]}
      >
        <Image src="/images/arena/arena-hero.webp" />
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
