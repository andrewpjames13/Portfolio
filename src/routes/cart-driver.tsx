import { Box, Center, Image } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Button } from "../components/button";

const MotionBox = motion(Box);

export const CartDriver = () => (
  <AnimatedPageWrapper>
    <MotionBox w="100%">
      <ProjectOverview
        title="CART-DRIVER"
        skills={["Web Design", "Web Development", "Illustration"]}
        description="I designed and developed the Cart Driver website, incorporating a custom CMS that allowed for easy content management and updates. Additionally, I created an illustration for their signage at the Rino location."
      />
      <Center
        bgImage="/images/cart-driver-bg.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Image src="/images/cart-driver-hero.png" />
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
