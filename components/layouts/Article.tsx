import { motion } from "framer-motion";
import Head from "next/head";
import { Meta } from "../";
import { GridItemStyle } from "../GridItem";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
};

const Layout = ({ children, title }: any) => {
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
            style={{ position: "relative" }}
        >
            <>
                <GridItemStyle />
                {title && (
                    <Head>
                        <Meta />
                    </Head>
                )}

                {children}
            </>
        </motion.article>
    );
};

export default Layout;
