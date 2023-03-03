/** @format */

import "../../shared/styles/header.css";
import note from "../../shared/img/note.png";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { newInputValue } from "../../shared/store/inputSearchReducer";

export default function Header({ setActive }) {
  const inputValue = useSelector((state) => state.mainInput.inputValue);

  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header__item header__keep">
        <img className="header-img" src={note} alt="sd" />
        <div className="header__keep__text">Keep</div>
      </div>
      <div className="header__item">
        <Link to="search">
          <input
            onChange={(e) => dispatch(newInputValue(e.target.value))}
            value={inputValue}
            type="text"
            className="header-input"
            placeholder="Поиск"
          />
        </Link>
      </div>
      <div onClick={() => setActive(true)} className="header__item logout">
        Выйти из аккаунта
      </div>
    </div>
  );
}
