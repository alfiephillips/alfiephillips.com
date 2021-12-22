import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { withRouter } from "next/router";
import useSound from "use-sound";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";

const ToggleTheme = ({ router }: any) => {
    const { toggleColorMode } = useColorMode();
    const [playSound]: any = useSound("/sounds/click-sound.mp3");
    const pathname = router.pathname;
    const key = useColorModeValue("light", "dark");
    const colorScheme = useColorModeValue("purple", "orange");
    const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

    useEffect(() => {
        if (!isMobile) {
            playSound();
        }
    }, [pathname]);

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            {!isMobile ? (
                <motion.div
                    style={{ display: "inline-block" }}
                    key={key}
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -1000, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                        playSound();
                    }}
                >
                    <IconButton
                        aria-label="Toggle theme"
                        colorScheme={colorScheme}
                        icon={icon}
                        onClick={toggleColorMode}
                    />
                </motion.div>
            ) : (
                <motion.div
                    style={{ display: "inline-block" }}
                    key={key}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                        playSound();
                    }}
                >
                    <IconButton
                        aria-label="Toggle theme"
                        colorScheme={colorScheme}
                        icon={icon}
                        onClick={toggleColorMode}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default withRouter(ToggleTheme);
