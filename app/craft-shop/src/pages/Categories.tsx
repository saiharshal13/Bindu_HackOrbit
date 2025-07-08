
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionHeading } from "@/components/section-heading";
import { categories } from "@/lib/data";
import { CategoryGrid } from "@/components/category-grid";

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <SectionHeading
            title="Browse Categories"
            description="Explore our collection of handcrafted eco-friendly products by category"
            className="mb-8"
          />
          
          <CategoryGrid categories={categories} columns={3} className="mb-16" />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
