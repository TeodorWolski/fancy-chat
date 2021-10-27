import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 5%;
  left: 10%;
`;

export const StyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: white;
`;

export const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const StyledList = styled.ul`
  color: ${({ theme }) => theme.colors.moreMint};
`;
