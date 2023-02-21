/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../shared/helpers/notificationLogic";
import { removePromtText, setPromtText } from "../../shared/helpers/promtps";
import pin from "../../shared/img/pin.png";

export default function PinIcon({ header, text, clickHandler }) {
  const dispatch = useDispatch();
  const notificationText = "Заметка закреплена";

  return (
    <img
      onMouseMove={() => setPromtText("Закрепить заметку", dispatch)}
      onMouseLeave={() => removePromtText(dispatch)}
      onClick={() => {
        showNotification(notificationText, dispatch);
        clickHandler(header, text, dispatch);
      }}
      className="note-icons__item"
      src={pin}
      alt="here"
    />
  );
}
