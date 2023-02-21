/** @format */

import React from "react";
import DefaultNote from "./DefaultNote";
import DeleteIcon from "../ClickableIcons/DeleteIcon";
import PinIcon from "../ClickableIcons/PinIcon";
import UnArchiveIcon from "../ClickableIcons/UnArchiveIcon";
import {
  deleteArchiveNote,
  pinArchiveNote,
  unArchiveArchiveNote,
} from "../../shared/helpers/archivedNoteLogic";

export default function ArchivedNote({ header, text }) {
  return (
    <DefaultNote header={header}>
      <PinIcon header={header} text={text} clickHandler={pinArchiveNote} />

      <UnArchiveIcon
        header={header}
        text={text}
        clickHandler={unArchiveArchiveNote}
      />

      <DeleteIcon
        header={header}
        text={text}
        clickHandler={deleteArchiveNote}
      />
    </DefaultNote>
  );
}
