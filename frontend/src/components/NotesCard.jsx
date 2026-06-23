import React from "react";
import "../css/notecard.css";

const NotesCard = ({
  id,
  title,
  description,
  deleteHandler,
  updateHandler,
}) => {
  return (
    <div className="note-card">
      <h2 className="note-title">{title}</h2>

      <p className="note-description">{description}</p>

      <div className="note-actions">
        <button
          className="update-btn"
          onClick={() => {
            updateHandler(id);
          }}
        >
          Update
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            deleteHandler(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
