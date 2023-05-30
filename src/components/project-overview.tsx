import { Text, Center, HStack, Circle, Flex } from "@chakra-ui/react";
import { Link } from "../components/link";
import { Fragment } from "react";
import { HorizontalDotSeparator } from "./hoizontal-dot-separator";

export const ProjectOverview = ({
  href,
  linkText,
  title,
  skills,
  description,
}: {
  href?: string;
  linkText?: string;
  title: string;
  skills: string[];
  description: string;
}) => {
  return (
    <Center w="full" minH="50vh" flexDir="column" px={6}>
      <Link
        fontSize="sm"
        fontWeight="900"
        to={href ?? ""}
        target="blank"
        mb={2}
        pos="relative"
      >
        {linkText}
      </Link>
      <Text
        fontSize={["15vw", "7xl"]}
        fontWeight="900"
        letterSpacing="-0.8px"
        lineHeight="3.5rem"
      >
        {title}
      </Text>
      <HorizontalDotSeparator skills={skills} />
      <Text maxW="800px" textAlign="center">
        {description}
      </Text>
    </Center>
  );
};
