
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { artisans } from "@/lib/data";
import { Leaf, Users, Recycle, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-sage-50 py-16">
          <div className="container text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Crafted Green Goods is dedicated to showcasing and promoting handcrafted products 
              made by skilled women artisans, while championing sustainability and eco-friendly practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/products">Shop Our Products</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Crafted Green Goods began with a simple idea: to create a platform that celebrates 
                  the incredible artistry of household women while promoting sustainable living.
                </p>
                <p>
                  We recognized that many women possess remarkable crafting skills passed down through 
                  generations, yet often lack the opportunity to showcase their talents to a wider audience.
                </p>
                <p>
                  At the same time, we saw a growing demand for authentic, handcrafted items that carry 
                  stories and support environmentally conscious choices.
                </p>
                <p>
                  By bringing these two worlds together, we've created a marketplace that empowers women 
                  artisans, preserves traditional crafting techniques, and offers unique products that 
                  are as beautiful as they are sustainable.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Artisan crafting" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="bg-sage-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Empowerment</h3>
                <p className="text-muted-foreground">
                  We believe in providing women artisans with economic independence and 
                  opportunities to showcase their skills and creativity.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We are committed to eco-friendly practices, using recycled and natural materials 
                  that minimize environmental impact.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Tradition</h3>
                <p className="text-muted-foreground">
                  We honor and preserve traditional crafting techniques that have been 
                  passed down through generations.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster connections between artisans and customers, creating a 
                  community that values handcrafted quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Meet Our Artisans */}
        <div className="container py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Artisans</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {artisans.map((artisan) => (
              <div key={artisan.id} className="bg-background border rounded-lg overflow-hidden transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={artisan.image} 
                    alt={artisan.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{artisan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{artisan.location}</p>
                  <p className="text-sm line-clamp-3">{artisan.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/artisans">View All Artisans</Link>
            </Button>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-terracotta-100 py-16">
          <div className="container text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter to stay updated on new artisans, 
              products, and sustainable living tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
