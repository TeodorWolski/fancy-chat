import React, { useState } from "react";
import {
  Wrapper,
  CardWrapper,
  StyledHeading,
  StyledButton,
  StyledLink,
} from "./RegisterView.styles";
import { routes } from "routes";

const RegisterView = () => {
  return (
    <Wrapper>
      <CardWrapper>
        <StyledHeading>Fancy</StyledHeading>
        <StyledLink to={routes.registerWithEmail}>
          Register with Email
        </StyledLink>
        <StyledLink google>Register with Google</StyledLink>
        <StyledLink to={routes.login}>Already have an account?</StyledLink>
      </CardWrapper>
    </Wrapper>
  );
};

export default RegisterView;
