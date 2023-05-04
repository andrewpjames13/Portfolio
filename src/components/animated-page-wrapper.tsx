import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const MotionCenter = motion(Center);

export const AnimatedPageWrapper = ({ children }: PropsWithChildren) => (
  <MotionCenter
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
    exit={{ opacity: 0, y: 0 }}
  >
    {children}
  </MotionCenter>
);
