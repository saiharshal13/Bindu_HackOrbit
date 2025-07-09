
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

  // Login function using backend API
  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Login failed");
    }
    setUser({
      id: data.user?.email || email, // Use email as id fallback
      name: data.user?.email?.split("@")[0] || email.split("@")[0],
      email: data.user?.email || email,
      role: "user"
    });
    setIsAdmin(false);
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

  // Register function using backend API
  const register = async (name: string, email: string, password: string) => {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // Only email and password needed by backend
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Registration failed");
    }
    setUser({
      id: data.user?.email || email,
      name: name,
      email: data.user?.email || email,
      role: "user"
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
