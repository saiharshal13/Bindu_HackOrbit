import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturedProducts } from "@/components/featured-products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PriceTag } from "@/components/ui/price-tag";
import { ArtisanBadge } from "@/components/ui/artisan-badge";
import { products, featuredProducts } from "@/lib/data";
import { 
  ChevronLeft, 
  Heart, 
  Minus, 
  Plus, 
  Share2, 
  ShoppingCart, 
  Truck, 
  Box,
  Undo2
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);
  
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();
  
  const navigate = useNavigate();
  
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pincode, setPincode] = useState('');
  
  if (!product) {
    return <NotFound />;
  }
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  const handleBuyNow = () => {
    addItem(product, quantity);
    navigate('/checkout');
  };
  
  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const similarProducts = featuredProducts.filter(p => 
    p.id !== product.id && p.category === product.category
  ).slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <Link 
              to={`/categories/${product.category.toLowerCase()}`} 
              className="text-muted-foreground hover:text-foreground"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 align-middle">
            {/* Product Images */}
            <div className="space-y-6 space-x-6 flex flex-col items-center">
              <div className="rounded-lg overflow-hidden border h-[550px] w-[500px] flex items-center justify-center ">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex gap-2 overflow-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`rounded-md overflow-hidden border flex-shrink-0 w-20 h-20 ${
                      currentImageIndex === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <ArtisanBadge artisan={product.artisan} className="mt-2" />
              </div>
              
              <PriceTag 
                price={product.price} 
                discount={product.discount}
                size="lg"
              />
              
              <p className="text-muted-foreground">
                {product.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Availability:</span>
                  <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-b py-4 space-y-3">
                <div className="flex items-center">
                  <span className="mr-3">Quantity:</span>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-r-none"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="h-8 w-16 rounded-none text-center"
                      min={1}
                      max={product.stock}
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-l-none"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button 
                    className="flex-1 sm:flex-none px-8" 
                    variant="outline"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button 
                    className="flex-1 sm:flex-none px-8 bg-primary" 
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleWishlistToggle}
                  >
                    <Heart 
                      className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''} 
                    />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 />
                  </Button>
                </div>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-bold">Delivery Options : </span>
                  <div className="flex-1 max-w-[200px]">
                    <Input
                      type="text"
                      placeholder="Enter Pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      className="h-9"
                    />
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {/* Add check pincode logic */}}
                  >
                    Check
                  </Button>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Truck className="h-6 w-6 text-muted-foreground" />
                  <span className="text-base">Free shipping on orders over ₹2500, Express Shipping</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Box className="h-6 w-6 text-muted-foreground" />
                  <span className="text-base">Cash On Delivery Available</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Undo2 className="h-6 w-6 text-muted-foreground" />
                  <span className="text-base">This product cannot be refunded</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="artisan">Artisan</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <div className="prose max-w-none">
                <h3>Product Details</h3>
                <p>{product.description}</p>
                <h4>Materials</h4>
                <p>
                  Crafted with {product.material.toLowerCase()}, this product is 
                  both beautiful and eco-friendly. Each piece is handmade, which 
                  means that there may be slight variations in color and texture, 
                  making each item uniquely special.
                </p>
                <h4>Care Instructions</h4>
                <p>
                  To maintain the beauty of your handcrafted item, please handle 
                  with care. Clean with a soft, dry cloth and avoid exposure to 
                  direct sunlight for extended periods. Store in a cool, dry place.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="artisan" className="pt-4">
              <div className="prose max-w-none">
                <h3>About the Artisan</h3>
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={product.artisan.image} 
                    alt={product.artisan.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-medium m-0">{product.artisan.name}</h4>
                    <p className="text-sm text-muted-foreground m-0">{product.artisan.location}</p>
                  </div>
                </div>
                <p>{product.artisan.bio}</p>
                <p>
                  Every purchase you make directly supports {product.artisan.name} and 
                  helps to preserve traditional craftsmanship while providing sustainable 
                  income for her family.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <div className="prose max-w-none">
                <h3>Shipping Information</h3>
                <p>
                  We ship all products within 2-3 business days of receiving your order. 
                  Delivery times will vary depending on your location, but you can expect 
                  to receive your package within 5-7 business days after shipping.
                </p>
                <p>
                  Free shipping is available for orders over ₹2500. For orders under ₹2500, 
                  a shipping fee of ₹150 will be applied at checkout.
                </p>
                <h3>Return Policy</h3>
                <p>
                  If you're not completely satisfied with your purchase, you may return it 
                  within 30 days of delivery for a full refund. Please note that items must 
                  be returned in their original condition and packaging.
                </p>
                <p>
                  Due to the handcrafted nature of our products, there may be slight variations 
                  in color, texture, and size. These variations are part of the charm of 
                  handmade items and are not considered defects.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <FeaturedProducts 
              products={similarProducts}
              title="You May Also Like"
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
