
import React from "react";
import { Navigate, Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Package, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Account = () => {
  const { isAuthenticated, user, logout } = useAuth();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar */}
            <aside className="space-y-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">Account</CardTitle>
                  <CardDescription>Manage your account</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-col space-y-1">
                    <Button variant="ghost" className="justify-start" asChild>
                      <Link to="/account/profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        My Profile
                      </Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" asChild>
                      <Link to="/account/orders" className="flex items-center">
                        <Package className="mr-2 h-4 w-4" />
                        My Orders
                      </Link>
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
            
            {/* Main content */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Welcome, {user?.name}</CardTitle>
                  <CardDescription>
                    Manage your profile, track your orders, and update your preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="quicklinks">
                    <TabsList>
                      <TabsTrigger value="quicklinks">Quick Links</TabsTrigger>
                      <TabsTrigger value="recentorders">Recent Orders</TabsTrigger>
                    </TabsList>
                    <TabsContent value="quicklinks" className="space-y-4 pt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Button variant="outline" className="h-auto p-4 flex flex-col items-start" asChild>
                          <Link to="/account/profile">
                            <User className="mb-2 h-5 w-5" />
                            <div className="text-left">
                              <div className="font-semibold">My Profile</div>
                              <p className="text-sm text-muted-foreground">
                                Update your personal information
                              </p>
                            </div>
                          </Link>
                        </Button>
                        <Button variant="outline" className="h-auto p-4 flex flex-col items-start" asChild>
                          <Link to="/account/orders">
                            <Package className="mb-2 h-5 w-5" />
                            <div className="text-left">
                              <div className="font-semibold">My Orders</div>
                              <p className="text-sm text-muted-foreground">
                                View and track your orders
                              </p>
                            </div>
                          </Link>
                        </Button>
                        <Button variant="outline" className="h-auto p-4 flex flex-col items-start" asChild>
                          <Link to="/wishlist">
                            <Settings className="mb-2 h-5 w-5" />
                            <div className="text-left">
                              <div className="font-semibold">Wishlist</div>
                              <p className="text-sm text-muted-foreground">
                                View your saved items
                              </p>
                            </div>
                          </Link>
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="recentorders" className="pt-4">
                      <div className="text-center py-8">
                        <p className="text-muted-foreground mb-4">No recent orders found.</p>
                        <Button asChild>
                          <Link to="/products">Shop Now</Link>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
