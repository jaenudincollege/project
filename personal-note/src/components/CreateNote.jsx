import Button from "./Button";
import Input from "./Input";
import "../styles/createnote.css";
import { useState } from "react";

function CreateNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const newNotes = {
    id: crypto.randomUUID(),
    title,
    body: note,
    createdAt: new Date(),
    archived: false,
  };

  console.log(newNotes);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !note) return;

    onAddNote(newNotes);

    setTitle("");
    setNote("");
  }

  return (
    <div className="form-container">
      <h2 className="form-heading">Create New Note</h2>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          className={"title-input"}
          placeholder={"enter the title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
