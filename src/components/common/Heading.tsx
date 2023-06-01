import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { HTMLAttributes, forwardRef } from "react";

const headingVariants = cva(
  "text-left font-bold leading-tight tracking-tighter",
  {
    variants: {
      variant: {
        primary: "text-black",
        secondary: "text-neutral-600",
      },
      size: {
        default: "text-2xl md:text-3xl",
        lg: "text-3xl md:text-4xl",
        sm: "text-xl md:text-2xl",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
);

interface TProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading: React.FC<TProps> = forwardRef<HTMLHeadingElement, TProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
