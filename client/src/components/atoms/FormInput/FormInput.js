import React from "react";
import "./FormInput.styles.css";

const FormInput = ({ name, handleChange, type, placeholder }) => (
  <div className="container">
    <input
      type={type}
      onChange={handleChange}
      className="info-input"
      name={name}
      required
    />
    <span className="label">{placeholder}</span>
    <span className="label-sm">{placeholder}</span>
  </div>
);

export default FormInput;
