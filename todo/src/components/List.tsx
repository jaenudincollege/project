import ListItem from "./ListItem";

const List = ({ items, onDeleteTodo }) => {
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
