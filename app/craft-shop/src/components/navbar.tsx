
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  LogIn,
  LogOut,
  ShoppingBag,
  Package,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useAuth } from "@/contexts/AuthContext";
import { categories } from "@/lib/data";

export function Navbar() {
  const navigate = useNavigate();
  const { itemCount: cartItemCount } = useCart();
  const { itemCount: wishlistItemCount } = useWishlist();
  const { user, isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img 
            src="/favicon.ico" 
            alt="Bindu Logo" 
            className="h-10 w-10 object-contain"
          />
          <div className="mr-4 font-bold text-2xl text-[#C74919]">BINDU</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-sm font-medium transition-colors hover:text-primary">
                Shop by Categories
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {categories.map((category) => (
                <DropdownMenuItem key={category.id} asChild>
                  <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/categories">All Categories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>

        {/* Search */}
        <form onSubmit={handleSearch} className="hidden md:flex w-full max-w-xs">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-9 rounded-full bg-muted/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Wishlist */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Wishlist"
            className="relative"
            asChild
          >
            <Link to="/wishlist">
              <Heart className="h-5 w-5" />
              {wishlistItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 min-w-4 p-0 flex items-center justify-center">
                  {wishlistItemCount}
                </Badge>
              )}
            </Link>
          </Button>

          {/* Cart */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Shopping Cart"
            className="relative"
            asChild
          >
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 min-w-4 p-0 flex items-center justify-center">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </Button>

          {/* Auth/User Menu */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative gap-2" aria-label="User Menu">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-3 py-2 text-sm font-medium">
                  Hello, {user?.name}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account">
                    <User className="mr-2 h-4 w-4" />
                    Account Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account/profile">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/account/orders">
                    <Package className="mr-2 h-4 w-4" />
                    My Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admin-login">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Admin Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" className="gap-2" aria-label="Sign In" asChild>
              <Link to="/login">
                <LogIn className="h-5 w-5" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            </Button>
          )}

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-bold text-lg">Menu</div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mt-6">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
              
              <nav className="mt-6 flex flex-col gap-4">
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/categories" 
                  className="flex items-center gap-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  to="/products" 
                  className="flex items-center gap-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingBag className="h-4 w-4" />
                  All Products
                </Link>
                <Link 
                  to="/about" 
                  className="flex items-center gap-2 text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </nav>
              
              <div className="mt-auto border-t pt-4">
                {isAuthenticated ? (
                  <>
                    <div className="mb-4 text-sm font-medium">
                      Hello, {user?.name}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" asChild>
                        <Link 
                          to="/account" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User className="mr-2 h-4 w-4" />
                          Account Dashboard
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link 
                          to="/account/profile" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User className="mr-2 h-4 w-4" />
                          My Profile
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link 
                          to="/account/orders" 
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Package className="mr-2 h-4 w-4" />
                          My Orders
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/admin-login" onClick={() => setMobileMenuOpen(false)}>
                          <ShieldCheck className="mr-2 h-4 w-4" />
                          Admin Login
                        </Link>
                      </Button>
                      <Button variant="outline" onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Button asChild>
                      <Link 
                        to="/login" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link 
                        to="/register" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Create Account
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
