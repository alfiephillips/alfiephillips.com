import type { NextPage } from "next";
import { Container, Box, Heading } from "@chakra-ui/react";

import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const [time, setTime] = useState("00:00:00 PM");

    function updateTime() {
        let current = new Date().toLocaleString("en-US", {
            timeZone: "Europe/London"
        });
        setTime(current.toUpperCase().slice(-11, -1) + "M");
        setTimeout(updateTime, 1000);
    }

    useEffect(() => {
        updateTime();
    });

    return (
        <Container>
            <Box borderRadius="lg" bg="red" mb={6} p={3} align="center">
                Hi! I&apos;m a full-stack developer based in the UK!
            </Box>

            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Alfie Jay Phillips
                    </Heading>
                    <p>Young Entrepreneur ( Trader / Developer / Gamer )</p>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;
