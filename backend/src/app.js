require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/database.js");
const noteModel = require("./model/notes.model.js");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));

connectToDb();

// POST-> /api/notes : to create notes.
app.post("/api/notes", async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  await noteModel.create({
    title,
    description,
  });

  res.status(201).send({
    msg: "Notes created successfully",
  });
});

// GET-> /api/notes : to fetch notes.
app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).send({
    msg: "Notes fetched successfully",
    notes,
  });
});

// DELETE-> /api/notes/:id : to delete notes.
app.delete("/api/notes/:id", async (req, res) => {
  const deletedNote = await noteModel.findByIdAndDelete(req.params.id);

  res.status(200).send({
    msg: "Note deletes",
    deletedNote,
  });
});

// PATCH-> /api/notes/:id : to update description.
app.patch("/api/notes/:id", async (req, res) => {
  const { description } = req.body;

  const updatedNote = await noteModel.findByIdAndUpdate(req.params.id, {
    description,
  });

  res.status(200).send({
    msg: "Notes updated",
    updatedNote,
  });
});

// Wild card route to integrate frontend
app.use("*name", (req, res) => {
  res.sendFile(path.joinpath.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
