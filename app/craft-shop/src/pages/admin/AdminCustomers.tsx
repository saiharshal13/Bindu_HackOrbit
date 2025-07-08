
import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  Eye,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  Calendar,
  Edit,
} from "lucide-react";
import AdminLayout from "./AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Mock customers data
const mockCustomers = [
  {
    id: "CUST-1001",
    name: "Priya Sharma",
    email: "priya.s@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    totalOrders: 8,
    totalSpent: 12499,
    lastOrder: "2025-03-15",
    status: "active",
    image: "https://i.pravatar.cc/150?img=29"
  },
  {
    id: "CUST-1002",
    name: "Rahul Singh",
    email: "rahul.s@example.com",
    phone: "+91 87654 32109",
    location: "Delhi, Delhi",
    totalOrders: 5,
    totalSpent: 8950,
    lastOrder: "2025-03-10",
    status: "active",
    image: "https://i.pravatar.cc/150?img=59"
  },
  {
    id: "CUST-1003",
    name: "Ananya Patel",
    email: "ananya.p@example.com",
    phone: "+91 76543 21098",
    location: "Bangalore, Karnataka",
    totalOrders: 12,
    totalSpent: 18750,
    lastOrder: "2025-03-18",
    status: "active",
    image: "https://i.pravatar.cc/150?img=44"
  },
  {
    id: "CUST-1004",
    name: "Vikram Mehta",
    email: "vikram.m@example.com",
    phone: "+91 65432 10987",
    location: "Ahmedabad, Gujarat",
    totalOrders: 3,
    totalSpent: 5250,
    lastOrder: "2025-02-28",
    status: "inactive",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: "CUST-1005",
    name: "Kavita Reddy",
    email: "kavita.r@example.com",
    phone: "+91 54321 09876",
    location: "Hyderabad, Telangana",
    totalOrders: 7,
    totalSpent: 10800,
    lastOrder: "2025-03-12",
    status: "active",
    image: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: "CUST-1006",
    name: "Arjun Kumar",
    email: "arjun.k@example.com",
    phone: "+91 43210 98765",
    location: "Chennai, Tamil Nadu",
    totalOrders: 2,
    totalSpent: 3499,
    lastOrder: "2025-02-15",
    status: "inactive",
    image: "https://i.pravatar.cc/150?img=67"
  }
];

const AdminCustomers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Filter customers based on search term and status
  const filteredCustomers = mockCustomers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Customers</h1>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Customer Management</CardTitle>
            <CardDescription>
              View and manage your customer base
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search customers..."
                    className="w-full md:w-80 pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    Sort
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={customer.image} alt={customer.name} />
                            <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{customer.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {customer.id}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                            {customer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                          {customer.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <ShoppingBag className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>{customer.totalOrders} orders</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>Last: {customer.lastOrder}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {customer.status === "active" ? (
                          <Badge className="bg-green-500">Active</Badge>
                        ) : (
                          <Badge variant="outline">Inactive</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <ShoppingBag className="mr-2 h-4 w-4" />
                              View Orders
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Email
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminCustomers;
