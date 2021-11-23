import styled from "styled-components";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Heading from "components/atoms/Heading/Heading";
import { Link } from "react-router-dom";

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
  text-transform: capitalize;
  list-style-type: none;

  > li {
    position: relative;
    margin-top: 1rem;
    top: 1rem;
    right: 3.5rem;

    &::before {
      content: "# ";
      position: relative;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: white;
    }
  }
`;

export const RoomLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.moreMint};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
