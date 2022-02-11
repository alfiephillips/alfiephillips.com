import type { NextPage } from "next";
import NextLink from "next/link";
import Layout from "../components/layouts/Article";
import Section from "../components/Section";
import { WorkGridItem } from "../components/GridItem";
import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Box,
    Button
} from "@chakra-ui/react";

const Paragraph = dynamic(() => import("../components/Paragraph"));

import { ChevronRightIcon } from "@chakra-ui/icons";
import thumbOberen from "../public/images/oberen-thumbnail.png";
import dynamic from "next/dynamic";

const Projects: NextPage = () => {
    return (
        <Layout title="Projects">
            <Container mt={5} mb={5}>
                <Heading as="h2" variant="page-title" mt={5}>
                    projects
                </Heading>
                <Paragraph>
                    These are some of my projects that I am currently working
                    on. (This feature is still in development)
                </Paragraph>

                <Section delay={0.2}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        solo productions
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="oberen"
                            title="Oberen"
                            thumbnail={thumbOberen}
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    {/* <Section delay={0.2}>
                        <WorkGridItem
                            id="oberen"
                            title="oberen"
                            thumbnail={thumbOberen}
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="oberen"
                            title="oberen"
                            thumbnail={thumbOberen}
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem
                            id="oberen"
                            title="oberen"
                            thumbnail={thumbOberen}
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem
                            id="oberen"
                            title="oberen"
                            thumbnail={thumbOberen}
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <WorkGridItem
                            id="oberen"
                            title="oberen"
                            thumbnail={thumbOberen}
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section> */}
                </SimpleGrid>
                {/* <Section delay={0.7}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        collaborations
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.8}>
                        <WorkGridItem
                            id="oberen"
                            thumbnail={thumbOberen}
                            title="oberen"
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.9}>
                        <WorkGridItem
                            id="oberen"
                            thumbnail={thumbOberen}
                            title="oberen"
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={1}>
                    <Divider my={6} />

                    <Heading as="h3" fontSize={20} mb={4}>
                        favourites
                    </Heading>
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={1.1}>
                        <WorkGridItem
                            id="oberen"
                            thumbnail={thumbOberen}
                            title="oberen"
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={1.2}>
                        <WorkGridItem
                            id="oberen"
                            thumbnail={thumbOberen}
                            title="oberen"
                        >
                            this is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                </SimpleGrid> */}
                <Box align="center" my={4}>
                    <NextLink href="https://github.com">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            my github
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    );
};

export default Projects;
