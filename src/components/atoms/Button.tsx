import { cva, type VariantProps } from "class-variance-authority";
import React, { type ButtonHTMLAttributes } from "react";
import { cn } from "../../../utils/cn";

const buttonVariants = cva(
    "inline-flex px-4 py-2 rounded-[4px] items-center justify-center gap-3",
    {
        variants: {
            variant: {
                default: "bg-[#1F1E1E] text-white hover:bg-black",
                outline: "border border-[#1F1E1E]/20 bg-background hover:bg-[#1F1E1E]/10"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

export default function Button({
    children, 
    className, 
    variant,
    ...props 
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({variant, className}))}
      {...props}
    >
      {children}
    </button>
  );
}
