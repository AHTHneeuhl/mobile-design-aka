import BuyNow from "./BuyNow";
import Description from "./Description";
import Header from "./Header";

type TProps = {
  title: string;
  subtitle: string;
  description: string;
  ratings: number;
  reviews: number;
  quantity: number;
  price: number;
  favorite: boolean;
};

const Content: React.FC<TProps> = ({
  title,
  subtitle,
  description,
  ratings,
  reviews,
  quantity,
  price,
  favorite,
}) => {
  return (
    <div className="bg-white w-full shadow-sm py-6 px-4 rounded-tl-3xl rounded-tr-3xl">
      <Header />
      <Description />
      <BuyNow totalPrice={price} />
    </div>
  );
};

export default Content;
