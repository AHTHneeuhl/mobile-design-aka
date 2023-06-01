import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const inputVariants = cva(
  "border-2 border-teal-500 outline-none w-full focus:outline-none active:outline-none py-1 px-3 text-sm rounded-md"
);

interface TProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

// Reusable HTML Input component
const Input: React.FC<TProps> = forwardRef<HTMLInputElement, TProps>(
  ({ className, id, value, onChange, placeholder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(inputVariants({ className }))}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
