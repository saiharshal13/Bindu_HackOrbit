
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { products, categories } from "@/lib/data";
import { FilterIcon } from "lucide-react";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  
  // Get unique materials from products
  const materials = Array.from(new Set(products.map(product => product.material)));
  
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };
  
  const handleMaterialChange = (material: string, checked: boolean) => {
    if (checked) {
      setSelectedMaterials([...selectedMaterials, material]);
    } else {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material));
    }
  };
  
  const applyFilters = () => {
    let result = [...products];
    
    // Filter by price
    const minPrice = Math.min(...products.map(p => p.price)) * (priceRange[0] / 100);
    const maxPrice = Math.max(...products.map(p => p.price)) * (priceRange[1] / 100);
    
    result = result.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    );
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by material
    if (selectedMaterials.length > 0) {
      result = result.filter(product => 
        selectedMaterials.includes(product.material)
      );
    }
    
    // Sort products
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result = result.filter(product => product.new).concat(
          result.filter(product => !product.new)
        );
        break;
      case "featured":
      default:
        result = result.filter(product => product.featured).concat(
          result.filter(product => !product.featured)
        );
        break;
    }
    
    setFilteredProducts(result);
  };
  
  const resetFilters = () => {
    setPriceRange([0, 100]);
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSortOption("featured");
    setFilteredProducts(products);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container">
          <SectionHeading 
            title="All Products"
            description="Discover our collection of handcrafted, eco-friendly products"
          />
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    <FilterIcon className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Narrow down products by applying filters
                    </SheetDescription>
                  </SheetHeader>
                  
                  <div className="py-4 space-y-6">
                    {/* Price Range Filter */}
                    <div>
                      <Label>Price Range</Label>
                      <div className="mt-2">
                        <Slider 
                          value={priceRange} 
                          onValueChange={setPriceRange}
                          max={100}
                          step={1}
                          className="my-4"
                        />
                        <div className="flex justify-between">
                          <span>${Math.min(...products.map(p => p.price)) * (priceRange[0] / 100)}</span>
                          <span>${Math.max(...products.map(p => p.price)) * (priceRange[1] / 100)}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Filter */}
                    <div>
                      <Label className="mb-2 block">Category</Label>
                      <div className="space-y-2">
                        {categories.map(category => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category.id}`} 
                              checked={selectedCategories.includes(category.name)}
                              onCheckedChange={(checked) => 
                                handleCategoryChange(category.name, checked === true)
                              }
                            />
                            <label 
                              htmlFor={`category-${category.id}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Material Filter */}
                    <div>
                      <Label className="mb-2 block">Material</Label>
                      <div className="space-y-2">
                        {materials.map((material, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`material-${index}`} 
                              checked={selectedMaterials.includes(material)}
                              onCheckedChange={(checked) => 
                                handleMaterialChange(material, checked === true)
                              }
                            />
                            <label 
                              htmlFor={`material-${index}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {material}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button onClick={resetFilters} variant="outline">Reset</Button>
                    </SheetClose>
                    <SheetClose asChild>
                      <Button onClick={applyFilters}>Apply Filters</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop Only */}
            <div className="hidden lg:block w-64 space-y-6">
              <div>
                <h3 className="font-medium mb-3">Filters</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resetFilters}
                  className="w-full mb-4"
                >
                  Reset All
                </Button>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <Label>Price Range</Label>
                <div className="mt-2">
                  <Slider 
                    value={priceRange} 
                    onValueChange={setPriceRange}
                    max={100}
                    step={1}
                    className="my-4"
                  />
                  <div className="flex justify-between">
                    <span>${Math.min(...products.map(p => p.price)) * (priceRange[0] / 100)}</span>
                    <span>${Math.max(...products.map(p => p.price)) * (priceRange[1] / 100)}</span>
                  </div>
                </div>
              </div>
              
              {/* Category Filter */}
              <div>
                <Label className="mb-2 block">Category</Label>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category.id}`} 
                        checked={selectedCategories.includes(category.name)}
                        onCheckedChange={(checked) => 
                          handleCategoryChange(category.name, checked === true)
                        }
                      />
                      <label 
                        htmlFor={`category-${category.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Material Filter */}
              <div>
                <Label className="mb-2 block">Material</Label>
                <div className="space-y-2">
                  {materials.map((material, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`material-${index}`} 
                        checked={selectedMaterials.includes(material)}
                        onCheckedChange={(checked) => 
                          handleMaterialChange(material, checked === true)
                        }
                      />
                      <label 
                        htmlFor={`material-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {material}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button onClick={applyFilters} className="w-full">
                Apply Filters
              </Button>
            </div>
            
            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} columns={3} />
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
