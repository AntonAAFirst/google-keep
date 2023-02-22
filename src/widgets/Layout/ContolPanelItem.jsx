/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  newFirstItemActive,
  newSecondItemActive,
  newThirdItemActive,
} from "../../shared/store/controlPanelReducer";

export default function ControlPanelItem({
  icon,
  text,
  link,
  active,
  setCorrectActive,
}) {
  const dispatch = useDispatch();

  return (
    <Link
      onClick={() => {
        dispatch(newFirstItemActive(false));
        dispatch(newSecondItemActive(false));
        dispatch(newThirdItemActive(false));
        dispatch(setCorrectActive(true));
      }}
      to={link}
      className={
        active
          ? "control-panel__item control-panel__item-active"
          : "control-panel__item"
      }
    >
      <img src={icon} alt="2" />
      <div className="control-panel__item__text">{text}</div>
    </Link>
  );
}
