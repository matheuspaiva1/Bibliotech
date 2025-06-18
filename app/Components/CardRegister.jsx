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

export default function CardRegister() {
  const [activeTab, setActiveTab] = useState("user")

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registration, setRegistration] = useState("");


  const [error, setError] = useState("");

  const router = useRouter();

  const handleChangeTabUser = () => {
      setActiveTab("user")
  }

  const handleChangeTabAdmin = () => {
    setActiveTab("admin")
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName === "usuario" && password === "senha123") {
      router.push("/dashboard"); // Redireciona
    }
  };

  return (
    <Card className="w-full max-w-md rounded-xs m-auto">
    <CardHeader>
      <CardTitle className="text-center font-medium text-zinc-500 my-4">Cadastro</CardTitle>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col">
          <div className="grid gap-2 relative ml-10">
            <p className="absolute left-3 top-3 text-xs uppercase font-normal text-zinc-400">Nome</p>
            <Input
              id="user"
              type="text"
              placeholder="matheus"
              className="h-16 pt-5 rounded-xs w-80 "
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2 relative ml-10">
              <p className="absolute left-3 top-3 text-xs uppercase font-normal text-zinc-400">Matricula</p>
            <Input 
                id="password" 
                type="text"
                placeholder="345678"
                className="h-16 pt-4 rounded-xs w-80"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
                required />
          </div>
          <div className="grid gap-2 relative ml-10">
            <p className="absolute left-3 top-3 text-xs uppercase font-normal text-zinc-400">Senha</p>
            <Input
              id="user"
              type="password"
              placeholder="******"
              className="h-16 pt-5 rounded-xs w-80"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 ml-10">
          <input type="checkbox" name="" id="" />
          <span className='underline text-[11px] text-zinc-400'>Eu concordo com os Termos de Serviço e Responsabilidade.</span>
        </div>
      </form>
    </CardContent>
    <CardFooter className="flex-col gap-2 mt-8">
      {error && <p className="error">{error}</p>}
      <Button 
      type="submit" 
      className="w-80 rounded-xs h-14 bg-[#4CAF50]  text-xs font-light cursor-pointer hover:bg-[#FF873C]"
      onClick={handleLogin}>
        CRIAR CONTA
      </Button>
      <a href="/register">
        <span className='text-xs text-zinc-400 hover:underline cursor-pointer'>
          Já possui uma conta? <span className='text-[#4CAF50]'>Entre</span>
        </span> 
      </a>
    </CardFooter>
  </Card>
    
  )
}
