import Link from "next/link"
import Image from 'next/image';
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
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function HomePage() {

  const invoices = [
    {
      invoice: "01",
      subjectTitle: "Maths",
      subjectCode: "M01",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "02",
      subjectTitle: "Python",
      subjectCode: "P01",
      paymentMethod: "PayPal",
    },
    {
      invoice: "03",
      subjectTitle: "Designs",
      subjectCode: "D01",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "04",
      subjectTitle: "Java",
      subjectCode: "J01",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "05",
      subjectTitle: "React JS",
      subjectCode: "R01",
      paymentMethod: "PayPal",
    },
    {
      invoice: "06",
      subjectTitle: "Node JS",
      subjectCode: "N01",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "07",
      subjectTitle: "Database",
      subjectCode: "DB01",
      paymentMethod: "Credit Card",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex justify-between h-full max-h-screen border-b gap-10">
        <div className="flex h-14 items-center  px-4 ">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/header_logo.jpeg"
              width={100}
              height={60}
              className="hidden md:block"
              alt="NMIT"
            />
            <span className="text-2xl">CSE Department</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Welcome Abc</h1>
          <p className="text-sm text-left text-muted-foreground">
            Admin
          </p>
        </div>
        <div className="mr-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex mt-6 gap-4">
        <div >
          <nav className="grid items-start px-2 text-sm  lg:px-4">
            <Link
              href="/student/info"
              className="flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Student Info
            </Link>
            <Link
              href="/student/semestermark"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold md:text-lg">Select Semester</h1>
            <Select name="SemesterCode" >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent >
                <SelectGroup >
                  <SelectItem value="S3">Semester 3</SelectItem>
                  <SelectItem value="S4">Semester 4</SelectItem>
                  <SelectItem value="S5">Semester 5</SelectItem>
                  <SelectItem value="S6">Semester 6</SelectItem>
                  <SelectItem value="S7">Semester 7</SelectItem>
                  <SelectItem value="S8">Semester 8</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>


          <Table>
            <TableHeader>
              <TableRow>
                <TableCell colSpan={11}><h1 className="text-lg font-semibold md:text-lg">Performance Report</h1></TableCell>
              </TableRow>
            </TableHeader>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[20px]">#</TableHead>
                <TableHead>Subject Title</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Test I</TableHead>
                <TableHead>Test II</TableHead>
                <TableHead>Test III</TableHead>
                <TableHead>Test Avg</TableHead>
                <TableHead>LA-1</TableHead>
                <TableHead>LA-2</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.subjectTitle}</TableCell>
                  <TableCell >{invoice.subjectCode}</TableCell>
                  <TableCell>Test1</TableCell>
                  <TableCell>Test1</TableCell>
                  <TableCell>Test1</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>120</TableCell>
                  <TableCell>test rem.</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableCell colSpan={11}><h1 className="text-lg font-semibold md:text-lg">Performance in SEE Exam</h1></TableCell>
              </TableRow>
              
            </TableHeader>
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2} className="w-[20px]">#</TableHead>
                <TableHead rowSpan={2}>Subject Title</TableHead>
                <TableHead colSpan={4} className="text-center border-l-2 border-l-indigo-500" >First attempt</TableHead>
                <TableHead colSpan={4} className="text-center border-l-2 border-l-indigo-500">Second attempt</TableHead>
                <TableHead colSpan={4} className="text-center border-l-2 border-l-indigo-500">Third attempt</TableHead>
                
              </TableRow>
              <TableRow>
                
                <TableHead className="text-center border-l-2 border-l-indigo-500">Extenal</TableHead>
                <TableHead >Reevalation</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Pass / Fail</TableHead>
                
                <TableHead className="text-center border-l-2 border-l-indigo-500">Extenal</TableHead>
                <TableHead>Reevalation</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Pass / Fail</TableHead>

                <TableHead className="text-center border-l-2 border-l-indigo-500">Extenal</TableHead>
                <TableHead>Reevalation</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Pass / Fail</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.subjectTitle}</TableCell>
                  <TableCell className="text-center border-l-2 border-l-indigo-500" >{invoice.subjectCode}</TableCell>
                  <TableCell>Test1</TableCell>
                  <TableCell>Test1</TableCell>
                  <TableCell>Test1</TableCell>
                  <TableCell className="text-center border-l-2 border-l-indigo-500">100</TableCell>
                  <TableCell>20</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell>120</TableCell>
                  <TableCell className="text-center border-l-2 border-l-indigo-500">test rem.</TableCell>
                  <TableCell>test rem.</TableCell>
                  <TableCell>test rem.</TableCell>
                  <TableCell>test rem.</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>





        </div>
      </div>


    </div>
  )
}
