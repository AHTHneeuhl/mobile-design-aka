import { Button, Heading, Typography } from "components/common";
import { ReactComponent as CartIcon } from "assets/icons/cart-light.svg";

type TProps = {
  totalPrice: number;
};

const BuyNow: React.FC<TProps> = ({ totalPrice }) => {
  return (
    <div className="flex flex-row items-center justify-between mt-4">
      <div className="flex flex-col items-start">
        <Typography className="text-xs font-medium p-0 m-0">Total</Typography>
        <Heading size="sm">${totalPrice.toFixed(2)}</Heading>
      </div>
      <Button size="lg">
        <CartIcon />{" "}
        <Typography className="text-white p-0 m-0 ml-3">Buy Now</Typography>
      </Button>
    </div>
  );
};

export default BuyNow;
