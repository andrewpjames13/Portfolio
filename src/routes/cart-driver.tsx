import { Box, Center, Image, SimpleGrid } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { projects } from "../App";
import { Container } from "../components/container";

const MotionBox = motion(Box);

export const CartDriver = () => (
  <AnimatedPageWrapper>
    <MotionBox w="100%">
      <ProjectOverview
        title="CART-DRIVER"
        skills={projects.find((p) => p.to === "/cart-driver")?.skills ?? []}
        description="I designed and developed the Cart Driver website, incorporating a custom CMS that allowed for easy content management and updates. Additionally, I created an illustration for their signage at the Rino location."
      />
      <Center
        bgImage="/images/cart-driver/cart-driver-bg.webp"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Image src="/images/cart-driver/cart-driver-hero-noback.webp" />
      </Center>
      <Container py={[6, null, 12]}>
        <SimpleGrid columns={[1, 2]}>
          <Image src="/images/cart-driver/intro-cart-driver.webp" />
          <Image src="/images/cart-driver/cart-driver-hero.webp" />
        </SimpleGrid>
      </Container>
    </MotionBox>
  </AnimatedPageWrapper>
);
