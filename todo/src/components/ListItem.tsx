interface Todo {
  id: string;
  todo: string;
}

type ListItemProps = {
  item: Todo;
  children: React.ReactNode;
};

const ListItem = ({ item, children }: ListItemProps) => {
  return (
    <li className="flex justify-between items-center my-4 outline-1 px-8 py-4 rounded-sm">
      <p className="text-2xl capitalize">{item.todo}</p>
      {children}
    </li>
  );
};

export default ListItem;
