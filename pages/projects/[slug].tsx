import { Container, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import ErrorPage from "next/error";
import { getData, getAllSlugs } from "../../libs/getData";

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

const Project: NextPage = ({ project, found }: any) => {
    if (!found) {
        return <ErrorPage statusCode={404} />;
    } else {
        const { title, description, startDate, tags, file } = project;
        return (
            <Container mt={5} mb={5}>
                <h1>
                    <b>This page is in development</b>
                </h1>
                Page for the project: {title}
            </Container>
        );
    }
};

export default Project;
