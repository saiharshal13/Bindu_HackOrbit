
import React from "react";
import { Navigate, Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { Package, ExternalLink, FileText } from "lucide-react";

const Orders = () => {
  const { isAuthenticated } = useAuth();
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Sample empty state - in a real app, this would fetch from an API
  const orders: any[] = [];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">My Orders</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                View and manage your orders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All Orders</TabsTrigger>
                  <TabsTrigger value="processing">Processing</TabsTrigger>
                  <TabsTrigger value="delivered">Delivered</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="pt-4">
                  {orders.length > 0 ? (
                    <div className="divide-y">
                      {/* Order list would go here */}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Package className="mx-auto h-12 w-12 text-muted-foreground opacity-30 mb-4" />
                      <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                      <p className="text-muted-foreground mb-6">
                        You haven't placed any orders yet. Start shopping to see your orders here.
                      </p>
                      <Button asChild>
                        <Link to="/products">Browse Products</Link>
                      </Button>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="processing" className="pt-4">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No processing orders at the moment.</p>
                  </div>
                </TabsContent>
                <TabsContent value="delivered" className="pt-4">
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No delivered orders yet.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you have any questions about your orders, please contact our customer support.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Return Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  View our return policy to learn about the process and conditions.
                </p>
                <Button variant="outline" className="w-full">
                  View Return Policy
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Orders;
