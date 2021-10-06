import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import { Link } from "react-router-dom";
import BackgroundIcon from "assets/icons/AuthBackground.svg";
import Paragraph from "components/atoms/Paragraph/Paragraph";

export const Wrapper = styled.div`
  background-image: url(${BackgroundIcon});
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  width: 50rem;
  height: 50rem;
  border-radius: 1.5rem;
  background-color: #2c2c2c;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeading = styled(Heading)`
  padding-top: 0.5rem;
  color: ${({ theme }) => theme.colors.semiWhite};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: "Chat";
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.moreMint};
  position: relative;
  top: 5rem;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  position: relative;
  margin-top: 1%;
  text-decoration: none;
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.xs};
  top: 14%;

  &:hover {
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin: -2%;
  padding: 0;
`;
