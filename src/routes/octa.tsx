import { Box, Center, Grid, GridItem, Image } from "@chakra-ui/react";
import { AnimatedPageWrapper } from "../components/animated-page-wrapper";
import { motion } from "framer-motion";
import { ProjectOverview } from "../components/project-overview";
import { projects } from "../App";
import { Button } from "../components/button";
import { Container } from "../components/container";

const MotionBox = motion(Box);

export const Octa = () => (
  <AnimatedPageWrapper>
    <MotionBox w="100%">
      <ProjectOverview
        title="OCTA"
        skills={projects.find((p) => p.to === "/octa")?.skills ?? []}
        description='At Octa, I take immense pride in my work on packaging. I successfully packaged and displayed eight individual components and two kits. To begin, I devised optimal packaging solutions and created dielines in Illustrator. Through hands-on prototyping, I experimented with various materials, such as different papers, plastics, and magnets, sourcing packaging companies in China for collaboration. Additionally, I collaborated with the engineering team to design plastic inserts for securing the products. All the while I crafted the package design and developed logos for each product and kit. Throughout the process, I strategized effective communication of product functionality, coordinating with photographers to capture real-world usage scenarios. Furthermore, I personally conducted the product photography featured on the package fronts. The Dieline called the packaging "One of the three stand out packaging designs at the Consumer Electronic Show Case (CES)"'
      />
      <Center
        bgImage="/images/octa/octa-bg.webp"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Image src="/images/octa/octa-hero-float.webp" />
      </Center>
      <Container py={12} px={[6]}>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
          <GridItem
            as={Image}
            src="/images/octa/spider.webp"
            rowSpan={1}
            colSpan={1}
            transform="rotate(180deg)"
          />
          <GridItem
            as={Image}
            src="/images/octa/spider-back.webp"
            rowSpan={2}
            colSpan={1}
          />
          <GridItem
            as={Image}
            src="/images/octa/spider-open.webp"
            rowSpan={1}
            colSpan={1}
          />
        </Grid>
      </Container>
      <Container py={12} px={[6]}>
        <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
          <GridItem
            as={Image}
            src="/images/octa/lynx-back.webp"
            rowSpan={2}
            colSpan={1}
          />
          <GridItem
            as={Image}
            src="/images/octa/lynx.webp"
            rowSpan={1}
            colSpan={1}
            transform="rotate(180deg)"
          />
          <GridItem
            as={Image}
            src="/images/octa/lynx-open.webp"
            rowSpan={1}
            colSpan={1}
          />
        </Grid>
      </Container>
      <Center py={12}>
        <Button
          onClick={() =>
            window.open(
              "https://thedieline.com/blog/2015/1/7/ces-2015-packaging-spotlight-headphones-and-cases"
            )
          }
        >
          CHECK OUT THE DIELINE ARTICLE
        </Button>
      </Center>
    </MotionBox>
  </AnimatedPageWrapper>
);
