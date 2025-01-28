import Button from "./Button";

function CreateNote() {
  return (
    <div>
      <h2>Create New Note</h2>
      <form>
        <input type="text" />
        <textarea />
        <Button btnText={"Create Note"} />
      </form>
    </div>
  );
}

export default CreateNote;
