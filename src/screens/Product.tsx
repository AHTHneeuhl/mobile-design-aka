import { Content, ProductHeader } from "components/product";
import { useAppSelector } from "redux/store/hooks";

const Product: React.FC = () => {
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
