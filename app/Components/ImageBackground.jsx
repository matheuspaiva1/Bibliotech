"use client"
import React from 'react'

export default function ImageBackground({ children }) {
  return (
    <div className="relative min-h-screen flex items-start justify-center bg-white">
      {/* Imagem de fundo no topo */}
      <div
        className="w-full h-[480px] bg-no-repeat bg-top bg-cover"
        style={{
          backgroundImage: "url('/login-img.svg')",
          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%)',
        }}
      />

      {/* Conteúdo flutuando */}
      <div className="absolute top-[150px] z-10 w-full max-w-md">
        {children}
      </div>
    </div>
  )
}
