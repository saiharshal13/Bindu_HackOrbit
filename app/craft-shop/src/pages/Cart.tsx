
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PriceTag } from "@/components/ui/price-tag";
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Trash2, 
  Truck 
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

const Cart = () => {
  const { items, updateQuantity, removeItem, itemCount, subtotal } = useCart();
  const { isAuthenticated } = useAuth();
  
  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };
  
  const handleRemove = (productId: string) => {
    removeItem(productId);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <Button variant="ghost" asChild>
              <Link to="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
          
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.product.id} 
                    className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <Link to={`/products/${item.product.id}`}>
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name}
                          className="w-24 h-24 object-cover rounded"
                        />
                      </Link>
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <Link to={`/products/${item.product.id}`}>
                        <h3 className="font-medium">{item.product.name}</h3>
                      </Link>
                      <div className="text-sm text-muted-foreground">
                        {item.product.category}
                      </div>
                      <PriceTag 
                        price={item.product.price} 
                        discount={item.product.discount}
                        size="sm"
                      />
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(
                            item.product.id, 
                            parseInt(e.target.value) || 1
                          )}
                          className="h-8 w-12 rounded-none text-center"
                          min={1}
                          max={item.product.stock}
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleRemove(item.product.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                    <CardDescription>
                      {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {subtotal >= 50 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          '$5.99'
                        )}
                      </span>
                    </div>
                    
                    {subtotal < 50 && (
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Truck className="h-3 w-3" />
                        <span>
                          Add ${(50 - subtotal).toFixed(2)} more for free shipping
                        </span>
                      </div>
                    )}
                    
                    <Separator />
                    
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>
                        ${(subtotal + (subtotal >= 50 ? 0 : 5.99)).toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full" asChild>
                        <Link to={isAuthenticated ? "/checkout" : "/login?redirect=checkout"}>
                          Proceed to Checkout
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-4 p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Have a coupon?</h3>
                  <div className="flex gap-2">
                    <Input placeholder="Enter coupon code" />
                    <Button>Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <ShoppingCart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Looks like you haven't added any products to your cart yet. 
                Explore our handcrafted products to find something you'll love.
              </p>
              <Button asChild>
                <Link to="/products">
                  Start Shopping
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

export default Cart;
