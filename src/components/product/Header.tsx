import { Heading, Typography } from "components/common";
import { decrementQuantity, incrementQuantity } from "redux/slices/product";
import { useAppDispatch, useAppSelector } from "redux/store/hooks";

import { ReactComponent as StarIcon } from "assets/icons/star.svg";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { title, subtitle, quantity, ratings, reviews } = useAppSelector(
    (state) => state.product.current.product
  );

  return (
    <div className="flex flex-row items-center justify-between mb-2">
      <div className="flex flex-col items-start">
        <Heading size="sm">{title}</Heading>
        <Typography size="md" className="text-neutral-600 m-0">
          {subtitle}
        </Typography>
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row items-center gap-1">
            {Array(ratings)
              .fill(ratings)
              .map((_, idx) => (
                <StarIcon key={idx} />
              ))}
          </div>
          <Typography size="sm" className="m-0 font-medium">
            ({reviews} Reviews)
          </Typography>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <div className="flex flex-row items-center justify-center gap-3 rounded-full h-8 bg-zinc-100 p-5">
          <Typography
            className="p-0 m-0 cursor-pointer"
            size="xl"
            onClick={() => dispatch(decrementQuantity())}
          >
            -
          </Typography>
          <Typography size="lg" className="p-0 m-0">
            {quantity}
          </Typography>
          <Typography
            className="p-0 m-0 cursor-pointer"
            size="xl"
            onClick={() => dispatch(incrementQuantity())}
          >
            +
          </Typography>
        </div>
        <Typography size="sm" className="font-medium text-sm md:text-md ">
          Available in Stock
        </Typography>
      </div>
    </div>
  );
};

export default Header;
