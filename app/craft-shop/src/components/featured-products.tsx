
import React from "react";
import { Product } from "@/types";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  className?: string;
}

export function FeaturedProducts({
  products,
  title = "Shop by Category",
  className,
}: FeaturedProductsProps) {
  return (
    <section className={className}>
      <SectionHeading 
        title={title}
      >
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link to="/products">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </SectionHeading>
      
      <ProductGrid products={products} />
    </section>
  );
}
