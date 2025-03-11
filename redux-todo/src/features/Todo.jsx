import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import styled from "styled-components";
import Button from "../components/Button";
import Display from "./Display";

const TodoStyle = styled.div`
  border: 1px solid;
  padding: 44px;
`;

const Input = styled.input`
  width: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: none;
  outline: 1px solid;
  padding: 12px 24px;
  font-size: 22px;
`;

const InputGroup = styled.form`
  display: flex;
  margin-bottom: 24px;
`;

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <TodoStyle>
      <InputGroup onSubmit={handleSubmit}>
        <Input type="text" value={text} onChange={handleChange} />
        <Button variant="newItem" onClick={handleClick}>
          Add Todo
        </Button>
      </InputGroup>
      <Display />
    </TodoStyle>
  );
};

export default Todo;
