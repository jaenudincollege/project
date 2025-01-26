import { useState } from "react";
import AddTodo from "./components/Input";
import List from "./components/List";

const App = () => {
  const [todoItem, setTodoItem] = useState([]);

  function handleAddTodoItem(todo) {
    setTodoItem((todoItem) => [...todoItem, todo]);
  }

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodoItem} />
      <List items={todoItem} />
    </div>
  );
};

export default App;
