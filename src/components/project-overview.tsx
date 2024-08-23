import { Text, Center, CenterProps } from "@chakra-ui/react";
import { Link } from "../components/link";
import { HorizontalDotSeparator } from "./hoizontal-dot-separator";

export const ProjectOverview = ({
  href,
  linkText,
  title,
  skills,
  description,
  centerProps,
}: {
  href?: string;
  linkText?: string;
  title: string;
  skills: string[];
  description: string;
  centerProps?: CenterProps;
}) => {
  return (
    <Center
      w="full"
      minH="50vh"
      flexDir="column"
      px={6}
      py={12}
      textAlign="center"
      {...centerProps}
    >
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
