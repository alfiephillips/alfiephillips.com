import dynamic from "next/dynamic";
import ErrorPage from "next/error";
import Layout from "../../components/layouts/Article";

import {
    Container,
    Heading,
    Text,
    SimpleGrid,
    Divider,
    Box,
    Button,
    useColorModeValue
} from "@chakra-ui/react";
import { NextPage } from "next";
import { getData, getAllSlugs } from "../../libs/getData";

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
                data
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

const Project: NextPage = ({ data, found }: any) => {
    if (!found) {
        return <ErrorPage statusCode={404} />;
    } else {
        const { title, description, startDate, tags, file } = data;
        return (
            <Layout title={title}>
                <Container mt={5} mb={5}>
                    <Heading as="h2" variant="page-title" mt={5}>
                        {title}
                    </Heading>
                    <Text
                        fontSize={16}
                        textAlign="left"
                        fontWeight={100}
                        mt={2.5}
                        mb={2.5}
                    >
                        <span
                            style={{
                                borderLeft: "1px solid white",
                                paddingLeft: "4px",
                                paddingRight: "4px"
                            }}
                        >
                            Created: {startDate}
                        </span>
                    </Text>
                    <Paragraph>{description}</Paragraph>
                </Container>
            </Layout>
        );
    }
};

export default Project;
