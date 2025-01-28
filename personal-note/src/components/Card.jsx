import "../styles/card.css";
import Button from "./Button";

function Card({ notes }) {
  return (
    <div className="card-container">
      <p className="heading">Active Notes</p>
      {notes.map((note) => (
        <div key={note.id} className="card">
          <div className="card-heading">
            <h1 className="note-title">{note.title}</h1>
            <span className="note-date">
              {note.createdAt.toLocaleDateString()}
            </span>
            <p className="note-body">{note.body}</p>
          </div>
          <div className="btn-group">
            <Button className={"btn btn-delete"}>Delete</Button>
            <Button className={"btn btn-archive"}>Archive</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
