import { Container, Heading } from "components/common";
import newArrivals from "config/newArrivals";
import ProductCard from "./ProductCard";

const NewArrivals: React.FC = () => {
  return (
    <Container>
      <Heading size="sm">New Arrivals</Heading>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {newArrivals.map(
          ({
            id,
            title,
            subtitle,
            price,
            image,
            favorite,
            description,
            ratings,
            reviews,
            quantity,
          }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              subtitle={subtitle}
              price={price}
              image={image}
              favorite={favorite}
              description={description}
              ratings={ratings}
              reviews={reviews}
              quantity={quantity}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default NewArrivals;
