/** @format */

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultFirebaseRequest } from "../shared/http";
import {
  newArchived,
  newNotes,
  newPinned,
  newTrashed,
} from "../shared/store/noteReducer";
import "../shared/styles/note-page.css";
import "../shared/styles/doubleinput.css";
import DoubleInput from "../widgets/NotePage/DoubleInput";
import "../shared/styles/notes.css";
import MainNote from "../widgets/Notes/MainNote";
import PinnedNote from "../widgets/Notes/PinnedNote";
import VisibleHeader from "../widgets/UI/VisibleHeader";
import { Reorder } from "framer-motion";

export default function Notes() {
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.note.notes);
  const pinnedNotes = useSelector((state) => state.note.pinned);

  async function getAllNotes() {
    const id = Cookies.get("currentId");

    await defaultFirebaseRequest.get(`/${id}.json`).then(({ data }) => {
      dispatch(newNotes(data.notes));
      dispatch(newPinned(data.pinned));
      dispatch(newTrashed(data.trashed));
      dispatch(newArchived(data.archived));
    });
  }

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="notes-container">
      <DoubleInput />
      <VisibleHeader active={pinnedNotes} text="Закрепленные" />
      <div className="notes">
        {pinnedNotes
          ? pinnedNotes.map((item) => (
              <PinnedNote header={item.name} text={item.paragraphs} />
            ))
          : ""}
      </div>

      <VisibleHeader active={notes} text="Другие" />

      <div className="notes">
        {notes
          ? notes.map((item) => (
              <MainNote header={item.name} text={item.paragraphs} />
            ))
          : ""}
      </div>
    </div>
  );
}
