import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  const id = crypto.randomUUID();
  const todos = {
    id,
    todo,
  };

  function handleSubmit(e) {
    e.preventDefault();
    onAddTodo(todos);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
