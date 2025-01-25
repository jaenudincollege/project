type ChildrenProps = {
  children: React.ReactNode;
};

const Search: React.FC<ChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Search;
