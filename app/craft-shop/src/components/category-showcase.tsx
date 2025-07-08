
import React from "react";
import { Category } from "@/types";
import { CategoryGrid } from "@/components/category-grid";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryShowcaseProps {
  categories: Category[];
  title?: string;
  className?: string;
}

export function CategoryShowcase({
  categories,
  title = "Browse Categories",
  className,
}: CategoryShowcaseProps) {
  return (
    <section className={className}>
      <SectionHeading 
        title={title}
      >
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link to="/categories">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </SectionHeading>
      
      <CategoryGrid categories={categories} />
    </section>
  );
}
