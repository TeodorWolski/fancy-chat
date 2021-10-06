import React from "react";
import {
  Wrapper,
  CardWrapper,
  StyledHeading,
  StyledParagraph,
  StyledButton,
  StyledLink,
} from "./LoginView.styles";
import FormInput from "components/atoms/FormInput/FormInput";
import { routes } from "routes";

const LoginView = () => (
  <Wrapper>
    <CardWrapper>
      <StyledHeading>Fancy</StyledHeading>
      <StyledParagraph>
        Fancy people, fancy topics, fancy lifestyle.
      </StyledParagraph>
      <FormInput name="e-mail" type="email" />
      <FormInput name="password" type="password" />
      <StyledButton>Log in</StyledButton>
      <StyledLink to={routes.forgotPassword}>Forgot password?</StyledLink>
      <StyledLink to={routes.register}>Need an account?</StyledLink>
    </CardWrapper>
  </Wrapper>
);

export default LoginView;
