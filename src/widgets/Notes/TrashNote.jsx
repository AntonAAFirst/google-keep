/** @format */

import React from "react";
import DefaultPartTrashNote from "../NotePage/DefaultPartTrashNote";
import TrashNoteIcons from "../NotePage/TrashNoteIcons";

export default function TrashNote({ header, text }) {
  return (
    <div className="note">
      <DefaultPartTrashNote header={header} />
      <TrashNoteIcons header={header} text={text} />
    </div>
  );
}
