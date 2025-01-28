import { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Card from "./components/Card";
import './styles/app.css'

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(newNotes) {
    setNotes((notes) => [...notes, newNotes]);
  }

  console.log(notes);

  return (
    <div className="container">
      <Header />
      <CreateNote onAddNote={handleAddNote} />
      <Card notes={notes} />
    </div>
  );
}

export default App;
