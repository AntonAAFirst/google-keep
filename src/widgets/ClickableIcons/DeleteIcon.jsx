/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../shared/helpers/notificationLogic";
import { removePromtText, setPromtText } from "../../shared/helpers/promtps";
import buttonDelete from "../../shared/img/cancel.png";

export default function DeleteIcon({ header, text, clickHandler }) {
  const dispatch = useDispatch();
  const notificationText = "Заметка перемещена в корзину";

  return (
    <img
      onMouseMove={() => setPromtText("Удалить заметку", dispatch)}
      onMouseLeave={() => removePromtText(dispatch)}
      onClick={() => {
        showNotification(notificationText, dispatch);
        clickHandler(header, text, dispatch);
      }}
      className="note-icons__item"
      src={buttonDelete}
      alt="here"
    />
  );
}
