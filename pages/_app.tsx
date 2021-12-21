import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/Main";
import Fonts from "../components/Fonts";
import theme from "../libs/theme";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider>
    );
}
export default MyApp;
