
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Leaf, Send, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/40 pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-[#C74919]">BINDU</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Handcrafted, sustainable products made by skilled women artisans.
              Supporting eco-friendly creativity and traditional craftsmanship.
            </p>
            <div className="flex gap-3 mt-2">
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Categories</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/categories/cat1" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Wall Hangings
              </Link>
              <Link to="/categories/cat2" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terracotta Crafts
              </Link>
              <Link to="/categories/cat3" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Jewelry
              </Link>
              <Link to="/categories/cat4" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home Décor
              </Link>
              <Link to="/categories/cat5" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Toys & Figures
              </Link>
            </nav>
          </div>

          {/* Information Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Information</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/shipping-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shipping Policy
              </Link>
              <Link to="/return-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Return Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Subscribe to our newsletter to receive updates on new artisans,
              products, and exclusive offers.
            </p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-background"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} CraftedGreenGoods. All rights reserved.
            Supporting women artisans and sustainable crafts.
          </p>
          <div className="flex items-center gap-4">
            <img src="/placeholder.svg" alt="Payment Method" className="h-6" />
            <img src="/placeholder.svg" alt="Payment Method" className="h-6" />
            <img src="/placeholder.svg" alt="Payment Method" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
