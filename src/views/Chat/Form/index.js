import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import css from "./styles.module.css";

const Form = ({ addMessage }) => {
  const [value, setValue] = useState("");

  const onClick = () => {
    addMessage(value);
    setValue("");
  };

  return (
    <div className={css.form}>
      <Input value={value} onChange={(event) => setValue(event.target.value)} />
      <Button onClick={onClick} disabled={value.length < 1} />
    </div>
  );
};

export default Form;
