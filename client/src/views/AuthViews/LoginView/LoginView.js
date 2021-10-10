import React, { useState } from "react";
import {
  Wrapper,
  CardWrapper,
  StyledHeading,
  StyledButton,
  StyledLink,
} from "./LoginView.styles";
import FormInput from "components/atoms/FormInput/FormInput";
import { routes } from "routes";

const initialState = {
  email: "",
  password: "",
};

const LoginView = () => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form autocomplete="off" onSubmit={handleSubmit}>
      <Wrapper>
        <CardWrapper>
          <StyledHeading>Fancy</StyledHeading>
          <FormInput
            handleChange={handleChange}
            placeholder="e-mail"
            name="email"
            type="email"
          />
          <FormInput
            handleChange={handleChange}
            placeholder="password"
            name="password"
            type="password"
          />
          <StyledButton type="submit">Log in</StyledButton>
          <StyledLink to={routes.forgotPassword}>Forgot password?</StyledLink>
          <StyledLink to={routes.register}>Need an account?</StyledLink>
        </CardWrapper>
      </Wrapper>
    </form>
  );
};

export default LoginView;
