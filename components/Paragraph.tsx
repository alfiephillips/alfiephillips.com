import styled from "@emotion/styled";

const Paragraph = styled.p<{ fontSize?: string; textAlign?: string }>`
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "justify")}
    word-wrap: normal;
    font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "16px")};
`;

export default Paragraph;
