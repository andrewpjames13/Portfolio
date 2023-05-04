import { Link as CLink, LinkProps } from "@chakra-ui/react";
import { NavLink, NavLinkProps } from "react-router-dom";

export const Link = (props: LinkProps & NavLinkProps) => (
  <CLink as={NavLink} {...props} />
);
