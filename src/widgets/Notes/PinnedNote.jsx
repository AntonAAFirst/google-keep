/** @format */

import React from "react";
import DefaultNote from "./DefaultNote";
import ArchiveIcon from "../ClickableIcons/ArchiveIcon";
import DeleteIcon from "../ClickableIcons/DeleteIcon";
import UnPinIcon from "../ClickableIcons/UnPinIcon";
import {
  archivePinnedNote,
  deletePinnedNote,
  unpinPinnedNote,
} from "../../shared/helpers/pinnedNoteLogic";

export default function PinnedNote({ header, text }) {
  return (
    <DefaultNote header={header}>
      <UnPinIcon header={header} text={text} clickHandler={unpinPinnedNote} />

      <ArchiveIcon
        header={header}
        text={text}
        clickHandler={archivePinnedNote}
      />
      <DeleteIcon header={header} text={text} clickHandler={deletePinnedNote} />
    </DefaultNote>
  );
}
