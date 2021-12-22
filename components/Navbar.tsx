import Logo from "./Logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ToggleTheme from "../components/Toggle-theme";

interface Props {
    path: string;
}

const LinkItem = ({ href, path, _target, children, ...props }: any) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? "#88CCCA" : undefined}
                color={active ? "black" : inactiveColor}
                _target={_target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    );
};

const Navbar = (props: Props) => {
    const path = props.path;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "whiteAlpha.200")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        /projects
                    </LinkItem>
                    <LinkItem href="/newsletter" path={path}>
                        /newsletter
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        /contact
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ToggleTheme />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>/</MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>/projects</MenuItem>
                                </NextLink>
                                <NextLink href="/newsletter" passHref>
                                    <MenuItem as={Link}>/newsletter</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>/contact</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
