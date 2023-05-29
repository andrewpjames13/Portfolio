import { ButtonProps, Button as CButton } from "@chakra-ui/react";
export const Button = (props: ButtonProps) => {
  return (
    <CButton
      bg="black"
      color="white"
      size="lg"
      _hover={{ opacity: 0.8 }}
      textTransform={"uppercase"}
      {...props}
    />
  );
};
