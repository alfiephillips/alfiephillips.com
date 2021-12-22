import { Heading } from "@chakra-ui/react";
import Paragraph from "./Paragraph";
import styled from "@emotion/styled";
import { ReactElement } from "react";

interface TechnologyProps {
    name: ReactElement;
    type: string;
    useCase: string;
}

const Technology = ({ name, type, useCase }: TechnologyProps) => {
    return (
        <TechnologyContainer>
            <Column forceWidth={90}>
                <Heading as="h4" variant="technology-title">
                    name
                </Heading>
                <Paragraph fontSize="12" textAlign="left">
                    {name}
                </Paragraph>
            </Column>
            <Column forceWidth={125}>
                <Heading as="h4" variant="technology-title">
                    type
                </Heading>
                <Paragraph fontSize="12" textAlign="left">
                    {type}
                </Paragraph>
            </Column>
            <Column noBorder>
                <Heading as="h4" variant="technology-title">
                    used for
                </Heading>
                <Paragraph fontSize="12" textAlign="left">
                    {useCase}
                </Paragraph>
            </Column>
        </TechnologyContainer>
    );
};

const TechnologyContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 125px;
    border: 1px solid #101010;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 1rem;
    @media (max-width: 850px) {
        flex-direction: column;
        height: auto;
    }
`;

const Column = styled.div<{ forceWidth?: number; noBorder?: boolean }>`
    display: block;
    height: 100%;
    width: ${({ forceWidth }) =>
        forceWidth ? forceWidth + "px" : "fit-content"};
    min-width: ${({ forceWidth }) =>
        forceWidth ? forceWidth + "px" : undefined};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid
        ${({ noBorder }) => (noBorder ? "transparent" : "#101010")};
    padding: 1rem;
    box-sizing: border-box;
    flex-shrink: ${({ noBorder }) => (noBorder ? undefined : 0)};
    @media (max-width: 850px) {
        height: 50px;
        width: 100%;
        border-bottom: 1px solid
            ${({ noBorder }) => (noBorder ? "transparent" : "#101010")};
        padding: 1rem;
        flex-shrink: 0;
        box-sizing: content-box;
    }
    h5 {
        font-family: "apple-system";
        margin: 0;
        color: #fff;
    }
    p {
        margin: 0;
        white-space: normal;
    }
`;

export default Technology;
