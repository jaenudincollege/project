const List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
