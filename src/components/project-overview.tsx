import { Text, Center, HStack, Circle, Flex } from "@chakra-ui/react";
import { Link } from "../components/link";
import { Fragment } from "react";

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
    <Center w="full" minH="60vh" flexDir="column" px={6}>
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
      <Flex
        mt={3}
        mb={3}
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        maxW="800px"
      >
        {skills.map((skill, i) => (
          <Fragment key={skill}>
            <Text fontSize="sm" fontWeight="900" mr={2} mb={2}>
              {skill}
            </Text>
            {i !== skills.length - 1 && (
              <Circle size="5px" backgroundColor="black" mr={2} mb={2} />
            )}
          </Fragment>
        ))}
      </Flex>
      <Text maxW="800px" textAlign="center">
        {description}
      </Text>
    </Center>
  );
};
