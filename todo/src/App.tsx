import { useState } from "react";
import AddTodo from "./components/Input";
import List from "./components/List";

const App = () => {
  const [todoItem, setTodoItem] = useState([]);

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
