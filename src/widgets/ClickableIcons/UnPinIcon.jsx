/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../shared/helpers/notificationLogic";
import { removePromtText, setPromtText } from "../../shared/helpers/promtps";
import unpin from "../../shared/img/unpin.png";

export default function UnPinIcon({ header, text, clickHandler }) {
  const dispatch = useDispatch();
  const notificationText = "Заметка откреплена";

  return (
    <img
      onMouseMove={() => setPromtText("Открепить заметку", dispatch)}
      onMouseLeave={() => removePromtText(dispatch)}
      onClick={() => {
        clickHandler(header, text, dispatch);
        showNotification(notificationText, dispatch);
      }}
      className="note-icons__item"
      src={unpin}
      alt="here"
    />
  );
}
