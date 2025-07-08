
import React, { createContext, useState, useContext, ReactNode } from "react";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  adminLogin: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // For demo purposes, using mock user data
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Simulated login function
  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Basic validation for demo
        if (email && password.length >= 6) {
          setUser({
            id: "user1",
            name: email.split('@')[0],
            email: email,
            role: "user"
          });
          setIsAdmin(false);
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };

  // Simulated admin login function
  const adminLogin = async (email: string, password: string) => {
    // In a real app, this would make an API call with proper authentication
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // For demo purposes, only allow admin login with specific credentials
        if (email === "admin@example.com" && password === "admin123") {
          setUser({
            id: "admin1",
            name: "Admin",
            email: email,
            role: "admin"
          });
          setIsAdmin(true);
          resolve();
        } else {
          reject(new Error("Invalid admin credentials"));
        }
      }, 1000);
    });
  };

  // Simulated register function
  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would make an API call
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Basic validation for demo
        if (name && email && password.length >= 6) {
          setUser({
            id: "user1",
            name: name,
            email: email,
            role: "user"
          });
          resolve();
        } else {
          reject(new Error("Invalid information"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login,
      adminLogin, 
      register, 
      logout, 
      isAuthenticated: !!user,
      isAdmin 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
