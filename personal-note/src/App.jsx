import { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Card from "./components/Card";
import "./styles/app.css";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(newNotes) {
    setNotes((notes) => [...notes, newNotes]);
  }

  function handleDeleteNote(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  console.log(notes);

  return (
    <div className="container">
      <Header />
      <CreateNote onAddNote={handleAddNote} />
      <Card notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
