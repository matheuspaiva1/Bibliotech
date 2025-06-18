'use client'
import React, { useState } from 'react'

// SHADCN UI
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

// ICONES
import { FaUserGear } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { useRouter } from "next/navigation"; // Next.js 13+

const mockUser = {
  userName: "usuario",
  password: "senha123",
};

export default function CardLogin() {
  const [activeTab, setActiveTab] = useState("admin")

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();

  const handleChangeTabUser = () => {
      setActiveTab("user")
  }

  const handleChangeTabAdmin = () => {
    setActiveTab("admin")
  }

  const handleLogin = (e) => {
    debugger
    e.preventDefault();
    if (userName === "usuario" && password === "1234") {
      router.push("/dashboard"); // Redireciona
    }
  };

  return (
    <Card className="w-full max-w-md rounded-xs m-auto">
    <CardHeader>
      <CardTitle className="text-center font-medium text-zinc-500 my-4">Login</CardTitle>
      <div className="flex justify-center items-center gap-20 mt-6">
        <div 
        className={activeTab === "user" ? 'w-8 h-8 rounded-4xl border border-[#4CAF50] bg-[#4CAF50] cursor-pointer' : 'w-8 h-8 rounded-4xl border border-[#4CAF50] cursor-pointer hover:text-zinc-50 hover:bg-[#4CAF50]'}>
          <button 
            onClick={handleChangeTabUser}
            className={activeTab === "user" ? "cursor-pointer" : "cursor-pointer "}
          >
            <PiStudentBold
              className={activeTab === "user" ? 'mx-2 my-1.5 text-zinc-50' : 'mx-2 my-1.5 text-[#4CAF50] hover:text-zinc-50 hover:bg-[#4CAF50]'}
            />
          </button>
        </div>
        <div 
          className={activeTab === "admin" ? 'w-8 h-8 rounded-4xl border border-[#4CAF50] bg-[#4CAF50] cursor-pointer' : 'w-8 h-8 rounded-4xl border border-[#4CAF50] cursor-pointer hover:text-zinc-50 hover:bg-[#4CAF50]'}
        >
          <button
            onClick={handleChangeTabAdmin}
            className={activeTab === "admin" ? "cursor-pointer " : "cursor-pointer hover:text-zinc-50"}
          >
            <FaUserGear className={activeTab === "admin" ? 'mx-2 my-1.5 text-zinc-50' : 'mx-2 my-1.5 text-[#4CAF50] hover:text-zinc-50 '} />  
          </button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col">
          <div className="grid gap-2 relative ml-10">
            <p className="absolute left-3 top-3 text-xs uppercase font-normal text-zinc-400">{activeTab === "admin" ? "Usuário" : "Matrícula"}</p>
            <Input
              id="user"
              type="text"
              placeholder="m@example"
              className="h-16 pt-5 rounded-xs w-80"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2 relative ml-10">
              <p className="absolute left-3 top-3 text-xs uppercase font-normal text-zinc-400">Senha</p>
            <Input 
                id="password" 
                type="password"
                placeholder="******"
                className="h-16 pt-4 rounded-xs w-80"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex-col gap-2 mt-8">
      {error && <p className="error">{error}</p>}
      <Button 
      type="submit" 
      className="w-80 rounded-xs h-14 bg-[#4CAF50] text-xs font-light cursor-pointer hover:bg-[#FF873C]"
      onClick={handleLogin}>
        ENTRAR
      </Button>
      {activeTab === "admin" ? "" : 
      <a href="/register">
        <span className='text-xs text-zinc-400 hover:underline cursor-pointer'>
          Não possui uma conta? <span className='text-[#4CAF50]'>Cadastrar</span>
        </span> 
      </a>
      }
    </CardFooter>
  </Card>
    
  )
}
