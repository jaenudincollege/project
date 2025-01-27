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
    <form onSubmit={handleSubmit} className="w-xl  flex gap-2">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="outline-1 px-4 py-2 w-full rounded-lg text-xl capitalize"
        placeholder="write your todo"
      />
      <button type="submit" className="outline-1 px-10 rounded-lg bg-green-400 text-white font-medium">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
