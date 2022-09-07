import React from "react";
import css from "./styles.module.css";

const Button = ({
  title = "Отправить",
  type = "button",
  disabled,
  onClick,
}) => {
  return (
    <button
      className={css.button}
      type={type}
      disables={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
