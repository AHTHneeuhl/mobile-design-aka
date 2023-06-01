import { Heading, Typography } from "components/common";

import favoriteDark from "assets/icons/favorite-dark.png";
import { useAppDispatch } from "redux/store/hooks";
import { setProduct } from "redux/slices/product";
import { TProduct } from "config/newArrivals";
import { useNavigate } from "react-router-dom";
import { applicationRoutes as routes } from "config";

interface TProps extends TProduct {}

const ProductCard: React.FC<TProps> = ({
  id,
  title,
  subtitle,
  description,
  ratings,
  reviews,
  quantity,
  image,
  price,
  favorite,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const addProduct = () => {
    dispatch(
      setProduct({
        id,
        title,
        subtitle,
        description,
        quantity,
        ratings,
        reviews,
        image,
        price,
        favorite,
      })
    );
    navigate(routes.product);
  };

  return (
    <div className="shadow-sm rounded-2xl cursor-pointer" onClick={addProduct}>
      <div className="overflow-hidden rounded-2xl relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <img
          src={favoriteDark}
          alt="heart"
          className="w-6 h-6 object-cover absolute top-4 right-4"
        />
      </div>
      <Heading size="sm" className="text-center mt-2">
        {title}
      </Heading>
      <Typography className="text-center text-neutral-600 font-medium">
        {subtitle}
      </Typography>
      <Heading size="sm" className="text-center">
        ${price.toFixed(2)}
      </Heading>
    </div>
  );
};

export default ProductCard;
