import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layouts/Main";
import Fonts from "../components/Fonts";
import theme from "../libs/theme";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
}
export default MyApp;
