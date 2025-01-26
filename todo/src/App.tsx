import { useEffect, useState } from "react";
import AddTodo from "./components/Input";
import List from "./components/List";

const App = () => {
  const [todoItem, setTodoItem] = useState(() => {
    const items = localStorage.getItem("todos");
    return items ? JSON.parse(items) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItem));
  }, [todoItem]);

  function handleAddTodoItem(todo) {
    setTodoItem((todoItem) => [...todoItem, todo]);
  }

  function handleDeleteTodo(id) {
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
