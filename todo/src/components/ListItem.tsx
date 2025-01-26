const ListItem = ({ item, children }) => {
  return (
    <li>
      {item.todo}
      {children}
    </li>
  );
};

export default ListItem;
