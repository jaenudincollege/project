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

  return (
    <div className="container">
      <Header />
      <CreateNote onAddNote={handleAddNote} maxChar={50} />
      {notes.length > 0 ? (
        <Card notes={notes} onDeleteNote={handleDeleteNote} />
      ) : (
        <span className="not-available">
          It seems there’s no note available. Please create one first.
        </span>
      )}
    </div>
  );
}

export default App;
