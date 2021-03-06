import type { NextPage } from "next";

import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button,
    List,
    ListItem,
    Icon
} from "@chakra-ui/react";

import dynamic from "next/dynamic";

const Section = dynamic(() => import("../components/Section"));
const Paragraph = dynamic(() => import("../components/Paragraph"));
const Technology = dynamic(() => import("../components/Technology"));

import { BioSection, BioYear } from "../components/Bio";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin
} from "react-icons/io5";

const Home: NextPage = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                mb={6}
                mt={6}
                p={3}
                align="center"
            >
                backend developer based in the united kingdom.
            </Box>

            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        alfie phillips
                    </Heading>
                    <Paragraph fontSize="16">young entrepreneur</Paragraph>
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
                        alt="Profile picture"
                    />
                </Box>
            </Box>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    work
                </Heading>
                <Paragraph>
                    Alfie is a 16 year-old freelance developer from the
                    South-West of England with a passion for building new
                    innovations. He aspires to become a full-time backend
                    developer and join into the craze of Software Development:
                    launching, managing, and designing products to solve
                    real-life problems with the art of code. When he is not
                    programming, he loves to spend time with his friends and try
                    new hobbies such as trading. Currently, he is working on a
                    new product for real and virtual work called&nbsp;
                    <NextLink href="/projects/oberen">
                        <Link>Oberen</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/projects">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            my projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    timeline
                </Heading>
                <BioSection>
                    <BioYear>2005</BioYear>
                    Born in Cornwall, England. I grew up with an interest in
                    computers but never considered programming.
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Started programming in secondary school. I used technologies
                    such as python and html.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Became interested in the career of programming, using tools
                    such as <b>Codeacademy</b> and <b>FreeCodeCamp</b>.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>I became a freelance developer and
                    started to create my own company named <b>Oberen</b>.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    The year I begin college. The plan is to improve my
                    programming skills before attempting to get an
                    apprenticeship as a Software Engineer.
                </BioSection>
            </Section>

            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    skillset
                </Heading>
                <Paragraph>
                    These are some of my key programming languages which I use
                    on a day-to-day basis to suit my needs.
                </Paragraph>
                <Technology
                    name={
                        <Link href="https://www.typescriptlang.org/">
                            typescript
                        </Link>
                    }
                    type="an amazing js framework"
                    useCase="types for javascript: helps with documentation in your code."
                />
                <Technology
                    name={<Link href="https://www.python.org">python</Link>}
                    type="object oriented programming"
                    useCase="a simple language which can achieve any single purpose."
                />
                <Technology
                    name={<Link href="https://elixir-lang.org/">elixir</Link>}
                    type="distributed systems"
                    useCase="constructing real-time systems that can scale out across multiple nodes."
                />
                <Box align="center" my={4}>
                    <NextLink href="/newsletter">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            my newsletter
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.8}>
                <Heading as="h3" variant="section-title">
                    on the web
                </Heading>
                <List>
                    <ListItem>
                        <Link
                            href="https://www.github.com/alfiephillips"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                @alfiephillips
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://www.twitter.com/alfiejphillips"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoTwitter} />}
                            >
                                @alfiejphillips
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://www.linkedin.com/in/alfiephillips/"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                @alfiephillips
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href="https://www.instagram.com/alfieephillipss/"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoInstagram} />}
                            >
                                @alfieephillipss
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    );
};

export default Home;
