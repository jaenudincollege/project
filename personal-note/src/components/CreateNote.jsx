import Button from "./Button";
import Input from "./Input";
import "../styles/createnote.css";
import { useState } from "react";

function CreateNote({ onAddNote, maxChar }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const newNotes = {
    id: crypto.randomUUID(),
    title,
    body: note,
    createdAt: new Date(),
    archived: false,
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !note) return;

    onAddNote(newNotes);

    setTitle("");
    setNote("");
  }

  function handleInputChange(e) {
    const value = e.target.value;
    if (value.length <= 50) setTitle(value);
  }

  const remainingChar = maxChar - title.length;

  return (
    <div className="form-container">
      <h2 className="form-heading">Create New Note</h2>
      <span className="remaining-char">Remaining char: {remainingChar}</span>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          className={"title-input"}
          placeholder={"enter the title"}
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          className="notes"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button className={"btn-create"}>Create Note</Button>
      </form>
    </div>
  );
}

export default CreateNote;
