import { cn } from "@linkvault/lib/utils";
import React, { forwardRef } from "react";

export type TextInputProps = React.ComponentPropsWithoutRef<"input">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type = "text", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "w-full rounded-lg px-3 py-2.5 bg-base-200/60 placeholder:text-base-content/40 border-neutral-content border-solid border outline-none focus:border-primary focus:bg-base-100 focus:ring-4 focus:ring-primary/10 duration-150",
          className
        )}
        {...rest}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
