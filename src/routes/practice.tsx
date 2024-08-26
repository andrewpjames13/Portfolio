import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { Link } from "../components/link";
import { MdChevronRight } from "react-icons/md";

const MotionBox = motion(Box);

const singlesNoAccents = [
  {
    name: "Triplets",
    description: "RLR RLR RLR RLR",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=12&Tempo=80&Measures=1&H=|x--x--x--x--|&S=|OOOOOOOOOOOO|&K=|o-----o-----|",
  },
  {
    name: "16th Notes",
    description: "RLRL LRLR RLRL LRLR",
    href: "eSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|oooooooooooooooo|&K=|o-------o-------|",
  },
  {
    name: "Groupings of Threes",
    description: "RLR LRL RLR LRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|ooo-ooo-ooo-ooo-|&K=|o-------o-------|",
  },
  {
    name: "Groupings of Fives",
    description: "RLRLR LRLRL RLRLR LRLRL RLRLR L",
    subDescription: "LRLRL RLRLR LRLRL RLRLR LRLRL R",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|x---x---x---x---|x---x---x---x---|&S=|OOOOO-OOOOO-OOOO|O-OOOOO-OOOOO---|&K=|o-------o-------|o-------o-------|",
  },
  {
    name: "Groupings of Sevens",
    description: "RLRLRLR LRLRLRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|ooooooo-ooooooo-|&K=|o-------o-------|",
  },
  {
    name: "Groupings of Elevens",
    description: "RLRLRLRLRLR LRLRLRLRLRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|OOOOOOOOOOO-OOOO|OOOOOOO-OOOOOOOO|OOO-OOOOOOOOOOO-|OOOOOOOOOOO-O---|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Groupings of Fifteens",
    description: "RLRLRLRLRLRLRLR LRLRLRLRLRLRLRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|OOOOOOOOOOOOO-OOOO|OOOOOOOOOOOOO-OOOO|OOOOOOOOOOOOO-OOOO|OOOOOOOOOOOOO-O---|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Threes",
    description: "R LRL RLR LRL RL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-OOO-OOO-OOO-OO|&K=|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Fives",
    description: "R LRLRL RLRLR LRLRL RLRLR LRLRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|x---x---x---x---|x---x---x---x---|&S=|O-OOOOO-OOOOO-OO|OOO-OOOOO-OOOOO-|&K=|o-------o-------|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Sevens",
    description: "R LRLRLRL RLRLRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-OOOOOOO-OOOOOO|&K=|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Elevens",
    description:
      "R LRLRLRLRLRL RLRLRLRLRLR LRLRLRLRLRL RLRLRLRLRLR LRLRLRLRLRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|O-OOOOOOOOOOO-OO|OOOOOOOOO-OOOOOO|OOOOO-OOOOOOOOOO|O-OOOOOOOOOOO-O-|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Fifteens",
    description: "R LRLRLRLRLRLRLR L RLRLRLRLRLRLRL",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-OOOOOOOOOOOOOO|&K=|o-------o-------|",
  },
];

export const Practice = () => {
  return (
    <AnimatedPageWrapper>
      <MotionBox
        // layoutId="gamer"
        w="100%"
      >
        <ProjectOverview
          title="Drum Practice"
          skills={[]}
          description=""
          centerProps={{ bg: "black", color: "white" }}
        />

        <Box p={12} pb={0}>
          <Text fontSize="3xl" fontWeight="900">
            Singles No Accents
          </Text>
        </Box>
        <Grid
          p={[6, 12]}
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap={6}
        >
          {singlesNoAccents.map((item) => (
            <Link
              to={item.href}
              target="blank"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              role="group"
            >
              <Flex
                w="full"
                bg="black"
                minH="25vh"
                flexDir="column"
                justifyContent="space-between"
                p={6}
              >
                <Box>
                  <Text
                    color="white"
                    fontSize="2xl"
                    fontWeight="900"
                    _groupHover={{ textDecoration: "underline" }}
                  >
                    {item.name}
                  </Text>
                  <Text color="white">{item.description}</Text>
                  {item.subDescription && (
                    <Text color="white">{item.subDescription}</Text>
                  )}
                </Box>
                <Flex
                  alignItems="center"
                  w="full"
                  justifyContent="flex-end"
                  gap={1}
                >
                  <Text
                    color="white"
                    _groupHover={{ textDecoration: "underline" }}
                  >
                    Groove Scribe
                  </Text>
                  <Icon as={MdChevronRight} color="white" boxSize={5} />
                </Flex>
              </Flex>
            </Link>
          ))}
        </Grid>
      </MotionBox>
    </AnimatedPageWrapper>
  );
};
