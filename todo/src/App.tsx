import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import List from "./components/List";

interface Todo {
  id: string;
  todo: string;
}

const App = () => {
  const [todoItem, setTodoItem] = useState<Todo[]>(() => {
    const items = localStorage.getItem("todos");
    return items ? JSON.parse(items) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItem));
  }, [todoItem]);

  function handleAddTodoItem(todo: Todo) {
    setTodoItem((todoItem) => [...todoItem, todo]);
  }

  function handleDeleteTodo(id: string) {
    setTodoItem((todoItem) => todoItem.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodoItem} />
      <List items={todoItem} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
