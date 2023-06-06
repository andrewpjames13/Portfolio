import { Center, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "./link";
import { projects } from "../App";
import { HorizontalDotSeparator } from "./hoizontal-dot-separator";

const MotionCenter = motion(Center);

export const PortfolioItem = ({
  to,
  src,
  layoutId,
  name,
  skills,
}: (typeof projects)[0]) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Link
      to={to}
      // fontSize="2xl"
      // onClick={() => {
      //   sessionStorage.setItem(
      //     "scrollPosition",
      //     JSON.stringify({ x: window.scrollX, y: window.scrollY })
      //   );
      // }}
      role="group"
      w="full"
      pos="relative"
    >
      <MotionCenter layoutId={layoutId} pos="relative" overflow="hidden">
        <Image
          src={src}
          transition="transform ease-in-out 300ms"
          _groupHover={isMobile ? {} : { transform: "scale(1.1)" }}
        />
      </MotionCenter>
      <Center
        display={["none", null, "flex"]}
        pos="absolute"
        top={0}
        right={0}
        left={0}
        bottom={0}
        bg="blackAlpha.800"
        opacity={0}
        transition="opacity ease-in-out 300ms"
        _groupHover={isMobile ? {} : { opacity: 1 }}
      >
        <Flex flexDir="column" px={6}>
          <Text
            color="white"
            fontSize="4xl"
            fontWeight="900"
            textAlign="center"
            lineHeight="2rem"
            textTransform="uppercase"
            transition="transform ease-in-out 300ms"
            transform={`translateY(10px)`}
            _groupHover={{ transform: "translateY(0)" }}
          >
            {name}
          </Text>
          <HorizontalDotSeparator skills={skills ?? []} color="white" />
          <Text
            color="white"
            fontSize="sm"
            textAlign="center"
            // transition="transform ease-in-out 300ms"
            textTransform="uppercase"
            textDecor="underline"
            // transform={`translateY(10px)`}
            // _groupHover={{ transform: "translateY(0)" }}
          >
            View Project
          </Text>
        </Flex>
      </Center>
    </Link>
  );
};
