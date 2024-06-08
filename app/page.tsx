"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MouseEventHandler, useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const LoginFormSchema = z.object({
  UserType: z.string(),
  UserId: z.string(),
  UserPwd: z.string(),
});

export default function LoginForm() {
  const [loginAs, setLoginAs] = useState("Student");
  const router = useRouter();

  const LoginAsChanged = (e: string) => {
    setLoginAs(e);
  };

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      UserType: "Student",
    },
  });

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const values = form.getValues();
    const userType = values["UserType"];
    console.log(userType);
    e.preventDefault();
    router.push("/student/info");
  };

  return (
    <div className="flex flex-col min-h-screen w-full gap-10 ">
      <div className="flex h-full max-h-screen border-b ">
        <div className="flex h-21 items-start px-4 ">
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
      </div>
      <div className="flex justify-center">
        <Form {...form}>
          <form>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="UserType"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          name="UserType"
                          onValueChange={(e) => {
                            field.onChange(e);
                            LoginAsChanged(e);
                          }}
                          defaultValue={field.value}
                        >
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
                      </FormItem>
                    )}
                  />
                  <div className="text-2xl ">Login</div>
                </div>
                <CardDescription className="mt-16">
                  Enter {loginAs} email below to login to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="UserId"
                    placeholder="test@nmit.ac.in"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" name="UserPwd" />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col w-full">
                  <Button onClick={handleBtnClick} className="w-full">
                    Log in
                  </Button>
                  <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="#" className="underline">
                      Sign up
                    </Link>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}
