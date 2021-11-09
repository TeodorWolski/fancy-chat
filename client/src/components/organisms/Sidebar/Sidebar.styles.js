import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";

export const StyledHeading = styled(Heading)`
  padding-top: 1rem;
  color: ${({ theme }) => theme.colors.semiWhite};
  text-align: center;

  &::after {
    content: "Chat";
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;

export const Wrapper = styled.nav`
  position: fixed;
  height: 100vh;
  width: 25rem;
  margin: 0 12rem 0 0;
  padding: 0;
  left: 0;
  top: 0;
  display: flex;
`;

export const IconsWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 30%;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const ChatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledList = styled.ul`
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: 3.75rem;
`;

export const StyledInput = styled(Input)`
  position: relative;
  top: 2rem;
`;
