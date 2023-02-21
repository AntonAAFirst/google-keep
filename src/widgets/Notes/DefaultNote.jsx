/** @format */

import React from "react";
import { useDispatch } from "react-redux";
import OK from "../../shared/img/ok.png";
import { Link } from "react-router-dom";
import { setData } from "../../shared/helpers/notePage";

export default function DefaultNote({ header, children }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="note">
        <img className="note-ok" src={OK} alt="ok" />
        <Link
          onClick={() => setData(header, dispatch)}
          to="../selectednote"
          style={{
            marginBottom: "16px",
            textDecoration: "none",
            color: "black",
          }}
        >
          {header
            ? header.length >= 22
              ? header.slice(0, 22) + "..."
              : header
            : "Безымянный"}
        </Link>

        <div className="note-icons">
          <div className="icons-container">{children}</div>
        </div>
      </div>
    </div>
  );
}
