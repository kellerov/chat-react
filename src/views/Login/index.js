import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../utils/localStorage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import css from "./styles.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setUser(value);
    navigate("/chat");
  };

  return (
    <div className={css.login}>
      <div className={css.name}>Вход</div>
      <form className={css.form} onSubmit={onSubmit}>
        <Input
          placeholder="Введите имя пользователя"
          type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <Button title="Войти" type="submit" />
      </form>
    </div>
  );
};

export default Login;
