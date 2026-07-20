import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <input
          ref={ref}
          className={cn(
            "w-full bg-surfaceLighter/50 border border-white/10 rounded-md px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all backdrop-blur-sm",
            error && "border-red-500 focus:ring-red-500/50 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
