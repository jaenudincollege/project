import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleCompleted } from "./todoSlice";

const DisplayStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const List = styled.div`
  border: 1px solid;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Text = styled.p`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 700;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Display = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <DisplayStyle>
      {todos.map((todo) => (
        <List key={todo.id}>
          <Text
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.title}
          </Text>
          <ButtonGroup>
            <Button variant="danger" onClick={() => handleDelete(todo.id)}>
              delete
            </Button>
            <Button variant="primary" onClick={() => handleCompleted(todo.id)}>
              completed
            </Button>
          </ButtonGroup>
        </List>
      ))}
    </DisplayStyle>
  );
};

export default Display;
