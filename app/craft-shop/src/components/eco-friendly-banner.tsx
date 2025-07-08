
import React from "react";
import { Leaf, RecycleIcon, Sparkles } from "lucide-react";

export function EcoFriendlyBanner() {
  return (
    <section className="py-12 bg-primary/10">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Our Commitment to Sustainability</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in creating beautiful products that respect our planet. Every item is crafted with eco-friendly practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-6 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <RecycleIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Recycled Materials</h3>
            <p className="text-muted-foreground text-sm">
              Many of our products utilize recycled newspaper, fabric scraps, and other materials that would otherwise go to waste.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-6 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Natural Ingredients</h3>
            <p className="text-muted-foreground text-sm">
              We prioritize natural, non-toxic materials like clay, natural fibers, and plant-based dyes in our production.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-6 text-center shadow-sm">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Minimal Waste</h3>
            <p className="text-muted-foreground text-sm">
              Our artisans are trained in techniques that minimize waste during the crafting process, ensuring responsible resource use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
