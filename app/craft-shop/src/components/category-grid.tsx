
import React from "react";
import { Category } from "@/types";
import { CategoryCard } from "@/components/category-card";

interface CategoryGridProps {
  categories: Category[];
  columns?: number;
  className?: string;
}

export function CategoryGrid({ 
  categories, 
  columns = 4,
  className 
}: CategoryGridProps) {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
  };

  return (
    <div className={`grid gap-4 ${gridColsClass[columns as keyof typeof gridColsClass]} ${className || ''}`}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
