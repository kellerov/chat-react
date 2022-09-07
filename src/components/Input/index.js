import React from "react";
import css from "./styles.module.css";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      className={css.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
