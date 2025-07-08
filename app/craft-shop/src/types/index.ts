
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  material: string;
  featured: boolean;
  discount?: number;
  new: boolean;
  artisan: Artisan;
  stock: number;
}

export interface Artisan {
  id: string;
  name: string;
  image: string;
  bio: string;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  dateAdded: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role?: "user" | "admin";
}
