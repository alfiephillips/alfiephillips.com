import type { NextPage } from "next";

import Layout from "../components/layouts/Article";
import {
    Container,
    Heading,
    Text,
    Button,
    Divider,
    Box
} from "@chakra-ui/react";
import NextLink from "next/link";

const Contact: NextPage = () => {
    return (
        <Layout title="Contact">
            <Container mt={10}>
                <Heading as="h1">The Contact page is in development!</Heading>
                <Text mt={5}>
                    I&apos;m currently working on this page. Please check again
                    at a later time!
                </Text>
                <Divider my={5} />

                <Box my={5} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Return home</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    );
};

export default Contact;
