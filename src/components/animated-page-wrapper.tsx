import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionFlex = motion(Flex);

export const AnimatedPageWrapper = ({ children }: PropsWithChildren) => (
  <MotionFlex
    flexDir="column"
    initial={{ y: 100 }}
    animate={{ y: 0, transition: { duration: 0.4 } }}
    exit={{ y: 0 }}
  >
    {children}
  </MotionFlex>
);
