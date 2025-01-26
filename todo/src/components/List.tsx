import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item}>
            <button>Delete</button>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
