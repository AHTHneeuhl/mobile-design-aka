import { Content, ProductHeader } from "components/product";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/store/hooks";
import { applicationRoutes as routes } from "config";

const Product: React.FC = () => {
  const navigate = useNavigate();

  const {
    image,
    description,
    title,
    subtitle,
    ratings,
    reviews,
    quantity,
    price,
    favorite,
  } = useAppSelector((state) => state.product.current.product);

  useEffect(() => {
    if (!title) {
      navigate(routes.home);
    }
  }, [navigate, title]);

  return (
    <div>
      <ProductHeader image={image} />
      <Content
        title={title}
        subtitle={subtitle}
        ratings={ratings}
        reviews={reviews}
        quantity={quantity}
        price={price}
        description={description}
        favorite={favorite}
      />
    </div>
  );
};

export default Product;
