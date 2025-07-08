import React, { useState, useEffect, TouchEvent } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle } from "lucide-react";
import { Link } from "react-router-dom";

const heroImages = [
  "/hero2.png",
  "/hero.png",  // Make sure these images exist in your public folder
  "/hero3.png",
  "/hero4.png"
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    if (touchStart - touchEnd > swipeThreshold) {
      // Swipe left
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }
    if (touchStart - touchEnd < -swipeThreshold) {
      // Swipe right
      setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  return (
    <div className="relative overflow-hidden bg-sage-50 py-8 md:py-16 lg:py-20">
      <div className="container flex flex-col md:flex-row gap-6 md:gap-8 items-center">
        {/* Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Handcrafted with <span className="text-primary">love</span> and <span className="text-secondary">purpose</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            Discover beautiful, sustainable products handcrafted by skilled women artisans.
            Each purchase supports a creator and helps preserve traditional craftsmanship.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/products">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-2">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-sage-100 p-1.5">
                <Recycle className="h-4 w-4 text-sage-800" />
              </div>
              <span className="text-sm font-medium">Eco-Friendly Materials</span>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <div 
              className="relative rounded-lg overflow-hidden aspect-[3/4] md:aspect-[4/3]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {heroImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Artisan crafted products ${index + 1}`} 
                  className={`absolute w-full h-full object-cover transition-all duration-500 ${
                    index === currentImageIndex ? 'opacity-100 translate-x-0' : 
                    index < currentImageIndex ? 'opacity-0 -translate-x-full' : 
                    'opacity-0 translate-x-full'
                  }`}
                />
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-primary w-5' 
                      : 'bg-white/70 hover:bg-white'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
