
import React from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/product-card";

interface ProductGridProps {
  products: Product[];
  columns?: number;
  className?: string;
  showArtisan?: boolean;
}

export function ProductGrid({ 
  products, 
  columns = 4,
  className,
  showArtisan = true
}: ProductGridProps) {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
  };

  return (
    <div className={`grid gap-4 ${gridColsClass[columns as keyof typeof gridColsClass]} ${className || ''}`}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          showArtisan={showArtisan}
        />
      ))}
    </div>
  );
}
