import dynamic from "next/dynamic";
import ErrorPage from "next/error";
import Layout from "../../components/layouts/Article";
import markdownToHtml from "../../libs/markdownToHtml";

import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    Divider,
    Box,
    Button,
    useColorModeValue,
    TagRightIcon
} from "@chakra-ui/react";
import { NextPage } from "next";
import { getData, getAllSlugs } from "../../libs/getData";
import { Link } from "@chakra-ui/react";

const Paragraph = dynamic(() => import("../../components/Paragraph"));

export const getStaticProps = async ({ params }: any) => {
    const { slug } = params;

    const data = await getData("projects", slug);

    if (!data) {
        return {
            props: {
                found: false,
                data: null
            }
        };
    } else {
        return {
            props: {
                found: true,
                data,
                html: await markdownToHtml(data.file)
            }
        };
    }
};

export const getStaticPaths = async () => {
    const paths = await getAllSlugs("projects");
    return {
        paths,
        fallback: false
    };
};

const Project: NextPage = ({ found, data, html }: any) => {
    if (!found) {
        return <ErrorPage statusCode={404} />;
    } else {
        const { title, description, startDate, tags } = data;

        return (
            <Layout title={title}>
                <Container mt={5} mb={5}>
                    <Heading as="h2" variant="page-title" mt={5}>
                        {title}
                    </Heading>
                    <Text
                        fontSize={16}
                        textAlign="left"
                        fontWeight={400}
                        mt={2.5}
                        mb={2.5}
                    >
                        <span
                            style={{
                                paddingLeft: "4px",
                                paddingRight: "4px"
                            }}
                        >
                            Created: {startDate}
                        </span>
                    </Text>
                    <Paragraph>{description}</Paragraph>
                    <Divider my={6} />
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        tags
                    </Heading>
                    <SimpleGrid columns={[1, 1, 1]} gap={1}>
                        {tags
                            .map((tag: any, index: number) => {
                                console.log(tag);
                                return (
                                    <Paragraph key={index}>
                                        <Box
                                            as="span"
                                            display="inline-block"
                                            fontSize={14}
                                            fontWeight={500}
                                            color="gray.500"
                                            cursor="pointer"
                                        >
                                            <Link
                                                href={tag.link}
                                                target="_blank"
                                            >
                                                #{tag.name}
                                            </Link>
                                        </Box>
                                    </Paragraph>
                                );
                            })
                            .reverse()}
                    </SimpleGrid>
                </Container>
            </Layout>
        );
    }
};

export default Project;
