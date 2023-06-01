type TProps = {
  titie: string;
  subtitle: string;
  ratings: number;
  reviews: number;
  quantity: number;
};

const Header: React.FC<TProps> = ({
  titie,
  subtitle,
  ratings,
  reviews,
  quantity,
}) => {
  return <div className="flex flex-row items-center justify-between"></div>;
};

export default Header;
