/** @format */

import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  newFirstItemActive,
  newSecondItemActive,
  newThirdItemActive,
} from "../../shared/store/controlPanelReducer";
import { newfirstItem } from "../../shared/store/noteReducer";

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
