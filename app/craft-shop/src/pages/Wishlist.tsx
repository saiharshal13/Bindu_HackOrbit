
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/product-grid";
import { ArrowLeft, Heart, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";

const Wishlist = () => {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem } = useCart();
  
  const products = items.map(item => item.product);
  
  const handleAddAllToCart = () => {
    items.forEach(item => {
      addItem(item.product, 1);
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold">My Wishlist</h1>
              <p className="text-muted-foreground">
                {items.length} item{items.length !== 1 ? 's' : ''} saved for later
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="ghost" asChild>
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
              
              {items.length > 0 && (
                <>
                  <Button variant="outline" onClick={clearWishlist}>
                    Clear Wishlist
                  </Button>
                  <Button onClick={handleAddAllToCart}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add All to Cart
                  </Button>
                </>
              )}
            </div>
          </div>
          
          {items.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                You haven't saved any products to your wishlist yet. 
                Find products you love and click the heart icon to save them here.
              </p>
              <Button asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
