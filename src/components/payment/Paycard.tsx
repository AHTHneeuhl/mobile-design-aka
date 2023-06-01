import { Button, Typography } from "components/common";
import { useNotification } from "hooks";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { applicationRoutes as routes } from "config";
import Input from "./Input";
import { useAppSelector } from "redux/store/hooks";

const Paycard: React.FC = () => {
  const { notifySuccess } = useNotification();
  const navigate = useNavigate();

  const title = useAppSelector((state) => state.product.current.product.title);

  const [isLoading, setIsLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  // handle validation & actions on Pay now button click ( Success Message & Navigate to Home Page)
  const onPayNow = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!cardNumber || !name || !expireDate || !securityCode) {
      notifySuccess("Please fill all fields");
      setIsLoading(false);
      return;
    }

    if (cardNumber.length !== 16) {
      notifySuccess("Card number must be 16 digits");
      setIsLoading(false);
      return;
    }

    if (securityCode.length !== 3) {
      notifySuccess("Security code must be 3 digits");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      notifySuccess("Payment successful!");
      navigate(routes.home);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (!title) {
      navigate(routes.home);
    }
  }, [navigate, title]);

  return (
    <div className="px-10 py-16 bg-zinc-100 w-96">
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="card-number" className="text-sm font-medium">
            Card Number
          </label>
          <Input
            id="card-number"
            placeholder="4242 4242 4242 4242"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name on Card
          </label>
          <Input
            id="name"
            placeholder="George Hatzis"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="expire-date" className="text-sm font-medium">
              Expiration date
            </label>
            <Input
              id="expire-date"
              placeholder="05/27"
              type="text"
              value={expireDate}
              onChange={(e) => setExpireDate(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="security-code" className="text-sm font-medium">
              Security Code
            </label>
            <Input
              id="security-code"
              placeholder="456"
              type="text"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={onPayNow} isLoading={isLoading} className="mt-2">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Typography className="font-medium text-white m-0">
            Pay now
          </Typography>
        </Button>
      </form>
    </div>
  );
};

export default Paycard;
