/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../shared/helpers/notificationLogic";
import { removePromtText, setPromtText } from "../../shared/helpers/promtps";
import unarchive from "../../shared/img/unarchive.png";

export default function UnArchiveIcon({ header, text, clickHandler }) {
  const dispatch = useDispatch();
  const notificationText = "Заметка возвращена из архива";

  return (
    <img
      onMouseMove={() => setPromtText("Вернуть из архива", dispatch)}
      onMouseLeave={() => removePromtText(dispatch)}
      onClick={() => {
        clickHandler(header, text, dispatch);
        showNotification(notificationText, dispatch);
      }}
      className="note-icons__item"
      src={unarchive}
      alt="here"
    />
  );
}
