import Button from "./Button";
import Input from "./Input";
import "../styles/createnote.css";

function CreateNote() {
  return (
    <div className="form-container">
      <h2 className="form-heading">Create New Note</h2>
      <form className="form">
        <Input className={"title-input"} placeholder={"enter the title"} />
        <textarea className="notes" />
        <Button className={"btn-create"}>Create Note</Button>
      </form>
    </div>
  );
}

export default CreateNote;
