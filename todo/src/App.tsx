import { useState } from "react";
import AddTodo from "./components/Input";

const App = () => {
  const [todoItem, setTodoItem] = useState([]);

  return (
    <div>
      <AddTodo />
    </div>
  );
};

export default App;
