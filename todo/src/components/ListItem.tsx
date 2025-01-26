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
      <li>
        {item.todo}
        {children}
      </li>
    );
  };
  
  export default ListItem;