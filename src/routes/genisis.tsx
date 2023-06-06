import { Box, Center, useMediaQuery } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Button } from "../components/button";
import { projects } from "../App";

const MotionBox = motion(Box);

export const Genesis = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <AnimatedPageWrapper>
      <MotionBox w="100%">
        <ProjectOverview
          href="https://mint.arena.gl"
          linkText="mint.arena.gl"
          title="GENESIS"
          skills={projects.find((p) => p.to === "/genesis")?.skills ?? []}
          description="This project was to create an immersive web experience fot the Genesis NFT project that would captivate users the same way that playing a video game would."
        />
        <Center
          bgImage="/images/genesis/genesis-bg.webp"
          backgroundSize="cover"
          backgroundPosition="center"
          py={24}
        >
          {/* <Image src="/images/genesis-hero.png" /> */}
          <video
            controls={isMobile}
            src="/video/genisis-preview.mp4"
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
        <Center py={12}>
          <Button onClick={() => window.open("https://mint.arena.gl")}>
            Checkout GENESIS
          </Button>
        </Center>
      </MotionBox>
    </AnimatedPageWrapper>
  );
};
