import { Center, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "./link";

const MotionCenter = motion(Center);

export const PortfolioItem = ({
  to,
  src,
  layoutId,
}: {
  to: string;
  src: string;
  layoutId: string;
}) => {
  return (
    <Link
      to={to}
      fontSize="2xl"
      // onClick={() => {
      //   sessionStorage.setItem(
      //     "scrollPosition",
      //     JSON.stringify({ x: window.scrollX, y: window.scrollY })
      //   );
      // }}
      role="group"
    >
      <MotionCenter layoutId={layoutId} pos="relative" overflow="hidden">
        <Image
          src={src}
          transition="transform ease-in-out 100ms"
          _groupHover={{ transform: "scale(1.1)" }}
        />
      </MotionCenter>
    </Link>
  );
};
