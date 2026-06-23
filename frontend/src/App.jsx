import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NotesCard from "./components/NotesCard";
import "./css/app.css";
import {
  createNotes,
  deleteNotes,
  fetchNotes,
  updateNotes,
} from "./api/notesApi";

const App = () => {
  const [notes, setNotes] = useState([]);
  const { register, reset, handleSubmit } = useForm();

  const getNotes = async () => {
    const data = await fetchNotes();
    console.log("Fetched data", data);
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const submitHandler = async (data) => {
    const result = await createNotes(data);
    getNotes();
  };

  const deleteHandler = async (id) => {
    const result = await deleteNotes(id);
    getNotes();
  };

  const updateHandler = async (id) => {
    const description = prompt("Enter new Description");
    if (!description) return;

    await updateNotes(id, description);
    getNotes();
  };

  return (
    <div className="app-container">
      <form className="note-form" onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title")}
          type="text"
          placeholder="Enter title"
          className="form-input"
        />

        <input
          {...register("description")}
          type="text"
          placeholder="Enter description"
          className="form-input"
        />

        <button className="submit-btn">Submit</button>
      </form>

      <div className="notes-container">
        {notes.map((note) => (
          <NotesCard
            key={note._id}
            id={note._id}
            title={note.title}
            description={note.description}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
