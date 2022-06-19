import NextLink from "next/link";
import Image from "next/image";
import {
    Box,
    Text,
    LinkBox,
    LinkOverlay,
    SimpleGrid,
    border
} from "@chakra-ui/react";
import { Global } from "@emotion/react";

interface GridItemProps {
    children: React.ReactNode;
    id: string;
    title: string;
    startDate: string;
    endDate: string;
    tags: string[];
    thumbnail: StaticImageData;
}

export const GridItem = ({ children, href, title, thumbnail }: any) => {
    return (
        <Box w="100%" textAlign="center">
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay href={href} target="_blank">
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    );
};

export const WorkGridItem = ({
    children,
    id,
    title,
    startDate,
    endDate,
    tags,
    thumbnail
}: GridItemProps) => {
    return (
        <Box w="100%" textAlign="center">
            <NextLink href={`/projects/${id}`}>
                <LinkBox cursor="pointer">
                    <Image
                        src={thumbnail}
                        alt={title + "logo"}
                        className="grid-item-thumbnail"
                        placeholder="blur"
                    />
                    <LinkOverlay href={`/projects/${id}`}>
                        <Text mt={2} fontSize={32} textAlign="left">
                            {title}
                        </Text>
                    </LinkOverlay>
                    <SimpleGrid column={[1, 1, 1]} gap={2}>
                        <Text fontSize={16} textAlign="left" fontWeight={100}>
                            <span
                                style={{
                                    borderLeft: "1px solid white",
                                    paddingLeft: "4px",
                                    paddingRight: "4px"
                                }}
                            >
                                Created: {startDate}
                            </span>
                        </Text>
                        <Text fontSize={16} textAlign="left">
                            {children}
                        </Text>
                    </SimpleGrid>
                </LinkBox>
            </NextLink>
        </Box>
    );
};

export const GridItemStyle = () => {
    return (
        <Global
            styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
        />
    );
};
