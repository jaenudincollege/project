import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleCompleted } from "./todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add Todo</button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </h1>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
            <button onClick={() => handleCompleted(todo.id)}>completed</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
