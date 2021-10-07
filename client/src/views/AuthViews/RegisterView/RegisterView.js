import React, { useState } from "react";
import {
  Wrapper,
  CardWrapper,
  StyledHeading,
  StyledButton,
  StyledLink,
} from "./RegisterView.styles";
import FormInput from "components/atoms/FormInput/FormInput";
import { routes } from "routes";

const initialState = {
  email: "",
  fullName: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const RegisterView = () => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <Wrapper>
        <CardWrapper>
          <StyledHeading>Fancy</StyledHeading>
          <FormInput
            handleChange={handleChange}
            name="email"
            type="email"
            placeholder="e-mail"
          />
          <FormInput
            handleChange={handleChange}
            name="fullName"
            type="text"
            placeholder="full name"
          />
          <FormInput
            handleChange={handleChange}
            name="phoneNumber"
            type="tel"
            placeholder="phone number"
          />
          <FormInput
            handleChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
          <FormInput
            handleChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
          />
          <StyledButton type="submit">Sign up</StyledButton>
          <StyledLink to={routes.login}>Already have an account?</StyledLink>
        </CardWrapper>
      </Wrapper>
    </form>
  );
};

export default RegisterView;
