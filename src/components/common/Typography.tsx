import { VariantProps, cva } from "class-variance-authority";
import { cn } from "helpers/utils";
import { HTMLAttributes, forwardRef } from "react";

const typographyVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface TProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

const Typography: React.FC<TProps> = forwardRef<HTMLParagraphElement, TProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(typographyVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
