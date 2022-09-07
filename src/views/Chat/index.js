import React, { useState } from "react";
import Message from "./Message";
import Form from "./Form";
import {
  getUser,
  removeUser,
  setMessagesInChat,
  getMessageFromChat,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import css from "./styles.module.css";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(getMessageFromChat() || []);

  const addMessage = (text) => {
    const message = { name: getUser() || "аноним", date: new Date(), text };
    const newMessages = [...messages, message];
    setMessages(newMessages);
    setMessagesInChat(newMessages);
  };

  const onLogOut = () => {
    navigate("/login");
    removeUser();
  };

  return (
    <div className={css.container}>
      <div className={css.header}>
        <button className={css.btn} onClick={onLogOut}>
          Выйти
        </button>
      </div>
      <div className={css.chat}>
        {messages.length ? (
          messages.map((message, index) => (
            <Message
              key={index.toString()}
              name={message.name}
              text={message.text}
              date={message.date}
            />
          ))
        ) : (
          <h4>Пока нет сообщений</h4>
        )}
      </div>
      <Form addMessage={addMessage} />
    </div>
  );
};

export default Chat;
