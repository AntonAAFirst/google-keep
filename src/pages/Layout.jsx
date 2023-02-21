/** @format */

import React, { useState } from "react";
import "../shared/styles/layout.css";
import { Outlet } from "react-router-dom";
import Header from "../widgets/Layout/Header";
import ControlPanel from "../widgets/Layout/ControlPanel";
import Login from "../widgets/Auth/Login";
import IconPrompt from "../widgets/UI/IconPrompt";
import Notification from "../widgets/UI/Notification";

export default function Layout() {
  const [authActive, setAuthActive] = useState(true);

  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <ControlPanel />
        <Outlet />
      </div>
      <Login active={authActive} setActive={setAuthActive} />
      <IconPrompt />
      <Notification />
    </div>
  );
}
