import { useNavigate } from "react-router-dom";
import { applicationRoutes as routes } from "config";

import jennifer from "assets/images/jennifer.png";
import favoriteLight from "assets/icons/favorite-light.png";
import cartLight from "assets/icons/cart-light.png";
import arrow from "assets/icons/arrow.png";

type TProps = {
  image: string;
};

const ProductHeader: React.FC<TProps> = () => {
  const navigate = useNavigate();
  const onBack = () => navigate(routes.home);

  return (
    <div className="w-full h-full relative">
      <img
        src={jennifer}
        alt="background"
        className="w-full h-96 object-cover"
      />
      <img
        src={arrow}
        alt="favorite"
        onClick={onBack}
        className="w-10 h-10 cursor-pointer object-cover absolute top-4 left-4 border border-black rounded-full"
      />
      <img
        src={cartLight}
        alt="favorite"
        className="w-10 h-10 object-cover absolute top-4 right-4"
      />
      <img
        src={favoriteLight}
        alt="favorite"
        className="w-10 h-10 object-cover absolute bottom-4 right-4"
      />
    </div>
  );
};

export default ProductHeader;
