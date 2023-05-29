import { Box, Center, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Container } from "../components/container";
import { Button } from "../components/button";

const MotionBox = motion(Box);

export const TBR = () => (
  <AnimatedPageWrapper>
    <MotionBox
      // layoutId="gamer"
      w="100%"
    >
      <ProjectOverview
        href="http://thebornreadies.rocks/"
        linkText="thebornreadies.rocks"
        title="THE BORN READIES"
        skills={[
          "Branding",
          "Web Design",
          "Frontend Development",
          "Illustration",
          "Creative Direction",
          "Art Direction",
          "Motion Graphics",
          "Video Production",
          "Drumming",
          "Songwriting",
        ]}
        description="The Born Readies are a rock band from Denver, CO. I designed and developed their website, as well as their logo, album art, and merchandise. I also produced and directed their music video for their single, 'Motorcycle Mania'. I am also the drummer and a songwriter for the band."
      />
      <Center bgColor="#a29160" h={["50vh", null, "80vh"]}>
        <Image src="/images/tbr/tbr-hero.png" />
      </Center>
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[2]} spacing={12}>
            <Image src="/images/tbr/first-drum-head.jpeg" />
            <Image src="/images/tbr/second-drum-head.jpeg" />
          </SimpleGrid>
          <SimpleGrid columns={[4]} spacing={12}>
            <Image src="/images/tbr/WCS-Patch-color.png" />
            <Image src="/images/tbr/outtasightsquare.jpg" />
            <Image src="/images/tbr/motorcyclemaniasquarepatch.jpg" />
            <Image src="/images/tbr/Boogie-Patch.jpg" />
          </SimpleGrid>
        </VStack>
      </Container>
      <Center bgColor="#a29160" py={24}>
        <iframe
          title="Motorcycle Mania"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/LCJNw-oDY9c"
          allow="autoplay;"
          style={{
            height: "75vh",
            paddingLeft: "25px",
            paddingRight: "25px",
            maxWidth: "1500px",
          }}
        />
      </Center>
      <Container py={12} px={[6]}>
        <VStack flexDir="column" spacing={12}>
          <SimpleGrid columns={[2]} spacing={12}>
            <Image src="/images/tbr/WCS-T-Shirt.jpg" />
            <Image src="/images/tbr/Outta-Sight-T-Shirt-Black.jpg" />
            <Image src="/images/tbr/MM-T-Shirt.jpg" />
            <Image src="/images/tbr/Boogie-Man-T-Shirt.jpg" />
          </SimpleGrid>
        </VStack>
      </Container>
      <Center py={12}>
        <Button onClick={() => window.open("http://thebornreadies.rocks/")}>
          Checkout The Born Readies
        </Button>
      </Center>
    </MotionBox>
  </AnimatedPageWrapper>
);
