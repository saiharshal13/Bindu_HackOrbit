
import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ArtisanStory() {
  return (
    <section className="py-12 bg-sage-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <SectionHeading 
              title="The Women Behind Our Products"
              description="Each product carries the story of its creator"
              className="mb-4"
            />
            
            <div className="prose max-w-none">
              <p>
                Behind every beautiful handcrafted item is a woman with exceptional skill, 
                creativity, and determination. Our artisans come from diverse backgrounds but 
                share a common passion for preserving traditional craftsmanship and sustainable practices.
              </p>
              
              <p>
                Many of our creators are mothers and homemakers who have turned their artistic 
                skills into sources of income and empowerment. By supporting their craft, you're 
                helping to sustain cultural traditions and provide economic independence.
              </p>
              
              <p>
                From terracotta artisans in rural communities to urban recycled-paper craft experts, 
                each woman brings her unique perspective and heritage to her creations.
              </p>
            </div>
            
            <Button className="mt-6" asChild>
              <Link to="/about">Meet Our Artisans</Link>
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Woman artisan creating handcrafted products" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg max-w-[200px]">
                <div className="text-sm font-medium">"Creating brings me joy and independence."</div>
                <div className="text-xs text-muted-foreground mt-1">- Maya, Jewelry Artisan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
