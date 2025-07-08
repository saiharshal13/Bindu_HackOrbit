
import React from "react";
import { Navigate, Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingBag,
  Settings,
  CreditCard,
  LogOut,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const AdminDashboard = () => {
  const { user, isAdmin, logout } = useAuth();

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <LayoutDashboard className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <div className="px-3 py-4 border-b">
                  <div className="font-bold text-lg mb-1">Admin Dashboard</div>
                  <div className="text-sm text-muted-foreground">Manage your store</div>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                  <div className="px-3 py-1">
                    <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">
                      Dashboard
                    </h2>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Overview
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Analytics
                      </Button>
                    </div>
                  </div>
                  <div className="px-3 py-1">
                    <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">
                      Store Management
                    </h2>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link to="/admin/products">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Products
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link to="/admin/orders">
                          <Package className="mr-2 h-4 w-4" />
                          Orders
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link to="/admin/customers">
                          <Users className="mr-2 h-4 w-4" />
                          Customers
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="px-3 py-1">
                    <h2 className="mb-2 px-2 text-xs font-semibold tracking-tight">
                      System
                    </h2>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/admin/dashboard" className="font-bold text-xl">
              Admin <span className="text-primary">Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative gap-2" aria-label="User Menu">
                  <span className="hidden md:inline">{user?.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/">
                    View Store
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/admin/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar - visible on desktop */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-background">
          <div className="px-6 py-6 border-b">
            <div className="text-xl font-semibold">Dashboard</div>
            <div className="text-sm text-muted-foreground">Manage your store</div>
          </div>
          <nav className="flex-1 overflow-auto py-6">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">
                Dashboard
              </h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/dashboard">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Overview
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/analytics">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Analytics
                  </Link>
                </Button>
              </div>
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">
                Store Management
              </h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/products">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Products
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/orders">
                    <Package className="mr-2 h-4 w-4" />
                    Orders
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/customers">
                    <Users className="mr-2 h-4 w-4" />
                    Customers
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/transactions">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Transactions
                  </Link>
                </Button>
              </div>
            </div>
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight">
                System
              </h2>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex-1 overflow-auto p-6">
          {/* Dashboard Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +10.5% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +15.3% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +12.2% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    You have 265 orders this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-4 text-sm text-muted-foreground">
                      <div>Order</div>
                      <div>Customer</div>
                      <div>Status</div>
                      <div className="text-right">Amount</div>
                    </div>
                    <div className="grid grid-cols-4 items-center py-3 border-t">
                      <div className="font-medium">#ORD-7429</div>
                      <div>Sarah Johnson</div>
                      <div><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Delivered</span></div>
                      <div className="text-right">$269.99</div>
                    </div>
                    <div className="grid grid-cols-4 items-center py-3 border-t">
                      <div className="font-medium">#ORD-7428</div>
                      <div>Michael Smith</div>
                      <div><span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Processing</span></div>
                      <div className="text-right">$349.49</div>
                    </div>
                    <div className="grid grid-cols-4 items-center py-3 border-t">
                      <div className="font-medium">#ORD-7427</div>
                      <div>James Wilson</div>
                      <div><span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Delivered</span></div>
                      <div className="text-right">$125.99</div>
                    </div>
                    <div className="grid grid-cols-4 items-center py-3 border-t">
                      <div className="font-medium">#ORD-7426</div>
                      <div>Emily Brown</div>
                      <div><span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Shipping</span></div>
                      <div className="text-right">$189.99</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Products</CardTitle>
                  <CardDescription>
                    Your best selling products this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3">
                        <img src="/placeholder.svg" className="w-6 h-6" alt="Product" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Handcrafted Wall Hanging</div>
                        <div className="text-sm text-muted-foreground">Home Decor</div>
                      </div>
                      <div className="font-medium">152 sold</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3">
                        <img src="/placeholder.svg" className="w-6 h-6" alt="Product" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Terracotta Flower Pot</div>
                        <div className="text-sm text-muted-foreground">Garden</div>
                      </div>
                      <div className="font-medium">124 sold</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3">
                        <img src="/placeholder.svg" className="w-6 h-6" alt="Product" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Handmade Paper Earrings</div>
                        <div className="text-sm text-muted-foreground">Jewelry</div>
                      </div>
                      <div className="font-medium">98 sold</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3">
                        <img src="/placeholder.svg" className="w-6 h-6" alt="Product" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Recycled Gift Box Set</div>
                        <div className="text-sm text-muted-foreground">Packaging</div>
                      </div>
                      <div className="font-medium">87 sold</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
