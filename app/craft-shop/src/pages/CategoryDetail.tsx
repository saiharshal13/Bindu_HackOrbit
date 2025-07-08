
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { ProductGrid } from "@/components/product-grid";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const CategoryDetail = () => {
  const { categoryId } = useParams();
  
  // Find the category by ID
  const category = categories.find(cat => cat.id === categoryId);
  
  // Filter products by this category name
  const categoryProducts = category 
    ? products.filter(product => product.category === category.name)
    : [];
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <p className="mb-6">The category you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/categories">Back to Categories</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/categories" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                All Categories
              </Link>
            </Button>
            
            <SectionHeading
              title={category.name}
              description={category.description}
              className="mb-8"
            />
          </div>
          
          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">No products found in this category.</p>
              <Button asChild>
                <Link to="/products">Browse All Products</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryDetail;
