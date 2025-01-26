import ListItem from "./ListItem";

interface Todo {
  id: string;
  todo: string;
}

type ListProps = {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
};

const List = ({ items, onDeleteTodo }: ListProps) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item}>
            <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;