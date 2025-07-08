
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}

export function SectionHeading({
  title,
  description,
  className,
  align = "left",
  children,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("flex items-center justify-between mb-6", className)}>
      <div className={cn(alignClass[align], "flex-1")}>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-1 text-muted-foreground">{description}</p>
        )}
      </div>
      {children && <div className="ml-auto flex items-center">{children}</div>}
    </div>
  );
}
