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
  font-size: ${({ theme }) => theme.fontSize.s};
  position: relative;
`;

export const StyledList = styled.ul`
  color: ${({ theme }) => theme.colors.moreMint};

  > li {
    position: relative;
    margin-top: 1rem;
    top: 1rem;
    right: 2.5rem;

    &:hover {
      transition: all 0.2s;
      cursor: pointer;
      color: white;
    }
  }
`;
