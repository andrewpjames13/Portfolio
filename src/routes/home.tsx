import { Box, Text, VStack, Code, Grid } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { Link } from "../components/link";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";

export const Home = () => (
  <AnimatedPageWrapper>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Box />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            to="/gamer"
            fontSize="2xl"
            rel="noopener noreferrer"
          >
            Gamer.xyz
          </Link>
        </VStack>
      </Grid>
    </Box>
  </AnimatedPageWrapper>
);
