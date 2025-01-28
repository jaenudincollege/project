import Button from "./Button";
import Input from "./Input";

function CreateNote() {
  return (
    <div >
      <h2>Create New Note</h2>
      <form>
        <Input />
        <textarea />
        <Button btnText={"Create Note"} />
      </form>
    </div>
  );
}

export default CreateNote;
