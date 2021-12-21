import type { NextPage } from "next";

import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link
} from "@chakra-ui/react";

import Section from "../components/Section";
import Paragraph from "../components/Paragraph";

const Home: NextPage = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                mb={6}
                p={3}
                align="center"
            >
                Hi! I&apos;m a backend developer based in the UK.
            </Box>

            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Alfie Jay Phillips
                    </Heading>
                    <p>Young Entrepreneur ( Trader-Developer-Gamer )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/profile.png"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Alfie is a 16 year-old freelance developer based in the
                    South-West of England with a passion for building new
                    innovations. He aspires to become a full-time backend
                    developer and join into the craze of Software Development:
                    launching, managing, and designing products to solve
                    real-life problems with the art of code. When he is not
                    programming, he loves to spend time with his friends and try
                    new hobbies such as trading. Currently, he is working on a
                    product called{" "}
                    <NextLink href="/projects/oberen">
                        <Link>Oberen</Link>
                    </NextLink>
                </Paragraph>
            </Section>
        </Container>
    );
};

export default Home;
