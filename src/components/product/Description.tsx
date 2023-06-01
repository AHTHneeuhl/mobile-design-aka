import { Heading, Typography } from "components/common";
import { useAppSelector } from "redux/store/hooks";

const Description: React.FC = () => {
  const { description } = useAppSelector(
    (state) => state.product.current.product
  );

  return (
    <div className="text-start">
      <Heading size="sm">Description</Heading>
      <Typography size="sm" className="mt-2 text-neutral-600 text-start">
        {description}
      </Typography>
    </div>
  );
};

export default Description;
