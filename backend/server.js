const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Longtime no see");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
  console.log(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Running on port ${PORT}`));
