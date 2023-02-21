import React from "react";
import { useDispatch } from "react-redux";
import deleteIcon from "../../shared/img/delete.png";
import restoreIcon from "../../shared/img/restore.png";
import { showNotification } from "../../shared/helpers/notificationLogic";
import { removePromtText, setPromtText } from "../../shared/helpers/promtps";
import {
  permanentlyRemoveTrashNote,
  restoreTrashNote,
} from "../../shared/helpers/trashedNoteLogic";

export default function TrashNoteIcons({ header, text }) {
  const dispatch = useDispatch();

  const notificationDeleteText = "Заметка удалена навсегда";
  const notificationRestoreText = "Заметка восстановлена";

  return (
    <div className="note-icons">
      <div className="icons-container">
        <img
          onMouseMove={() => setPromtText("Удалить навсегда", dispatch)}
          onMouseLeave={() => removePromtText(dispatch)}
          onClick={() => {
            showNotification(notificationDeleteText, dispatch);
            permanentlyRemoveTrashNote(header, dispatch);
          }}
          className="note-icons__item"
          src={deleteIcon}
          alt="here"
        />
        <img
          onMouseMove={() => setPromtText("Восстановить", dispatch)}
          onMouseLeave={() => removePromtText(dispatch)}
          onClick={() => {
            showNotification(notificationRestoreText, dispatch);
            restoreTrashNote(header, text, dispatch);
          }}
          className="note-icons__item"
          src={restoreIcon}
          alt="here"
        />
      </div>
    </div>
  );
}
