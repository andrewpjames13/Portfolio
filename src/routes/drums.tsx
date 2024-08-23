import { Box } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";

const MotionBox = motion(Box);

export const Drums = () => {
  return (
    <AnimatedPageWrapper>
      <MotionBox
        // layoutId="gamer"
        w="100%"
      >
        <ProjectOverview title="Drums" skills={[]} description="" />

        {/* <Grid p={12} templateColumns="repeat(2, 1fr)" gap={6}>
          <Box
            w="full"
            bg="black"
            minH="25vh"
            justifyContent="end"
            alignItems="center"
          >
            <Text color="white" p={6} fontSize="2xl" fontWeight="900">
              Practice
            </Text>
          </Box>
        </Grid> */}
      </MotionBox>
    </AnimatedPageWrapper>
  );
};
