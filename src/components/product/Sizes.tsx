import { Heading } from "components/common";
import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];

const Sizes: React.FC = () => {
  const [activeSize, setActiveSize] = useState(sizes[0]);

  return (
    <div className="text-start my-2">
      <Heading size="sm">Size</Heading>
      <div className="flex flex-row items-center gap-2">
        {sizes.map((size) => (
          <div
            key={size}
            onClick={() => setActiveSize(size)}
            className={`${
              activeSize === size ? "text-white bg-black border-black" : ""
            } cursor-pointer transition border border-neutral-500 py-2 px-1 font-medium w-10 text-center text-neutral-700 rounded-full`}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
