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
import { MouseEventHandler, useRef, useState } from "react";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"

const LoginFormSchema = z.object({
  UserType: z.string(),
  UserId: z.string(),
  UserPwd: z.string()
});
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const selectVal = useRef();
  const [loginAs, setLoginAs] = useState("Student")

  const LoginAsChanged = (e: string) => {
    setLoginAs(e);
  }

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      UserType: "Mentor"
    }
  })

  const handleBtnClick = (e: any) => {
    const values = form.getValues();
    const userType = values["UserType"];
    console.log(userType);
    // e.preventDefault();
    
    
  }

  return (
    <Form {...form}>
      <form>
        <div className="flex justify-center">
          <Card className="w-4/12 max-w-sm">
            <CardHeader>
              <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="UserType"
                  render={({ field }) => (
                    <FormItem>
                      <Select name="UserType" onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Login as..." />
                        </SelectTrigger>
                        <SelectContent >
                          <SelectGroup >
                            <SelectItem value="Student">Student</SelectItem>
                            <SelectItem value="Mentor">Mentor</SelectItem>
                            <SelectItem value="HOD">HOD</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <div className="text-2xl ">Login
                </div>
              </div>
              <CardDescription className="mt-16">
                Enter {loginAs} email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="UserId" placeholder="test@nmit.ac.in" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="UserPwd" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleBtnClick} className="w-full">Log in</Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </Form>
  )
}