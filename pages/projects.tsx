import type { NextPage } from "next";

import Layout from "../components/layouts/Article";
import Section from "../components/Section";
import { WorkGridItem } from "../components/GridItem";
import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";

import thumbOberen from "../public/images/oberen-thumbnail.png";

const Projects: NextPage = () => {
    return (
        <Layout title="Projects">
            <Container mt={5} mb={5}>
                <Heading as="h2" variant="page-title" mt={5}>
                    Projects
                </Heading>
                <Paragraph>
                    These are some of my projects that I am currently working
                    on. (This feature is still in development)
                </Paragraph>

                <Divider my={6} />

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="oberen"
                            title="Oberen"
                            thumbnail={thumbOberen}
                        >
                            This is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <WorkGridItem
                            id="oberen"
                            title="Oberen"
                            thumbnail={thumbOberen}
                        >
                            This is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="oberen"
                            title="Oberen"
                            thumbnail={thumbOberen}
                        >
                            This is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem
                            id="oberen"
                            title="Oberen"
                            thumbnail={thumbOberen}
                        >
                            This is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem
                            id="oberen"
                            title="Oberen"
                            thumbnail={thumbOberen}
                        >
                            This is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <WorkGridItem
                            id="oberen"
                            title="Oberen"
                            thumbnail={thumbOberen}
                        >
                            This is sample information because I haven&apos;t
                            completed this yet!
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={1}>
                    <Divider my={6} />
                    <WorkGridItem
                        id="oberen"
                        thumbnail={thumbOberen}
                        title="Oberen"
                    >
                        This is sample information because I haven&apos;t
                        completed this yet!
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem
                        id="oberen"
                        thumbnail={thumbOberen}
                        title="oberen"
                    >
                        This is sample information because I haven&apos;t
                        completed this yet!
                    </WorkGridItem>
                </Section>
            </Container>
        </Layout>
    );
};

export default Projects;
