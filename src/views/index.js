import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "./Login";
import Chat from "./Chat";
import NoMatch from "../components/NoMatch";

const Views = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} exact />
      <Route path="chat" element={<Chat />} exact />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default Views;
