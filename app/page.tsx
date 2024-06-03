'use client'
import Image from "next/image";

import { Button } from "@/components/ui/button"

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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

export default function LoginForm() {
  const [loginAs, setLoginAs] = useState("Student")

  const LoginAsChanged = (e: string) =>{
    setLoginAs(e);
  }
  
  return (
    <div className="flex justify-center">
      <Card className="w-4/12 max-w-sm">
        <CardHeader>
          <div className="flex gap-4">
            <div className="text-2xl ">Login
            </div>
            <Select onValueChange={LoginAsChanged}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Login as..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Mentor">Mentor</SelectItem>
                  <SelectItem value="HOD">HOD</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <CardDescription>
            Enter {loginAs} email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="test@nmit.ac.in" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Log in</Button>
        </CardFooter>
      </Card>
    </div>
  )
}