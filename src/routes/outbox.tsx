import {
  Box,
  Center,
  Flex,
  Image,
  SimpleGrid,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Container } from "../components/container";
import { Button } from "../components/button";
import { projects } from "../App";

const MotionBox = motion(Box);

export const Outbox = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <AnimatedPageWrapper>
      <MotionBox
        // layoutId="gamer"
        w="100%"
      >
        <ProjectOverview
          href="https://outbox.xyz"
          linkText="outbox.xyz"
          title="OUTBOX"
          skills={projects.find((p) => p.to === "/gamer")?.skills ?? []}
          description="Outbox is a passion project I co-created with friends, addresses the challenge of accessing and leveraging the expertise of individuals with large followings. It's a platform where users can easily sign up, pay to ask questions, or subscribe to get unlimited questions answered. My contributions include branding, web design and frontend coding."
        />
        <Center
          bgImage="/images/outbox/outbox-bg.jpg"
          backgroundSize="cover"
          backgroundPosition="center"
          py={24}
        >
          {/* <Image src="/images/gamer/gamer-hero.webp" /> */}
          <video
            // poster="/images/gamer/gamer-hero.webp"
            controls={isMobile}
            src="/video/outbox-preview.mp4"
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
            <SimpleGrid columns={[1, 2]} spacing={12}>
              <Image src="/images/outbox/home.jpg" />
              <Image src="/images/outbox/inbox.jpg" w="full" />
            </SimpleGrid>
            <Flex
              bg="#ebebeb"
              w="full"
              justify="center"
              h="500px"
              overflow="hidden"
              pos="relative"
            >
              <Image
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                src="/images/outbox/search.jpg"
              />
            </Flex>
            <SimpleGrid columns={[1, 2]} spacing={12}>
              <Image src="/images/outbox/profile.jpg" />
              <Image src="/images/outbox/edit-profile.jpg" w="full" />
            </SimpleGrid>
          </VStack>
        </Container>
        <Center py={12}>
          <Button onClick={() => window.open("https://outbox.xyz")}>
            Checkout Outbox
          </Button>
        </Center>
      </MotionBox>
    </AnimatedPageWrapper>
  );
};
