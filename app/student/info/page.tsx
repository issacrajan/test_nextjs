import Link from "next/link";
import Image from "next/image";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function HomePage() {
  return (
    <div className="flex mt-6 gap-4">
      <div>
        <nav className="grid items-start px-2 text-sm  lg:px-4">
          <Link
            href="/student/info"
            className="flex items-center gap-3 rounded-lg bg-muted  px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Student Info
          </Link>
          <Link
            href="/student/semestermark"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <ShoppingCart className="h-4 w-4" />
            Sem. Marks
          </Link>
          <Link
            href="/student/meeting"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <Package className="h-4 w-4" />
            Mentor meetings
          </Link>
        </nav>
      </div>
      <div className="w-full">
        <div className="flex items-center">
          <h1 className="text-lg text-orange-950 font-semibold md:text-lg">
            Student Info
          </h1>
        </div>
        <div
          className="grid grid-cols-3 rounded-lg border gap-8 p-4 mr-6 shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Full Name</h3>
            <p className="text-sm text-muted-foreground">Name 1</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">USN</h3>
            <p className="text-sm text-muted-foreground">12345678</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Date of birth</h3>
            <p className="text-sm text-muted-foreground">10, Jan 2000</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Gender</h3>
            <p className="text-sm text-muted-foreground">Male</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">
              CET / COMEDK Rank
            </h3>
            <p className="text-sm text-muted-foreground">5000 (CET)</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">
              Cagegory of Adminission
            </h3>
            <p className="text-sm text-muted-foreground">CET</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Accommodation</h3>
            <p className="text-sm text-muted-foreground">Day scholar</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Mobile</h3>
            <p className="text-sm text-muted-foreground">+91 123456788</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Email</h3>
            <p className="text-sm text-muted-foreground">
              student1@example.com
            </p>
          </div>
        </div>
        <div className="flex items-center mt-8">
          <h1 className="text-lg font-semibold md:text-lg">
            Parent&#39;s Info
          </h1>
        </div>
        <div
          className="grid grid-cols-2 rounded-lg border gap-8 p-4 mr-6 shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Father Name</h3>
            <p className="text-sm text-muted-foreground">Name2</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Mother Name</h3>
            <p className="text-sm text-muted-foreground">Name22</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">Occupation</h3>
            <p className="text-sm text-muted-foreground">teacher</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">
              Present Address
            </h3>
            <p className="text-sm text-muted-foreground">Bangalore</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-bold tracking-tight">
              Permanent Address
            </h3>
            <p className="text-sm text-muted-foreground">Bangalore,</p>
          </div>
        </div>
      </div>
    </div>
  );
}
