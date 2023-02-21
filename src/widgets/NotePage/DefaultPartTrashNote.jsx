import React from "react";
import OK from "../../shared/img/ok.png";

export default function DefaultPartTrashNote({ header }) {
  return (
    <div>
      <img className="note-ok" src={OK} alt="ok" />
      <div
        to="../selectednote"
        style={{
          marginBottom: "16px",
          textDecoration: "none",
          color: "black",
        }}
      >
        {header ? header : "Безымянный"}
      </div>
    </div>
  );
}
