import { Typography } from "components/common";

type TProps = {
  title: string;
  subtitle: string;
  image: string;
  price: number;
  favorite: boolean;
  favoriteAction: () => void;
};

const ProductCard: React.FC<TProps> = ({
  title,
  subtitle,
  image,
  price,
  favorite,
  favoriteAction,
}) => {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <Typography>{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Typography>${price.toFixed(2)}</Typography>
    </div>
  );
};

export default ProductCard;
