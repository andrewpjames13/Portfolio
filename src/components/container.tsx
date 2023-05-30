import { Flex, FlexProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const MAX_WIDTH = "1500px";

export const Container = ({
  children,
  ...rest
}: PropsWithChildren & FlexProps) => {
  return (
    <Flex justify="center" w="full" {...rest}>
      <Flex maxW={MAX_WIDTH} w="full">
        {children}
      </Flex>
    </Flex>
  );
};
