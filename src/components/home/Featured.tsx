import featured from "config/featured";
import FeaturedCard from "./FeaturedCard";

const Featured: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {featured.map(
        ({ id, title, coupon, offPercentage, image, actionLabel }) => (
          <FeaturedCard
            key={id}
            title={title}
            coupon={coupon}
            offPercentage={offPercentage}
            image={image}
            actionLabel={actionLabel}
          />
        )
      )}
    </div>
  );
};

export default Featured;
