import { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);

  function handleAddNote(newNotes) {
    setNotes((notes) => [...notes, newNotes]);
  }

  console.log(notes)
  
  return (
    <div>
      <Header />
      <CreateNote onAddNote={handleAddNote} />
    </div>
  );
}

export default App;
