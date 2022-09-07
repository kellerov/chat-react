import React from "react";
import dayjs from "dayjs";
import css from "./styles.module.css";

const Message = ({ name, date, text }) => {
  return (
    <div className={css.message}>
      <div className={css.header}>
        <span className={css.name}>{name}</span>
        <span className={css.date}>
          {dayjs(date).format("DD.MM.YYYY HH:mm")}
        </span>
      </div>
      <div className={css.text}>{text}</div>
    </div>
  );
};

export default Message;
