import type { NextPage } from "next";
import NextLink from "next/link";
import Layout from "../../components/layouts/Article";
import Section from "../../components/Section";
import { WorkGridItem } from "../../components/GridItem";
import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Box,
    Button
} from "@chakra-ui/react";

const Paragraph = dynamic(() => import("../../components/Paragraph"));

import { ChevronRightIcon } from "@chakra-ui/icons";
import thumbOberen from "../../public/images/oberen-thumbnail.png";
import { getData } from "../../libs/getData";
import dynamic from "next/dynamic";

const Projects: NextPage = (props: any) => {
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

                <SimpleGrid columns={[1, 1, 1]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem
                            id="oberen"
                            title={props.title}
                            startDate={props.startDate}
                            endDate={props.endDate}
                            tags={props.tags}
                            thumbnail={thumbOberen}
                        >
                            {props.description}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Box align="center" my={4}>
                    <NextLink href="https://github.com/alfiephillips">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            the source code
                        </Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    );
};

export async function getStaticProps() {
    const data = await getData("projects", "oberen");

    return {
        props: data
    };
}

export default Projects;
