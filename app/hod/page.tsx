"use client";

import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function MendorHome() {
  const [faculty, setFaculity] = useState("");
  const faculityChanged = (name: string) => {
    setFaculity(name);
  };

  return (
    <div className="flex min-h-screen w-full flex-col py-8 px-4 border-8 bg-muted/40">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold md:text-lg">Select Facilty</h1>
        <Select onValueChange={faculityChanged} name="FaciltyCode">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="F03">Facilty 3</SelectItem>
              <SelectItem value="F04">Facilty 4</SelectItem>
              <SelectItem value="F05">Facilty 5</SelectItem>
              <SelectItem value="F06">Facilty 6</SelectItem>
              <SelectItem value="F07">Facilty 7</SelectItem>
              <SelectItem value="F08">Facilty 8</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-2xl font-semibold px-2 py-2 border-b-2">
          Mentees for {faculty}
        </h3>
      </div>
      <div>
        <div className="p-4 grid grid-cols-3 gap-4">
          <div className="flex gap-4 justify-between border">
            <Image
              alt="image"
              className="aspect-square rounded-md object-cover"
              height="64"
              src="/placeholder.svg"
              width="64"
            />
            <h2>Student 1</h2>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button aria-haspopup="true" size="icon" variant="ghost">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Show Marks</DropdownMenuItem>
                  <DropdownMenuItem>Meeting Details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex gap-4 border">
            <h2>Student 2</h2>
          </div>
          <div className="flex gap-4 border">
            <h2>Student 3</h2>
          </div>
          <div className="flex gap-4 border">
            <h2>Student 4</h2>
          </div>
          <div className="flex gap-4 border">
            <h2>Student 5</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
