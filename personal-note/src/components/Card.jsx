import "../styles/card.css";
import Button from "./Button";

function Card({ notes, onDeleteNote }) {
  return (
    <div className="card-container">
      <p className="heading">Active Notes</p>
      {notes.map((note) => (
        <div key={note.id} className="card">
          <div className="card-heading">
            <h1 className="note-title">{note.title}</h1>
            <span className="note-date">
              {new Date(note.createdAt).toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <p className="note-body">{note.body}</p>
          </div>
          <div className="btn-group">
            <Button
              className={"btn btn-delete"}
              onClick={() => onDeleteNote(note.id)}
            >
              Delete
            </Button>
            <Button className={"btn btn-archive"}>Archive</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
