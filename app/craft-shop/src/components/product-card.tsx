
import React from "react";
import { Product } from "@/types";
import { PriceTag } from "@/components/ui/price-tag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ArtisanBadge } from "./ui/artisan-badge";

interface ProductCardProps {
  product: Product;
  className?: string;
  showArtisan?: boolean;
}

export function ProductCard({ 
  product, 
  className,
  showArtisan = true 
}: ProductCardProps) {
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    addItem(product, 1);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link 
      to={`/products/${product.id}`} 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted/20">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      {/* Badge area (top right) */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {product.new && (
          <Badge className="bg-primary text-white">New</Badge>
        )}
        {product.discount && (
          <Badge className="bg-secondary text-white">{product.discount}% Off</Badge>
        )}
      </div>
      
      {/* Wishlist button (top left) */}
      <Button 
        size="icon" 
        variant="ghost" 
        className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
        onClick={handleWishlistToggle}
      >
        <Heart 
          className={cn(
            "h-4 w-4",
            isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-muted-foreground"
          )} 
        />
      </Button>
      
      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-medium line-clamp-1">{product.name}</h3>
        
        <div className="mb-2 line-clamp-1 text-sm text-muted-foreground">
          {product.category}
        </div>
        
        <div className="mt-auto flex flex-col gap-3">
          {showArtisan && (
            <ArtisanBadge artisan={product.artisan} className="my-1" />
          )}
          
          <div className="flex items-center justify-between">
            <PriceTag price={product.price} discount={product.discount} />
            
            <Button 
              size="icon" 
              variant="outline" 
              className="h-8 w-8 rounded-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
