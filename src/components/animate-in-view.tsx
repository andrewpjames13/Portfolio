import { Box, BoxProps, useMediaQuery } from "@chakra-ui/react";
import { Variants, motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import type { FC } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

type Props = BoxProps & {
  variants?: Variants;
  /**
   * If true, don't animate again after the component has been animated once
   */
  stayMounted?: boolean;
  delay?: number;
  y?: number;
};

export const AnimateInView: FC<React.PropsWithChildren<Props>> = ({
  children,
  stayMounted = false,
  delay = 0,
  y = 50,
  ...rest
}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !isMobile) {
      controls.start("visible");
    } else if (!stayMounted && !isMobile) {
      controls.start("hidden");
    }
  }, [controls, inView, stayMounted, isMobile]);

  return (
    <MotionBox
      ref={ref}
      animate={controls}
      initial="hidden"
      exit="exit"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
        hidden: { opacity: 0, y },
        exit: { opacity: 0 },
      }}
      w="full"
      {...rest}
    >
      {children}
    </MotionBox>
  );
};
