import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offest-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-envents-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-800",
      },
      size: {
        default: "h-10 py-2 px-5",
        sm: "h-9 px-4 rounded-full",
        lg: "h-11 px-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface TProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

// Reusable HTML Button component
const Button: React.FC<TProps> = forwardRef<HTMLButtonElement, TProps>(
  ({ isLoading, className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
