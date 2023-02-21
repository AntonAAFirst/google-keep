/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../shared/helpers/notificationLogic";
import { removePromtText, setPromtText } from "../../shared/helpers/promtps";
import archive from "../../shared/img/archive.png";

export default function ArchiveIcon({ header, text, clickHandler }) {
  const dispatch = useDispatch();
  const notificationText = "Заметка перемещена в архив";

  return (
    <img
      onMouseMove={() => setPromtText("Архивировать заметку", dispatch)}
      onMouseLeave={() => removePromtText(dispatch)}
      onClick={() => {
        clickHandler(header, text, dispatch);
        showNotification(notificationText, dispatch);
      }}
      className="note-icons__item"
      src={archive}
      alt="here"
    />
  );
}
