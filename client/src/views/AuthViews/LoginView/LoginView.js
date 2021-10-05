import React from "react";
import styled from "styled-components";
import BackgroundIcon from "assets/icons/AuthBackground.svg";
import Heading from "components/atoms/Heading/Heading";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";

const Wrapper = styled.div`
  background-image: url(${BackgroundIcon});
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
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

const StyledHeading = styled(Heading)`
  padding-top: 0.5rem;
  color: ${({ theme }) => theme.colors.semiWhite};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: "Chat";
    color: ${({ theme }) => theme.colors.moreMint};
  }
`;

const StyledInput = styled(Input)`
  position: relative;
  margin-top: 5rem;
  width: 35rem;
  background-color: ${({ theme }) => theme.colors.halfWhite};
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.moreMint};
  position: relative;
  top: 7rem;
`;

const LoginView = () => (
  <Wrapper>
    <FormWrapper>
      <StyledHeading>Fancy</StyledHeading>
      <StyledInput />
      <StyledInput />
      <StyledButton>Log in</StyledButton>
    </FormWrapper>
  </Wrapper>
);

export default LoginView;
