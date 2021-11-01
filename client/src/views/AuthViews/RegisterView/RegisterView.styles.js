import styled, { css } from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";
import { Link } from "react-router-dom";
import BackgroundIcon from "assets/icons/AuthBackground.svg";
import GoogleIcon from "assets/icons/GoogleIcon.svg";

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
  position: relative;
  top: 0.5rem;
  color: ${({ theme }) => theme.colors.semiWhite};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: "Chat";
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;

export const StyledLink = styled(Link)`
  border: 1px solid ${({ theme }) => theme.colors.moreMint};
  border-radius: 50px;
  padding: 2rem;
  margin-bottom: 3rem;
  position: relative;
  margin-top: 1%;
  text-decoration: none;
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.s};
  top: 9%;
  transition: all 0.35s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.moreMint};
  }
  /*
  ${({ google }) =>
    google &&
    css`
      &::after {
        content: url(${GoogleIcon});
        position: absolute;
      }
    `} */
`;
