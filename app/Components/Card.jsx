import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardLogin() {
  return (
    <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle className="text-center font-medium text-zinc-500">Login</CardTitle>
      <div className="flex justify-center items-center gap-20 mt-6">
        <div className="w-4 h-4 border border-black">
            <img src="" alt="" />
        </div>
        <div className="w-4 h-4 border border-black">
            <img src="" alt="" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <form>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="h-10"
              required
            />
          </div>
          <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
            <Input 
                id="password" 
                type="password"
                className="h-10"
                required />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex-col gap-2">
      <Button type="submit" className="w-full">
        Login
      </Button>
    </CardFooter>
  </Card>
    
  )
}
