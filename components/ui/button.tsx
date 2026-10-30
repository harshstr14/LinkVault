import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center focus:outline-none outline-none justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background duration-150 active:scale-[0.98] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-content text-neutral-content-foreground hover:bg-neutral-content/90",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/30",
        accent:
          "bg-gradient-to-b from-accent to-accent/90 text-white hover:brightness-110 border border-white/15 shadow-md shadow-accent/30",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-base-content bg-background hover:bg-base-content hover:text-base-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        metal:
          "bg-base-100 text-base-content hover:bg-base-200 border border-neutral-content shadow-sm",
        ghost: "hover:bg-base-content/10",
        simple: "bg-base-200 hover:bg-base-300",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "py-1 px-2 text-xs",
        lg: "h-11 px-8",
        full: "px-4 py-2 w-full",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
