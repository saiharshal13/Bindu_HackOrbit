
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Product, WishlistItem } from "@/types";

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
  itemCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addItem = (product: Product) => {
    if (!isInWishlist(product.id)) {
      setItems(prevItems => [
        ...prevItems, 
        { product, dateAdded: new Date() }
      ]);
    }
  };

  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const isInWishlist = (productId: string) => {
    return items.some(item => item.product.id === productId);
  };

  const clearWishlist = () => {
    setItems([]);
  };

  const itemCount = items.length;

  return (
    <WishlistContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      isInWishlist,
      clearWishlist, 
      itemCount 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
