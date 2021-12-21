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
            <Heading as="h1">(404) Page Not Found</Heading>
            <Text mt={5}>
                The page you&apos;re looking for was not found or hasn't been
                created yet. Please check again later...
            </Text>
            <Divider my={5} />

            <Box my={5} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return home</Button>
                </NextLink>
            </Box>
        </Container>
    );
};

export default NotFound;
