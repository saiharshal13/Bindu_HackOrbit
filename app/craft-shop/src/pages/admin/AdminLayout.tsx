
import React, { ReactNode } from "react";
import { Navigate, Link } from "react-router-dom";
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
  Menu
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
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

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
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
                  <Menu className="h-5 w-5" />
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
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link to="/admin/settings">
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Link>
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
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
