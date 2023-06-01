import { Button, Heading, Typography } from "components/common";

type TProps = {
  offPercentage: number;
  title: string;
  coupon: string;
  image: string;
  actionLabel: string;
  onAction?: () => void;
};

const FeaturedCard: React.FC<TProps> = ({
  offPercentage,
  title,
  coupon,
  image,
  actionLabel,
  onAction,
}) => {
  return (
    <div
      className="rounded-2xl shadow-sm bg-cover bg-center px-5 py-7 w-96 min-w-[296px] border border-slate-300 my-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Heading size="sm">{offPercentage}% Off</Heading>
      <Typography className="text-start">{title}</Typography>
      <Typography className="text-start text-neutral-600">
        With code: {coupon}
      </Typography>
      <Button onClick={onAction} size="sm">
        {actionLabel}
      </Button>
    </div>
  );
};

export default FeaturedCard;
