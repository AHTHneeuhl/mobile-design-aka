import { Content, ProductHeader } from "components/product";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/store/hooks";
import { applicationRoutes as routes } from "config";

const Product: React.FC = () => {
  const navigate = useNavigate();

  const { image, description, title } = useAppSelector(
    (state) => state.product.current.product
  );

  useEffect(() => {
    if (!title) {
      navigate(routes.home);
    }
  }, [navigate, title]);

  if (!title && !description) return null;

  return (
    <div>
      <ProductHeader image={image} />
      <Content />
    </div>
  );
};

export default Product;
