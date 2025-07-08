
import React from "react";
import { Category } from "@/types";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link to={`/categories/${category.id}`}>
      <Card className={cn(
        "overflow-hidden transition-all hover:shadow-md group", 
        className
      )}>
        <div className="aspect-video overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {category.description}
              </p>
            </div>
            <div className="h-8 w-8 rounded-full border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
