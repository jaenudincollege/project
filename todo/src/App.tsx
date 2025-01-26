import { useState } from "react";
import AddTodo from "./components/Input";

const App = () => {
  const [todoItem, setTodoItem] = useState([]);

  function handleAddTodoItem(todo) {
    setTodoItem((todoItem) => [...todoItem, todo]);
  }

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodoItem} />
    </div>
  );
};

export default App;
