import { Button, Heading, Typography } from "components/common";
import { useNavigate } from "react-router-dom";
import { applicationRoutes as routes } from "config";

import { ReactComponent as CartIcon } from "assets/icons/cart-light.svg";

type TProps = {
  totalPrice: number;
};

const BuyNow: React.FC<TProps> = ({ totalPrice }) => {
  const navigate = useNavigate();

  const onBuyNow = () => navigate(routes.payment);

  return (
    <div className="flex flex-row items-center justify-between mt-4">
      <div className="flex flex-col items-start">
        <Typography className="text-xs font-medium p-0 m-0">Total</Typography>
        <Heading size="sm">${totalPrice.toFixed(2)}</Heading>
      </div>
      <Button size="lg">
        <CartIcon />{" "}
        <Typography className="text-white p-0 m-0 ml-3" onClick={onBuyNow}>
          Buy Now
        </Typography>
      </Button>
    </div>
  );
};

export default BuyNow;
