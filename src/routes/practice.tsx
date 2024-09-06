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
    description: "rlr lrl rlr lrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=12&Tempo=80&Measures=1&H=|x--x--x--x--|&S=|OOOOOOOOOOOO|&K=|o-----o-----|",
  },
  {
    name: "16th Notes",
    description: "rlrl rlrl rlrl rlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|oooooooooooooooo|&K=|o-------o-------|",
  },
  {
    name: "Groupings of Threes",
    description: "rlr lrl rlr lrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|ooo-ooo-ooo-ooo-|&K=|o-------o-------|",
  },
  {
    name: "Groupings of Fives",
    description: "rlrlr lrlrl rlrlr lrlrl rlrlr",
    subDescription: "lrlrl rlrlr lrlrl rlrlr lrlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|x---x---x---x---|x---x---x---x---|&S=|OOOOO-OOOOO-OOOO|O-OOOOO-OOOOO---|&K=|o-------o-------|o-------o-------|",
  },
  {
    name: "Groupings of Sevens",
    description: "rlrlrlr lrlrlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|ooooooo-ooooooo-|&K=|o-------o-------|",
  },
  {
    name: "Groupings of Elevens",
    description: "rlrlrlrlrlr lrlrlrlrlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|OOOOOOOOOOO-OOOO|OOOOOOO-OOOOOOOO|OOO-OOOOOOOOOOO-|OOOOOOOOOOO-O---|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Groupings of Fifteens",
    description: "rlrlrlrlrlrlrlr lrlrlrlrlrlrlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|OOOOOOOOOOOOO-OOOO|OOOOOOOOOOOOO-OOOO|OOOOOOOOOOOOO-OOOO|OOOOOOOOOOOOO-O---|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Threes",
    description: "r lrl rlr lrl rl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-OOO-OOO-OOO-OO|&K=|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Fives",
    description: "r lrlrl rlrlr lrlrl rlrlr lrlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=2&H=|x---x---x---x---|x---x---x---x---|&S=|O-OOOOO-OOOOO-OO|OOO-OOOOO-OOOOO-|&K=|o-------o-------|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Sevens",
    description: "r lrlrlrl rlrlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-OOOOOOO-OOOOOO|&K=|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Elevens",
    description:
      "r lrlrlrlrlrl rlrlrlrlrlr lrlrlrlrlrl rlrlrlrlrlr lrlrlrlrlrl",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|O-OOOOOOOOOOO-OO|OOOOOOOOO-OOOOOO|OOOOO-OOOOOOOOOO|O-OOOOOOOOOOO-O-|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Fifteens",
    description: "r lrlrlrlrlrlrlrl l rlrlrlrlrlrlrlr",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-OOOOOOOOOOOOOO|&K=|o-------o-------|",
  },
];

const singlesWithAccents = [
  {
    name: "Six",
    description: "rlrl R L",
    subDescription: "lrlr L R",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|ggggO-O-ggggO-O-|&K=|o-------o-------|",
  },
  {
    name: "Ten",
    description: "rlrl rlrl R L rlrl rlrl RL rlrl rlrl RL rlrl rlrl RL",
    subDescription: "lrlr lrlr L R lrlr lrlr L R lrlr lrlr LR lrlr lrlr LR",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=3&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|ggggggggO-O-gggg|ggggO-O-gggggggg|O-O-ggggggggO-O-|&K=|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Twelve",
    description: "rlrl rlrl R L R L",
    subDescription: "lrlr lrlr L R L R",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|ggggggggO-O-O-O-|&K=|o-------o-------|",
  },
  {
    name: "Fourteen",
    description: "rlrl rlrl rlrl R L",
    subDescription: "lrlr lrlr lrlr L R",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|ggggggggO-O-O-O-|&K=|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Six",
    description: "R lrlrL",
    subDescription: "L rlrlR",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-ggggO-O-ggggO-|&K=|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Ten",
    description: "R lrlr lrlr L",
    subDescription: "L rlrl rlrl R",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=3&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|O-ggggggggO-O-gg|ggggggO-O-gggggg|ggO-O-ggggggggO-|&K=|o-------o-------|o-------o-------|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Twelve",
    description: "R lrlr lrlr L R L",
    subDescription: "L rlrl rlrl R L R",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-ggggggggO-O-O-|&K=|o-------o-------|",
  },
  {
    name: "Displaced Groupings of Fourteen",
    description: "R lrlr lrlr lrlrl L",
    subDescription: "L rlrl rlrl rlrl R",
    href: "https://www.mikeslessons.com/groove/?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|x---x---x---x---|&S=|O-ggggggggggggO-|&K=|o-------o-------|",
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

        <Box p={12} pl={[6, 12]} pb={0}>
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

        <Box p={12} pl={[6, 12]} pb={0}>
          <Text fontSize="3xl" fontWeight="900">
            Singles With Accents
          </Text>
        </Box>
        <Grid
          p={[6, 12]}
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          gap={6}
        >
          {singlesWithAccents.map((item) => (
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
