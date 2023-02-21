/** @format */

import React from "react";
import DefaultNote from "./DefaultNote";
import PinIcon from "../ClickableIcons/PinIcon";
import ArchiveIcon from "../ClickableIcons/ArchiveIcon";
import DeleteIcon from "../ClickableIcons/DeleteIcon";
import {
  archiveMainNote,
  deleteMainNote,
  pinMainNote,
} from "../../shared/helpers/mainNoteLogic";

export default function MainNote({ header, text }) {
  return (
    <DefaultNote header={header}>
      <PinIcon header={header} text={text} clickHandler={pinMainNote} />
      <ArchiveIcon header={header} text={text} clickHandler={archiveMainNote} />
      <DeleteIcon header={header} text={text} clickHandler={deleteMainNote} />
    </DefaultNote>
  );
}
