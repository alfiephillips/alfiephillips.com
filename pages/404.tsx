import NextLink from "next/link";
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container mt={10}>
            <Heading as="h1">(404) page not found</Heading>
            <Text mt={5}>
                The page you&apos;re looking for was not found or hasn&apos;t
                been created yet. Please check again later...
            </Text>
            <Divider my={5} />

            <Box my={5} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">return home</Button>
                </NextLink>
            </Box>
        </Container>
    );
};

export default NotFound;
