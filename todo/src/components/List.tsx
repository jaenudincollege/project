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
    <div className="w-full">
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item}>
            <button
              onClick={() => onDeleteTodo(item.id)}
              className="outline-1 py-2 px-4 bg-red-500 text-white rounded-lg font-medium"
            >
              Delete
            </button>
          </ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
