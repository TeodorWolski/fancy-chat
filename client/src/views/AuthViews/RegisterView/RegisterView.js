import React from "react";
import {
  Wrapper,
  CardWrapper,
  StyledHeading,
  StyledButton,
  StyledLink,
} from "./RegisterView.styles";
import FormInput from "components/atoms/FormInput/FormInput";
import { routes } from "routes";

const RegisterView = () => (
  <Wrapper>
    <CardWrapper>
      <StyledHeading>Fancy</StyledHeading>
      <FormInput name="e-mail" type="email" />
      <FormInput name="full name" type="text" />
      <FormInput name="phone number" type="phone" />
      <FormInput name="password" type="password" />
      <FormInput name="confirm password" type="password" />
      <StyledButton>Log in</StyledButton>
      <StyledLink to={routes.login}>Already have an account?</StyledLink>
    </CardWrapper>
  </Wrapper>
);

export default RegisterView;
