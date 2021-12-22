import type { NextPage } from "next";

import Layout from "../components/layouts/Article";
import {
    Container,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormHelperText,
    useColorModeValue,
    Box,
    Button,
    Text
} from "@chakra-ui/react";

import { useState } from "react";
import { withRouter } from "next/router";

import validator from "email-validator";

import Paragraph from "../components/Paragraph";

import { EmailIcon } from "@chakra-ui/icons";

const Contact: NextPage = ({ router }: any) => {
    const [emailEntered, setEmailEntered] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [subjectValue, setSubjectValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (event: any) => {
        event.preventDefault();
        const email = event.target.value;

        if (validator.validate(email)) {
            setEmailEntered(true);
            setEmailValue(email);
        } else {
            setEmailEntered(false);
            setEmailValue(email);
        }
    };

    const handleSubjectChange = (event: any) => {
        event.preventDefault();
        const subject: string = event.target.value;
        const strippedSubject = subject.replace(" ", "");

        if (strippedSubject.length < 500 && strippedSubject.length > 25) {
            setSubmit(true);
            setSubjectValue(subject);
        } else {
            setSubmit(false);
            setSubjectValue(subject);
        }
    };

    return (
        <Layout title="Contact">
            <Container mt={5} mb={5}>
                <Heading as="h2" variant="page-title" mt={5}>
                    contact me
                </Heading>
                <Paragraph>
                    Email me using the form below about any enquiries you may
                    have. Alternatively you can contact me by twitter. (This
                    feature is still in development)
                </Paragraph>
                <form>
                    <FormControl mt={5}>
                        <FormLabel htmlFor="email">email address</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            variant="filled"
                            bg={useColorModeValue(
                                "whiteAlpha.500",
                                "whiteAlpha.200"
                            )}
                            placeholder="your email"
                            value={emailValue}
                            onChange={handleEmailChange}
                        />
                        <FormHelperText>
                            <Text color={emailEntered ? "green" : "red"}>
                                {emailEntered ? "valid" : "invalid"}
                            </Text>
                            email must be validated and real.
                        </FormHelperText>
                        <FormLabel htmlFor="subject" mt={5}>
                            subject
                        </FormLabel>
                        <Textarea
                            isDisabled={!emailEntered}
                            id="subject"
                            type="text"
                            variant="filled"
                            bg={useColorModeValue(
                                "whiteAlpha.500",
                                "whiteAlpha.200"
                            )}
                            placeholder="your message"
                            value={subjectValue}
                            onChange={handleSubjectChange}
                        ></Textarea>
                        <FormHelperText>
                            <Text color={submit ? "green" : "red"}>
                                {submit ? "valid" : "invalid"}
                            </Text>
                            subject must be above 25 characters and below 500
                            characters.
                        </FormHelperText>
                        <Box my={5} align="center">
                            <Button
                                type="submit"
                                colorScheme="teal"
                                disabled={!submit}
                            >
                                {!loading ? "submit" : "loading..."}
                            </Button>
                        </Box>
                        {errorMessage && (
                            <FormHelperText>
                                <Text color="red">{errorMessage}</Text>
                            </FormHelperText>
                        )}
                    </FormControl>
                </form>
            </Container>
        </Layout>
    );
};

export default withRouter(Contact);
