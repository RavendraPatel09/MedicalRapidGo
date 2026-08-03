import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  variant?: "default" | "subtle" | "bordered" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    const variants = {
      default: "bg-surface-card border border-surface-border rounded-xl shadow-subtle",
      subtle: "bg-surface-subtle border border-surface-border/60 rounded-xl",
      bordered: "bg-transparent border border-surface-border rounded-xl",
      interactive: "bg-surface-card border border-surface-border rounded-xl shadow-subtle hover:border-primary/40 hover:shadow-card transition-all duration-200 cursor-pointer",
    };

    const paddings = {
      none: "p-0",
      sm: "p-3",
      md: "p-5",
      lg: "p-7",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(variants[variant], paddings[padding], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
