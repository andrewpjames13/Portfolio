import { Circle, Flex, FlexProps, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export const HorizontalDotSeparator = ({
  skills,
  ...rest
}: { skills: string[] } & FlexProps) => {
  return (
    <Flex
      mt={3}
      mb={3}
      wrap="wrap"
      alignItems="center"
      justifyContent="center"
      maxW="800px"
      {...rest}
    >
      {skills.map((skill, i) => (
        <Fragment key={skill}>
          <Text
            fontSize="sm"
            fontWeight={rest.color === "white" ? "600" : "900"}
            mr={2}
            mb={2}
          >
            {skill}
          </Text>
          {i !== skills.length - 1 && (
            <Circle
              size="5px"
              backgroundColor={rest.color ?? "black"}
              mr={2}
              mb={2}
            />
          )}
        </Fragment>
      ))}
    </Flex>
  );
};
