import { useState } from "react";

interface Todo {
  id: string;
  todo: string;
}

type AddTodoProps = {
  onAddTodo: (todo: Todo) => void;
};

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!todo) return;

    const id = crypto.randomUUID();
    onAddTodo({ id, todo });
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
