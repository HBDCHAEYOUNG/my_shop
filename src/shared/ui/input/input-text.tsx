import * as React from "react";

import { cn } from "@lib/utils";

export const InputText = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    type?: string;
  }
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-sm border border-gray-300 px-3 focus:border-black focus:outline-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

InputText.displayName = "InputText";
