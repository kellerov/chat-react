import React from "react";
import { Outlet } from "react-router-dom";
import css from "./styles.module.css";

const Layout = () => {
  return (
    <div className={css.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
