
import React from "react";
import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  discount?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PriceTag({ price, discount, className, size = "md" }: PriceTagProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl"
  };
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {discount ? (
        <>
          <span className={cn("font-semibold text-primary", sizeClasses[size])}>
            ₹{Math.round(discountedPrice)}
          </span>
          <span className={cn("line-through text-muted-foreground", 
            size === "sm" ? "text-xs" : 
            size === "md" ? "text-sm" : 
            "text-base"
          )}>
            ₹{Math.round(price)}
          </span>
          <span className="px-1.5 py-0.5 bg-terracotta-100 text-terracotta-800 rounded text-xs font-medium">
            {discount}% OFF
          </span>
        </>
      ) : (
        <span className={cn("font-semibold", sizeClasses[size])}>
          ₹{Math.round(price)}
        </span>
      )}
    </div>
  );
}
