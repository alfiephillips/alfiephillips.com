import { Meta, Navbar } from "../index";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }: any) => {
    return (
        <Box as="main" pb={8}>
            <Meta
                title="Alfie Phillips"
                description="Hi! I'm Alfie - a 16 year old software engineer based in the UK. Welcome to my portfolio website."
                url="https://alfiephillips.com"
                keywords="personal website, mail@alfiephillips.com, portfolio, software engineer, programming"
            />
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    );
};

export default Main;
