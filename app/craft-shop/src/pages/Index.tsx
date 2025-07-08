
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { CategoryShowcase } from "@/components/category-showcase";
import { ArtisanStory } from "@/components/artisan-story";
import { EcoFriendlyBanner } from "@/components/eco-friendly-banner";
import { featuredProducts, categories, newArrivals, discountedProducts, bestSeller } from "@/lib/data";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        
        <div className="container py-12 space-y-16">
          <CategoryShowcase 
            categories={categories} 
            title="Shop by Category"
          />

          <FeaturedProducts 
            products={newArrivals} 
            title="New Arrivals"
          />

          <FeaturedProducts 
            products={discountedProducts}
            title="Discounted Products"
          />
          
          <FeaturedProducts 
            products={featuredProducts} 
            title="Featured Products"
          />

          <FeaturedProducts 
            products={bestSeller} 
            title="Best Sellers"
          />
        </div>
               
        
        
        <EcoFriendlyBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
