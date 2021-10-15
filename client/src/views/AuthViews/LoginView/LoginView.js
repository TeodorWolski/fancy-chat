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
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  email: "",
  password: "",
};

const LoginView = () => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formValues;

    const URL = `http://localhost:5000/auth`;

    const {
      data: { token, userId },
    } = await axios.post(`${URL}/login`, { email, password });

    cookies.set("token", token);
    cookies.set("email", email);
    cookies.set("password", password);
    cookies.set("userId", userId);
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
