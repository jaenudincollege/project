import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: crypto.randomUUID(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleCompleted: (state, action) => {
      const todo = state.todos.filter((todo) => todo.id === action.payload);
      if (todo) state.todos.completed = !state.todos.completed;
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
