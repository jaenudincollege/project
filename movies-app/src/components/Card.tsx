type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div>{children}</div>;
};

export default Card;
