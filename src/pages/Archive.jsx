/** @format */

import "../shared/styles/archive.css";
import React from "react";
import { useSelector } from "react-redux";
import ArchivedNote from "../widgets/Notes/ArchivedNote";
import VisibleHeader from "../widgets/UI/VisibleHeader";

export default function Archive() {
  const archivedNotes = useSelector((state) => state.note.archived);

  return (
    <div className="archive-container">
      <VisibleHeader active={archivedNotes} text="Архвированные" />

      <div className="notes">
        {archivedNotes
          ? archivedNotes.map((item) => (
              <ArchivedNote header={item.name} text={item.paragraphs} />
            ))
          : ""}
      </div>
    </div>
  );
}
