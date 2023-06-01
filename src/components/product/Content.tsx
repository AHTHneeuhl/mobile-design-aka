import BuyNow from "./BuyNow";
import Description from "./Description";
import Header from "./Header";
import Sizes from "./Sizes";

const Content: React.FC = () => {
  return (
    <div className="bg-white w-full shadow-sm py-6 px-4 rounded-tl-3xl rounded-tr-3xl">
      <Header />
      <Sizes />
      <Description />
      <BuyNow />
    </div>
  );
};

export default Content;
