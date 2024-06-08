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
import { Label } from "@/components/ui/label"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

  const mtgWithMentee = [
    {
      id: "01",
      meetingDate: "2024-05-01",
      typeOfContact: "Phone",
      issueDetail: "Issue one",
      issueOutcome: "Solved"
    },
    {
      id: "02",
      meetingDate: "2024-06-01",
      typeOfContact: "Phone",
      issueDetail: "Issue TWO",
      issueOutcome: "Solved"
    },
    {
      id: "03",
      meetingDate: "2024-06-11",
      typeOfContact: "InPerson",
      issueDetail: "Issue three",
      issueOutcome: "Pending"
    },
  ];

  const mtgWithParent = [
    {
      id: "01",
      meetingDate: "2024-01-01",
      typeOfContact: "Phone",
      issueDetail: "Issue discussed with parent",
      issueOutcome: "Solved"
    },
  ]

  return (
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
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <ShoppingCart className="h-4 w-4" />
              Sem. Marks
            </Link>
            <Link
              href="/student/meeting"
              className="flex items-center gap-3 rounded-lg bg-muted  px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <Package className="h-4 w-4" />
              Mentor meetings
            </Link>

          </nav>
        </div>

        <div className="w-full">
          <Tabs defaultValue="with_mentee" >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="with_mentee">With Mentees</TabsTrigger>
              <TabsTrigger value="with_parent">Mentor Meeting With Parents</TabsTrigger>
            </TabsList>
            <TabsContent value="with_mentee">
              <Card>
                <CardHeader>
                  <CardTitle>Mentor Meeting With Mentees</CardTitle>
                  <CardDescription>
                    Details of meeting happend with mentee.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[20px]">#</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Type of Contact</TableHead>
                        <TableHead>Issues Discussed</TableHead>
                        <TableHead>Outcome</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mtgWithMentee.map((meeting) => (
                        <TableRow key={meeting.id}>
                          <TableCell className="font-medium">{meeting.meetingDate}</TableCell>
                          <TableCell>{meeting.typeOfContact}</TableCell>
                          <TableCell>{meeting.issueDetail}</TableCell>
                          <TableCell>{meeting.issueOutcome}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="with_parent">
              <Card>
                <CardHeader>
                  <CardTitle>Mentor Meeting With Parents</CardTitle>
                  <CardDescription>
                    Details of meetings happend with Parent(s)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[20px]">#</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Type of Contact</TableHead>
                        <TableHead>Issues Discussed</TableHead>
                        <TableHead>Outcome</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mtgWithParent.map((meeting) => (
                        <TableRow key={meeting.id}>
                          <TableCell className="font-medium">{meeting.meetingDate}</TableCell>
                          <TableCell>{meeting.typeOfContact}</TableCell>
                          <TableCell>{meeting.issueDetail}</TableCell>
                          <TableCell>{meeting.issueOutcome}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

      </div>
  )
}
