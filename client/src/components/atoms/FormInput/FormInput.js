import React from "react";
import "./FormInput.styles.css";

const FormInput = ({ name }) => (
  <div className="container">
    <input className="info-input" />
    <span className="label">{name}</span>
    <span className="label-sm">{name}</span>
  </div>
);

export default FormInput;
