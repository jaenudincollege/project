import { useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  return (
    <form>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
