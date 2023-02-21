/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authLogic } from "../../shared/helpers/auth";
import { newAuthName, newAuthPassword } from "../../shared/store/authReducer";
import { newFirstItemActive } from "../../shared/store/controlPanelReducer";
import "../../shared/styles/auth.css";
import AuthInput from "./AuthInput";

export default function Login({ active, setActive }) {
  const [registerActive, setRegisterActive] = useState(false);
  const dispatch = useDispatch();

  const name = useSelector((state) => state.auth.authName);
  const password = useSelector((state) => state.auth.authPassword);

  return (
    <div className={active ? "auth-container auth-active" : "auth-container"}>
      <div className="auth-form">
        <div className="auth-inputblock">
          <AuthInput
            reduxValue={name}
            dispatchFunction={newAuthName}
            placeholder="Ваше уникальное имя"
          />

          <AuthInput
            reduxValue={password}
            dispatchFunction={newAuthPassword}
            placeholder="Ваш пароль"
            inputType="password"
          />
        </div>
        <div className="auth-buttonblock">
          <Link
            to="/notes"
            onClick={() => {
              authLogic(registerActive, name, password, setActive);
              dispatch(newFirstItemActive(true));
            }}
            className="auth-form__button"
          >
            {registerActive ? "Зарегестрироваться" : "Продолжить"}
          </Link>
        </div>
        <div
          onClick={() => setRegisterActive((prev) => !prev)}
          className="auth-text"
        >
          Нажмите для {registerActive ? "авторизации" : "регистрации"}
        </div>
      </div>
    </div>
  );
}
